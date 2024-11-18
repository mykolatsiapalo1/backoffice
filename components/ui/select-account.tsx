import { Account } from "@/types/accounts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import React from "react";
import { cn } from "@/lib/utils";

export interface SelectAccountProps extends React.HTMLAttributes<HTMLDivElement> {
  data: Account[];
  selectedAccount: Account;
  setSelectedAccountId: (id: string) => void;
}

const SelectAccount = React.forwardRef<HTMLDivElement, SelectAccountProps>(
  ({ data, selectedAccount, setSelectedAccountId, className }, ref) => (
    <div ref={ref} className={cn("w-full", className)}>
      <Select onValueChange={(value) => setSelectedAccountId(value)}>
        <SelectTrigger>
          <SelectValue placeholder={<SelectItemRow {...selectedAccount} />} />
        </SelectTrigger>
        <SelectContent>
          {data?.map((account) => (
            <SelectItem value={account.id} key={account.id}>
              <SelectItemRow {...account} />
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  ),
);

const SelectItemRow = (account: Account) => {
  return (
    <div>
      <span>{account.complete_name}</span>
      <span className="text-gray-400"> - {account.identification_external_uuid}</span>
    </div>
  );
};
export { SelectAccount };
