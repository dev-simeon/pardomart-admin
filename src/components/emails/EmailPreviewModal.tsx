import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogPortal,
  DialogOverlay,
} from "@/components/ui/dialog";
import { EmailPreviewHeader } from "./EmailPreviewHeader";
import { EmailPreviewContent } from "./EmailPreviewContent";
import { Email } from "@/pages/EmailMarketing";

interface EmailPreviewModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  email:
    | Email
    | {
        senderEmail: string;
        subject: string;
        email: string;
        date: string;
        content: string;
      };
}

export function EmailPreviewModal({
  open,
  onOpenChange,
  email,
}: EmailPreviewModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="bg-black/30 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogContent
          hideClose
          className="max-h-[90vh] max-w-[90vw] gap-0 overflow-y-auto rounded-2xl border-none bg-white p-0 sm:max-w-[600px] md:max-w-[700px] lg:max-w-[828px]"
        >
          <div className="flex flex-col items-end gap-6 px-6 py-8 sm:gap-8 sm:px-10 sm:py-10 md:gap-[38px] md:px-[72px] md:py-[51px]">
            <div className="relative flex w-full items-start justify-between">
              <h2 className="font-sans text-xl font-bold leading-normal text-black sm:text-2xl">
                Email Preview
              </h2>
              <button
                onClick={() => onOpenChange(false)}
                className="absolute -right-1 top-0 flex h-6 w-6 items-center justify-center text-black transition-colors hover:text-gray-600 sm:-right-2"
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} />
                <span className="sr-only">Close</span>
              </button>
            </div>

            <EmailPreviewHeader senderEmail={email.email} />

            <EmailPreviewContent
              subject={email.subject}
              date={email.date}
              content={email.content}
            />

            <button className="flex w-full items-center justify-center gap-2.5 rounded-lg bg-[#06888C] px-6 py-3 transition-colors hover:bg-[#06888C]/90 sm:w-auto sm:px-[30px]">
              <span className="font-sans text-lg font-bold leading-normal text-white sm:text-xl">
                Send Email
              </span>
            </button>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
