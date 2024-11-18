import { Select } from "@/components/ui/select";
import { SkDiv } from "@/components/ui/sk-div";
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { WalletAccount } from "@/app/(dashboard)/wallets/constants";
import { SelectAccount } from "@/components/ui/select-account";

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
        <SelectAccount
          data={data || []}
          selectedAccount={selectedAccount}
          setSelectedAccountId={setSelectedAccountId}
        />
        <Button>Create wallet</Button>
      </div>
    </SkDiv>
  );
}
