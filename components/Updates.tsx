import React from 'react';
import { Sparkles, Zap, Bug, Clock } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import CookieConsent from './CookieConsent';

interface Update {
  id: string;
  date: string;
  title: string;
  description: string;
  type: 'feature' | 'announcement' | 'bugfix' | 'coming';
}

const UpdatesPage: React.FC = () => {
  const getBadgeStyles = (type: Update['type']) => {
    switch (type) {
      case 'feature':
        return { bg: 'bg-[#1DB954]/20', text: 'text-[#1DB954]', icon: Sparkles, label: 'New Feature' };
      case 'announcement':
        return { bg: 'bg-blue-500/20', text: 'text-blue-400', icon: Zap, label: 'Announcement' };
      case 'bugfix':
        return { bg: 'bg-orange-500/20', text: 'text-orange-400', icon: Bug, label: 'Bug Fix' };
      case 'coming':
        return { bg: 'bg-purple-500/20', text: 'text-purple-400', icon: Clock, label: 'Coming Soon' };
    }
  };

  const updates: Update[] = [
    {
      id: '1',
      date: 'January 10, 2026',
      title: 'Privacy Policy & Terms of Service Published',
      description: 'We\'ve published comprehensive Privacy Policy and Terms of Service pages to ensure transparency with our users. Both documents are now accessible from the footer with full details about data handling and service terms.',
      type: 'announcement',
    },
    {
      id: '2',
      date: 'January 9, 2026',
      title: 'Waiting List Now Live',
      description: 'Users can now join our waiting list and secure their early access to Museji. Join over 10,000 pianists waiting to revolutionize their learning experience.',
      type: 'feature',
    },
  ];

  return (
    <div className="min-h-screen selection:bg-[#1DB954] selection:text-white bg-[#121212]">
      <Navbar />
      <main>
        <div className="max-w-3xl mx-auto px-6 md:px-12 py-20 mt-20">
          {/* Header */}
          <div className="mb-20 text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-4 text-[#F2F2F2]">
              What's New
            </h1>
            <p className="text-[#F2F2F2]/60 text-lg">
              Stay updated on the latest features, improvements, and announcements from Museji
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1DB954]/50 via-[#1DB954]/30 to-transparent transform md:-translate-x-1/2" />

            {/* Updates */}
            <div className="space-y-8">
              {updates.map((update, index) => {
                const badgeStyle = getBadgeStyles(update.type);
                const IconComponent = badgeStyle.icon;

                return (
                  <div key={update.id} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute left-2 md:left-1/2 top-2 w-9 h-9 rounded-full bg-[#121212] border-2 border-[#1DB954] flex items-center justify-center transform md:-translate-x-1/2 z-10">
                      <div className="w-3 h-3 rounded-full bg-[#1DB954]" />
                    </div>

                    {/* Content */}
                    <div className={`ml-24 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-16 md:w-1/2' : 'md:ml-auto md:pl-16 md:w-1/2'}`}>
                      <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-6 hover:border-[#1DB954]/30 transition-all hover:shadow-lg hover:shadow-[#1DB954]/10">
                        {/* Badge */}
                        <div className="mb-3 flex items-center gap-2">
                          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full ${badgeStyle.bg} ${badgeStyle.text} text-xs font-bold uppercase tracking-wider`}>
                            <IconComponent className="w-3.5 h-3.5" />
                            {badgeStyle.label}
                          </div>
                        </div>

                        {/* Date */}
                        <p className="text-[#1DB954] text-sm font-semibold mb-2">
                          {update.date}
                        </p>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-[#F2F2F2] mb-3">
                          {update.title}
                        </h3>

                        {/* Description */}
                        <p className="text-[#F2F2F2]/70 text-sm leading-relaxed">
                          {update.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Info Box */}
          <div className="mt-20 p-6 bg-[#1DB954]/5 border border-[#1DB954]/20 rounded-2xl text-center">
            <p className="text-[#F2F2F2]/70 text-sm">
              Follow us on social media to get real-time updates and announcements about Museji's development and upcoming releases.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default UpdatesPage;
