
import React from 'react';
import { Trophy, TrendingUp, Medal } from 'lucide-react';

const leaders = [
  { rank: 1, name: "Klavier_King", score: "128,450", accuracy: "99.8%", avatar: "https://picsum.photos/id/101/40/40" },
  { rank: 2, name: "MelodyMaker", score: "125,200", accuracy: "99.2%", avatar: "https://picsum.photos/id/102/40/40" },
  { rank: 3, name: "PianoPro_99", score: "122,890", accuracy: "98.7%", avatar: "https://picsum.photos/id/103/40/40" },
  { rank: 4, name: "SymphonySam", score: "119,400", accuracy: "98.1%", avatar: "https://picsum.photos/id/104/40/40" },
  { rank: 5, name: "Mozart_Lite", score: "118,100", accuracy: "97.9%", avatar: "https://picsum.photos/id/105/40/40" },
];

const LeaderboardSection: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-12 items-center">
      <div className="w-full lg:w-1/2">
        <div className="inline-flex items-center gap-2 text-[#FFD166] font-bold uppercase tracking-wider text-sm mb-4">
          <Trophy className="w-5 h-5" />
          Live Ranking
        </div>
        <h2 className="text-4xl md:text-6xl font-black mb-6">Battle for the <span className="text-[#1DB954]">Top Spot</span></h2>
        <p className="text-[#F2F2F2]/60 text-lg mb-8 leading-relaxed">
          Connect with pianists from around the world. Take part in weekly challenges, track your progress, and see how you stack up on the leaderboard.
        </p>
        
        <div className="flex gap-6">
          <div className="bg-[#1a1a1a] p-6 rounded-2xl flex-1 border border-white/5">
            <div className="text-3xl font-bold mb-1">14.2k</div>
            <div className="text-xs text-[#F2F2F2]/40 uppercase tracking-widest font-bold">Active Players</div>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-2xl flex-1 border border-white/5">
            <div className="text-3xl font-bold mb-1">$1,000+</div>
            <div className="text-xs text-[#F2F2F2]/40 uppercase tracking-widest font-bold">Weekly Prizes</div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <div className="bg-[#1a1a1a] rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl">
          <div className="bg-white/5 px-8 py-6 flex justify-between items-center border-b border-white/5">
            <span className="font-bold flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#1DB954]" />
              Weekly Global Leaderboard
            </span>
            <div className="flex gap-4 text-xs font-bold text-[#F2F2F2]/40">
              <span className="text-[#1DB954]">TOP 100</span>
              <span>FRIENDS</span>
            </div>
          </div>
          <div className="p-4">
            {leaders.map((player) => (
              <div 
                key={player.rank}
                className={`flex items-center justify-between p-4 rounded-xl transition-all ${player.rank === 1 ? 'bg-[#1DB954]/10 border border-[#1DB954]/20' : 'hover:bg-white/5'}`}
              >
                <div className="flex items-center gap-4">
                  <span className={`w-6 font-black ${player.rank === 1 ? 'text-[#FFD166]' : 'text-[#F2F2F2]/30'}`}>
                    {player.rank}
                  </span>
                  <img src={player.avatar} alt={player.name} className="w-10 h-10 rounded-full border border-white/10" />
                  <div>
                    <div className="font-bold flex items-center gap-1.5">
                      {player.name}
                      {player.rank === 1 && <Medal className="w-3.5 h-3.5 text-[#FFD166]" />}
                    </div>
                    <div className="text-[10px] text-[#F2F2F2]/40 uppercase font-bold tracking-widest">Legendary Pianist</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-mono font-bold text-[#1DB954]">{player.score}</div>
                  <div className="text-[10px] text-[#F2F2F2]/40 uppercase font-bold tracking-widest">Acc: {player.accuracy}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-6 bg-[#121212] flex justify-center border-t border-white/5">
            <button className="text-sm font-bold text-[#F2F2F2]/50 hover:text-[#F2F2F2] transition-colors uppercase tracking-widest">View Full Standings</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardSection;
