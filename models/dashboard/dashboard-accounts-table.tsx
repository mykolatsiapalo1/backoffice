import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { SkDiv } from "@/components/ui/sk-div";
import { Account } from "@/types/accounts";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

export function DashboardAccountsTable({ data }: { data?: Account[] }) {
  const columns: ColumnDef<Account>[] = [
    {
      header: "User",
      accessorKey: "name",
      cell: ({ row }) => {
        return (
          <div className="flex items-center gap-2">
            <span>{row.original.complete_name}</span>
            <span className="text-sm text-muted-foreground">{row.original.id}</span>
          </div>
        );
      },
    },
    {
      header: "Status",
      accessorKey: "status",
    },
    {
      header: "Referral",
      accessorKey: "referral",
    },
    {
      header: "Balance",
      accessorKey: "balance",
      cell: ({ row }) => {
        const balance = row.original.balance;
        return (
          <div className="flex flex-col gap-2">
            {Object.entries(balance).map(([currency, amount], i) => (
              <div key={`${currency}-${i}-${amount}`}>
                {currency}: {amount}
              </div>
            ))}
          </div>
        );
      },
    },
    {
      header: "Created At",
      accessorKey: "created_at",
      cell: ({ row }) => {
        return <span>{format(row.original.created_at, "dd/MM/yyyy")}</span>;
      },
    },
    {
      accessorKey: "actions",
      header: "",
      cell: ({ row }) => {
        return <Button variant="outline">View</Button>;
      },
    },
  ];

  return (
    <SkDiv isLoading={!data?.length}>
      <DataTable columns={columns} data={data || []} />
    </SkDiv>
  );
}
