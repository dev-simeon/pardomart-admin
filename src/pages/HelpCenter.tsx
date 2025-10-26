import { HelpCard } from "@/components/help/HelpCard";
import { HelpSearchBar } from "@/components/help/HelpSearchBar";

const helpCards = [
  {
    title: "Getting Started",
    description1: "Guide to get started faster",
    description2: "Video tutorials for beginners",
    linkText: "More Tutorials",
  },
  {
    title: "Getting Started",
    description1: "Guide to get started faster",
    description2: "Video tutorials for beginners",
    linkText: "More Tutorials",
  },
  {
    title: "Getting Started",
    description1: "Guide to get started faster",
    description2: "Video tutorials for beginners",
    linkText: "More Tutorials",
  },
  {
    title: "Getting Started",
    description1: "Guide to get started faster",
    description2: "Video tutorials for beginners",
    linkText: "More Tutorials",
  },
  {
    title: "Getting Started",
    description1: "Guide to get started faster",
    description2: "Video tutorials for beginners",
    linkText: "More Tutorials",
  },
  {
    title: "Getting Started",
    description1: "Guide to get started faster",
    description2: "Video tutorials for beginners",
    linkText: "More Tutorials",
  },
  {
    title: "Getting Started",
    description1: "Guide to get started faster",
    description2: "Video tutorials for beginners",
    linkText: "More Tutorials",
  },
  {
    title: "Getting Started",
    description1: "Guide to get started faster",
    description2: "Video tutorials for beginners",
    linkText: "More Tutorials",
  },
];

export default function HelpCenter() {
  return (
    <div className="w-full bg-white rounded-2xl p-4 sm:p-6 md:p-9 flex justify-center">
      <div className="w-full max-w-[1110px] flex flex-col items-center gap-8 md:gap-11">
        <div className="flex flex-col items-center gap-8 md:gap-11 w-full max-w-[724px]">
          <div className="text-center">
            <h1 className="text-black font-sans text-2xl sm:text-3xl md:text-[32px] font-bold leading-5 mb-3">
              This is your Help Center
            </h1>
            <p className="text-black font-sans text-base sm:text-lg md:text-xl font-normal leading-5">
              How can we help you today?
            </p>
          </div>

          <div className="w-full">
            <HelpSearchBar />
          </div>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-[30px]">
          {helpCards.map((card, index) => (
            <div key={index} className="min-h-[344px]">
              <HelpCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
