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

const PrivacyPolicyPage: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['intro']);

  const toggleSection = (id: string) => {
    setExpandedSections(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const sections: Section[] = [
    {
      id: 'intro',
      title: 'Introduction',
      content: (
        <div className="space-y-4">
          <p className="text-[#F2F2F2]/80">
            This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
          </p>
          <p className="text-[#F2F2F2]/80">
            We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
          </p>
        </div>
      ),
    },
    {
      id: 'definitions',
      title: 'Key Definitions',
      content: (
        <div className="space-y-3">
          {[
            { term: 'Company', def: 'Museji' },
            { term: 'Service', def: 'The Website and related services' },
            { term: 'Personal Data', def: 'Any information that relates to an identified or identifiable individual' },
            { term: 'Service Provider', def: 'Third-party companies (like Supabase) who process data on our behalf' },
            { term: 'Country', def: 'Italy' },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4">
              <span className="text-[#1DB954] font-bold whitespace-nowrap">{item.term}</span>
              <span className="text-[#F2F2F2]/70">{item.def}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 'data-collection',
      title: 'What Data We Collect',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="text-[#1DB954] font-bold mb-2">Personal Data</h4>
            <ul className="list-disc list-inside space-y-1 text-[#F2F2F2]/70 text-sm">
              <li>Email address (for waiting list)</li>
              <li>Usage data and analytics</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#1DB954] font-bold mb-2">Usage Data</h4>
            <p className="text-[#F2F2F2]/70 text-sm">
              Automatically collected: IP address, browser type, pages visited, time on site, device information, and diagnostic data.
            </p>
          </div>
          <div>
            <h4 className="text-[#1DB954] font-bold mb-2">Cookies & Tracking</h4>
            <p className="text-[#F2F2F2]/70 text-sm">
              We use cookies for essential functionality, remembering your preferences, and analyzing how you use our service.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'usage',
      title: 'How We Use Your Data',
      content: (
        <ul className="space-y-2 text-[#F2F2F2]/80 text-sm">
          <li className="flex gap-3">
            <span className="text-[#1DB954]">•</span>
            <span>To provide and improve the Service</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#1DB954]">•</span>
            <span>To manage your account and registration</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#1DB954]">•</span>
            <span>To contact you about updates and product news</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#1DB954]">•</span>
            <span>To analyze usage trends and improve our services</span>
          </li>
        </ul>
      ),
    },
    {
      id: 'email',
      title: 'Email Communications',
      content: (
        <div className="space-y-3 text-[#F2F2F2]/80 text-sm">
          <p>
            We collect email addresses to notify you about Museji's launch and important product updates. By joining our waiting list, you consent to these communications.
          </p>
          <p>
            You can unsubscribe anytime by clicking the unsubscribe link in any email or contacting us at <span className="text-[#1DB954] font-medium">musejiapp@gmail.com</span>.
          </p>
        </div>
      ),
    },
    {
      id: 'sharing',
      title: 'How We Share Your Data',
      content: (
        <ul className="space-y-2 text-[#F2F2F2]/80 text-sm">
          <li className="flex gap-3">
            <span className="text-[#1DB954]">•</span>
            <span><strong>Service Providers:</strong> Supabase and others who help us operate the service</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#1DB954]">•</span>
            <span><strong>Business Transfers:</strong> If we merge or are acquired</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#1DB954]">•</span>
            <span><strong>Legal Requirements:</strong> When required by law or valid government requests</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#1DB954]">•</span>
            <span><strong>With Your Consent:</strong> For other purposes you approve</span>
          </li>
        </ul>
      ),
    },
    {
      id: 'retention',
      title: 'How Long We Keep Your Data',
      content: (
        <div className="space-y-3 text-[#F2F2F2]/80 text-sm">
          <p>
            We retain your personal data only as long as necessary to provide our service and comply with legal obligations.
          </p>
          <p>
            You can request deletion of your data at any time by contacting us at <span className="text-[#1DB954] font-medium">musejiapp@gmail.com</span>.
          </p>
        </div>
      ),
    },
    {
      id: 'gdpr',
      title: 'Your Rights (GDPR - EU Users)',
      content: (
        <div className="space-y-3">
          <p className="text-[#F2F2F2]/80 text-sm">If you're in the EU/EEA, you have the right to:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              { title: 'Access', desc: 'Get copies of your data' },
              { title: 'Rectification', desc: 'Correct inaccurate data' },
              { title: 'Erasure', desc: 'Request deletion' },
              { title: 'Restrict', desc: 'Limit how we use it' },
              { title: 'Portability', desc: 'Transfer your data' },
              { title: 'Object', desc: 'Oppose our processing' },
            ].map((right, idx) => (
              <div key={idx} className="bg-[#1DB954]/5 border border-[#1DB954]/20 rounded-lg p-3">
                <p className="text-[#1DB954] font-bold text-sm">{right.title}</p>
                <p className="text-[#F2F2F2]/70 text-xs">{right.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[#F2F2F2]/70 text-sm mt-4">
            Contact us at <span className="text-[#1DB954] font-medium">musejiapp@gmail.com</span> to exercise these rights. We'll respond within 30 days.
          </p>
        </div>
      ),
    },
    {
      id: 'security',
      title: 'Security & Children',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="text-[#1DB954] font-bold mb-2">Data Security</h4>
            <p className="text-[#F2F2F2]/70 text-sm">
              We use industry-standard security measures to protect your data. However, no method is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>
          <div>
            <h4 className="text-[#1DB954] font-bold mb-2">Children's Privacy</h4>
            <p className="text-[#F2F2F2]/70 text-sm">
              Our service is not intended for anyone under 16. If we learn we've collected data from a minor, we'll remove it immediately.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'contact',
      title: 'Questions?',
      content: (
        <div className="text-center">
          <p className="text-[#F2F2F2]/80 mb-4">Have questions about our privacy practices?</p>
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
        <div className="max-w-3xl mx-auto px-6 md:px-12 py-20">
          {/* Header */}
          <div className="mb-20 text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-4">Privacy Policy</h1>
            <p className="text-[#F2F2F2]/60 text-sm">Last updated: January 10, 2026</p>
            <p className="text-[#F2F2F2]/50 text-sm mt-4 max-w-xl mx-auto">
              Your privacy is important to us. Click on any section below to learn more.
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
              We may update this policy from time to time. We'll notify you of major changes via email or prominent notice on our website.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default PrivacyPolicyPage;
