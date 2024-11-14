import { SkDiv } from "@/components/ui/sk-div";
import { BankAccount } from "@/app/(dashboard)/bank-accounts/constants";

export function BankAccountsBalance({ balance }: { balance: BankAccount["balance"] }) {
  return (
    <SkDiv className="grid">
      <div className="grid">
        <span className="mb-2 text-base font-normal leading-normal text-primary">Total balance</span>
        <span className="text-2xl font-semibold leading-9 text-primary">{balance?.USD}</span>
      </div>
    </SkDiv>
  );
}
