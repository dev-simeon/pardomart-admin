import { Upload, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface CreateEmailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const UploadIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 32V15.7L16.8 20.9L14 18L24 8L34 18L31.2 20.9L26 15.7V32H22ZM12 40C10.9 40 9.95867 39.6087 9.176 38.826C8.39333 38.0433 8.00133 37.1013 8 36V30H12V36H36V30H40V36C40 37.1 39.6087 38.042 38.826 38.826C38.0433 39.61 37.1013 40.0013 36 40H12Z"
      fill="black"
    />
  </svg>
);

export function CreateEmailModal({
  open,
  onOpenChange,
}: CreateEmailModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="bg-black/30" />
        <DialogContent className="flex h-[860px] max-w-[913px] flex-col items-start gap-2.5 rounded-2xl bg-white px-0 py-9">
          <div className="flex w-full flex-col items-center gap-11">
            <div className="flex w-full flex-col items-center gap-8 px-[76px]">
              <div className="flex w-full items-center justify-between">
                <h2 className="font-sans text-[32px] font-bold leading-normal tracking-[-0.114px] text-[#202224]">
                  Create Email
                </h2>
                <button
                  onClick={() => onOpenChange(false)}
                  className="flex h-[26.057px] w-[26.853px] items-center justify-center"
                >
                  <svg
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.8529 2.62433L24.1485 0L13.4265 10.4042L2.70447 0L0 2.62433L10.722 13.0286L0 23.4328L2.70447 26.0571L13.4265 15.6529L24.1485 26.0571L26.8529 23.4328L16.1309 13.0286L26.8529 2.62433Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>

              <div className="h-px w-full bg-[#E0E0E0] opacity-50" />
            </div>

            <div className="flex w-[694px] flex-col items-end gap-7">
              <div className="flex w-full flex-col gap-8">
                <div className="flex w-full flex-col gap-5">
                  <label className="font-sans text-2xl font-bold leading-normal text-[#023337]">
                    Email
                  </label>
                  <Input
                    className="h-[60px] rounded-[11px] border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2.5"
                    placeholder=""
                  />
                </div>

                <div className="flex w-full flex-col gap-5">
                  <label className="font-sans text-2xl font-bold leading-normal text-[#023337]">
                    Subject
                  </label>
                  <Input
                    className="h-[60px] rounded-[11px] border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2.5"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="flex w-full gap-4">
                <div className="flex flex-1 flex-col gap-[10px]">
                  <label className="font-sans text-2xl font-bold leading-normal text-[#023337]">
                    Message
                  </label>
                  <Textarea
                    className="h-[249px] resize-none rounded-[11px] border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2.5"
                    placeholder=""
                  />
                </div>

                <div className="flex flex-col gap-[10px]">
                  <div className="h-[26px]" />
                  <div className="flex h-[247px] w-[250px] flex-col items-center justify-center gap-7 rounded-lg border border-dashed border-[#E5E7EB] bg-white px-11 py-[67px]">
                    <UploadIcon />
                    <div className="text-center font-sans text-sm leading-normal">
                      <span className="font-normal text-black">
                        Thumbnail
                        <br />
                      </span>
                      <span className="font-bold text-[#007BFF]">
                        Click to browse{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <button className="flex h-[62px] w-full items-center justify-center gap-2.5 rounded-lg bg-[#06888C] px-[30px] py-3.5">
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
