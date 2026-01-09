
import React from 'react';
import { 
  Cpu, Zap, Target, BookOpen, Users, Piano, 
  Trophy, Music, Disc, Mic, Globe, Shield 
} from 'lucide-react';

const features = [
  {
    icon: <Cpu className="w-6 h-6 text-[#1DB954]" />,
    title: "AI-Powered Learning",
    desc: "Personalized lessons that adapt to your skill level in real-time."
  },
  {
    icon: <Zap className="w-6 h-6 text-[#FFD166]" />,
    title: "Real-Time Feedback",
    desc: "Instant audio recognition technology for note-perfect accuracy."
  },
  {
    icon: <Target className="w-6 h-6 text-[#1DB954]" />,
    title: "Goal Tracking",
    desc: "Custom milestones and a robust progress tracking system."
  },
  {
    icon: <BookOpen className="w-6 h-6 text-[#FFD166]" />,
    title: "Interactive Lessons",
    desc: "Step-by-step visual guides designed by concert pianists."
  },
  {
    icon: <Users className="w-6 h-6 text-[#1DB954]" />,
    title: "Multiplayer Modes",
    desc: "Real-time play and collaborative jam sessions with friends."
  },
  {
    icon: <Piano className="w-6 h-6 text-[#FFD166]" />,
    title: "MIDI Support",
    desc: "Plug and play with any digital piano via MIDI keyboard support."
  },
  {
    icon: <Trophy className="w-6 h-6 text-[#1DB954]" />,
    title: "Leaderboards",
    desc: "Global rankings, achievements, and weekly rhythm challenges."
  },
  {
    icon: <Music className="w-6 h-6 text-[#FFD166]" />,
    title: "Vast Song Library",
    desc: "Access thousands of songs across classical, jazz, and pop."
  },
  {
    icon: <Disc className="w-6 h-6 text-[#1DB954]" />,
    title: "Rhythm Games",
    desc: "Gamified coordination challenges to improve your timing."
  },
  {
    icon: <Mic className="w-6 h-6 text-[#FFD166]" />,
    title: "High-Quality Audio",
    desc: "Crystal-clear, high-fidelity sound for an immersive experience."
  },
  {
    icon: <Globe className="w-6 h-6 text-[#1DB954]" />,
    title: "Built-in Community",
    desc: "Connect, share your performances, and find your duet partner."
  },
  {
    icon: <Shield className="w-6 h-6 text-[#FFD166]" />,
    title: "Cloud Sync",
    desc: "Your progress and library synced across all your devices."
  }
];

const FeaturesGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {features.map((feature, idx) => (
        <div 
          key={idx} 
          className="group p-8 rounded-2xl bg-[#1a1a1a] border border-white/5 hover:border-[#1DB954]/30 transition-all duration-300"
        >
          <div className="mb-6 bg-[#121212] w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            {feature.icon}
          </div>
          <h3 className="text-xl font-bold mb-3 group-hover:text-[#1DB954] transition-colors">{feature.title}</h3>
          <p className="text-[#F2F2F2]/50 text-sm leading-relaxed">
            {feature.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FeaturesGrid;
