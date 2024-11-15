"use client";

import { useEffect, useMemo, useState } from "react";
import { mockAccountsData, WalletAccount } from "./constants";
import { WalletsSelect } from "@/models/dashboard/wallets/wallets-select";
import { WalletsTable } from "@/models/dashboard/wallets/wallets-table";

export default function WalletsPage() {
  const [selectedAccountId, setSelectedAccountId] = useState<string>("");
  useEffect(() => {
    setSelectedAccountId(mockAccountsData[0].id);
  }, []);
  const selectedAccount = useMemo(
    () => mockAccountsData?.find((account) => account.id === selectedAccountId) as WalletAccount,
    [selectedAccountId],
  );
  return (
    <div className="flex flex-col p-6">
      <WalletsSelect
        data={mockAccountsData}
        selectedAccount={selectedAccount}
        setSelectedAccountId={setSelectedAccountId}
      />
      <WalletsTable selectedAccount={selectedAccount} />
    </div>
  );
}
