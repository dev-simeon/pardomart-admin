interface EmailPreviewHeaderProps {
  senderEmail: string;
}

export function EmailPreviewHeader({ senderEmail }: EmailPreviewHeaderProps) {
  const initial = senderEmail.charAt(0).toUpperCase();

  return (
    <div className="flex w-full items-center gap-3 rounded-xl border border-[#D5D5D5] bg-[#FBFCFF] px-4 py-5 sm:gap-3.5 sm:px-6 sm:py-7 md:px-10">
      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#A3C8FF] sm:h-9 sm:w-9">
        <span className="font-nunito text-lg font-bold leading-normal text-[#1235E3] sm:text-xl">
          {initial}
        </span>
      </div>
      <span className="break-all font-sans text-base font-bold leading-[27px] text-[#2E2E2E] sm:text-lg md:text-xl">
        {senderEmail}
      </span>
    </div>
  );
}
