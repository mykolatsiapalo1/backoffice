import { Select } from "@/components/ui/select";
import { SkDiv } from "@/components/ui/sk-div";
import { BankAccount } from "@/app/(dashboard)/bank-accounts/constants";
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
export function BankAccountsSelect({
  data,
  selectedAccount,
  setSelectedAccountId,
}: {
  data?: BankAccount[];
  selectedAccount: BankAccount;
  setSelectedAccountId: (id: string) => void;
}) {

  return (
    <SkDiv isLoading={!data?.length}>
      <span className="mb-2 text-base font-normal leading-normal text-primary">Select account</span>
      <div className="mt-2 mb-4 flex w-[100%] items-center gap-2 text-base">
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
        <Button>Create bank account</Button>
      </div>
    </SkDiv>
  );
}

function SelectItemRow(account: BankAccount) {
  return (
    <div>
      <span>{account.complete_name}</span>
      <span className="text-gray-400"> - {account.identification_external_uuid}</span>
    </div>
  );
}
