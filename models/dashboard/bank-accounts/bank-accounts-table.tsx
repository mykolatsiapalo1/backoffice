import { DataTable } from "@/components/ui/data-table";
import { SkDiv } from "@/components/ui/sk-div";
import { ColumnDef } from "@tanstack/react-table";
import { BankAccount, BankAccountInfo } from "@/app/(dashboard)/bank-accounts/constants";
import { Button } from "@/components/ui/button";
import { format, fromUnixTime } from "date-fns";
import { useBool } from "@/hooks/useBool";
import { Input } from "@/components/ui/input";

export function BankAccountsTable({ selectedAccount }: { selectedAccount: BankAccount }) {
  const { toggleState, getState } = useBool();
  const columns: ColumnDef<BankAccountInfo>[] = [
    {
      header: "Alias",
      accessorKey: "alias",
      cell: ({ row }) => {
        return (
          <div>
            {getState("isEdit"+row.original.alias.id) ? (
              <div className="flex items-center">
                <Input className="w-[160px] text-depa-gray-600 text-sm font-semibold leading-tight border border-gray-300 rounded p-1 mr-2" value={row.original.alias.name} />
                <Button variant="ghost" onClick={() => toggleState("isEdit"+row.original.alias.id)}>
                  Save
                </Button>
                <Button variant="ghost" onClick={() => toggleState("isEdit"+row.original.alias.id)}>
                  Cancel
                </Button>
              </div>
            ) : (
              <div>
                {row.original.alias.name}
                <Button variant="ghost" onClick={() => toggleState("isEdit"+row.original.alias.id)}>
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
      header: "Holder",
      accessorKey: "holder",
    },
    {
      header: "Account Number",
      accessorKey: "accountNumber",
    },
    {
      header: "BIC",
      accessorKey: "bic",
    },
    {
      header: "Kind",
      accessorKey: "kind",
    },
    {
      header: "Transactions",
      accessorKey: "transactions",
      cell: ({ row }) => {
        return <Button variant="link">View payments</Button>;
      },
    },
  ];
  return (
    <SkDiv isLoading={!selectedAccount?.bankAccountsList?.length}>
      <DataTable columns={columns} data={selectedAccount?.bankAccountsList || []} />
    </SkDiv>
  );
}
