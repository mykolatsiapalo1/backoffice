import { DataTable } from "@/components/ui/data-table";
import { SkDiv } from "@/components/ui/sk-div";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { format, fromUnixTime } from "date-fns";
import { useState } from "react";
import { Activity, TreasuryAccount } from "@/app/(dashboard)/treasury/constants";

export function TreasuryTable({ selectedAccount }: { selectedAccount: TreasuryAccount }) {
  const [editAlias, setEditAlias] = useState<string[]>([]);
  const addEditAlias = (id: string) => {
    setEditAlias(editAlias.concat(id));
  };
  const removeEditAlias = (id: string) => {
    setEditAlias(editAlias.filter((aliasId) => aliasId !== id));
  };
  const columns: ColumnDef<Activity>[] = [
    {
      header: "PAIR",
      accessorKey: "pair",
    },
    {
      header: "TYPE",
      accessorKey: "type",
    },
    {
      header: "AMOUNT",
      accessorKey: "amount",
      cell: ({ row }) => {
        return (
          <>
            <div>
              <span>{row.original.amount[0].currency}</span>
              <span>{row.original.amount[0].value}</span>
            </div>
            <div>
              <span>{row.original.amount[1].currency}</span>
              <span>{row.original.amount[1].value}</span>
            </div>
          </>
        );
      },
    },
    {
      header: "PRICE",
      accessorKey: "price",
    },
    {
      header: "TIME",
      accessorKey: "time",
      cell: ({ row }) => {
        return (
          <>
            <div>{format(fromUnixTime(row.original.time), "dd LLLL yyyy")}</div>
            <div>{format(fromUnixTime(row.original.time), "HH:mm")}</div>
          </>
        );
      },
    },
    {
      header: "STATUS",
      accessorKey: "status",
    },
    {
      header: "DETAILS",
      accessorKey: "details",
      cell: ({ row }) => {
        return <Button variant="link">View</Button>;
      },
    },
  ];
  return (
    <SkDiv isLoading={!selectedAccount?.activities?.length}>
      <DataTable
        columns={columns}
        data={selectedAccount?.activities || []}
        currPage={1}
        totalCount={selectedAccount?.activities?.length || 0}
        limit={10}
        getPrevPage={() => {}}
        getNextPage={() => {}}
        isPrevPageDisabled={false}
        isNextPageDisabled={false}
      />
    </SkDiv>
  );
}
