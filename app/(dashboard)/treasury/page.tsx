"use client";

import { useEffect, useMemo, useState } from "react";
import { mockAccountsData, TreasuryAccount } from "./constants";
import { TreasurySelect } from "@/models/dashboard/treasury/treasury-select";
import { TreasuryBalance } from "@/models/dashboard/treasury/treasury-balance";
import { TreasuryTable } from "@/models/dashboard/treasury/treasury-table";
import { TreasuryExchanger } from "@/models/dashboard/treasury/treasury-exchanger";

export default function TreasuryPage() {
  const [selectedAccountId, setSelectedAccountId] = useState<string>("");
  useEffect(() => {
    setSelectedAccountId(mockAccountsData[0].id);
  }, []);
  const selectedAccount = useMemo(
    () => mockAccountsData?.find((account) => account.id === selectedAccountId) as TreasuryAccount,
    [selectedAccountId],
  );
  return (
    <div className="flex gap-6 p-6 md:overflow-y-auto">
      <div className="w-dvw">
        <div className="w-full">
          <TreasurySelect
            data={mockAccountsData}
            selectedAccount={selectedAccount}
            setSelectedAccountId={setSelectedAccountId}
          />
        </div>
        <div className="flex justify-between w-full mb-14">
          <TreasuryBalance account={selectedAccount} />
        </div>
        <div className="flex flex-col flex-grow">
          <TreasuryTable selectedAccount={selectedAccount} />
        </div>
      </div>
      <div className="w-min-[400px] w-[400px]">
        <div className="mb-4 animate-pulse bg-muted h-[236px] w-[400px] rounded-lg"></div>
        <TreasuryExchanger otherBalance={selectedAccount?.otherBalance} />
      </div>
    </div>
  );
}
