/**
 * Application Configuration
 * Environment variables and app-wide settings
 */

export const CONFIG = {
  // API Configuration
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'https://api.museji.com',
  
  // Cookie Configuration
  COOKIE_SETTINGS: {
    // User preferences
    USER_EMAIL: 'museji_user_email',
    USER_PREFERENCES: 'museji_user_preferences',
    
    // Session
    SESSION_ID: 'museji_session_id',
    SESSION_TOKEN: 'museji_session_token',
    
    // Consent
    COOKIE_CONSENT: 'museji_cookie_consent',
    ANALYTICS_CONSENT: 'museji_analytics_consent',
  },
  
  // Cookie Expiration Times
  COOKIE_EXPIRY: {
    SHORT_TERM: 7 * 24 * 60 * 60, // 7 days in seconds
    LONG_TERM: 365 * 24 * 60 * 60, // 1 year in seconds
    SESSION: 24 * 60 * 60, // 1 day in seconds
  },
  
  // Application Settings
  APP: {
    NAME: 'Museji',
    VERSION: '1.0.0',
    THEME: 'dark',
  },
  
  // Feature Flags
  FEATURES: {
    ENABLE_ANALYTICS: true,
    ENABLE_NOTIFICATIONS: true,
    ENABLE_LEADERBOARD: true,
    MAINTENANCE_MODE: false,
  },
  
  // Analytics Configuration
  ANALYTICS: {
    TRACKING_ID: import.meta.env.VITE_TRACKING_ID || '',
    ENABLED: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
  },
  
  // Security
  SECURITY: {
    ENABLE_HTTPS: true,
    CORS_ORIGIN: import.meta.env.VITE_CORS_ORIGIN || '*',
  },
};

export default CONFIG;
