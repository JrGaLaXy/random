
import React from 'react';
import { Link } from 'react-router-dom';
import { Piano, Twitter, Github, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#121212] pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-12 mb-20">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#1DB954] rounded-xl flex items-center justify-center">
                <Piano className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-[#F2F2F2]">MUSEJI</span>
            </div>
            <p className="text-[#F2F2F2]/40 text-sm leading-relaxed mb-8 max-w-xs">
              Where pianists connect, compete, and grow together. Master the skill and join our global community of musicians.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-[#1DB954] hover:text-white transition-all text-[#F2F2F2]/50"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-[#1DB954] hover:text-white transition-all text-[#F2F2F2]/50"><Github className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-[#1DB954] hover:text-white transition-all text-[#F2F2F2]/50"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-[#1DB954] hover:text-white transition-all text-[#F2F2F2]/50"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white">Product</h4>
            <ul className="space-y-4">
              <li><a href="#features" className="text-sm text-[#F2F2F2]/40 hover:text-[#1DB954] transition-colors">Features</a></li>
              <li><a href="#modes" className="text-sm text-[#F2F2F2]/40 hover:text-[#1DB954] transition-colors">Game Modes</a></li>
              <li><a href="#leaderboard" className="text-sm text-[#F2F2F2]/40 hover:text-[#1DB954] transition-colors">Leaderboard</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white">Company</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-sm text-[#F2F2F2]/40 hover:text-[#1DB954] transition-colors">Who We Are</a></li>
              <li><a href="#about" className="text-sm text-[#F2F2F2]/40 hover:text-[#1DB954] transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-sm text-[#F2F2F2]/40 hover:text-[#1DB954] transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-[#F2F2F2]/40 hover:text-[#1DB954] transition-colors">MIDI Setup</a></li>
              <li><a href="#" className="text-sm text-[#F2F2F2]/40 hover:text-[#1DB954] transition-colors">Safety</a></li>
              <li><a href="#" className="text-sm text-[#F2F2F2]/40 hover:text-[#1DB954] transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="/privacy-policy" className="text-sm text-[#F2F2F2]/40 hover:text-[#1DB954] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-sm text-[#F2F2F2]/40 hover:text-[#1DB954] transition-colors">Terms of Service</Link></li>
              <li><Link to="/updates" className="text-sm text-[#F2F2F2]/40 hover:text-[#1DB954] transition-colors">Updates</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5">
          <p className="text-xs text-[#F2F2F2]/30 font-medium text-center md:text-left">
            © 2026 MUSEJI INTERACTIVE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-[#1DB954] animate-pulse" />
             <span className="text-[10px] font-bold tracking-widest text-[#F2F2F2]/40 uppercase">System Status: Early Development</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
