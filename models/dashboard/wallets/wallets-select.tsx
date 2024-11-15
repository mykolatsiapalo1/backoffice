import { Select } from "@/components/ui/select";
import { SkDiv } from "@/components/ui/sk-div";
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { WalletAccount } from "@/app/(dashboard)/wallets/constants";

export function WalletsSelect({
  data,
  selectedAccount,
  setSelectedAccountId,
}: {
  data?: WalletAccount[];
  selectedAccount: WalletAccount;
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
        <Button>Create wallet</Button>
      </div>
    </SkDiv>
  );
}

function SelectItemRow(account: WalletAccount) {
  return (
    <div>
      <span>{account.complete_name}</span>
      <span className="text-gray-400"> - {account.identification_external_uuid}</span>
    </div>
  );
}
