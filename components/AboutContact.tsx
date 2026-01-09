
import React, { useState } from 'react';
import { MessageSquare, Send, Globe, Github, MessageCircle, Check, Copy } from 'lucide-react';

const AboutContact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [copyToast, setCopyToast] = useState<{ show: boolean, message: string }>({ show: false, message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopyToast({ show: true, message: `Copied ${label} ID` });
    setTimeout(() => setCopyToast({ show: false, message: '' }), 3000);
  };

  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative">
      {/* Global Copy Toast */}
      {copyToast.show && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-[#1DB954] text-white px-6 py-3 rounded-full font-bold shadow-2xl flex items-center gap-2 animate-in slide-in-from-bottom-4 duration-300">
          <Check className="w-4 h-4" />
          {copyToast.message}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* About Part: The Founders */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD166]/10 text-[#FFD166] text-xs font-bold uppercase tracking-widest border border-[#FFD166]/20 mb-6">
            <Globe className="w-3.5 h-3.5" />
            Our Story
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-[#F2F2F2]">
            Our <span className="text-[#1DB954]">Story.</span>
          </h2>
          <p className="text-[#F2F2F2]/60 text-lg mb-12 leading-relaxed">
            Museji began when we realized there was more potential for piano and rhythm apps than what we’d seen so far. Between us, we’ve spent countless late nights sketching ideas, experimenting, and talking about how to make piano practice fun, social, and skill-focused. What started as casual conversations soon grew into a real project
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Founder 1: jrgalaxy */}
            <div className="p-6 rounded-3xl bg-[#1a1a1a] border border-white/5 hover:border-[#1DB954]/30 transition-all group">
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#1DB954]/20 flex items-center justify-center text-2xl font-black text-[#1DB954] group-hover:scale-110 transition-transform">
                  JG
                </div>
                <div className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-md bg-[#121212] border border-white/10 text-[10px] font-bold text-white/50">
                  🇮🇹 ITALY
                </div>
              </div>
              <h4 className="text-xl font-bold mb-1">jrgalaxy</h4>
              <p className="text-[#1DB954] text-xs font-bold uppercase tracking-widest mb-3">Founder</p>
              <div className="mb-6">
                <span className="inline-block px-2 py-1 rounded bg-[#1DB954]/10 text-[#1DB954] text-[10px] font-bold uppercase mb-2">Front-End / Product</span>
                <p className="text-[#F2F2F2]/40 text-sm">I’ve been moderating piano apps for years, and now I’m channeling that experience into creating a better, more fun rhythm app.</p>
              </div>
              
              <div className="flex flex-col gap-3">
                <div className="text-[10px] font-bold text-[#F2F2F2]/20 uppercase tracking-widest">Connect</div>
                <div className="flex gap-3">
                  <button 
                    onClick={() => copyToClipboard('496000339187728404', 'jrgalaxy Discord')}
                    className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#1DB954] hover:text-white text-[#1DB954] transition-all group/btn"
                    title="Copy Discord ID: 496000339187728404"
                  >
                    <MessageCircle className="w-6 h-6 group-hover/btn:scale-110 transition-transform" />
                  </button>
                  <a 
                    href="https://github.com/JrGaLaXy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 text-white/40 hover:text-white transition-all group/btn"
                    title="GitHub: JrGaLaXy"
                  >
                    <Github className="w-6 h-6 group-hover/btn:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Founder 2: strange */}
            <div className="p-6 rounded-3xl bg-[#1a1a1a] border border-white/5 hover:border-[#FFD166]/30 transition-all group">
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#FFD166]/10 flex items-center justify-center text-2xl font-black text-[#FFD166] group-hover:scale-110 transition-transform">
                  ST
                </div>
                <div className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-md bg-[#121212] border border-white/10 text-[10px] font-bold text-white/50">
                  🇮🇳 INDIA
                </div>
              </div>
              <h4 className="text-xl font-bold mb-1">strange</h4>
              <p className="text-[#FFD166] text-xs font-bold uppercase tracking-widest mb-3">Co-Founder</p>
              <div className="mb-6">
                <span className="inline-block px-2 py-1 rounded bg-[#FFD166]/10 text-[#FFD166] text-[10px] font-bold uppercase mb-2">Back-end Developerr</span>
                <p className="text-[#F2F2F2]/40 text-sm">I make sure Museji’s rhythm and audio systems run smoothly, so every note you play feels natural, responsive, and satisfying.</p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="text-[10px] font-bold text-[#F2F2F2]/20 uppercase tracking-widest">Connect</div>
                <div className="flex gap-3">
                  <button 
                    onClick={() => copyToClipboard('807936284177203221', 'strange Discord')}
                    className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#FFD166] hover:text-[#121212] text-[#FFD166] transition-all group/btn"
                    title="Copy Discord ID: 807936284177203221"
                  >
                    <MessageCircle className="w-6 h-6 group-hover/btn:scale-110 transition-transform" />
                  </button>
                  <a 
                    href="https://github.com/sarankstrange4" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 text-white/40 hover:text-white transition-all group/btn"
                    title="GitHub: sarankstrange4"
                  >
                    <Github className="w-6 h-6 group-hover/btn:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Part: The Form */}
        <div className="bg-[#1a1a1a] rounded-[2.5rem] p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#1DB954]/10 blur-[80px] rounded-full" />
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2 flex items-center gap-3">
              <MessageSquare className="text-[#1DB954]" />
              Get in Touch
            </h3>
            <p className="text-[#F2F2F2]/40 text-sm mb-8">
              Have a question, a suggestion, or just want to say hi? We'd love to hear from you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#F2F2F2]/30 uppercase tracking-[0.2em] ml-4">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Your name"
                  className="w-full bg-[#121212] border border-white/5 text-[#F2F2F2] rounded-2xl px-6 py-4 outline-none focus:border-[#1DB954] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#F2F2F2]/30 uppercase tracking-[0.2em] ml-4">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="you@example.com"
                  className="w-full bg-[#121212] border border-white/5 text-[#F2F2F2] rounded-2xl px-6 py-4 outline-none focus:border-[#1DB954] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#F2F2F2]/30 uppercase tracking-[0.2em] ml-4">Your Message</label>
                <textarea 
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="What's on your mind?"
                  className="w-full bg-[#121212] border border-white/5 text-[#F2F2F2] rounded-2xl px-6 py-4 outline-none focus:border-[#1DB954] transition-all resize-none"
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting || isSent}
                className={`w-full py-5 rounded-2xl font-black text-white transition-all flex items-center justify-center gap-2 group ${
                  isSent ? 'bg-emerald-500' : 'bg-[#1DB954] hover:bg-[#1DB954]/90'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : isSent ? (
                  <>
                    Sent Successfully
                    <Send className="w-5 h-5" />
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-12 pt-12 border-t border-white/5 flex flex-col sm:flex-row gap-8 text-center sm:text-left">
              <div>
                <div className="text-[10px] font-bold text-[#F2F2F2]/30 uppercase tracking-widest mb-2">Direct Email</div>
                <a href="mailto:museji@gmail.com" className="text-sm font-medium hover:text-[#1DB954] transition-colors">museji@gmail.com</a>
              </div>
              <div>
                <div className="text-[10px] font-bold text-[#F2F2F2]/30 uppercase tracking-widest mb-2">Join Community</div>
                <a href="https://discord.gg/hYY4njN23b" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-[#1DB954] transition-colors">Discord Server</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContact;
