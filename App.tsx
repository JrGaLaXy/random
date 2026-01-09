
import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  X,
  Bell
} from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesGrid from './components/FeaturesGrid';
import GameModes from './components/GameModes';
import LeaderboardSection from './components/LeaderboardSection';
import WaitingList from './components/WaitingList';
import AboutContact from './components/AboutContact';
import Footer from './components/Footer';

const Toast: React.FC<{ show: boolean; onClose: () => void }> = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-6 left-6 md:left-auto md:w-96 z-[110] animate-in slide-in-from-bottom-10 md:slide-in-from-right-10 duration-300">
      <div className="bg-[#1a1a1a] border border-[#1DB954]/30 rounded-2xl p-6 shadow-2xl shadow-black/50 flex gap-4 items-start relative overflow-hidden group">
        {/* Accent Glow */}
        <div className="absolute top-0 left-0 w-1 h-full bg-[#1DB954]" />
        
        <div className="w-10 h-10 bg-[#1DB954]/10 rounded-full flex items-center justify-center shrink-0">
          <Bell className="w-5 h-5 text-[#1DB954]" />
        </div>
        
        <div className="flex-grow">
          <h4 className="text-[#F2F2F2] font-bold text-lg mb-1">App in progress!</h4>
          <p className="text-[#F2F2F2]/60 text-sm leading-relaxed">
            We'll notify you when the app is available for download.
          </p>
        </div>

        <button 
          onClick={onClose}
          className="text-[#F2F2F2]/30 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [showProgressToast, setShowProgressToast] = useState(false);

  const triggerProgressToast = () => {
    setShowProgressToast(false);
    setTimeout(() => {
      setShowProgressToast(true);
    }, 10);
  };

  useEffect(() => {
    if (showProgressToast) {
      const timer = setTimeout(() => {
        setShowProgressToast(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showProgressToast]);

  return (
    <div className="min-h-screen selection:bg-[#1DB954] selection:text-white bg-[#121212]">
      <Navbar />
      <main>
        <Hero />
        
        <section id="features" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#F2F2F2]">Elevate Your Playing</h2>
            <p className="text-[#F2F2F2]/60 text-lg max-w-2xl mx-auto">
              Museji combines cutting-edge AI with traditional rhythm gaming to create the ultimate piano learning experience.
            </p>
          </div>
          <FeaturesGrid />
        </section>

        <section id="modes" className="py-24 bg-[#1a1a1a]/50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1DB954]/10 text-[#1DB954] text-sm font-medium border border-[#1DB954]/20 mb-4">
                <Zap className="w-4 h-4" />
                Play Your Way
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#F2F2F2]">Challenge Your Limits</h2>
              <p className="text-[#F2F2F2]/60 text-lg">Choose from multiple ways to play and grow.</p>
            </div>
            <GameModes onTriggerProgress={triggerProgressToast} />
          </div>
        </section>

        <section id="leaderboard" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <LeaderboardSection />
        </section>

        <AboutContact />

        <section id="signup" className="py-32 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#1DB954]/10 blur-[120px] rounded-full -z-10" />
          <WaitingList />
        </section>
      </main>
      <Footer />

      <Toast show={showProgressToast} onClose={() => setShowProgressToast(false)} />
    </div>
  );
};

export default App;
