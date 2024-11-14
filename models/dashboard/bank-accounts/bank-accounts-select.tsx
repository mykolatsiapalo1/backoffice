import { Select } from "@/components/ui/select";
import { SkDiv } from "@/components/ui/sk-div";
import { Account } from "@/types/accounts";
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useMemo } from "react";
export function BankAccountsSelect({ data, selectedAccountId }: { data?: Account[]; selectedAccountId: string }) {
  const selectedAccount = useMemo(() => data?.find((account) => account.id === selectedAccountId), [selectedAccountId]);
  return (
    <SkDiv isLoading={!data?.length}>
      <span className="mb-2 text-base font-normal leading-normal text-primary">Select account</span>
      {/* <Select>
        <SelectTrigger className="mt-2 w-[100%] text-base">
          <SelectValue
            placeholder={<SelectItemRow {...selectedAccount} />}
          />
        </SelectTrigger>
        <SelectContent>
          {data?.map((account) => (
            <SelectItem value={account.id}>
              <SelectItemRow {...account} />
            </SelectItem>
          ))}
        </SelectContent>
      </Select> */}
    </SkDiv>
  );
}

function SelectItemRow(account: Account) {
  return (
    <div>
      <span>{account.complete_name}</span>
      <span className="text-gray-400"> - {account.identification_external_uuid}</span>
    </div>
  );
}
