
import React, { useState } from 'react';
import { CheckCircle2, Loader2, ArrowRight } from 'lucide-react';

const WaitingList: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="bg-[#1a1a1a] rounded-[3rem] p-12 md:p-20 border border-white/5 text-center relative">
        {status !== 'success' ? (
          <>
            <h2 className="text-4xl md:text-6xl font-black mb-6">Ready to find your <span className="text-[#1DB954]">Muse?</span></h2>
            <p className="text-[#F2F2F2]/60 text-lg mb-12 max-w-xl mx-auto">
              We're launching soon. Join 10,000+ early adopters and be the first to experience the future of piano learning.
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
              Thank you for joining. We've sent a confirmation to <span className="text-[#F2F2F2] font-bold">{email}</span>. <br />
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
