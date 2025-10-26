import { useState } from "react";
import { EyeOff, Calendar } from "lucide-react";

export function ProfileUpdateForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col items-start gap-2.5 p-5 rounded-lg bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.20)] h-full">
      <div className="flex flex-col items-center gap-10 w-full">
        <div className="flex flex-col items-start gap-10 w-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 w-full">
            <h2 className="text-[#23272E] font-sans text-lg font-bold leading-[26px]">
              Profile Update
            </h2>
            <button className="flex w-[84px] h-8 px-2 sm:px-3 justify-center items-center gap-2 rounded-md border border-[#E5E7EB] hover:bg-[#F9FAFB] transition-colors">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.30695 2.72948H3.95678C2.51526 2.72948 1.34668 3.89806 1.34668 5.33958V14.04C1.34668 15.4815 2.51526 16.6501 3.95678 16.6501H12.6571C14.0986 16.6501 15.2672 15.4815 15.2672 14.04L15.2672 9.68978M5.69685 12.2998L8.86231 11.662C9.03035 11.6282 9.18465 11.5454 9.30583 11.4242L16.392 4.33409C16.7318 3.99416 16.7315 3.44315 16.3915 3.1035L14.8904 1.60409C14.5505 1.26458 13.9998 1.26481 13.6602 1.60461L6.57323 8.69542C6.45229 8.81643 6.36971 8.97041 6.33582 9.13811L5.69685 12.2998Z"
                  stroke="#6A717F"
                  strokeWidth="1.45006"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[#4B5563] font-sans text-[15px] font-normal leading-normal">
                Edit
              </span>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex justify-center items-center w-16 h-16 rounded-full">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/11fa9a8fb4f70ca8c4a8ad7c79c225783d2c6b79?width=128"
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <div className="flex items-center gap-3">
              <button className="flex w-[120px] h-[42px] px-2.5 justify-center items-center gap-2.5 rounded-lg bg-[#06888C] hover:bg-[#057275] transition-colors">
                <span className="text-white font-lato text-[15px] font-bold leading-normal">
                  Upload New
                </span>
              </button>
              <button className="flex w-[120px] h-[42px] px-2.5 justify-center items-center gap-2.5 rounded-lg border border-[#E5E7EB] hover:bg-[#F9FAFB] transition-colors">
                <span className="text-[#4B5563] font-lato text-[15px] font-bold leading-normal">
                  Delete
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start gap-10 w-full max-w-[662px]">
          <div className="flex flex-col lg:flex-row items-start gap-5 w-full">
            <div className="flex flex-col items-start gap-3 flex-1 w-full">
              <label className="text-[#023337] font-sans text-[15px] font-normal leading-normal">
                First Name
              </label>
              <div className="flex h-12 px-3 items-center gap-1 w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB]">
                <input
                  type="text"
                  defaultValue="Jonathan"
                  className="flex-1 bg-transparent text-[#023337] font-sans text-[15px] font-semibold leading-normal outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col items-start gap-3 flex-1 w-full">
              <label className="text-[#023337] font-sans text-[15px] font-normal leading-normal">
                Last Name
              </label>
              <div className="flex h-12 px-3 items-center gap-1 w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB]">
                <input
                  type="text"
                  defaultValue="Smith"
                  className="flex-1 bg-transparent text-[#023337] font-sans text-[15px] font-semibold leading-normal outline-none"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-5 w-full">
            <div className="flex flex-col items-start gap-3 flex-1 w-full">
              <label className="text-[#023337] font-sans text-[15px] font-normal leading-normal">
                Password
              </label>
              <div className="flex h-12 px-3 items-center gap-1 w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB]">
                <input
                  type={showPassword ? "text" : "password"}
                  defaultValue="***********"
                  className="flex-1 bg-transparent text-[#023337] font-sans text-[15px] font-bold leading-normal outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="w-5 h-5 flex-shrink-0"
                >
                  <EyeOff className="w-5 h-5 text-[#6A717F]" />
                </button>
              </div>
            </div>
            <div className="flex flex-col items-start gap-3 flex-1 w-full">
              <label className="text-[#023337] font-sans text-[15px] font-normal leading-normal">
                Phone Number
              </label>
              <div className="flex h-12 px-3 items-center gap-1 w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB]">
                <input
                  type="text"
                  defaultValue="+ 442 098-4278"
                  className="flex-1 bg-transparent text-[#023337] font-sans text-[15px] font-semibold leading-normal outline-none"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-5 w-full">
            <div className="flex flex-col items-start gap-3 flex-1 w-full">
              <label className="text-[#023337] font-sans text-[15px] font-normal leading-normal">
                E-mail
              </label>
              <div className="flex h-12 px-3 items-center gap-1 w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB]">
                <input
                  type="email"
                  defaultValue="Jonathansmith@gmail.com"
                  className="flex-1 bg-transparent text-[#023337] font-sans text-[15px] font-semibold leading-normal outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col items-start gap-3 flex-1 w-full">
              <label className="text-[#023337] font-sans text-[15px] font-normal leading-normal">
                Date of Birth
              </label>
              <div className="flex h-12 px-3 items-center gap-1 w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB]">
                <input
                  type="text"
                  defaultValue="12- January- 1999"
                  className="flex-1 bg-transparent text-[#023337] font-sans text-[15px] font-semibold leading-normal outline-none"
                />
                <Calendar className="w-5 h-5 text-[#023337] flex-shrink-0" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-3 w-full">
            <label className="text-[#023337] font-lato text-[15px] font-normal leading-normal">
              Address
            </label>
            <div className="flex h-12 px-3 items-center gap-1 w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB]">
              <input
                type="text"
                defaultValue="Chicago 23407, New York"
                className="flex-1 bg-transparent text-[#023337] font-sans text-[15px] font-semibold leading-normal outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
