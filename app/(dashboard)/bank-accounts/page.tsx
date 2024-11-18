"use client";
import { BankAccountsBalance } from "@/models/dashboard/bank-accounts/bank-accounts-balance";
import { BankAccountsSelect } from "@/models/dashboard/bank-accounts/bank-accounts-select";
import { BankAccountsTable } from "@/models/dashboard/bank-accounts/bank-accounts-table";
import { BankAccount } from "./constants";
import { useEffect, useMemo, useState } from "react";
import { getAllAccounts } from "@/services/accounts";
import { Account } from "@/types/accounts";

export default function BankAccountsPage() {
  const [selectedAccountId, setSelectedAccountId] = useState<string>("");
  const [accounts, setAccounts] = useState<Account[]>([]);
  useEffect(() => {
    getAllAccounts().then((accounts) => {
      setAccounts(accounts);
      setSelectedAccountId(accounts[0].id);
    });
  }, []);

  const selectedAccount = useMemo(
    () => accounts?.find((account) => account.id === selectedAccountId) as BankAccount,
    [selectedAccountId],
  );
  
  return (
    <div className="flex flex-col p-6">
      <BankAccountsSelect
        data={accounts}
        selectedAccount={selectedAccount}
        setSelectedAccountId={setSelectedAccountId}
      />
      <BankAccountsBalance balance={selectedAccount?.balance} />
      {/*<BankAccountsTable selectedAccount={selectedAccount} /> */}
    </div>
  );
}
