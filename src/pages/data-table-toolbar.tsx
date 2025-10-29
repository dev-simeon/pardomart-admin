import { useMemo } from "react";
import { cn } from "@/lib/utils";

export type SearchOption = { value: string; label: string };

type DataTableToolbarProps = {
  title?: string;
  tabs?: { id: string; label: string; count?: number }[];
  activeTab?: string;
  onTabChange?: (id: string) => void;
  searchOptions?: SearchOption[];
  searchColumn?: string;
  onSearchColumnChange?: (value: string) => void;
  searchValue?: string;
  onSearchValueChange?: (value: string) => void;
  onExport?: () => void;
  onFilter?: () => void;
};

export function DataTableToolbar(props: DataTableToolbarProps) {
  const {
    title,
    tabs,
    activeTab,
    onTabChange,
    searchOptions,
    searchColumn,
    onSearchColumnChange,
    searchValue,
    onSearchValueChange,
    onExport,
    onFilter,
  } = props;

  const resolvedActiveTab = useMemo(() => {
    if (!tabs || !tabs.length) return undefined;
    return activeTab ?? tabs[0]?.id;
  }, [tabs, activeTab]);

  return (
    <div className="flex w-full items-center justify-between gap-3 flex-wrap">
      <div className="flex items-center gap-3 flex-wrap">
        {title ? (
          <div className="inline-flex items-center justify-center gap-1 rounded-md bg-[#D2EAE3] px-3.5 py-2.5">
            <span className="font-lato text-[15px] font-medium leading-5 text-black">{title}</span>
          </div>
        ) : null}

        {tabs && tabs.length ? (
          <div className="inline-flex items-center gap-1 rounded-lg bg-[#D2EAE3] p-1">
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => onTabChange?.(t.id)}
                className={cn(
                  "flex items-center gap-1 px-3 py-1.5 font-sans text-[15px] leading-5 transition-colors",
                  resolvedActiveTab === t.id
                    ? "rounded-md bg-white text-black"
                    : "text-[#4B5563]",
                )}
              >
                <span>{t.label}</span>
                {typeof t.count === "number" && (
                  <span className="ml-1 font-sans text-sm font-bold leading-normal text-[#4EA674]">({t.count})</span>
                )}
              </button>
            ))}
          </div>
        ) : null}
      </div>

      <div className="flex items-center gap-3 flex-wrap ml-auto">
        {searchOptions && searchOptions.length ? (
          <div className="flex items-center gap-2">
            <select
              className="h-10 rounded-md border border-[#D1D5DB] bg-white px-2 text-sm text-[#111827]"
              value={searchColumn ?? searchOptions[0]?.value}
              onChange={(e) => onSearchColumnChange?.(e.target.value)}
            >
              {searchOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <input
              className="h-10 w-[220px] rounded-md border border-[#D1D5DB] bg-white px-3 text-sm text-[#111827] placeholder:text-[#9CA3AF]"
              placeholder="Search..."
              value={searchValue ?? ""}
              onChange={(e) => onSearchValueChange?.(e.target.value)}
            />
          </div>
        ) : null}

        {onFilter ? (
          <button
            type="button"
            onClick={onFilter}
            className="rounded-lg border border-[#D1D5DB] bg-white px-3 py-2.5 font-sans text-[15px] leading-normal text-[#023337] hover:bg-[#F9FAFB]"
          >
            Filter
          </button>
        ) : null}
        {onExport ? (
          <button
            type="button"
            onClick={onExport}
            className="rounded-lg bg-[#06888C] px-3 py-2.5 font-sans text-[15px] font-semibold leading-normal text-white hover:opacity-90"
          >
            Export
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DataTableToolbar;
