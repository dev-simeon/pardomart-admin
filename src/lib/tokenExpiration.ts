const TOKEN_EXPIRATION_MS = 12 * 60 * 60 * 1000; // 12 hours in milliseconds
const EXPIRATION_WARNING_MS = 11.5 * 60 * 60 * 1000; // 11.5 hours - warn before expiration

export interface TokenMetadata {
  token: string;
  timestamp: number;
}

export const tokenExpiration = {
  /**
   * Store token with timestamp for expiration tracking
   */
  saveToken: (token: string): void => {
    const metadata: TokenMetadata = {
      token,
      timestamp: Date.now(),
    };
    localStorage.setItem("authToken", JSON.stringify(metadata));
  },

  /**
   * Get the stored token (returns null if expired or not found)
   */
  getToken: (): string | null => {
    const stored = localStorage.getItem("authToken");
    if (!stored) return null;

    try {
      const metadata: TokenMetadata = JSON.parse(stored);
      if (tokenExpiration.isTokenExpired(metadata.timestamp)) {
        tokenExpiration.clearToken();
        return null;
      }
      return metadata.token;
    } catch (error) {
      console.error("Failed to parse token metadata:", error);
      tokenExpiration.clearToken();
      return null;
    }
  },

  /**
   * Check if token has expired (absolute 12h expiration)
   */
  isTokenExpired: (timestamp: number): boolean => {
    const now = Date.now();
    const ageMs = now - timestamp;
    return ageMs > TOKEN_EXPIRATION_MS;
  },

  /**
   * Check if token should show expiration warning (at 11.5 hours)
   */
  shouldShowExpirationWarning: (timestamp: number): boolean => {
    const now = Date.now();
    const ageMs = now - timestamp;
    return ageMs > EXPIRATION_WARNING_MS && ageMs <= TOKEN_EXPIRATION_MS;
  },

  /**
   * Get remaining time in milliseconds
   */
  getRemainingTime: (timestamp: number): number => {
    const now = Date.now();
    const ageMs = now - timestamp;
    const remaining = TOKEN_EXPIRATION_MS - ageMs;
    return Math.max(0, remaining);
  },

  /**
   * Get remaining time formatted as readable string (e.g., "30 minutes left")
   */
  getRemainingTimeFormatted: (timestamp: number): string => {
    const remainingMs = tokenExpiration.getRemainingTime(timestamp);
    const remainingMinutes = Math.floor(remainingMs / (60 * 1000));
    const remainingHours = Math.floor(remainingMinutes / 60);

    if (remainingHours > 0) {
      return `${remainingHours} hour${remainingHours > 1 ? "s" : ""} left`;
    }
    return `${remainingMinutes} minute${remainingMinutes > 1 ? "s" : ""} left`;
  },

  /**
   * Clear the token from storage
   */
  clearToken: (): void => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },
};
