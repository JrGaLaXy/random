/**
 * Local Storage Manager Utility
 * Handles all localStorage operations with type safety
 */

export interface StorageItem {
  value: any;
  timestamp: number;
  expiresIn?: number; // in milliseconds
}

class LocalStorageManager {
  private prefix = 'museji_';

  /**
   * Set an item in localStorage with optional expiration
   */
  setItem(key: string, value: any, expiresInMs?: number): void {
    try {
      const item: StorageItem = {
        value,
        timestamp: Date.now(),
        expiresIn: expiresInMs,
      };
      localStorage.setItem(this.prefix + key, JSON.stringify(item));
    } catch (error) {
      console.error(`Failed to set localStorage item "${key}":`, error);
    }
  }

  /**
   * Get an item from localStorage
   */
  getItem(key: string): any {
    try {
      const data = localStorage.getItem(this.prefix + key);
      if (!data) return null;

      const item: StorageItem = JSON.parse(data);

      // Check if item has expired
      if (item.expiresIn && Date.now() - item.timestamp > item.expiresIn) {
        this.removeItem(key);
        return null;
      }

      return item.value;
    } catch (error) {
      console.error(`Failed to get localStorage item "${key}":`, error);
      return null;
    }
  }

  /**
   * Remove an item from localStorage
   */
  removeItem(key: string): void {
    try {
      localStorage.removeItem(this.prefix + key);
    } catch (error) {
      console.error(`Failed to remove localStorage item "${key}":`, error);
    }
  }

  /**
   * Clear all app-specific items from localStorage
   */
  clear(): void {
    try {
      const keysToRemove: string[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(this.prefix)) {
          keysToRemove.push(key);
        }
      }
      keysToRemove.forEach((key) => localStorage.removeItem(key));
    } catch (error) {
      console.error('Failed to clear localStorage:', error);
    }
  }

  /**
   * Check if localStorage is available
   */
  isAvailable(): boolean {
    try {
      const test = '__test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Get all app-specific items
   */
  getAll(): Record<string, any> {
    const items: Record<string, any> = {};
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(this.prefix)) {
          const cleanKey = key.replace(this.prefix, '');
          items[cleanKey] = this.getItem(cleanKey);
        }
      }
    } catch (error) {
      console.error('Failed to get all localStorage items:', error);
    }
    return items;
  }
}

export default new LocalStorageManager();
