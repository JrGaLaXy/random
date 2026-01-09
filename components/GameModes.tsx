
import React from 'react';
import { Swords, Users2, GraduationCap, ArrowRight, Clock } from 'lucide-react';

interface GameModesProps {
  onTriggerProgress: () => void;
}

const GameModes: React.FC<GameModesProps> = ({ onTriggerProgress }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Versus Mode */}
      <div className="relative group p-1 rounded-[2rem] bg-gradient-to-br from-[#1DB954]/20 to-transparent">
        <div className="h-full bg-[#121212] rounded-[1.8rem] p-10 flex flex-col">
          <div className="w-14 h-14 bg-[#1DB954] rounded-2xl flex items-center justify-center mb-8">
            <Swords className="text-white w-8 h-8" />
          </div>
          <h3 className="text-3xl font-black mb-4">Versus Mode</h3>
          <p className="text-[#F2F2F2]/60 mb-8 flex-grow">
            Challenge friends or players around the world in real-time piano battles. Hit the notes with precision, keep the rhythm tight, and climb the leaderboard to prove your skills.
          </p>
          <ul className="space-y-3 mb-10">
            <li className="flex items-center gap-2 text-sm text-[#F2F2F2]/80">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1DB954]" />
              Real-time competitive play
            </li>
            <li className="flex items-center gap-2 text-sm text-[#F2F2F2]/80">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1DB954]" />
              Live scoring and rankings
            </li>
            <li className="flex items-center gap-2 text-sm text-[#F2F2F2]/80">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1DB954]" />
              Choose difficulty and songs
            </li>
            <li className="flex items-center gap-2 text-sm text-[#F2F2F2]/80">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1DB954]" />
              Matchmaking based on skill
            </li>
            <li className="flex items-center gap-2 text-sm text-[#F2F2F2]/80">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1DB954]" />
              Tournaments and ladder play
            </li>
          </ul>
          <button 
            onClick={onTriggerProgress}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#1DB954] to-[#1DB954]/80 text-white font-bold flex items-center justify-center gap-2 group-hover:scale-[1.02] transition-transform"
          >
            Enter Arena
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Play Together (formerly Collaborative) */}
      <div className="relative group p-1 rounded-[2rem] bg-gradient-to-br from-[#FFD166]/20 to-transparent">
        <div className="h-full bg-[#121212] rounded-[1.8rem] p-10 flex flex-col">
          <div className="w-14 h-14 bg-[#FFD166] rounded-2xl flex items-center justify-center mb-8">
            <Users2 className="text-[#121212] w-8 h-8" />
          </div>
          <h3 className="text-3xl font-black mb-4">Play Together</h3>
          <p className="text-[#F2F2F2]/60 mb-8 flex-grow">
            Play alone in your room or Invite friends and create your own mini-orchestra in real-time. Everyone can take a part: melody, harmony, bass, drums, and more. Play together!
          </p>
          <ul className="space-y-3 mb-10">
            <li className="flex items-center gap-2 text-sm text-[#F2F2F2]/80">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FFD166]" />
              Real-time play with friends
            </li>
            <li className="flex items-center gap-2 text-sm text-[#F2F2F2]/80">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FFD166]" />
              Full control for the host
            </li>
            <li className="flex items-center gap-2 text-sm text-[#F2F2F2]/80">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FFD166]" />
              Choose your part or instrument
            </li>
            <li className="flex items-center gap-2 text-sm text-[#F2F2F2]/80">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FFD166]" />
              Record and share your sessions
            </li>
            <li className="flex items-center gap-2 text-sm text-[#F2F2F2]/80">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FFD166]" />
              Social, collaborative, and fun
            </li>
          </ul>
          <button 
            onClick={onTriggerProgress}
            className="w-full py-4 rounded-xl border border-[#FFD166] text-[#FFD166] font-bold flex items-center justify-center gap-2 group-hover:bg-[#FFD166] group-hover:text-[#121212] transition-all"
          >
            Join Studio
            <Users2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Learning Path - COMING SOON */}
      <div className="relative group p-1 rounded-[2rem] bg-gradient-to-br from-blue-500/10 to-transparent">
        <div className="h-full bg-[#121212] rounded-[1.8rem] p-10 flex flex-col relative overflow-hidden">
          {/* Coming Soon Badge */}
          <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold tracking-widest uppercase flex items-center gap-1.5">
            <Clock className="w-3 h-3" />
            Coming Soon
          </div>

          <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-8">
            <GraduationCap className="text-blue-400 w-8 h-8" />
          </div>
          <h3 className="text-3xl font-black mb-4 text-[#F2F2F2]/80">Mastery Path</h3>
          <p className="text-[#F2F2F2]/40 mb-8 flex-grow">
            Our structured curriculum takes you from basic finger placement to performing advanced concertos with confidence. Currently in development.
          </p>
          <ul className="space-y-3 mb-10 opacity-50">
            <li className="flex items-center gap-2 text-sm text-[#F2F2F2]/60">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
              1,000+ interactive lessons
            </li>
            <li className="flex items-center gap-2 text-sm text-[#F2F2F2]/60">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
              Progress-based achievements
            </li>
            <li className="flex items-center gap-2 text-sm text-[#F2F2F2]/60">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
              Theory & sight-reading
            </li>
          </ul>
          <button 
            onClick={onTriggerProgress}
            className="w-full py-4 rounded-xl bg-white/5 border border-white/5 text-[#F2F2F2]/30 font-bold flex items-center justify-center gap-2 cursor-pointer hover:bg-white/10 transition-all"
          >
            Notify Me
            <ArrowRight className="w-5 h-5 opacity-20" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameModes;
