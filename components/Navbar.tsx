
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Piano, Menu, X, MessageCircle, ExternalLink } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Game Modes', href: '#modes' },
    { name: 'Community', href: '#leaderboard' },
    { name: 'About', href: '#about' },
    { name: 'Updates', href: '/updates', isRoute: true },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[60] bg-[#121212]/80 backdrop-blur-xl border-b border-white/5">
      {/* Top Announcement Bar for Discord */}
      <a 
        href="https://discord.gg/hYY4njN23b" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block bg-[#1DB954]/10 hover:bg-[#1DB954]/20 border-b border-[#1DB954]/20 transition-all group"
      >
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-center gap-3">
          <MessageCircle className="w-4 h-4 text-[#1DB954]" />
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#F2F2F2]/80">
            Join our official <span className="text-[#1DB954]">Discord community</span> and connect with other pianists
          </span>
          <ExternalLink className="w-3 h-3 text-[#1DB954] opacity-50 group-hover:opacity-100 transition-opacity" />
        </div>
      </a>

      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={handleLogoClick}
        >
          <div className="w-10 h-10 bg-[#1DB954] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <Piano className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-[#F2F2F2]">MUSEJI</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.isRoute ? (
              <Link 
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-[#F2F2F2]/60 hover:text-[#1DB954] transition-colors"
              >
                {link.name}
              </Link>
            ) : (
              <a 
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#F2F2F2]/60 hover:text-[#1DB954] transition-colors"
              >
                {link.name}
              </a>
            )
          ))}
          
          <div className="h-6 w-[1px] bg-white/10 mx-2" />

          <a 
            href="#signup"
            className="bg-[#1DB954] hover:bg-[#1DB954]/90 text-white px-6 py-3 rounded-full text-sm font-bold transition-all shadow-lg shadow-[#1DB954]/20 hover:scale-105 active:scale-95"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-[#F2F2F2] p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden absolute top-20 left-0 right-0 bg-[#1a1a1a] border-b border-white/5 shadow-2xl transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            link.isRoute ? (
              <Link 
                key={link.name}
                to={link.href}
                onClick={handleNavClick}
                className="text-lg font-bold text-[#F2F2F2]/80 hover:text-[#1DB954]"
              >
                {link.name}
              </Link>
            ) : (
              <a 
                key={link.name}
                href={link.href}
                onClick={handleNavClick}
                className="text-lg font-bold text-[#F2F2F2]/80 hover:text-[#1DB954]"
              >
                {link.name}
              </a>
            )
          ))}
          
          <div className="h-[1px] w-full bg-white/5 my-2" />

          <a 
            href="https://discord.gg/hYY4njN23b"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-white/5 text-[#F2F2F2] font-bold border border-white/10"
          >
            <MessageCircle className="w-5 h-5 text-[#1DB954]" />
            Join Discord
          </a>

          <a 
            href="#signup"
            onClick={handleNavClick}
            className="w-full py-4 rounded-xl bg-[#1DB954] text-white text-center font-bold"
          >
            Join Waiting List
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
