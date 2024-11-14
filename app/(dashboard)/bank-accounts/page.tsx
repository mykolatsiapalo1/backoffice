"use client";
import { mockAccountsData } from "./constants";
import { BankAccountsBalance } from "@/models/dashboard/bank-accounts/bank-accounts-balance";
import { BankAccountsSelect } from "@/models/dashboard/bank-accounts/bank-accounts-select";
import { BankAccountsTable } from "@/models/dashboard/bank-accounts/bank-accounts-table";
import { BankAccount } from "./constants";
import { Account } from "@/types/accounts";
import { useEffect, useMemo, useState } from "react";



export default function BankAccountsPage() {
  const [selectedAccountId, setSelectedAccountId] = useState<string>("");
  useEffect(() => {
    setSelectedAccountId(mockAccountsData[0].id);
  }, []);
  const selectedAccount = useMemo(
    () => mockAccountsData?.find((account) => account.id === selectedAccountId) as BankAccount,
    [selectedAccountId],
  );
  return (
    <div className="flex flex-col p-6">
      <BankAccountsSelect data={mockAccountsData} selectedAccount={selectedAccount} setSelectedAccountId={setSelectedAccountId} />
      <BankAccountsBalance balance={selectedAccount?.balance} />
      <BankAccountsTable selectedAccount={selectedAccount} />
    </div>
  );
}
