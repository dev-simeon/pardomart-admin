import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { authApi } from "@/lib/apiClient";
import { AuthInitiateLoginPostRequestRoleEnum } from "../../api/models";

export default function Login() {
  const navigate = useNavigate();
  const { token } = useAuth();
  const { toast } = useToast();
  const [mobileNumber, setMobileNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validateMobileNumber = (phone: string): boolean => {
    const phoneRegex = /^[\d+\-\s()]{10,}$/;
    return phoneRegex.test(phone.replace(/\s/g, ""));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!mobileNumber.trim()) {
      const errorMsg = "Please enter your mobile number";
      setError(errorMsg);
      toast({
        title: "Validation Error",
        description: errorMsg,
        variant: "destructive",
      });
      return;
    }

    if (!validateMobileNumber(mobileNumber)) {
      const errorMsg = "Please enter a valid mobile number (at least 10 digits)";
      setError(errorMsg);
      toast({
        title: "Invalid Mobile Number",
        description: errorMsg,
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const response = await authApi.authInitiateLoginPost({
        mobileNumber: mobileNumber.replace(/\s/g, ""),
        role: AuthInitiateLoginPostRequestRoleEnum.Admin,
      });

      if (response.data.success) {
        toast({
          title: "Verification Code Sent",
          description: "Please check your mobile for the verification code.",
        });
        navigate("/verify-otp", { state: { mobileNumber: mobileNumber.replace(/\s/g, "") } });
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "Failed to send verification code. Please try again.";
      setError(errorMessage);
      toast({
        title: "Authentication Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (token) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F5F6FA] px-4 py-12">
      <div className="relative w-full max-w-[540px]">
        <div className="absolute inset-0 rounded-[6px] bg-white shadow-[0_1px_4px_0_rgba(21,34,50,0.08)]" />
        <div className="relative px-[60px] py-12">
          <div className="flex flex-col items-center gap-2 mb-10">
            <h1 className="text-[32px] font-bold leading-[44px] text-[#131523] font-sans">
              Sign In
            </h1>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm leading-5 text-[#5A607F] font-sans">
                Mobile Number
              </label>
              <input
                type="tel"
                placeholder="Enter Mobile Number"
                value={mobileNumber}
                onChange={(e) => {
                  setMobileNumber(e.target.value);
                  setError("");
                }}
                disabled={loading}
                autoComplete="tel"
                className={`h-12 w-full rounded-[4px] border ${
                  error ? "border-red-500" : "border-[#D9E1EC]"
                } bg-white px-4 text-base leading-6 text-[#131523] placeholder:text-[#A1A7C4] font-sans focus:outline-none focus:ring-2 ${
                  error ? "focus:ring-red-500" : "focus:ring-[#06888C]"
                } focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed`}
              />
              {error && (
                <p className="text-sm text-red-500 mt-1 font-sans">{error}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full h-12 rounded-[4px] bg-[#06888C] text-white text-base leading-6 font-sans hover:bg-[#05777a] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? "Sending Code..." : "Send Verification Code"}
            </button>
          </form>
          <div className="mt-8">
            <div className="flex flex-col items-center justify-center gap-1">
              <p className="text-sm leading-5 text-[#5A607F] text-center font-sans">
                A verification code will be sent to your
              </p>
              <p className="text-sm leading-5 text-[#5A607F] text-center font-sans">
                registered mobile number
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
