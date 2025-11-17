import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from "react";
import { User } from "../../api-client/models";
import { axiosInstance as api } from "@/lib/apiClient";
import { tokenExpiration, TokenMetadata } from "@/lib/tokenExpiration";

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (user: User | null, token: string) => void;
  logout: (reason?: string) => void;
  loading: boolean;
  isTokenExpired: boolean;
  clearExpiredToken: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [isTokenExpired, setIsTokenExpired] = useState(false);

  const clearExpiredToken = useCallback(() => {
    setUser(null);
    setToken(null);
    setIsTokenExpired(true);
    tokenExpiration.clearToken();
    delete api.defaults.headers.common["Authorization"];
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("authToken");

    if (stored) {
      try {
        const metadata: TokenMetadata = JSON.parse(stored);
        const retrievedToken = metadata.token;

        // Check if token is expired on app load
        if (tokenExpiration.isTokenExpired(metadata.timestamp)) {
          clearExpiredToken();
          setLoading(false);
          return;
        }

        setToken(retrievedToken);
        api.defaults.headers.common["Authorization"] =
          `Bearer ${retrievedToken}`;

        // Load user data if available
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          try {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
          } catch (error) {
            console.error("Failed to parse stored user:", error);
            localStorage.removeItem("user");
          }
        }
      } catch (error) {
        console.error("Failed to parse token metadata:", error);
        clearExpiredToken();
      }
    }
    setLoading(false);
  }, [clearExpiredToken]);

  // Check token expiration periodically (every minute)
  useEffect(() => {
    if (!token) return;

    const interval = setInterval(() => {
      const stored = localStorage.getItem("authToken");
      if (!stored) {
        clearExpiredToken();
        return;
      }

      try {
        const metadata: TokenMetadata = JSON.parse(stored);

        if (tokenExpiration.isTokenExpired(metadata.timestamp)) {
          clearExpiredToken();
        }
      } catch (error) {
        console.error("Failed to check token expiration:", error);
        clearExpiredToken();
      }
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [token, clearExpiredToken]);

  const login = (loggedInUser: User | null, authToken: string) => {
    tokenExpiration.saveToken(authToken);
    setToken(authToken);
    setIsTokenExpired(false);

    if (loggedInUser) {
      setUser(loggedInUser);
      localStorage.setItem("user", JSON.stringify(loggedInUser));
    }

    api.defaults.headers.common["Authorization"] = `Bearer ${authToken}`;
  };

  const logout = (reason?: string) => {
    setUser(null);
    setToken(null);
    setIsTokenExpired(false);
    tokenExpiration.clearToken();
    delete api.defaults.headers.common["Authorization"];

    if (reason) {
      console.log("Logout reason:", reason);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        loading,
        isTokenExpired,
        clearExpiredToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
