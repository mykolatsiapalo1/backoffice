import { SkDiv } from "@/components/ui/sk-div";
import { Button } from "@/components/ui/button";
import { SelectAccount } from "@/components/ui/select-account";
import { Account } from "@/types/accounts";

export function BankAccountsSelect({
  data,
  selectedAccount,
  setSelectedAccountId,
}: {
  data?: Account[];
  selectedAccount: Account;
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
        <Button>Create bank account</Button>
      </div>
    </SkDiv>
  );
}
