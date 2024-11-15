import { DataTable } from "@/components/ui/data-table";
import { SkDiv } from "@/components/ui/sk-div";
import { ColumnDef } from "@tanstack/react-table";
import { BankAccount, BankAccountInfo } from "@/app/(dashboard)/bank-accounts/constants";
import { Button } from "@/components/ui/button";
import { format, fromUnixTime } from "date-fns";
import { useBool } from "@/hooks/useBool";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function BankAccountsTable({ selectedAccount }: { selectedAccount: BankAccount }) {
  const [editAlias, setEditAlias] = useState<string[]>([]);
  const addEditAlias = (id: string) => {
    setEditAlias(editAlias.concat(id));
  };
  const removeEditAlias = (id: string) => {
    setEditAlias(editAlias.filter((aliasId) => aliasId !== id));
  };
  const columns: ColumnDef<BankAccountInfo>[] = [
    {
      header: "ALIAS",
      accessorKey: "alias",
      cell: ({ row }) => {
        return (
          <div>
            {editAlias.includes(row.original.alias.id) ? (
              <div className="flex items-center">
                <Input
                  className="text-depa-gray-600 mr-2 w-[160px] rounded border border-gray-300 p-1 text-sm font-semibold leading-tight"
                  value={row.original.alias.name}
                />
                <Button variant="ghost" onClick={() => removeEditAlias(row.original.alias.id)}>
                  Save
                </Button>
                <Button variant="ghost" onClick={() => removeEditAlias(row.original.alias.id)}>
                  Cancel
                </Button>
              </div>
            ) : (
              <div>
                {row.original.alias.name}
                <Button variant="ghost" onClick={() => addEditAlias(row.original.alias.id)}>
                  edit
                </Button>
              </div>
            )}
            {format(fromUnixTime(row.original.alias.date), "dd LLLL yyyy")}
          </div>
        );
      },
    },
    {
      header: "HOLDER",
      accessorKey: "holder",
    },
    {
      header: "ACCOUNT NUMBER",
      accessorKey: "accountNumber",
    },
    {
      header: "BIC",
      accessorKey: "bic",
    },
    {
      header: "KIND",
      accessorKey: "kind",
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
    <SkDiv isLoading={!selectedAccount?.bankAccountsList?.length}>
      <DataTable
        columns={columns}
        data={selectedAccount?.bankAccountsList || []}
        currPage={1}
        totalCount={selectedAccount?.bankAccountsList?.length || 0}
        limit={10}
        getPrevPage={() => {}}
        getNextPage={() => {}}
        isPrevPageDisabled={false}
        isNextPageDisabled={false}
      />
    </SkDiv>
  );
}
