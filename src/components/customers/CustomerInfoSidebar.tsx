export function CustomerInfoSidebar() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden h-fit">
      <div className="bg-[#D2EAE3] px-5 py-8 flex items-center gap-2">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 6C11.4696 6 10.9609 6.21071 10.5858 6.58579C10.2107 6.96086 10 7.46957 10 8C10 8.53043 10.2107 9.03914 10.5858 9.41421C10.9609 9.78929 11.4696 10 12 10C12.5304 10 13.0391 9.78929 13.4142 9.41421C13.7893 9.03914 14 8.53043 14 8C14 7.46957 13.7893 6.96086 13.4142 6.58579C13.0391 6.21071 12.5304 6 12 6ZM12 13C14.67 13 20 14.33 20 17V20H4V17C4 14.33 9.33 13 12 13ZM12 14.9C9.03 14.9 5.9 16.36 5.9 17V18.1H18.1V17C18.1 16.36 14.97 14.9 12 14.9Z"
            fill="black"
          />
        </svg>
        <h3 className="text-xl font-sans font-semibold text-black leading-[26px]">
          Customer Information
        </h3>
      </div>

      <div className="px-6 py-6 space-y-6">
        <h4 className="text-xl font-sans font-bold text-[#131523] leading-6">
          Overview
        </h4>

        <div className="space-y-6">
          <div className="flex items-center gap-2.5 pb-3 border-b border-[#D9D9D9]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5ZM12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2Z"
                fill="black"
              />
            </svg>
            <p className="text-xs font-sans font-normal text-[#5A607F] leading-5 flex-1">
              Alabama Street Rus des nation 220889 NY
            </p>
          </div>

          <div className="flex items-center gap-2.5 pb-3 border-b border-[#D9D9D9]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.616 19C4.15533 19 3.771 18.846 3.463 18.538C3.155 18.23 3.00067 17.8453 3 17.384V6.616C3 6.15533 3.15433 5.771 3.463 5.463C3.77167 5.155 4.15567 5.00067 4.615 5H19.385C19.845 5 20.229 5.15433 20.537 5.463C20.845 5.77167 20.9993 6.156 21 6.616V17.385C21 17.845 20.8457 18.2293 20.537 18.538C20.2283 18.8467 19.8443 19.0007 19.385 19H4.616ZM12 11.96C12.0833 11.96 12.1613 11.9473 12.234 11.922C12.306 11.8967 12.3773 11.8657 12.448 11.829L19.677 7.096C19.7717 7.03867 19.8333 6.96033 19.862 6.861C19.8907 6.76167 19.8853 6.66267 19.846 6.564C19.8207 6.43533 19.7367 6.342 19.594 6.284C19.452 6.22667 19.3143 6.23833 19.181 6.319L12 11L4.82 6.32C4.68667 6.23867 4.552 6.22133 4.416 6.268C4.28 6.31467 4.19267 6.40667 4.154 6.544C4.11533 6.64667 4.11033 6.751 4.139 6.857C4.16767 6.963 4.229 7.043 4.323 7.097L11.552 11.829C11.6227 11.8657 11.694 11.8967 11.766 11.922C11.8387 11.9467 11.9167 11.959 12 11.959"
                fill="black"
              />
            </svg>
            <p className="text-sm font-sans font-normal text-[#5A607F] leading-5 flex-1">
              Wadewarren@gmail.com
            </p>
          </div>

          <div className="flex items-center gap-2.5 pb-3 border-b border-[#D9D9D9]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 15.46L15.73 14.85L13.21 17.37C10.3714 15.9259 8.06409 13.6186 6.62002 10.78L9.15002 8.25L8.54002 3H3.03002C2.45002 13.18 10.82 21.55 21 20.97V15.46Z"
                fill="black"
              />
            </svg>
            <p className="text-sm font-sans font-normal text-[#5A607F] leading-5 flex-1">
              +1 56554441
            </p>
          </div>

          <div className="flex items-start gap-4 pb-2 border-b border-[#D9D9D9]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/efd2d1e886120f256a93ab025c7269facc042b4f?width=48"
              alt="Credit Card"
              className="w-6 h-6"
            />
            <div className="flex-1">
              <p className="text-base font-nunito font-semibold text-black leading-4 mb-1">
                EBT
              </p>
              <p className="text-xs font-sans font-normal text-[#898A8D] leading-[10px]">
                **** **** 2345
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
