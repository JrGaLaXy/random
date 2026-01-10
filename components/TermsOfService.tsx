import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import CookieConsent from './CookieConsent';

interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

const TermsOfServicePage: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['intro']);

  const toggleSection = (id: string) => {
    setExpandedSections(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const sections: Section[] = [
    {
      id: 'intro',
      title: 'Agreement to Terms',
      content: (
        <div className="space-y-4">
          <p className="text-[#F2F2F2]/80">
            These Terms of Service ("Terms") govern your use of the Museji website and services. By accessing or using Museji, you agree to be bound by these Terms. If you do not agree to abide by the above, please do not use this service.
          </p>
        </div>
      ),
    },
    {
      id: 'use-license',
      title: 'Use License',
      content: (
        <div className="space-y-3 text-[#F2F2F2]/80 text-sm">
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on Museji for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[#F2F2F2]/70">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to decompile or reverse engineer any software contained on Museji</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'disclaimer',
      title: 'Disclaimer',
      content: (
        <div className="space-y-3 text-[#F2F2F2]/80 text-sm">
          <p>
            The materials on Museji are provided on an 'as is' basis. Museji makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </div>
      ),
    },
    {
      id: 'limitations',
      title: 'Limitations',
      content: (
        <div className="space-y-3 text-[#F2F2F2]/80 text-sm">
          <p>
            In no event shall Museji or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Museji, even if Museji or an authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
        </div>
      ),
    },
    {
      id: 'accuracy',
      title: 'Accuracy of Materials',
      content: (
        <div className="space-y-3 text-[#F2F2F2]/80 text-sm">
          <p>
            The materials appearing on Museji could include technical, typographical, or photographic errors. Museji does not warrant that any of the materials on Museji are accurate, complete, or current. Museji may make changes to the materials contained on Museji at any time without notice.
          </p>
        </div>
      ),
    },
    {
      id: 'links',
      title: 'Links',
      content: (
        <div className="space-y-3 text-[#F2F2F2]/80 text-sm">
          <p>
            Museji has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Museji of the site. Use of any such linked website is at the user's own risk.
          </p>
        </div>
      ),
    },
    {
      id: 'modifications',
      title: 'Modifications',
      content: (
        <div className="space-y-3 text-[#F2F2F2]/80 text-sm">
          <p>
            Museji may revise these Terms of Service for Museji at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms of Service.
          </p>
        </div>
      ),
    },
    {
      id: 'governing',
      title: 'Governing Law',
      content: (
        <div className="space-y-3 text-[#F2F2F2]/80 text-sm">
          <p>
            These Terms and Conditions of use are governed by and construed in accordance with the laws of Italy, and you irrevocably submit to the exclusive jurisdiction of the courts located in Italy.
          </p>
        </div>
      ),
    },
    {
      id: 'contact',
      title: 'Contact Us',
      content: (
        <div className="text-center">
          <p className="text-[#F2F2F2]/80 mb-4">Have questions about our terms?</p>
          <a 
            href="mailto:musejiapp@gmail.com"
            className="inline-block bg-[#1DB954] hover:bg-[#1DB954]/90 text-white font-bold py-2 px-6 rounded-full transition-all text-sm"
          >
            Contact Us
          </a>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen selection:bg-[#1DB954] selection:text-white bg-[#121212]">
      <Navbar />
      <main>
        <div className="max-w-3xl mx-auto px-6 md:px-12 py-20 mt-20">
          {/* Header */}
          <div className="mb-20 text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-4">Terms of Service</h1>
            <p className="text-[#F2F2F2]/60 text-sm">Last updated: January 10, 2026</p>
            <p className="text-[#F2F2F2]/50 text-sm mt-4 max-w-xl mx-auto">
              Please read these terms carefully before using our service.
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {sections.map((section) => (
              <div
                key={section.id}
                className="border border-white/10 rounded-xl overflow-hidden hover:border-[#1DB954]/30 transition-colors"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-6 py-5 bg-[#1a1a1a] hover:bg-[#1a1a1a]/80 transition-colors flex items-center justify-between"
                >
                  <span className="font-bold text-lg text-left">{section.title}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#1DB954] transition-transform duration-300 ${
                      expandedSections.includes(section.id) ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedSections.includes(section.id) && (
                  <div className="px-6 py-5 bg-[#0f0f0f] border-t border-white/5">
                    {section.content}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-16 p-6 bg-[#1DB954]/5 border border-[#1DB954]/20 rounded-2xl text-center">
            <p className="text-[#F2F2F2]/70 text-sm">
              We may update these terms from time to time. We'll notify you of major changes via email or prominent notice on our website.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default TermsOfServicePage;
