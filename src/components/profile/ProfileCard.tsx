export function ProfileCard() {
  return (
    <div className="flex justify-center items-center p-10 sm:p-[41px] rounded-lg bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.20)]">
      <div className="flex flex-col items-center gap-5 w-full max-w-[175px]">
        <div className="flex justify-center items-center w-24 h-24 rounded-full">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/5520a018bb22e7445994d7894b07575271ca949a?width=192"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col items-start gap-2.5 w-full">
          <h2 className="w-full text-center text-[#23272E] font-sans text-xl font-bold leading-[26px]">
            Jonathan Smith
          </h2>
          <div className="flex items-center gap-4 h-[26px] w-full">
            <p className="text-[#6A717F] font-sans text-sm font-normal leading-[26px]">
              Jonathansmith@gmail.com
            </p>
          </div>
          <div className="flex justify-center items-center gap-4 h-[26px] w-full">
            <p className="text-[#6A717F] font-sans text-sm font-normal leading-[26px]">
              +442 098 4278
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
