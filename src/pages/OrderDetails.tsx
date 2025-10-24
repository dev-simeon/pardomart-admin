import { useNavigate } from "react-router-dom";
import { ArrowLeft, MessageSquare, Phone, Edit } from "lucide-react";

const CheckIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 17.5C10.9849 17.5 11.9602 17.306 12.8701 16.9291C13.7801 16.5522 14.6069 15.9997 15.3033 15.3033C15.9997 14.6069 16.5522 13.7801 16.9291 12.8701C17.306 11.9602 17.5 10.9849 17.5 10C17.5 9.01509 17.306 8.03982 16.9291 7.12987C16.5522 6.21993 15.9997 5.39314 15.3033 4.6967C14.6069 4.00026 13.7801 3.44781 12.8701 3.0709C11.9602 2.69399 10.9849 2.5 10 2.5C8.01088 2.5 6.10322 3.29018 4.6967 4.6967C3.29018 6.10322 2.5 8.01088 2.5 10C2.5 11.9891 3.29018 13.8968 4.6967 15.3033C6.10322 16.7098 8.01088 17.5 10 17.5ZM9.80667 13.0333L13.9733 8.03333L12.6933 6.96667L9.11 11.2658L7.25583 9.41083L6.0775 10.5892L8.5775 13.0892L9.2225 13.7342L9.80667 13.0333Z"
      fill="#088034"
    />
  </svg>
);

const CheckedCardIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 1.875C5.5 1.875 1.875 5.5 1.875 10C1.875 14.5 5.5 18.125 10 18.125C14.5 18.125 18.125 14.5 18.125 10C18.125 9.125 18.0075 8.25375 17.695 7.44125L16.68 8.4375C16.805 8.9375 16.8756 9.4375 16.8756 10C16.8756 13.8125 13.8131 16.875 10.0006 16.875C6.18812 16.875 3.125 13.8125 3.125 10C3.125 6.1875 6.1875 3.125 10 3.125C11.875 3.125 13.5588 3.87125 14.7463 5.05875L15.625 4.18C14.1875 2.7425 12.1875 1.875 10 1.875ZM17.05 4.55L10 11.6019L7.325 8.92688L6.425 9.825L9.55 12.95L10 13.3787L10.45 12.9494L17.95 5.44937L17.05 4.54937V4.55Z"
      fill="#21C45D"
    />
  </svg>
);

export default function OrderDetails() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col lg:flex-row gap-5 w-full">
      {/* Left Column - Order Information */}
      <div className="flex-1 space-y-6 bg-white p-6 sm:p-8 md:p-12 rounded-[11px]">
        {/* Header */}
        <div className="">
          <div className="mb-2 flex items-center gap-[17px]">
            <button
              onClick={() => navigate("/orders")}
              className="flex items-center gap-3"
            >
              <svg
                width="21"
                height="16"
                viewBox="0 0 21 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.01936 0.335527L6.86863 0.468629L0.468629 6.86863C-0.108145 7.4454 -0.152512 8.35297 0.335527 8.98064L0.468629 9.13137L6.86863 15.5314C7.49347 16.1562 8.50653 16.1562 9.13137 15.5314C9.70814 14.9546 9.75251 14.047 9.26447 13.4194L9.13137 13.2686L5.4624 9.5984L19.2 9.6C20.0837 9.6 20.8 8.88366 20.8 8C20.8 7.11634 20.0837 6.4 19.2 6.4L5.4656 6.3984L9.13137 2.73137C9.70814 2.1546 9.75251 1.24703 9.26447 0.619361L9.13137 0.468629C8.5546 -0.108145 7.64703 -0.152512 7.01936 0.335527Z"
                  fill="#7E84A3"
                />
              </svg>
              <h2 className="font-sans text-2xl font-bold text-[#202224] leading-normal tracking-[-0.114px]">
                Orders ID: #66727722
              </h2>
            </button>
            <div className="flex items-center justify-center gap-[2px] rounded-lg bg-[rgba(33,196,93,0.10)] px-[6px] py-[2px]">
              <CheckIcon />
              <span className="font-nunito text-xl text-[#21C45D] leading-5">
                Paid
              </span>
            </div>
          </div>
          <div className="flex items-center gap-[15px]">
            <span className="font-sans text-base leading-5">
              <span className="text-[#898A8D]">Order Date</span>{" "}
              <span className="text-black">23 Aug, 2025</span>
            </span>
            <span className="font-sans text-base leading-5">
              <span className="text-[#898A8D]">Order Time</span>{" "}
              <span className="text-black">6:00 am</span>
            </span>
            <span className="font-sans text-base leading-5">
              <span className="text-[#898A8D]">Order from</span>{" "}
              <span className="text-black">15th ave Ny</span>
            </span>
          </div>
        </div>

        {/* Order Progress Tracking */}
        <div className="rounded-[11px] border border-[#D9D9D9] bg-white">
          <div className="rounded-t-[11px] bg-[#F5F6FA] px-[41px] py-[19px]">
            <div className="flex items-center justify-between">
              <h3 className="font-sans text-base font-bold text-black leading-normal">
                Order Progress Tracking
              </h3>
              <p className="font-sans text-base font-semibold text-[#707070] leading-normal">
                Estimated arrival at 13 Sep, 2025
              </p>
            </div>
          </div>
          <div className="px-[41px] py-6">
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <div className="mb-[17px] h-[7px] rounded-lg bg-[#21C45D]"></div>
                <p className="font-sans text-sm font-bold text-black leading-normal">
                  Review Order
                </p>
              </div>
              <div className="flex-1">
                <div className="mb-[17px] h-[7px] rounded-lg bg-[#D1D5DB]"></div>
                <p className="font-sans text-sm text-[#50555C] leading-normal">
                  Preparing Order
                </p>
              </div>
              <div className="flex-1">
                <div className="mb-[17px] h-[7px] rounded-lg bg-[#D1D5DB]"></div>
                <p className="font-sans text-sm text-[#50555C] leading-normal">
                  Shipping
                </p>
              </div>
              <div className="flex-1">
                <div className="mb-[17px] h-[7px] rounded-lg bg-[#D1D5DB]"></div>
                <p className="font-sans text-sm text-[#50555C] leading-normal">
                  Delivered
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="rounded-[11px] border border-[#D9D9D9] bg-[#FCFCFE] p-[29px_27px]">
          <h3 className="mb-[7px] font-sans text-xl font-bold text-black leading-5">
            Products
          </h3>

          {/* Product 1 */}
          <div className="flex items-center gap-[23px] border-b border-[#D9D9D9] py-4">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/9d95598757a74be4d1203a2c92c9200fadfada3b?width=138"
              alt="Product"
              className="h-[69px] w-[69px] rounded-[11px] object-cover"
            />
            <div className="flex-1">
              <div className="mb-1 flex items-center justify-between">
                <h4 className="font-sans text-base font-semibold text-black leading-normal">
                  Celcius Drink 300ml
                </h4>
                <p className="font-sans text-base font-bold text-black leading-5">
                  $1200.34
                </p>
              </div>
              <p className="mb-1 font-sans text-sm text-[#707070] leading-normal">
                Jewlel Osco
              </p>
              <div className="flex items-center gap-2.5">
                <span className="font-sans text-sm text-[#707070] leading-normal">
                  12lb
                </span>
                <svg
                  width="4"
                  height="4"
                  viewBox="0 0 4 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle opacity="0.4" cx="2" cy="2" r="2" fill="#979797" />
                </svg>
                <span className="font-sans text-sm text-[#707070] leading-normal">
                  Quantity (2)
                </span>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="flex items-center gap-[23px] border-b border-[#D9D9D9] py-4">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/47025f6b4baadc9f2e81dca17b6681894cc67f46?width=138"
              alt="Product"
              className="h-[69px] w-[69px] rounded-[11px] object-cover"
            />
            <div className="flex-1">
              <div className="mb-1 flex items-center justify-between">
                <h4 className="font-sans text-base font-semibold text-black leading-normal">
                  Big Gulp middle size
                </h4>
                <p className="font-sans text-base font-bold text-black leading-5">
                  $1200.34
                </p>
              </div>
              <p className="mb-1 font-sans text-sm text-[#707070] leading-normal">
                Jewel Osco
              </p>
              <div className="flex items-center gap-2.5">
                <span className="font-sans text-sm text-[#707070] leading-normal">
                  12lb
                </span>
                <svg
                  width="4"
                  height="4"
                  viewBox="0 0 4 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle opacity="0.4" cx="2" cy="2" r="2" fill="#979797" />
                </svg>
                <span className="font-sans text-sm text-[#707070] leading-normal">
                  Quantity (2)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Details */}
        <div className="rounded-[11px] border border-[#D9D9D9] bg-white p-[27px_39px]">
          <h3 className="mb-[21px] font-sans text-xl font-bold text-black leading-5">
            Payment Details
          </h3>
          <div className="space-y-3.5">
            <div className="flex items-center justify-between">
              <span className="font-sans text-base text-[#50555C] leading-5">
                Payment Method
              </span>
              <span className="font-sans text-base text-[#50555C] leading-5">
                Card
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-sans text-base text-[#50555C] leading-5">
                Subtotal
              </span>
              <span className="font-sans text-base text-black leading-5">
                $5400.76
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-nunito text-base font-medium text-[#50555C] leading-5">
                Shipping Type
              </span>
              <span className="font-sans text-base text-black leading-5">
                Free shipping
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-sans text-base text-[#50555C] leading-5">
                Shipping Fee
              </span>
              <span className="font-sans text-base text-black leading-5">
                $20.00
              </span>
            </div>
            <div className="h-px bg-[#D9D9D9]"></div>
            <div className="flex items-center justify-between">
              <span className="font-sans text-base font-bold text-[#131523] leading-5">
                Total
              </span>
              <span className="font-sans text-base font-bold text-black leading-5">
                $5420.76
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Customer Information */}
      <div className="w-full lg:w-[363px] lg:flex-shrink-0 space-y-[26px] rounded-[11px] bg-white p-6 sm:p-8">
        <h3 className="font-sans text-base font-bold text-black leading-5">
          Customer Information
        </h3>

        {/* Customer Profile */}
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/8d13b03f5ba9f4759df8bcb331ae4b131deabe7a?width=92"
                alt="Customer"
                className="h-[46px] w-[46px] rounded-lg object-cover"
              />
              <div>
                <h4 className="font-sans text-base font-semibold text-black leading-normal">
                  Jonathan Smith
                </h4>
                <p className="font-sans text-xs text-[#707070] leading-normal">
                  Total - 15 orders
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-black hover:text-[#06888C]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 9H16M8 13H14M18 4C18.7956 4 19.5587 4.31607 20.1213 4.87868C20.6839 5.44129 21 6.20435 21 7V15C21 15.7956 20.6839 16.5587 20.1213 17.1213C19.5587 17.6839 18.7956 18 18 18H13L8 21V18H6C5.20435 18 4.44129 17.6839 3.87868 17.1213C3.31607 16.5587 3 15.7956 3 15V7C3 6.20435 3.31607 5.44129 3.87868 4.87868C4.44129 4.31607 5.20435 4 6 4H18Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="text-black hover:text-[#06888C]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.95 21C17.8667 21 15.8083 20.546 13.775 19.638C11.7417 18.73 9.89167 17.4423 8.225 15.775C6.55833 14.1077 5.271 12.2577 4.363 10.225C3.455 8.19233 3.00067 6.134 3 4.05C3 3.75 3.1 3.5 3.3 3.3C3.5 3.1 3.75 3 4.05 3H8.1C8.33333 3 8.54167 3.07933 8.725 3.238C8.90833 3.39667 9.01667 3.584 9.05 3.8L9.7 7.3C9.73333 7.56667 9.725 7.79167 9.675 7.975C9.625 8.15833 9.53333 8.31667 9.4 8.45L6.975 10.9C7.30833 11.5167 7.704 12.1123 8.162 12.687C8.62 13.2617 9.12433 13.816 9.675 14.35C10.1917 14.8667 10.7333 15.346 11.3 15.788C11.8667 16.23 12.4667 16.634 13.1 17L15.45 14.65C15.6 14.5 15.796 14.3877 16.038 14.313C16.28 14.2383 16.5173 14.2173 16.75 14.25L20.2 14.95C20.4333 15.0167 20.625 15.1377 20.775 15.313C20.925 15.4883 21 15.684 21 15.9V19.95C21 20.25 20.9 20.5 20.7 20.7C20.5 20.9 20.25 21 19.95 21Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="h-px bg-[rgba(215,219,229,0.93)]"></div>
        </div>

        {/* Contact Information */}
        <div className="space-y-5">
          <div>
            <h4 className="mb-2 font-sans text-base font-bold text-black leading-5">
              Contact Information
            </h4>
            <div className="flex items-center justify-between">
              <span className="font-sans text-sm text-black leading-normal">
                (+1) 234 445 5252
              </span>
              <button className="text-[#707070] hover:text-[#06888C]">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.128 4.05124L12.1537 6.07688M8.77761 13.5042H14.1793M3.3759 10.8034L2.70068 13.5042L5.40154 12.829L13.2246 5.00599C13.4777 4.75275 13.62 4.40932 13.62 4.05124C13.62 3.69315 13.4777 3.34973 13.2246 3.09648L13.1084 2.98035C12.8552 2.72718 12.5118 2.58496 12.1537 2.58496C11.7956 2.58496 11.4522 2.72718 11.1989 2.98035L3.3759 10.8034Z"
                    stroke="#707070"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div>
            <h4 className="mb-2 font-sans text-base font-bold text-black leading-5">
              Email
            </h4>
            <div className="flex items-center justify-between">
              <span className="font-sans text-sm text-black leading-normal">
                Jonathansmith@gmail.com
              </span>
              <button className="text-[#707070] hover:text-[#06888C]">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.128 4.05124L12.1537 6.07688M8.77761 13.5042H14.1793M3.3759 10.8034L2.70068 13.5042L5.40154 12.829L13.2246 5.00599C13.4777 4.75275 13.62 4.40932 13.62 4.05124C13.62 3.69315 13.4777 3.34973 13.2246 3.09648L13.1084 2.98035C12.8552 2.72718 12.5118 2.58496 12.1537 2.58496C11.7956 2.58496 11.4522 2.72718 11.1989 2.98035L3.3759 10.8034Z"
                    stroke="#707070"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Shipping Address */}
        <div className="space-y-[25px]">
          <div className="flex items-center justify-between">
            <h4 className="font-sans text-base font-bold text-black leading-5">
              Shipping Address
            </h4>
            <button className="text-[#707070] hover:text-[#06888C]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99984 4.00045L11.9998 6.00045M8.6665 13.3338H13.9998M3.33317 10.6671L2.6665 13.3338L5.33317 12.6671L13.0572 4.94312C13.3071 4.69308 13.4476 4.354 13.4476 4.00045C13.4476 3.6469 13.3071 3.30782 13.0572 3.05778L12.9425 2.94312C12.6925 2.69315 12.3534 2.55273 11.9998 2.55273C11.6463 2.55273 11.3072 2.69315 11.0572 2.94312L3.33317 10.6671Z"
                  stroke="#707070"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/7204e69e2541f9268a335e3f0712c53c2e3e127c?width=636"
            alt="Map"
            className="h-[260px] w-full rounded-[11px] object-cover"
          />
          <div className="flex items-start justify-between">
            <div>
              <h5 className="mb-[5px] font-sans text-base font-semibold text-[#323232] leading-normal">
                Wilson Jewler limited{" "}
              </h5>
              <p className="font-sans text-sm text-[#50555C] leading-normal">
                234 Hershell Hollow Road,
              </p>
              <p className="font-sans text-sm text-[#50555C] leading-normal">
                Menlo city gateway 2255c,
              </p>
              <p className="font-sans text-sm text-[#50555C] leading-normal">
                United States
              </p>
            </div>
            <button className="text-[#707070] hover:text-[#06888C]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99984 4.00045L11.9998 6.00045M8.6665 13.3338H13.9998M3.33317 10.6671L2.6665 13.3338L5.33317 12.6671L13.0572 4.94312C13.3071 4.69308 13.4476 4.354 13.4476 4.00045C13.4476 3.6469 13.3071 3.30782 13.0572 3.05778L12.9425 2.94312C12.6925 2.69315 12.3534 2.55273 11.9998 2.55273C11.6463 2.55273 11.3072 2.69315 11.0572 2.94312L3.33317 10.6671Z"
                  stroke="#707070"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="h-px bg-[rgba(215,219,229,0.93)]"></div>
        </div>

        {/* Payment Information */}
        <div className="space-y-[26px]">
          <h4 className="font-sans text-base font-bold text-black leading-5">
            Payment Information
          </h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between pl-2.5">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/de0c1098b05fb43cde38b5fd35e5c572ec6b46e6?width=332"
                alt="EBT Card"
                className="h-[45px]"
              />
              <CheckedCardIcon />
            </div>
            <div>
              <p className="font-sans text-sm text-[#323232] leading-normal">
                Transaction ID : #12228874251
              </p>
              <p className="font-sans text-sm text-[#323232] leading-normal">
                Card Holder Name : Jonathan Smith
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
