import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { SupportStatCard } from "@/components/support/SupportStatCard";
import { SupportResponseModal } from "@/components/support/SupportResponseModal";
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
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@/components/support/SupportIcons";

type TicketStatus = "open" | "answered" | "closed";

interface Ticket {
  id: string;
  subject: string;
  email: string;
  status: TicketStatus;
  date: string;
}

const mockTickets: Ticket[] = [
  {
    id: "#56443BB",
    subject: "Need Help with my account...",
    email: "jameskelvin12@hotmail.com",
    status: "open",
    date: "12 Aug, 2025",
  },
  {
    id: "#56443BB",
    subject: "Need Help with my account...",
    email: "jameskelvin12@hotmail.com",
    status: "open",
    date: "12 Aug, 2025",
  },
  {
    id: "#56443BB",
    subject: "Need Help with my account...",
    email: "jameskelvin12@hotmail.com",
    status: "open",
    date: "12 Aug, 2025",
  },
  {
    id: "#56443BB",
    subject: "Need Help with my account...",
    email: "jameskelvin12@hotmail.com",
    status: "answered",
    date: "12 Aug, 2025",
  },
  {
    id: "#56443BB",
    subject: "Need Help with my account...",
    email: "jameskelvin12@hotmail.com",
    status: "answered",
    date: "12 Aug, 2025",
  },
  {
    id: "#56443BB",
    subject: "Need Help with my account...",
    email: "jameskelvin12@hotmail.com",
    status: "answered",
    date: "12 Aug, 2025",
  },
  {
    id: "#56443BB",
    subject: "Need Help with my account...",
    email: "jameskelvin12@hotmail.com",
    status: "open",
    date: "12 Aug, 2025",
  },
  {
    id: "#56443BB",
    subject: "Need Help with my account...",
    email: "jameskelvin12@hotmail.com",
    status: "closed",
    date: "12 Aug, 2025",
  },
  {
    id: "#56443BB",
    subject: "Need Help with my account...",
    email: "jameskelvin12@hotmail.com",
    status: "open",
    date: "12 Aug, 2025",
  },
];

export default function Support() {
  const [selectedTickets, setSelectedTickets] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<"all" | "open" | "answered" | "closed">("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);

  const handleOpenTicket = (ticket: Ticket) => {
    setSelectedTicket(ticket);
    setIsModalOpen(true);
  };

  const getStatusColor = (status: TicketStatus) => {
    switch (status) {
      case "open":
        return "text-[#21C45D]";
      case "answered":
        return "text-[#FBBD23]";
      case "closed":
        return "text-[#EF4343]";
    }
  };

  const getStatusText = (status: TicketStatus) => {
    switch (status) {
      case "open":
        return "Open";
      case "answered":
        return "Answered";
      case "closed":
        return "Closed";
    }
  };

  const getStatusDotColor = (status: TicketStatus) => {
    switch (status) {
      case "open":
        return "#21C45D";
      case "answered":
        return "#FBBD23";
      case "closed":
        return "#EF4343";
    }
  };

  const toggleTicketSelection = (ticketId: string) => {
    setSelectedTickets((prev) =>
      prev.includes(ticketId)
        ? prev.filter((id) => id !== ticketId)
        : [...prev, ticketId],
    );
  };

  const toggleAllTickets = () => {
    if (selectedTickets.length === mockTickets.length) {
      setSelectedTickets([]);
    } else {
      setSelectedTickets(mockTickets.map((t) => t.id));
    }
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <SupportStatCard
          icon={<TotalTicketsIcon />}
          title="Total Tickets"
          value="2,876"
        />
        <SupportStatCard
          icon={<OpenTicketsIcon />}
          title="Open Tickets"
          value="676"
        />
        <SupportStatCard
          icon={<ClosedTicketsIcon />}
          title="Closed Tickets"
          value="1,116"
        />
        <SupportStatCard
          icon={<AnsweredTicketsIcon />}
          title="Answered Tickets"
          value="186"
        />
      </div>

      <div className="rounded-2xl bg-white p-7 sm:p-11">
        <div className="space-y-7">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="inline-flex items-center gap-1 rounded-lg bg-[#D2EAE3] p-1">
              <button
                onClick={() => setActiveTab("all")}
                className={cn(
                  "flex items-center justify-center gap-1 rounded-md px-3 py-1.5 font-sans text-[15px] font-normal leading-5 transition-colors",
                  activeTab === "all"
                    ? "bg-white text-black"
                    : "text-[#4B5563]",
                )}
              >
                All TIickets
                <span className="ml-1 font-sans text-sm font-bold leading-normal text-[#4EA674]">
                  (240)
                </span>
              </button>
              <button
                onClick={() => setActiveTab("open")}
                className={cn(
                  "flex items-center justify-center gap-2.5 px-3 py-1.5 font-sans text-base font-normal leading-5 transition-colors",
                  activeTab === "open"
                    ? "rounded-md bg-white text-black"
                    : "text-[#4B5563]",
                )}
              >
                Open
              </button>
              <button
                onClick={() => setActiveTab("answered")}
                className={cn(
                  "flex items-center justify-center gap-2.5 px-3 py-1.5 font-sans text-[15px] font-normal leading-5 transition-colors",
                  activeTab === "answered"
                    ? "rounded-md bg-white text-black"
                    : "text-[#4B5563]",
                )}
              >
                Answered
              </button>
              <button
                onClick={() => setActiveTab("closed")}
                className={cn(
                  "flex items-center justify-center gap-2.5 px-3 py-1.5 font-sans text-[15px] font-normal leading-5 transition-colors",
                  activeTab === "closed"
                    ? "rounded-md bg-white text-black"
                    : "text-[#4B5563]",
                )}
              >
                Closed
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <button className="flex items-center gap-2.5 rounded-lg border border-[#D1D5DB] px-[17px] py-2.5 font-sans text-sm font-normal leading-normal text-[#06888C] hover:bg-gray-50 transition-colors">
                <ExportIcon />
                Export
              </button>
              <button className="flex items-center gap-2.5 rounded-lg border border-[#D1D5DB] px-3.5 py-2.5 font-sans text-sm font-normal leading-normal text-[#06888C] hover:bg-gray-50 transition-colors">
                <FilterIcon />
                Filter by
              </button>
              <button className="flex h-12 items-center justify-center gap-1 rounded-lg bg-[#06888C] px-3 py-1.5 font-sans text-[15px] font-bold leading-normal tracking-[-0.3px] text-white hover:bg-[#057579] transition-colors">
                <AddIcon />
                Add Ticket
              </button>
            </div>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="rounded-md bg-[#D2EAE3]">
                  <th className="px-7 py-[13px] text-left">
                    <div className="flex items-center gap-2.5">
                      <Checkbox
                        checked={selectedTickets.length === mockTickets.length}
                        onCheckedChange={toggleAllTickets}
                        className="h-4 w-4 rounded border-[#707070]"
                      />
                      <span className="font-sans text-[15px] font-semibold leading-normal text-[#023337]">
                        Ticket ID
                      </span>
                    </div>
                  </th>
                  <th className="px-4 py-[13px] text-left font-sans text-[15px] font-semibold leading-normal text-[#023337]">
                    Subject
                  </th>
                  <th className="px-4 py-[13px] text-left font-sans text-[15px] font-semibold leading-normal text-[#023337]">
                    Email
                  </th>
                  <th className="px-4 py-[13px] text-left font-sans text-[15px] font-semibold leading-normal text-[#023337]">
                    Status
                  </th>
                  <th className="px-4 py-[13px] text-left font-sans text-[15px] font-semibold leading-normal text-[#023337]">
                    Date
                  </th>
                  <th className="px-4 py-[13px] text-left font-sans text-[15px] font-semibold leading-normal text-[#023337]">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {mockTickets.map((ticket, index) => (
                  <tr
                    key={`${ticket.id}-${index}`}
                    className="border-b border-[#D1D5DB]"
                  >
                    <td className="px-7 py-5">
                      <div className="flex items-center gap-2.5">
                        <Checkbox
                          checked={selectedTickets.includes(ticket.id)}
                          onCheckedChange={() => toggleTicketSelection(ticket.id)}
                          className="h-4 w-4 rounded border-[#707070]"
                        />
                        <span className="font-sans text-[15px] font-normal leading-normal text-black">
                          {ticket.id}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-5">
                      <span className="w-[207px] font-sans text-[15px] font-normal leading-5 text-[#131523]">
                        {ticket.subject}
                      </span>
                    </td>
                    <td className="px-4 py-5 font-sans text-[15px] font-normal leading-normal text-black">
                      {ticket.email}
                    </td>
                    <td className="px-4 py-5">
                      <div className="flex items-center justify-start gap-2.5">
                        <svg
                          width="8"
                          height="8"
                          viewBox="0 0 8 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="4"
                            cy="4"
                            r="4"
                            fill={getStatusDotColor(ticket.status)}
                          />
                        </svg>
                        <span
                          className={cn(
                            "font-sans text-[15px] font-normal leading-normal",
                            getStatusColor(ticket.status),
                          )}
                        >
                          {getStatusText(ticket.status)}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-5 font-sans text-[15px] font-normal leading-normal text-black">
                      {ticket.date}
                    </td>
                    <td className="px-4 py-5">
                      <div className="flex items-center gap-2">
                        <button
                          className="hover:opacity-70 transition-opacity"
                          onClick={() => handleOpenTicket(ticket)}
                        >
                          <MessageIcon />
                        </button>
                        <button className="hover:opacity-70 transition-opacity">
                          <DeleteIcon />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
            <button className="flex h-[42px] items-center justify-center gap-1 rounded-lg bg-white px-3 py-2.5 shadow-[0_1px_3px_0_rgba(0,0,0,0.20)] hover:bg-gray-50 transition-colors">
              <ArrowLeftIcon />
              <span className="font-sans text-[15px] font-normal leading-normal text-black">
                Previous
              </span>
            </button>

            <div className="flex items-center gap-3">
              <button className="flex h-9 w-9 items-center justify-center rounded bg-[#D2EAE3] font-sans text-[15px] font-bold leading-normal text-[#023337]">
                1
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded border border-[#D1D5DB] font-sans text-[15px] font-normal leading-normal text-[#023337] hover:bg-gray-50 transition-colors">
                2
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded border border-[#D1D5DB] font-sans text-[15px] font-normal leading-normal text-[#023337] hover:bg-gray-50 transition-colors">
                3
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded border border-[#D1D5DB] font-sans text-[15px] font-normal leading-normal text-[#023337] hover:bg-gray-50 transition-colors">
                4
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded border border-[#D1D5DB] font-sans text-[15px] font-normal leading-normal text-[#023337] hover:bg-gray-50 transition-colors">
                5
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded border border-[#D1D5DB] font-sans text-[15px] font-bold leading-normal text-[#023337]">
                .....
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded border border-[#D1D5DB] font-sans text-[15px] font-normal leading-normal text-[#023337] hover:bg-gray-50 transition-colors">
                24
              </button>
            </div>

            <button className="flex h-[42px] items-center justify-center gap-1 rounded-lg bg-white px-3 py-2.5 shadow-[0_1px_3px_0_rgba(0,0,0,0.20)] hover:bg-gray-50 transition-colors">
              <span className="font-sans text-[15px] font-normal leading-normal text-black">
                Next
              </span>
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </div>

      {selectedTicket && (
        <SupportResponseModal
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
          ticketId="442232"
          email="Jonathansmith@gmail.com"
          status={selectedTicket.status}
          subject="Request for Order Details"
          date="14th Jul, 2025"
          message="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.

Curabitur pellentesque nibh nibh, at maximus ante.Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante. Aliquam in hendrerit urna. Pellentesque"
        />
      )}
    </div>
  );
}
