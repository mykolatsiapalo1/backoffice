"use client";

import { axiosInstance } from "@/lib/axios";
import { DashboardAccountsTable } from "@/models/dashboard/dashboard-accounts-table";
import { DashboardInfoWrapper } from "@/models/dashboard/dashboard-info";
import { Account } from "@/types/accounts";
import { useEffect, useState } from "react";


export default function Home() {
  const [accounts, setAccounts] = useState<Account[]>([]);

  const fetchAccounts = async () => {
    const response = await axiosInstance.post("/requestDepasify", {
      url: "https://sandbox.depasify.com/api/v1/accounts",
      method: "GET",
    });
    setAccounts(response.data.data);
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  return (
    <div className="flex flex-col p-6">
      <DashboardInfoWrapper />
      <DashboardAccountsTable data={accounts} />
      
    </div>
  );
}

