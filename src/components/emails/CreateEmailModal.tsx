import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload, X } from "lucide-react";

interface CreateEmailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreateEmailModal({
  open,
  onOpenChange,
}: CreateEmailModalProps) {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);

  const handleThumbnailClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        setThumbnail(file);
      }
    };
    input.click();
  };

  const handleSubmit = () => {
    console.log({ email, subject, message, thumbnail });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="bg-black/30" />
        <DialogContent
          hideClose
          className="max-w-[913px] gap-0 rounded-2xl border-0 bg-white p-0 shadow-none"
        >
          <div className="flex flex-col items-center gap-11 px-0 py-9">
            <div className="flex w-full flex-col items-center gap-8">
              <div className="flex w-full items-center justify-between px-[76px]">
                <h1 className="font-sans text-[32px] font-bold leading-normal tracking-[-0.114px] text-[#202224]">
                  Create Email
                </h1>
                <DialogClose asChild>
                  <button className="text-black transition-colors hover:text-gray-700">
                    <X className="h-[26px] w-[27px]" />
                  </button>
                </DialogClose>
              </div>
              <div className="h-px w-full bg-[#E0E0E0] opacity-50" />
            </div>

            <div className="flex w-[694px] flex-col items-end gap-7">
              <div className="w-full space-y-8">
                <div className="flex w-full flex-col items-start gap-5">
                  <label className="font-sans text-2xl font-bold leading-normal text-[#023337]">
                    Email
                  </label>
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-[60px] rounded-[11px] border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2.5 font-sans focus-visible:ring-offset-0"
                    placeholder=""
                  />
                </div>

                <div className="flex w-full flex-col items-start gap-5">
                  <label className="font-sans text-2xl font-bold leading-normal text-[#023337]">
                    Subject
                  </label>
                  <Input
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="h-[60px] rounded-[11px] border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2.5 font-sans focus-visible:ring-offset-0"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="flex flex-col w-full gap-4">
                <div className="flex flex-col gap-[10.5px]">
                  <label className="font-sans text-2xl font-bold leading-normal text-[#023337]">
                    Message
                  </label>
                </div>
                <div className="flex gap-7">
                  <Textarea
                    value={message} // This should be inside the div below
                    onChange={(e) => setMessage(e.target.value)} // This should be inside the div below
                    className="h-[249px] rounded-[11px] border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2.5 font-sans focus-visible:ring-offset-0" // This should be inside the div below
                    placeholder=""
                  />

                  <div className="flex h-[247px] w-full flex-col items-center justify-center gap-7 rounded-lg border border-dashed border-[#D5D5D5] bg-white px-11 py-[67px]">
                    <button
                      onClick={handleThumbnailClick}
                      className="flex flex-col items-center gap-7"
                    >
                      <Upload className="h-12 w-12 text-black" />
                      <div className="text-center font-sans text-sm leading-normal">
                        <span className="text-black">Thumbnail</span>
                        <br />
                        <span className="font-bold text-[#007BFF]">
                          Click to browse
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="flex h-[62px] w-full items-center justify-center gap-2.5 rounded-lg bg-[#06888C] px-[30px] py-3.5"
              >
                <span className="font-sans text-xl font-bold leading-normal text-white">
                  Send Email
                </span>
              </button>
            </div>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
