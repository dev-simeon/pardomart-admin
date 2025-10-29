import React, { useMemo, useState } from "react";
import { SupportStatCard } from "@/components/support/SupportStatCard";
import { DataTable } from "@/components/ui/data-table";
import { DataTableToolbar } from "@/components/ui/data-table-toolbar";
import type { ColumnDef } from "@tanstack/react-table";
import { supportApi } from "@/lib/apiClient";
import type { PaginatedSupportTickets, SupportTicket, TicketStatus } from "../../api";
import { useQuery } from "@tanstack/react-query";

import {
  TotalTicketsIcon,
  OpenTicketsIcon,
  ClosedTicketsIcon,
  AnsweredTicketsIcon,
  ExportIcon,
  FilterIcon,
  AddIcon,
  MessageIcon,
  DeleteIcon,
} from "@/components/support/SupportIcons";

function statusColor(status?: TicketStatus) {
  switch (status) {
    case "OPEN":
      return { dot: "#21C45D", textClass: "text-[#21C45D]", label: "Open" };
    case "IN_PROGRESS":
      return { dot: "#FBBD23", textClass: "text-[#FBBD23]", label: "In Progress" };
    case "RESOLVED":
      return { dot: "#06A561", textClass: "text-[#06A561]", label: "Resolved" };
    case "CLOSED":
      return { dot: "#EF4343", textClass: "text-[#EF4343]", label: "Closed" };
    default:
      return { dot: "#6A717F", textClass: "text-[#6A717F]", label: String(status ?? "-") };
  }
}

export default function Support() {
  const [searchValue, setSearchValue] = useState("");
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const { data, isLoading, refetch } = useQuery<PaginatedSupportTickets>({
    queryKey: ["supportTickets", pageIndex, pageSize],
    queryFn: async () => {
      const res = await supportApi.apiV1SupportTicketsGet(pageIndex + 1, pageSize);
      return res.data as PaginatedSupportTickets;
    },
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    staleTime: 30_000,
  });

  const tickets = data?.data ?? [];
  const totalPages = data?.totalPages ?? 1;
  const totalCount = data?.totalCount ?? tickets.length;

  const filtered = useMemo(() => {
    if (!searchValue) return tickets;
    const q = searchValue.toLowerCase();
    return tickets.filter((t) =>
      [t.title, t.description, t.id, t.userId]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(q)),
    );
  }, [tickets, searchValue]);

  const statusCounts = useMemo(() => {
    const base = { all: totalCount, open: 0, inProgress: 0, resolved: 0, closed: 0 };
    for (const t of tickets) {
      switch (t.status) {
        case "OPEN": base.open++; break;
        case "IN_PROGRESS": base.inProgress++; break;
        case "RESOLVED": base.resolved++; break;
        case "CLOSED": base.closed++; break;
      }
    }
    return base;
  }, [tickets, totalCount]);

  const columns: ColumnDef<SupportTicket>[] = [
    {
      header: "Ticket",
      cell: ({ row }) => <span className="font-sans text-[15px]">{row.original.id}</span>,
      meta: { headerClassName: "min-w-[140px]" },
    },
    {
      header: "Subject",
      cell: ({ row }) => <span className="font-sans text-[15px] leading-5 text-[#131523]">{row.original.title || "-"}</span>,
      meta: { headerClassName: "min-w-[240px]" },
    },
    {
      header: "Status",
      cell: ({ row }) => {
        const s = statusColor(row.original.status);
        return (
          <div className="flex items-center justify-start gap-2.5">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="4" r="4" fill={s.dot} /></svg>
            <span className={"font-sans text-[15px] font-normal leading-normal " + s.textClass}>{s.label}</span>
          </div>
        );
      },
      meta: { headerClassName: "min-w-[140px]" },
    },
    {
      header: "Date",
      cell: ({ row }) => (row.original.createdAt ? new Date(row.original.createdAt).toLocaleString() : ""),
      meta: { headerClassName: "min-w-[180px]" },
    },
    {
      header: "Action",
      cell: () => (
        <div className="flex items-center gap-2">
          <button className="hover:opacity-70 transition-opacity"><MessageIcon /></button>
          <button className="hover:opacity-70 transition-opacity"><DeleteIcon /></button>
        </div>
      ),
      meta: { headerClassName: "min-w-[120px]" },
    },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <SupportStatCard icon={<TotalTicketsIcon />} title="Total Tickets" value={String(totalCount)} />
        <SupportStatCard icon={<OpenTicketsIcon />} title="Open Tickets" value={String(statusCounts.open)} />
        <SupportStatCard icon={<ClosedTicketsIcon />} title="Closed Tickets" value={String(statusCounts.closed)} />
        <SupportStatCard icon={<AnsweredTicketsIcon />} title="Resolved" value={String(statusCounts.resolved)} />
      </div>

      <DataTable
        columns={columns}
        data={filtered}
        loading={isLoading}
        enableRowSelection
        manualPagination
        pageCount={totalPages}
        pageIndex={pageIndex}
        pageSize={pageSize}
        onPaginationChange={(p) => {
          setPageIndex(p.pageIndex);
          setPageSize(p.pageSize);
          void refetch();
        }}
        toolbar={
          <DataTableToolbar
            tabs={[
              { id: "all", label: "All Tickets", count: statusCounts.all },
              { id: "open", label: "Open", count: statusCounts.open },
              { id: "in_progress", label: "In Progress", count: statusCounts.inProgress },
              { id: "resolved", label: "Resolved", count: statusCounts.resolved },
              { id: "closed", label: "Closed", count: statusCounts.closed },
            ]}
            activeTab={"all"}
            searchColumn={"title"}
            onSearchColumnChange={() => {}}
            searchValue={searchValue}
            onSearchValueChange={setSearchValue}
            onExport={() => {}}
            onFilter={() => {}}
            showSearch={false}
            ctaButton={{ label: "Add Ticket", onClick: () => {} , icon: <AddIcon /> }}
          />
        }
      />
    </div>
  );
}
