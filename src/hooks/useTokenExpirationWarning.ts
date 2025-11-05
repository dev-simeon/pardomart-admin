import { useEffect, useRef } from "react";
import { useToast } from "./use-toast";
import { useAuth } from "./useAuth";
import { tokenExpiration, TokenMetadata } from "@/lib/tokenExpiration";

export const useTokenExpirationWarning = () => {
  const { toast } = useToast();
  const { token } = useAuth();
  const warningShownRef = useRef(false);

  useEffect(() => {
    if (!token) {
      warningShownRef.current = false;
      return;
    }

    const checkExpiration = () => {
      const stored = localStorage.getItem("authToken");
      if (!stored) return;

      try {
        const metadata: TokenMetadata = JSON.parse(stored);

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
        console.error("Failed to check token expiration warning:", error);
      }
    };

    // Check immediately and then every 30 seconds
    checkExpiration();
    const interval = setInterval(checkExpiration, 30000);

    return () => clearInterval(interval);
  }, [token, toast]);
};
