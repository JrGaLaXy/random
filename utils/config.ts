/**
 * Application Configuration
 * Environment variables and app-wide settings
 */

export const CONFIG = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'https://api.museji.com',

  COOKIE_SETTINGS: {
    USER_EMAIL: 'museji_user_email',
    USER_PREFERENCES: 'museji_user_preferences',
    SESSION_ID: 'museji_session_id',
    SESSION_TOKEN: 'museji_session_token',
    COOKIE_CONSENT: 'museji_cookie_consent',
    ANALYTICS_CONSENT: 'museji_analytics_consent',
  },

  COOKIE_EXPIRY: {
    SHORT_TERM: 7 * 24 * 60 * 60,
    LONG_TERM: 365 * 24 * 60 * 60,
    SESSION: 24 * 60 * 60,
  },

  APP: {
    NAME: 'Museji',
    VERSION: '1.0.0',
    THEME: 'dark',
  },

  FEATURES: {
    ENABLE_ANALYTICS: true,
    ENABLE_NOTIFICATIONS: true,
    ENABLE_LEADERBOARD: true,
    MAINTENANCE_MODE: false,
  },

  ANALYTICS: {
    TRACKING_ID: import.meta.env.VITE_TRACKING_ID || '',
    ENABLED: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
  },

  SECURITY: {
    ENABLE_HTTPS: true,
    CORS_ORIGIN: import.meta.env.VITE_CORS_ORIGIN || '*',
  },
};

export default CONFIG;
