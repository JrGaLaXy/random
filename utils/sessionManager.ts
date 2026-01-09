/**
 * Session Manager Utility
 * Handles user sessions, authentication state, and session persistence
 */

import CookieManager from './cookieManager';
import LocalStorageManager from './localStorage';
import CONFIG from './config';

export interface SessionData {
  id: string;
  email?: string;
  createdAt: number;
  lastActivity: number;
  isActive: boolean;
  preferences?: Record<string, any>;
}

class SessionManager {
  private sessionData: SessionData | null = null;
  private sessionTimeout = 30 * 60 * 1000; // 30 minutes
  private inactivityTimeout: NodeJS.Timeout | null = null;

  /**
   * Initialize session
   */
  initializeSession(): void {
    const storedSession = CookieManager.getCookie(CONFIG.COOKIE_SETTINGS.SESSION_ID);
    
    if (storedSession) {
      try {
        this.sessionData = JSON.parse(storedSession);
        this.resetInactivityTimer();
      } catch (error) {
        console.error('Failed to parse stored session:', error);
        this.createNewSession();
      }
    } else {
      this.createNewSession();
    }

    // Setup activity listeners
    this.setupActivityListeners();
  }

  /**
   * Create a new session
   */
  createNewSession(): void {
    const sessionId = this.generateSessionId();
    const now = Date.now();

    this.sessionData = {
      id: sessionId,
      createdAt: now,
      lastActivity: now,
      isActive: true,
      preferences: {},
    };

    this.saveSession();
  }

  /**
   * Save session to cookies and localStorage
   */
  private saveSession(): void {
    if (!this.sessionData) return;

    // Save to secure cookie
    CookieManager.setCookie(
      CONFIG.COOKIE_SETTINGS.SESSION_ID,
      JSON.stringify(this.sessionData),
      {
        maxAge: CONFIG.COOKIE_EXPIRY.SESSION,
        secure: CONFIG.SECURITY.ENABLE_HTTPS,
        sameSite: 'Lax',
      }
    );

    // Also save to localStorage as backup
    LocalStorageManager.setItem('session_data', this.sessionData);
  }

  /**
   * Update session activity
   */
  updateActivity(): void {
    if (this.sessionData) {
      this.sessionData.lastActivity = Date.now();
      this.saveSession();
      this.resetInactivityTimer();
    }
  }

  /**
   * Setup activity listeners
   */
  private setupActivityListeners(): void {
    const events = ['mousedown', 'keydown', 'scroll', 'touchstart'];
    const debounceUpdateActivity = this.debounce(() => this.updateActivity(), 5000);

    events.forEach((event) => {
      document.addEventListener(event, debounceUpdateActivity);
    });
  }

  /**
   * Reset inactivity timer
   */
  private resetInactivityTimer(): void {
    if (this.inactivityTimeout) {
      clearTimeout(this.inactivityTimeout);
    }

    this.inactivityTimeout = setTimeout(() => {
      this.endSession();
    }, this.sessionTimeout);
  }

  /**
   * End current session
   */
  endSession(): void {
    CookieManager.deleteCookie(CONFIG.COOKIE_SETTINGS.SESSION_ID);
    CookieManager.deleteCookie(CONFIG.COOKIE_SETTINGS.SESSION_TOKEN);
    LocalStorageManager.removeItem('session_data');
    this.sessionData = null;

    if (this.inactivityTimeout) {
      clearTimeout(this.inactivityTimeout);
    }
  }

  /**
   * Get current session
   */
  getSession(): SessionData | null {
    return this.sessionData;
  }

  /**
   * Check if session is valid
   */
  isSessionValid(): boolean {
    if (!this.sessionData) return false;
    return this.sessionData.isActive && Date.now() - this.sessionData.lastActivity < this.sessionTimeout;
  }

  /**
   * Update session preferences
   */
  setPreference(key: string, value: any): void {
    if (this.sessionData) {
      if (!this.sessionData.preferences) {
        this.sessionData.preferences = {};
      }
      this.sessionData.preferences[key] = value;
      this.saveSession();
    }
  }

  /**
   * Get session preference
   */
  getPreference(key: string): any {
    return this.sessionData?.preferences?.[key] || null;
  }

  /**
   * Set user email in session
   */
  setUserEmail(email: string): void {
    if (this.sessionData) {
      this.sessionData.email = email;
      this.saveSession();

      // Also save to cookies
      CookieManager.setCookie(
        CONFIG.COOKIE_SETTINGS.USER_EMAIL,
        email,
        {
          maxAge: CONFIG.COOKIE_EXPIRY.LONG_TERM,
          secure: CONFIG.SECURITY.ENABLE_HTTPS,
          sameSite: 'Lax',
        }
      );
    }
  }

  /**
   * Get user email from session
   */
  getUserEmail(): string | undefined {
    return this.sessionData?.email || CookieManager.getCookie(CONFIG.COOKIE_SETTINGS.USER_EMAIL) || undefined;
  }

  /**
   * Generate unique session ID
   */
  private generateSessionId(): string {
    return `${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
  }

  /**
   * Debounce utility
   */
  private debounce(func: Function, delay: number): (...args: any[]) => void {
    let timeoutId: NodeJS.Timeout | null = null;
    return (...args: any[]) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  }
}

export default new SessionManager();
