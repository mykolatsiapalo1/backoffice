"use client";

import { Pagination } from "@/services/accounts";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { InfoSign } from "@/components/ui/info-sign";
import { SkDiv } from "@/components/ui/sk-div";
import { Account } from "@/types/accounts";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { useState } from "react";

const filters = [
  {
    label: "Approved",
    value: "approved",
  },
  {
    label: "Initiated",
    value: "initiated",
  },
  {
    label: "Retry",
    value: "retry",
  },
  {
    label: "Failed",
    value: "failed",
  },
];

export function DashboardAccountsTable({
  data,
  pagination,
  getNewAccounts,
}: {
  data?: Account[];
  pagination: Pagination;
  getNewAccounts: (status_verification: string, current_page: number, per_page: number) => void;
}) {
  const [filter, setFilter] = useState("");
  function setCurrentFilter(filter: string) {
    setFilter(filter);
    getNewAccounts(filter, 1, pagination.per_page);
  }
  const columns: ColumnDef<Account>[] = [
    {
      header: "User",
      accessorKey: "complete_name",
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
      accessorKey: "status_verification",
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
      <InfoSign>
        <InfoSign.Sign>Accounts</InfoSign.Sign>
        <InfoSign.Filter filters={filters} selectFilter={(filter) => setCurrentFilter(filter)}>
          Status
        </InfoSign.Filter>
      </InfoSign>
      <DataTable
        columns={columns}
        data={data || []}
        currPage={pagination.current_page}
        totalCount={pagination.total_count}
        limit={pagination.per_page}
        getPrevPage={() => getNewAccounts(filter, pagination.current_page - 1, pagination.per_page)}
        getNextPage={() => getNewAccounts(filter, pagination.current_page + 1, pagination.per_page)}
        isPrevPageDisabled={pagination.current_page <= 1}
        isNextPageDisabled={pagination.current_page >= pagination.total_pages}
      />
    </SkDiv>
  );
}
