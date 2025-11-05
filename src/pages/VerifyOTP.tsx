import { useState, useEffect } from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { authApi } from "@/lib/apiClient";
import { AuthVerifyLoginPostRequestRoleEnum } from "../../api/models";
import OTPInput from "@/components/auth/OTPInput";

export default function VerifyOTP() {
  const navigate = useNavigate();
  const location = useLocation();
  const { token, login } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(60);
  const [error, setError] = useState("");

  const mobileNumber = location.state?.mobileNumber;

  useEffect(() => {
    if (!mobileNumber) {
      navigate("/login", { replace: true });
      return;
    }

    const timer = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [mobileNumber, navigate]);

  const handleOTPComplete = async (verificationCode: string) => {
    if (verificationCode.length !== 6) {
      const errorMsg = "Please enter a valid 6-digit code";
      setError(errorMsg);
      toast({
        title: "Invalid Code",
        description: errorMsg,
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await authApi.authVerifyLoginPost({
        mobileNumber,
        verificationCode,
        role: AuthVerifyLoginPostRequestRoleEnum.Admin,
      });

      const data = response.data as any;

      if (data?.token && data?.user) {
        login(data.user, data.token);
        toast({
          title: "Login Successful",
          description: "Welcome back to your admin dashboard!",
        });
        navigate("/dashboard", { replace: true });
      } else if (data?.success === true) {
        toast({
          title: "Verification Successful",
          description: "Your verification was successful. Redirecting...",
        });
        navigate("/dashboard", { replace: true });
      } else {
        throw new Error("Unexpected response format from verification endpoint");
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Invalid verification code. Please try again.";
      setError(errorMessage);
      toast({
        title: "Verification Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async () => {
    if (resendTimer > 0 || resendLoading) return;

    setResendLoading(true);
    setError("");

    try {
      const response = await authApi.authInitiateLoginPost({
        mobileNumber,
        role: AuthVerifyLoginPostRequestRoleEnum.Admin,
      });

      if (response.data.success) {
        toast({
          title: "Code Resent",
          description: "A new verification code has been sent to your mobile.",
        });
        setResendTimer(60);
      } else {
        throw new Error("Failed to resend code");
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Failed to resend code. Please try again.";
      setError(errorMessage);
      toast({
        title: "Resend Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setResendLoading(false);
    }
  };

  const handleBackToLogin = () => {
    if (loading || resendLoading) return;
    navigate("/login", { replace: true });
  };

  if (token) {
    return <Navigate to="/dashboard" replace />;
  }

  if (!mobileNumber) {
    return null;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F5F6FA] px-4 py-12">
      <div className="relative w-full max-w-[540px]">
        <div className="absolute inset-0 rounded-[6px] bg-white shadow-[0_1px_4px_0_rgba(21,34,50,0.08)]" />
        <div className="relative px-[60px] py-12">
          <div className="flex flex-col items-center gap-2 mb-10">
            <h1 className="text-[32px] font-bold leading-[44px] text-[#131523] font-sans text-center">
              Verify Your Account
            </h1>
            <div className="flex flex-col items-center gap-1 mt-2">
              <p className="text-base leading-6 text-[#5A607F] text-center font-sans">
                Enter the 6-digit code sent to
              </p>
              <p className="text-base leading-6 text-[#131523] font-semibold text-center font-sans">
                {mobileNumber}
              </p>
            </div>
          </div>

          {error && (
            <div className="mb-6 p-3 rounded-[4px] bg-red-50 border border-red-200">
              <p className="text-sm text-red-700 font-sans text-center">{error}</p>
            </div>
          )}

          <div className="mb-8">
            <OTPInput onComplete={handleOTPComplete} disabled={loading} />
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="text-sm leading-5 text-[#5A607F] text-center font-sans">
              {resendTimer > 0 ? (
                <span>Resend code in {resendTimer}s</span>
              ) : (
                <button
                  onClick={handleResendCode}
                  disabled={resendLoading || loading}
                  className="text-[#06888C] hover:underline disabled:opacity-50 disabled:cursor-not-allowed font-sans transition-colors"
                >
                  {resendLoading ? "Sending..." : "Resend Code"}
                </button>
              )}
            </div>

            <button
              onClick={handleBackToLogin}
              disabled={loading || resendLoading}
              className="text-sm leading-5 text-[#5A607F] hover:text-[#06888C] transition-colors font-sans disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ← Back to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
