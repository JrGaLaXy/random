/**
 * Cookie Manager Utility
 * Handles all cookie operations with security best practices
 */

export interface CookieOptions {
  maxAge?: number; // in seconds
  expires?: Date;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: 'Strict' | 'Lax' | 'None';
  httpOnly?: boolean;
}

class CookieManager {
  /**
   * Set a cookie
   */
  static setCookie(
    name: string,
    value: string,
    options: CookieOptions = {}
  ): void {
    let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

    if (options.maxAge) {
      cookieString += `; Max-Age=${options.maxAge}`;
    }

    if (options.expires) {
      cookieString += `; expires=${options.expires.toUTCString()}`;
    }

    cookieString += `; path=${options.path || '/'}`;

    if (options.domain) {
      cookieString += `; domain=${options.domain}`;
    }

    if (options.secure) {
      cookieString += '; Secure';
    }

    cookieString += `; SameSite=${options.sameSite || 'Lax'}`;

    document.cookie = cookieString;
  }

  /**
   * Get a cookie value
   */
  static getCookie(name: string): string | null {
    const nameEQ = encodeURIComponent(name) + '=';
    const cookies = document.cookie.split(';');

    for (let cookie of cookies) {
      cookie = cookie.trim();
      if (cookie.startsWith(nameEQ)) {
        return decodeURIComponent(cookie.substring(nameEQ.length));
      }
    }

    return null;
  }

  /**
   * Delete a cookie
   */
  static deleteCookie(name: string, options: Partial<CookieOptions> = {}): void {
    this.setCookie(name, '', {
      maxAge: -1,
      ...options,
    });
  }

  /**
   * Clear all cookies
   */
  static clearAllCookies(): void {
    document.cookie.split(';').forEach((cookie) => {
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substring(0, eqPos).trim() : cookie.trim();
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    });
  }

  /**
   * Check if cookies are enabled
   */
  static areCookiesEnabled(): boolean {
    const testCookie = '__test_cookie__';
    this.setCookie(testCookie, 'test', { maxAge: 1 });
    const result = this.getCookie(testCookie) === 'test';
    this.deleteCookie(testCookie);
    return result;
  }

  /**
   * Get all cookies as an object
   */
  static getAllCookies(): Record<string, string> {
    const cookies: Record<string, string> = {};
    document.cookie.split(';').forEach((cookie) => {
      const [name, value] = cookie.split('=');
      if (name && value) {
        cookies[decodeURIComponent(name.trim())] = decodeURIComponent(value.trim());
      }
    });
    return cookies;
  }
}

export default CookieManager;
