import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateAccount() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  const handleGoogleSignIn = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F5F6FA] px-4 py-12">
      <div className="relative w-full max-w-[540px]">
        <div className="absolute inset-0 rounded-[6px] bg-white shadow-[0_1px_4px_0_rgba(21,34,50,0.08)]" />

        <div className="relative px-[60px] py-12">
          <div className="flex flex-col items-center gap-2 mb-10">
            <h1 className="text-[32px] font-bold leading-[44px] text-[#131523] font-sans">
              Create an Account
            </h1>

            <div className="flex items-center gap-[9px] h-6">
              <span className="text-base leading-6 text-[#5A607F] font-sans">
                Have an Account?
              </span>
              <span className="text-base leading-6 text-[#06888C] font-sans cursor-pointer hover:underline">
                Sign In
              </span>
            </div>
          </div>

          <form onSubmit={handleCreateAccount} className="space-y-6">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm leading-5 text-[#5A607F] font-sans">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 w-full rounded-[4px] border border-[#D9E1EC] bg-white px-4 text-base leading-6 text-[#131523] placeholder:text-[#A1A7C4] font-sans focus:outline-none focus:ring-2 focus:ring-[#06888C] focus:border-transparent"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm leading-5 text-[#5A607F] font-sans">
                Password
              </label>
              <input
                type="password"
                placeholder="Create Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 w-full rounded-[4px] border border-[#D9E1EC] bg-white px-4 text-base leading-6 text-[#131523] placeholder:text-[#A1A7C4] font-sans focus:outline-none focus:ring-2 focus:ring-[#06888C] focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full h-12 rounded-[4px] bg-[#06888C] text-white text-base leading-6 font-sans hover:bg-[#05777a] transition-colors"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 flex flex-col items-center gap-1">
            <p className="text-sm leading-5 text-center text-[#5A607F] font-sans">
              By creating account, you agree to our
            </p>
            <p className="text-sm leading-5 text-center text-[#06888C] font-sans cursor-pointer hover:underline">
              Terms of Service
            </p>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-px bg-[#D7DBEC]" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-sm leading-5 text-[#5A607F] font-sans">
                Or create an account using:
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full h-12 rounded-[4px] border border-[#D7DBEC] bg-white flex items-center justify-center gap-3 hover:bg-[#F5F6FA] transition-colors"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 11H12V14H17C16.2579 16.0956 14.3503 17.4 12 17.4C9.01785 17.4 6.6 14.9822 6.6 12C6.6 9.01785 9.01785 6.6 12 6.6C13.3765 6.6 14.6289 7.1193 15.5824 7.96755L18.1281 5.4219C16.5207 3.92385 14.3706 3 12 3C7.02975 3 3 7.02975 3 12C3 16.9703 7.02975 21 12 21C16.9703 21 21 16.9703 21 12C21 11.3966 21 11 21 11Z"
                fill="#FFC107"
              />
              <path
                d="M4 7.82508L6.93798 10C7.73295 8.01328 9.65821 6.61057 11.9112 6.61057C13.2789 6.61057 14.5232 7.1314 15.4707 7.98214L18 5.42901C16.4029 3.92656 14.2666 3 11.9112 3C8.47649 3 5.49783 4.95738 4 7.82508Z"
                fill="#FF3D00"
              />
              <path
                d="M11.9858 21C14.3029 21 16.4082 20.1321 18 18.7208L15.2237 16.4214C14.3231 17.0891 13.2036 17.4881 11.9858 17.4881C9.65266 17.4881 7.67156 16.032 6.92523 14L4 16.2059C5.48459 19.0492 8.49952 21 11.9858 21Z"
                fill="#4CAF50"
              />
              <path
                d="M21 11L12 11V14H17C16.6436 14.9505 15.8352 15.403 15 16L18 19C17.8029 19.1691 21 16.7489 21 12.5C21 11.9302 21 11 21 11Z"
                fill="#1976D2"
              />
            </svg>
            <span className="text-base leading-6 text-[#06888C] font-sans">
              Continue with Google
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
