import React, { useState, useEffect } from 'react';
import { X, ChevronDown } from 'lucide-react';
import CookieManager from '../utils/cookieManager';
import CONFIG from '../utils/config';

interface CookieConsentProps {
  onConsent?: (preferences: CookiePreferences) => void;
}

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onConsent }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true
    analytics: false,
    marketing: false,
    preferences: false,
  });

  useEffect(() => {
    const consentGiven = CookieManager.getCookie(CONFIG.COOKIE_SETTINGS.COOKIE_CONSENT);
    if (!consentGiven) {
      setIsVisible(true);
    } else {
      try {
        setPreferences(JSON.parse(consentGiven));
      } catch {
        setIsVisible(true);
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    saveCookieConsent(allAccepted);
    onConsent?.(allAccepted);
  };

  const handleRejectAll = () => {
    const rejectAll: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    saveCookieConsent(rejectAll);
    onConsent?.(rejectAll);
  };

  const handleSavePreferences = () => {
    saveCookieConsent(preferences);
    onConsent?.(preferences);
  };

  const saveCookieConsent = (prefs: CookiePreferences) => {
    CookieManager.setCookie(
      CONFIG.COOKIE_SETTINGS.COOKIE_CONSENT,
      JSON.stringify(prefs),
      {
        maxAge: CONFIG.COOKIE_EXPIRY.LONG_TERM,
        secure: CONFIG.SECURITY.ENABLE_HTTPS,
        sameSite: 'Lax',
      }
    );
    setIsVisible(false);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return; // Cannot toggle necessary cookies
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] animate-in slide-in-from-bottom duration-300">
      <div className="bg-[#1a1a1a] border-t border-white/10 p-6 md:p-8 shadow-2xl">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-xl font-bold text-[#F2F2F2] mb-2">
                🍪 Cookie Preferences
              </h3>
              <p className="text-[#F2F2F2]/60 text-sm">
                We use cookies to enhance your experience and analyze our traffic. You can customize your preferences below.
              </p>
            </div>
            <button
              onClick={() => handleRejectAll()}
              className="text-[#F2F2F2]/40 hover:text-[#F2F2F2] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Expandable Details */}
          {isExpanded && (
            <div className="mb-6 space-y-4 pb-6 border-b border-white/10 animate-in fade-in duration-200">
              {/* Necessary Cookies */}
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-[#F2F2F2] mb-1">
                    Necessary Cookies
                  </h4>
                  <p className="text-[#F2F2F2]/50 text-sm">
                    Essential for site functionality and security.
                  </p>
                </div>
                <div className="w-12 h-7 bg-[#1DB954] rounded-full flex items-center justify-end pr-1">
                  <div className="w-5 h-5 bg-white rounded-full" />
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-[#F2F2F2] mb-1">
                    Analytics
                  </h4>
                  <p className="text-[#F2F2F2]/50 text-sm">
                    Help us understand how you use our app.
                  </p>
                </div>
                <button
                  onClick={() => togglePreference('analytics')}
                  className={`w-12 h-7 rounded-full transition-colors flex items-center ${
                    preferences.analytics
                      ? 'bg-[#1DB954] justify-end pr-1'
                      : 'bg-[#2a2a2a] justify-start pl-1'
                  }`}
                >
                  <div className="w-5 h-5 bg-white rounded-full" />
                </button>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-[#F2F2F2] mb-1">
                    Marketing
                  </h4>
                  <p className="text-[#F2F2F2]/50 text-sm">
                    Track your interests and show relevant content.
                  </p>
                </div>
                <button
                  onClick={() => togglePreference('marketing')}
                  className={`w-12 h-7 rounded-full transition-colors flex items-center ${
                    preferences.marketing
                      ? 'bg-[#1DB954] justify-end pr-1'
                      : 'bg-[#2a2a2a] justify-start pl-1'
                  }`}
                >
                  <div className="w-5 h-5 bg-white rounded-full" />
                </button>
              </div>

              {/* Preference Cookies */}
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-[#F2F2F2] mb-1">
                    Preferences
                  </h4>
                  <p className="text-[#F2F2F2]/50 text-sm">
                    Remember your choices and settings.
                  </p>
                </div>
                <button
                  onClick={() => togglePreference('preferences')}
                  className={`w-12 h-7 rounded-full transition-colors flex items-center ${
                    preferences.preferences
                      ? 'bg-[#1DB954] justify-end pr-1'
                      : 'bg-[#2a2a2a] justify-start pl-1'
                  }`}
                >
                  <div className="w-5 h-5 bg-white rounded-full" />
                </button>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[#1DB954] hover:text-[#1DB954]/80 font-medium flex items-center gap-2 transition-colors text-sm"
            >
              {isExpanded ? 'Hide' : 'Customize'} settings
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  isExpanded ? 'rotate-180' : ''
                }`}
              />
            </button>

            <div className="flex gap-3">
              <button
                onClick={handleRejectAll}
                className="px-6 py-2 text-[#F2F2F2] font-medium hover:bg-white/5 rounded-lg transition-colors text-sm"
              >
                Reject All
              </button>
              {isExpanded && (
                <button
                  onClick={handleSavePreferences}
                  className="px-6 py-2 bg-white/10 hover:bg-white/20 text-[#F2F2F2] font-medium rounded-lg transition-colors text-sm"
                >
                  Save Preferences
                </button>
              )}
              <button
                onClick={handleAcceptAll}
                className="px-6 py-2 bg-[#1DB954] hover:bg-[#1DB954]/90 text-white font-bold rounded-lg transition-colors text-sm shadow-lg shadow-[#1DB954]/20"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
