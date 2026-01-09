
import React, { useState, useEffect } from 'react';
import { CheckCircle2, Loader2, ArrowRight } from 'lucide-react';
import CookieManager from '../utils/cookieManager';
import SessionManager from '../utils/sessionManager';
import CONFIG from '../utils/config';
import { supabase } from '../utils/supabaseClient';

const WaitingList: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [savedEmail, setSavedEmail] = useState<string | undefined>();

  useEffect(() => {
    // Initialize session and load saved email
    SessionManager.initializeSession();
    const storedEmail = SessionManager.getUserEmail();
    if (storedEmail) {
      setSavedEmail(storedEmail);
      setEmail(storedEmail);
    }
  }, []);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!email) return;

  setStatus('loading');

  try {
    // Check if email already exists in Supabase
    const { data: existing, error: checkError } = await supabase
      .from('waiting_list')
      .select('email')
      .eq('email', email)
      .single();

    if (checkError && checkError.code !== 'PGRST116') {
      throw checkError; // unexpected error
    }

    if (!existing) {
      // Insert new email into Supabase
      const { data, error } = await supabase
        .from('waiting_list')
        .insert([{ email, joined_at: new Date(), source: 'waiting-list' }]);

      if (error) throw error;
    }

    // Save email to session and cookies
    SessionManager.setUserEmail(email);
    CookieManager.setCookie(
      CONFIG.COOKIE_SETTINGS.USER_PREFERENCES,
      JSON.stringify({
        email,
        joinedAt: new Date().toISOString(),
        source: 'waiting-list',
      }),
      {
        maxAge: CONFIG.COOKIE_EXPIRY.LONG_TERM,
        secure: CONFIG.SECURITY.ENABLE_HTTPS,
        sameSite: 'Lax',
      }
    );

    // Track event for analytics if enabled
    if (CONFIG.FEATURES.ENABLE_ANALYTICS) {
      console.log('[Analytics] User joined waiting list:', email);
    }

    setSavedEmail(email);
    setStatus('success');

  } catch (error) {
    console.error('Error joining waiting list:', error);
    setStatus('idle');
  }
};

  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="bg-[#1a1a1a] rounded-[3rem] p-12 md:p-20 border border-white/5 text-center relative">
        {status !== 'success' ? (
          <>
            <h2 className="text-4xl md:text-6xl font-black mb-6">Join the early access of <span className="text-[#1DB954]">Museji</span></h2>
            <p className="text-[#F2F2F2]/60 text-lg mb-12 max-w-xl mx-auto">
              Museji is still in the works. Sign up to get early access and follow the project as it grows!
            </p>
            
            <form onSubmit={handleSubmit} className="relative max-w-md mx-auto">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address" 
                className="w-full bg-[#121212] border border-white/10 text-[#F2F2F2] rounded-full px-8 py-5 outline-none focus:border-[#1DB954] transition-all text-lg shadow-2xl"
              />
              <button 
                disabled={status === 'loading'}
                className="mt-6 w-full bg-[#1DB954] hover:bg-[#1DB954]/90 disabled:opacity-50 text-white font-black py-5 rounded-full text-lg shadow-xl shadow-[#1DB954]/20 transition-all flex items-center justify-center gap-2 group"
              >
                {status === 'loading' ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  <>
                    Secure My Early Access
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="py-12 animate-in fade-in zoom-in duration-500">
            <div className="w-24 h-24 bg-[#1DB954]/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-12 h-12 text-[#1DB954]" />
            </div>
            <h2 className="text-4xl font-black mb-4">You're on the list!</h2>
            <p className="text-[#F2F2F2]/60 text-lg mb-8">
              Thank you for joining. We've sent a confirmation to <span className="text-[#F2F2F2] font-bold">{savedEmail}</span>. <br />
              Keep an eye on your inbox for your early access invitation.
            </p>
            <div className="flex items-center justify-center gap-4">
               <div className="flex -space-x-3">
                 {[1,2,3,4].map(i => (
                   <img key={i} src={`https://picsum.photos/id/${10+i}/40/40`} className="w-10 h-10 rounded-full border-2 border-[#1a1a1a]" alt="avatar" />
                 ))}
               </div>
               <span className="text-sm font-medium text-[#F2F2F2]/50">Join 10,249 others waiting</span>
            </div>
            <button 
              onClick={() => setStatus('idle')}
              className="mt-8 text-sm font-bold text-[#1DB954] uppercase tracking-widest"
            >
              Sign up another email
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WaitingList;
