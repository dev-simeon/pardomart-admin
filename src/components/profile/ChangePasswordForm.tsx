import { useState } from "react";
import { EyeOff } from "lucide-react";

export function ChangePasswordForm() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showReenterPassword, setShowReenterPassword] = useState(false);

  return (
    <div className="flex flex-col items-start gap-5 p-4 rounded-lg bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.20)]">
      <h2 className="text-[#23272E] font-sans text-lg font-bold leading-[26px]">
        Change Password
      </h2>
      
      <div className="flex flex-col items-start gap-3 w-full">
        <label className="text-[#023337] font-sans text-[15px] font-normal leading-normal">
          Current Password
        </label>
        <div className="flex h-12 px-3 items-center gap-1 w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB]">
          <input
            type={showCurrentPassword ? "text" : "password"}
            placeholder="Enter password"
            className="flex-1 bg-transparent text-[#6A717F] font-sans text-sm font-normal leading-normal outline-none placeholder:text-[#6A717F]"
          />
          <button
            type="button"
            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
            className="w-5 h-5 flex-shrink-0"
          >
            <EyeOff className="w-5 h-5 text-[#6A717F]" />
          </button>
        </div>
      </div>

      <a href="#" className="text-[#06888C] font-lato text-sm font-normal leading-normal hover:underline">
        Forgot Current Password? Click here
      </a>

      <div className="flex flex-col items-start gap-3 w-full">
        <label className="text-[#023337] font-sans text-[15px] font-normal leading-normal">
          New Password
        </label>
        <div className="flex h-12 px-3 items-center gap-1 w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB]">
          <input
            type={showNewPassword ? "text" : "password"}
            placeholder="Enter password"
            className="flex-1 bg-transparent text-[#6A717F] font-sans text-sm font-normal leading-normal outline-none placeholder:text-[#6A717F]"
          />
          <button
            type="button"
            onClick={() => setShowNewPassword(!showNewPassword)}
            className="w-5 h-5 flex-shrink-0"
          >
            <EyeOff className="w-5 h-5 text-[#6A717F]" />
          </button>
        </div>
      </div>

      <div className="flex flex-col items-start gap-3 w-full">
        <label className="text-[#023337] font-sans text-[15px] font-normal leading-normal">
          Re-enter Password
        </label>
        <div className="flex h-12 px-3 items-center gap-1 w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB]">
          <input
            type={showReenterPassword ? "text" : "password"}
            placeholder="Enter password"
            className="flex-1 bg-transparent text-[#6A717F] font-sans text-sm font-normal leading-normal outline-none placeholder:text-[#6A717F]"
          />
          <button
            type="button"
            onClick={() => setShowReenterPassword(!showReenterPassword)}
            className="w-5 h-5 flex-shrink-0"
          >
            <EyeOff className="w-5 h-5 text-[#6A717F]" />
          </button>
        </div>
      </div>

      <button className="flex h-[42px] px-3 justify-center items-center gap-1 w-full rounded-lg bg-[#06888C] hover:bg-[#057275] transition-colors">
        <span className="text-white font-sans text-[15px] font-bold leading-normal">
          Save Change
        </span>
      </button>
    </div>
  );
}
