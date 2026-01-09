
import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Info } from 'lucide-react';

const brands = [
  "Steinway & Sons", "Yamaha", "Roland", "Kawai", "Casio", 
  "Bechstein", "Fazioli", "Bösendorfer", "Nord", "Korg", "Arturia"
];

interface GhostNote {
  id: number;
  lane: number;
  isBlack: boolean;
  color: string;
}

const Hero: React.FC = () => {
  const [activeKeys, setActiveKeys] = useState<string[]>([]);
  const [ghostNotes, setGhostNotes] = useState<GhostNote[]>([]);
  
  const palette = {
    background: '#121212',
    primary: '#1DB954',
    secondary: '#F2F2F2',
    highlight: '#FFD166'
  };

  // 14 white keys (2 octaves)
  const whiteKeysWithBlack = [0, 1, 3, 4, 5, 7, 8, 10, 11, 12]; 

  useEffect(() => {
    const interval = setInterval(() => {
      const isBlack = Math.random() > 0.7;
      let lane: number;
      let keyId: string;

      if (isBlack) {
        lane = whiteKeysWithBlack[Math.floor(Math.random() * whiteKeysWithBlack.length)];
        keyId = `black-${lane}`;
      } else {
        lane = Math.floor(Math.random() * 14);
        keyId = `white-${lane}`;
      }

      const id = Date.now();
      
      setActiveKeys(prev => [...prev, keyId]);
      setGhostNotes(prev => [...prev, { 
        id, 
        lane, 
        isBlack,
        color: Math.random() > 0.5 ? palette.primary : palette.highlight 
      }]);
      
      setTimeout(() => {
        setActiveKeys(prev => prev.filter(k => k !== keyId));
      }, 300);

      setTimeout(() => {
        setGhostNotes(prev => prev.filter(n => n.id !== id));
      }, 1500);
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-32 px-6 hero-gradient overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-[10%] w-[300px] h-[300px] bg-[#1DB954]/10 blur-[100px] rounded-full" />
      <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-[#FFD166]/5 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
          <Sparkles className="w-4 h-4 text-[#FFD166]" />
          <span className="text-sm font-medium text-white/80">Piano-Rhythmic app in early development</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tight leading-[1.1] text-[#F2F2F2]">
          Play, Compete, Connect <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DB954] via-[#1DB954] to-[#FFD166]">Together.</span>
        </h1>
        
        <p className="text-[#F2F2F2]/70 text-lg md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed font-light">
          Museji is a piano app where you can connect with other pianists in real time, explore different modes, and improve your skills while having fun.
        </p>

        {/* Highlighted Disclaimer Box */}
        <div className="max-w-2xl mx-auto mb-12 px-6 py-4 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-center gap-4 group hover:border-white/20 transition-colors">
          <div className="w-8 h-8 rounded-full bg-[#FFD166]/10 flex items-center justify-center shrink-0">
            <Info className="w-4 h-4 text-[#FFD166]" />
          </div>
          <p className="text-xs md:text-sm text-[#F2F2F2]/40 text-left leading-relaxed">
            <span className="text-[#FFD166]/80 font-bold uppercase tracking-wider text-[10px] block mb-0.5">Development Note</span>
            All content on this site is for <span className="text-[#F2F2F2]/80 font-semibold">demonstration only</span> and does not represent real user data or active features.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto mb-20">
          <a 
            href="#signup"
            className="w-full bg-[#1DB954] hover:bg-[#1DB954]/90 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-xl shadow-[#1DB954]/20"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="#modes" 
            className="w-full bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all hover:bg-white/10"
          >
            Explore Modes
          </a>
        </div>

        {/* Illuminated Piano Visualizer */}
        <div className="mt-12 max-w-4xl mx-auto relative h-64 flex items-end justify-center perspective-1000">
          {/* Main Glow Background */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#1DB954]/10 to-transparent blur-3xl rounded-full opacity-50 -z-10" />

          <div className="flex w-full h-full items-end border-b-2 border-white/20 relative overflow-visible bg-[#1a1a1a]/30 rounded-t-xl backdrop-blur-sm">
            
            {/* Ghost Notes Layer */}
            {ghostNotes.map(note => (
              <div 
                key={note.id}
                className="absolute bottom-0 w-8 h-8 rounded-full blur-2xl animate-float-up pointer-events-none z-30"
                style={{ 
                  left: `calc(${(note.lane / 14) * 100}% + ${note.isBlack ? '5.5%' : '3.5%'})`,
                  backgroundColor: note.color,
                  boxShadow: `0 0 40px ${note.color}`
                }}
              />
            ))}

            {/* Piano Keys */}
            {[...Array(14)].map((_, i) => {
              const isWhiteActive = activeKeys.includes(`white-${i}`);
              const hasBlackKey = whiteKeysWithBlack.includes(i);
              const isBlackActive = activeKeys.includes(`black-${i}`);
              
              return (
                <div key={i} className="flex-1 relative h-32 md:h-44 border-r border-white/10 last:border-r-0 transition-all duration-300 group/key">
                  {/* White Key Surface */}
                  <div 
                    className={`absolute inset-0 transition-all duration-300 rounded-t-[4px] ${
                      isWhiteActive ? 'bg-gradient-to-t from-[#1DB954]/40 to-transparent scale-y-[1.02] origin-bottom' : 'bg-white/[0.02] group-hover/key:bg-white/[0.05]'
                    }`} 
                  />
                  
                  {/* Key Glow Halo (Rising light) */}
                  {isWhiteActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#1DB954]/20 to-transparent blur-xl -z-10 animate-pulse" />
                  )}

                  {/* Black Key */}
                  {hasBlackKey && (
                    <div 
                      className={`absolute top-0 -right-[25%] w-1/2 h-20 md:h-28 bg-[#0a0a0a] border border-white/20 rounded-b-md z-10 transition-all duration-200 shadow-2xl ${
                        isBlackActive ? 'bg-gradient-to-b from-[#FFD166]/60 to-[#FFD166]/20 border-[#FFD166]/50 translate-y-1' : 'group-hover/key:border-white/40'
                      }`}
                    >
                       {/* Black Key Active Glow */}
                       {isBlackActive && (
                        <div className="absolute inset-x-0 bottom-0 h-1 bg-[#FFD166] shadow-[0_0_25px_#FFD166]" />
                       )}
                       {isBlackActive && (
                        <div className="absolute -inset-4 bg-[#FFD166]/20 blur-2xl -z-10 rounded-full" />
                       )}
                    </div>
                  )}
                  
                  {/* White Key Active Bottom Indicator */}
                  {isWhiteActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#1DB954] shadow-[0_-5px_30px_#1DB954,0_0_15px_#1DB954]" />
                  )}
                </div>
              );
            })}
          </div>
          
          {/* Intense Reflection/Glow below the keyboard */}
          <div className="absolute top-full left-0 right-0 h-24 bg-gradient-to-b from-[#1DB954]/20 to-transparent blur-3xl opacity-40" />
        </div>

        {/* Marquee Section */}
        <div className="relative w-full overflow-hidden mt-32">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#121212] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#121212] to-transparent z-10" />
          
          <div className="animate-marquee whitespace-nowrap flex items-center">
            {[...brands, ...brands].map((brand, i) => (
              <span 
                key={i} 
                className="text-sm font-bold tracking-[0.2em] uppercase text-[#F2F2F2]/30 mx-12 hover:text-[#1DB954] transition-colors cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float-up {
          0% { transform: translateY(0) scale(1); opacity: 0.9; }
          100% { transform: translateY(-220px) scale(3); opacity: 0; }
        }
        .animate-float-up {
          animation: float-up 1.6s ease-out forwards;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default Hero;
