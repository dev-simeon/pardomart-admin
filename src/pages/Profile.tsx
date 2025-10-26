import { ProfileCard } from "@/components/profile/ProfileCard";
import { ChangePasswordForm } from "@/components/profile/ChangePasswordForm";
import { ProfileUpdateForm } from "@/components/profile/ProfileUpdateForm";

export default function Profile() {
  return (
    <div className="flex flex-col xl:flex-row items-start gap-[13px]">
      <div className="w-full xl:w-[360px] flex flex-col gap-[13px]">
        <ProfileCard />
        <ChangePasswordForm />
      </div>
      <div className="w-full xl:flex-1 h-full">
        <ProfileUpdateForm />
      </div>
    </div>
  );
}
