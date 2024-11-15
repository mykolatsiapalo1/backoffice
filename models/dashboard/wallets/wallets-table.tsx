import { DataTable } from "@/components/ui/data-table";
import { SkDiv } from "@/components/ui/sk-div";
import { ColumnDef } from "@tanstack/react-table";
import { BankAccount, BankAccountInfo } from "@/app/(dashboard)/bank-accounts/constants";
import { Button } from "@/components/ui/button";
import { format, fromUnixTime } from "date-fns";
import { useState } from "react";
import { WalletAccount } from "@/app/(dashboard)/wallets/constants";
import { Wallet } from "@/app/(dashboard)/wallets/constants";

export function WalletsTable({ selectedAccount }: { selectedAccount: WalletAccount }) {
  const [editAlias, setEditAlias] = useState<string[]>([]);
  const addEditAlias = (id: string) => {
    setEditAlias(editAlias.concat(id));
  };
  const removeEditAlias = (id: string) => {
    setEditAlias(editAlias.filter((aliasId) => aliasId !== id));
  };
  const columns: ColumnDef<Wallet>[] = [
    {
      header: "NAME",
      accessorKey: "walletName",
      cell: ({ row }) => {
        return (
          <div>
            <div>{row.original.walletName.name}</div>
            <div>{format(fromUnixTime(row.original.walletName.date), "dd LLLL yyyy")}</div>
          </div>
        );
      },
    },
    {
      header: "KIND",
      accessorKey: "kind",
    },
    {
      header: "ADDRESS",
      accessorKey: "address",
    },
    {
      header: "NETWORK",
      accessorKey: "network",
    },
    {
      header: "TRANSACTIONS",
      accessorKey: "transactions",
      cell: ({ row }) => {
        return <Button variant="link">View payments</Button>;
      },
    },
  ];
  return (
    <SkDiv isLoading={!selectedAccount?.wallets?.length}>
      <DataTable
        columns={columns}
        data={selectedAccount?.wallets || []}
        currPage={1}
        totalCount={selectedAccount?.wallets?.length || 0}
        limit={10}
        getPrevPage={() => {}}
        getNextPage={() => {}}
        isPrevPageDisabled={false}
        isNextPageDisabled={false}
      />
    </SkDiv>
  );
}
