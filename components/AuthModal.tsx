
import React, { useState, useEffect } from 'react';
import { X, Mail, Lock, Loader2, ArrowRight, Github, Chrome } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode: 'login' | 'signup';
  onAuthSuccess: (email: string) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialMode, onAuthSuccess }) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setMode(initialMode);
  }, [initialMode, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onAuthSuccess(email);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div 
        className="absolute inset-0 bg-[#121212]/90 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-md bg-[#1a1a1a] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#F2F2F2]/40 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-10 pt-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-[#F2F2F2] mb-3">
              {mode === 'login' ? 'Welcome Back' : 'Join Museji'}
            </h2>
            <p className="text-[#F2F2F2]/50 text-sm">
              {mode === 'login' 
                ? 'Your musical journey continues here.' 
                : 'Start your rhythm training with thousands of others.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#F2F2F2]/20 group-focus-within:text-[#1DB954] transition-colors" />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full bg-[#121212] border border-white/10 text-[#F2F2F2] rounded-xl px-12 py-4 outline-none focus:border-[#1DB954] transition-all"
              />
            </div>

            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#F2F2F2]/20 group-focus-within:text-[#1DB954] transition-colors" />
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full bg-[#121212] border border-white/10 text-[#F2F2F2] rounded-xl px-12 py-4 outline-none focus:border-[#1DB954] transition-all"
              />
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#1DB954] hover:bg-[#1DB954]/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-[#1DB954]/10 transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  {mode === 'login' ? 'Login' : 'Create Account'}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 relative text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/5"></div>
            </div>
            <span className="relative bg-[#1a1a1a] px-4 text-xs font-bold text-[#F2F2F2]/20 uppercase tracking-widest">
              Or continue with
            </span>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 py-3 rounded-xl text-sm font-bold text-[#F2F2F2]/70 hover:bg-white/10 transition-all">
              <Chrome className="w-4 h-4" />
              Google
            </button>
            <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 py-3 rounded-xl text-sm font-bold text-[#F2F2F2]/70 hover:bg-white/10 transition-all">
              <Github className="w-4 h-4" />
              Github
            </button>
          </div>

          <div className="mt-10 text-center">
            <button 
              onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
              className="text-sm font-medium text-[#F2F2F2]/50 hover:text-[#1DB954] transition-colors"
            >
              {mode === 'login' 
                ? "Don't have an account? Sign up" 
                : "Already have an account? Login"}
            </button>
          </div>
        </div>
        
        <div className="bg-[#121212] p-6 text-center border-t border-white/5">
          <p className="text-[10px] text-[#F2F2F2]/30 uppercase tracking-widest font-bold">
            By continuing, you agree to Museji's Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
