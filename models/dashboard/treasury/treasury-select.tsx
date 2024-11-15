import { Select } from "@/components/ui/select";
import { SkDiv } from "@/components/ui/sk-div";
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TreasuryAccount } from "@/app/(dashboard)/treasury/constants";

export function TreasurySelect({
  data,
  selectedAccount,
  setSelectedAccountId,
}: {
  data?: TreasuryAccount[];
  selectedAccount: TreasuryAccount;
  setSelectedAccountId: (id: string) => void;
}) {
  return (
    <SkDiv isLoading={!data?.length}>
      <span className="mb-2 text-base font-normal leading-normal text-primary">Select account</span>
      <div className="mb-4 mt-2 flex w-full items-center gap-2 text-base">
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
    </SkDiv>
  );
}

function SelectItemRow(account: TreasuryAccount) {
  return (
    <div>
      <span>{account.complete_name}</span>
      <span className="text-gray-400"> - {account.identification_external_uuid}</span>
    </div>
  );
}
