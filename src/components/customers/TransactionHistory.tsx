import { useMemo, useState } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";
import { DataTable } from "@/components/ui/data-table";
import DataTableToolbar from "@/pages/data-table-toolbar";
import { TransactionDetailsModal } from "@/components/transactions";
import { useCustomerTransactions } from "@/hooks/useCustomerTransactions";
import { useAdminCustomerTransactions } from "@/hooks/useAdminCustomerTransactions";
import type { Transaction as ApiTransaction } from "../../../api";

export type CustomerTransactionHistoryProps = {
  customerId: string;
  useAdminEndpoint?: boolean;
};

type RowStatus = "complete" | "cancelled" | "pending";

type RowTx = {
  id: string;
  dateTime: string;
  amount: string;
  method: string;
  status: RowStatus;
};

function mapStatus(status?: string | null): RowStatus {
  const s = (status || "").toString().toLowerCase();
  if (s.includes("cancel")) return "cancelled";
  if (s.includes("fail")) return "cancelled";
  if (s.includes("pend")) return "pending";
  if (s.includes("success") || s.includes("complete")) return "complete";
  return "pending";
}

function formatAmount(n?: number) {
  if (typeof n !== "number" || isNaN(n)) return "N/A";
  return `$${n.toFixed(2)}`;
}

function formatDateTime(iso?: string) {
  if (!iso) return "";
  const d = new Date(iso);
  const date = d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
  const time = d.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${date} • ${time}`;
}

export function TransactionHistory({
  customerId,
  useAdminEndpoint = false,
}: CustomerTransactionHistoryProps) {
  const navigate = useNavigate();
  const { transactions: regularTransactions, loading: regularLoading } = useCustomerTransactions({
    customerId,
    limit: 5,
  });
  const { transactions: adminTransactions, loading: adminLoading } = useAdminCustomerTransactions({
    customerId,
    page: 1,
    size: 5,
  });

  const transactions = useAdminEndpoint ? adminTransactions : regularTransactions;
  const loading = useAdminEndpoint ? adminLoading : regularLoading;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState<RowTx | null>(null);

  const rows: RowTx[] = useMemo(() => {
    return (transactions || []).map((t: ApiTransaction) => ({
      id: t.id || "",
      dateTime: formatDateTime(t.createdAt),
      amount: formatAmount(t.amount),
      method:
        (t.source as unknown as string) || (t.type as unknown as string) || "-",
      status: mapStatus(t.status as unknown as string),
    }));
  }, [transactions]);

  const columns = useMemo<ColumnDef<RowTx, unknown>[]>(
    () => [
      {
        accessorKey: "id",
        header: "Transaction ID",
        cell: ({ row }) => row.original.id || "N/A",
      },
      {
        accessorKey: "dateTime",
        header: "Date & Time",
        cell: ({ row }) => row.original.dateTime,
      },
      {
        accessorKey: "amount",
        header: "Amount",
        cell: ({ row }) => row.original.amount,
      },
      {
        accessorKey: "method",
        header: "Method",
        cell: ({ row }) => row.original.method || "-",
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
          const status = row.original.status;
          const color =
            status === "complete"
              ? "#21C45D"
              : status === "cancelled"
                ? "#EF4343"
                : "#FBBD23";
          const text =
            status === "complete"
              ? "Complete"
              : status === "cancelled"
                ? "Cancelled"
                : "Pending";
          return (
            <div className="flex items-center justify-start gap-2.5">
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4" cy="4" r="4" fill={color} />
              </svg>
              <span
                className="font-sans text-[15px] font-normal leading-normal"
                style={{ color }}
              >
                {text}
              </span>
            </div>
          );
        },
      },
      {
        id: "action",
        header: "Action",
        cell: ({ row }) => (
          <button
            onClick={() => {
              setSelected(row.original);
              setIsModalOpen(true);
            }}
            className="text-center font-sans text-[15px] font-normal leading-normal text-[#06888C] hover:underline"
          >
            View Details
          </button>
        ),
      },
    ],
    [],
  );

  return (
    <div className="space-y-4">
      <DataTable<RowTx, unknown>
        columns={columns}
        data={rows}
        loading={loading}
        toolbar={
          <div className="flex w-full items-center justify-between">
            <div className="inline-flex items-center justify-center gap-1 rounded-md bg-[#D2EAE3] px-3.5 py-2.5">
              <span className="font-lato text-[15px] font-medium leading-5 text-black">
                Transaction History
              </span>
            </div>
            <button
              onClick={() => navigate("/transactions")}
              className="flex items-center gap-3 font-sans text-[15px] font-semibold text-[#06888C] transition-opacity hover:opacity-80"
            >
              View All
              <svg
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.58333 9.5L10.75 5.125M10.75 5.125L6.58333 0.75M10.75 5.125H0.75"
                  stroke="#06888C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        }
        getRowId={(row: RowTx) => row.id}
      />

      <TransactionDetailsModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        transaction={
          selected
            ? {
                id: selected.id,
                date: selected.dateTime.split(" • ")[0] || "",
                time: selected.dateTime.split(" • ")[1] || "",
                amount: selected.amount,
                method: selected.method,
                status: selected.status,
              }
            : undefined
        }
      />
    </div>
  );
}

export default TransactionHistory;
