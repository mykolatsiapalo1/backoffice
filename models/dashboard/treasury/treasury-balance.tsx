import { SkDiv } from "@/components/ui/sk-div";
import { TreasuryAccount } from "@/app/(dashboard)/treasury/constants";

export function TreasuryBalance({ account }: { account: TreasuryAccount }) {
  return (
    <SkDiv className="grid">
      <div className="mb-8 grid">
        <span className="mb-2 text-base font-normal leading-normal text-primary">Euro balance</span>
        <span className="text-depa-gray-700 text-4xl font-semibold leading-9">{account?.balance?.EUR}</span>
      </div>
      <div className="grid">
        <span className="mb-2 text-base font-normal leading-normal text-primary">Other balance</span>
        <span className="mb-2 text-sm font-semibold leading-none text-slate-900">{account?.otherBalance?.currency}</span>
        <span className="text-xs font-light leading-none text-slate-900">{account?.otherBalance?.value}</span>
      </div>
    </SkDiv>
  );
}
