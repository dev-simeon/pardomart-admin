import * as React from "react";
import { cn } from "@/lib/utils";

const ExportIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.2083 7.5C16.9231 7.56133 18.3791 8.84744 18.3322 10.5703C18.3213 10.9711 18.1661 11.4665 17.8555 12.4574C17.1082 14.842 15.8522 16.912 13.0385 17.4087C12.5212 17.5 11.9392 17.5 10.7752 17.5H9.22474C8.06074 17.5 7.47874 17.5 6.96152 17.4087C4.14781 16.912 2.89181 14.842 2.14446 12.4574C1.83392 11.4665 1.67865 10.9711 1.66776 10.5703C1.62092 8.84744 3.07691 7.56133 4.79166 7.5"
      stroke="#06888C"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
    <path
      d="M9.99999 11.6667V2.5M9.99999 11.6667C9.41649 11.6667 8.32626 10.0048 7.91666 9.58333M9.99999 11.6667C10.5835 11.6667 11.6737 10.0048 12.0833 9.58333"
      stroke="#06888C"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SearchIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="2" />
    <line
      x1="16.65"
      y1="16.65"
      x2="21"
      y2="21"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

interface SearchOption {
  value: string;
  label: string;
}

interface DataTableToolbarProps {
  tabs?: { id: string; label: string; count?: number }[];
  activeTab?: string;
  onTabChange?: (id: string) => void;
  searchOptions?: SearchOption[];
  searchColumn: string;
  onSearchColumnChange: (column: string) => void;
  searchValue: string;
  onSearchValueChange: (value: string) => void;
  onSearch?: (value: string) => void;
  onExport?: () => void;
  onFilter?: () => void;
  children?: React.ReactNode; // For additional custom elements
  showSearch?: boolean; // Toggle search visibility
  ctaButton?: {
    label: string;
    onClick: () => void;
    icon?: React.ReactNode;
  };
}

export function DataTableToolbar({
  tabs,
  activeTab,
  onTabChange,
  searchOptions,
  searchColumn,
  onSearchColumnChange,
  searchValue,
  onSearchValueChange,
  onSearch,
  onExport,
  onFilter,
  children,
  showSearch = true,
  ctaButton,
}: DataTableToolbarProps) {
  const hasTabs = tabs && tabs.length > 0;
  return (
    <div
      className={cn(
        "w-full flex flex-wrap items-center",
        hasTabs ? "justify-between" : "justify-end",
        "gap-4",
      )}
    >
      {tabs && tabs.length > 0 && (
        <div className="inline-flex items-center gap-1 rounded-lg bg-[#D2EAE3] p-1">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => onTabChange?.(t.id)}
              className={cn(
                "flex items-center gap-1 px-3 py-1.5 font-sans text-[15px] leading-5 transition-colors rounded-md",
                activeTab === t.id && tabs.length > 1
                  ? "bg-white text-black"
                  : tabs.length > 1
                    ? "text-[#4B5563]"
                    : "text-black",
              )}
            >
              <span>{t.label}</span>
              {typeof t.count === "number" && (
                <span className="ml-1 font-sans text-sm font-bold leading-normal text-[#4EA674]">
                  ({t.count})
                </span>
              )}
            </button>
          ))}
        </div>
      )}

      <div className="flex items-center gap-2.5 flex-wrap">
        {onExport && (
          <button
            onClick={onExport}
            className="flex items-center gap-2.5 rounded-lg border border-[#D1D5DB] px-[17px] py-2.5 font-sans text-sm font-normal leading-normal text-[#06888C]"
          >
            <ExportIcon />
            Export
          </button>
        )}

        {showSearch && (
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={(e) => onSearchValueChange(e.target.value)}
              className="w-[220px] rounded-l-[10px] border border-[#DBDBDB] px-3 py-2.5 font-sans text-sm font-normal leading-normal text-[#656565] placeholder:text-[#656565] focus:border-[#06888C] focus:outline-none"
            />
            <button
              onClick={() =>
                onSearch
                  ? onSearch(searchValue)
                  : onSearchValueChange(searchValue)
              }
              className="h-[42px] rounded-r-[10px] bg-[#06888C] px-3 flex items-center justify-center hover:bg-[#0a5d66] transition-colors"
              aria-label="Search"
            >
              <SearchIcon />
            </button>
          </div>
        )}

        {ctaButton && (
          <button
            onClick={ctaButton.onClick}
            className="flex items-center justify-center gap-1 rounded-lg bg-[#06888C] px-[17px] py-2.5 hover:bg-[#0a5d66] transition-colors"
          >
            {ctaButton.icon}
            <span className="font-sans text-sm font-bold leading-normal tracking-[-0.3px] text-white">
              {ctaButton.label}
            </span>
          </button>
        )}

        {children}
      </div>
    </div>
  );
}
