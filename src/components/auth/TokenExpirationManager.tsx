import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { tokenExpiration, TokenMetadata } from "@/lib/tokenExpiration";

export default function TokenExpirationManager() {
  const { token, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const warningShownRef = useRef(false);
  const expirationCheckRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!token) {
      warningShownRef.current = false;
      return;
    }

    const checkTokenExpiration = () => {
      const stored = localStorage.getItem("authToken");
      if (!stored) return;

      try {
        const metadata: TokenMetadata = JSON.parse(stored);

        // If token is expired, logout and redirect
        if (tokenExpiration.isTokenExpired(metadata.timestamp)) {
          logout("Token expired");
          toast({
            title: "Session Expired",
            description: "Your session has expired. Please log in again.",
            variant: "destructive",
          });
          navigate("/login", { replace: true });
          warningShownRef.current = false;
          return;
        }

        // Show warning at 11.5 hours (only once)
        if (
          tokenExpiration.shouldShowExpirationWarning(metadata.timestamp) &&
          !warningShownRef.current
        ) {
          warningShownRef.current = true;
          const remainingTime = tokenExpiration.getRemainingTimeFormatted(
            metadata.timestamp
          );

          toast({
            title: "Session Expiring Soon",
            description: `Your session will expire in ${remainingTime}. Please save your work.`,
            variant: "destructive",
          });
        }
      } catch (error) {
        console.error("Failed to check token expiration:", error);
      }
    };

    // Check immediately
    checkTokenExpiration();

    // Check every 30 seconds for expiration
    expirationCheckRef.current = setInterval(checkTokenExpiration, 30000);

    return () => {
      if (expirationCheckRef.current) {
        clearInterval(expirationCheckRef.current);
      }
    };
  }, [token, logout, navigate, toast]);

  // Listen for manual token expiration events from API interceptor
  useEffect(() => {
    const handleTokenExpired = () => {
      logout("Token expired from API");
      toast({
        title: "Session Expired",
        description: "Your session has expired. Please log in again.",
        variant: "destructive",
      });
      navigate("/login", { replace: true });
    };

    window.addEventListener("tokenExpired", handleTokenExpired);
    return () => window.removeEventListener("tokenExpired", handleTokenExpired);
  }, [logout, navigate, toast]);

  return null;
}
