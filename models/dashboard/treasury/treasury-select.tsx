import { Select } from "@/components/ui/select";
import { SkDiv } from "@/components/ui/sk-div";
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TreasuryAccount } from "@/app/(dashboard)/treasury/constants";
import { SelectAccount } from "@/components/ui/select-account";

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
      <SelectAccount
          data={data || []}
          selectedAccount={selectedAccount}
          setSelectedAccountId={setSelectedAccountId}
        />
      </div>
    </SkDiv>
  );
}
