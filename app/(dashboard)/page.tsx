"use client";

import { DashboardAccountsTable } from "@/models/dashboard/dashboard-accounts-table";
import { DashboardInfoWrapper } from "@/models/dashboard/dashboard-info";
import { AccountsResponse, getAccounts } from "@/services/accounts";
import { useEffect, useState } from "react";


export default function Home() {
  const [accounts, setAccounts] = useState<AccountsResponse>({
    data: [],
    pagination: { current_page: 0, per_page: 0, total_count: 0, total_pages: 0 },
  });
  function getNewAccounts(status_verification: string, current_page: number, per_page: number) {
    getAccounts(status_verification, current_page, per_page).then((response) => {
      setAccounts(response);
    });
  };
  useEffect(() => {
    getAccounts("", 1, 10).then((response) => {
      setAccounts(response);
    });
  }, []);

  return (
    <div className="flex flex-col p-6">
      <DashboardInfoWrapper />
      <DashboardAccountsTable
        data={accounts.data}
        pagination={accounts.pagination}
        getNewAccounts={getNewAccounts}
      />
    </div>
  );
}
