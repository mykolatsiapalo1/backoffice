"use client";

import { axiosInstance } from "@/lib/axios";
import { DashboardAccountsTable } from "@/models/dashboard/dashboard-accounts-table";
import { DashboardInfoWrapper } from "@/models/dashboard/dashboard-info";
import { Account } from "@/types/accounts";
import { useEffect, useState } from "react";

export const mockAccountsData: Account[] = [
  {
    id: "1",
    referral: "referral1",
    status: "active",
    alias: null,
    created_at: 1633036800,
    balance: { USD: 1000, EUR: 850 },
    status_verification: "verified",
    complete_name: "John Doe",
    identification_external_uuid: "uuid-1",
  },
  {
    id: "2",
    referral: "referral2",
    status: "inactive",
    alias: null,
    created_at: 1633123200,
    balance: { USD: 500, GBP: 400 },
    status_verification: "pending",
    complete_name: "Jane Smith",
    identification_external_uuid: "uuid-2",
  },
  {
    id: "3",
    referral: "referral3",
    status: "active",
    alias: null,
    created_at: 1633209600,
    balance: { USD: 1500, JPY: 200000 },
    status_verification: "verified",
    complete_name: "Alice Johnson",
    identification_external_uuid: "uuid-3",
  },
  {
    id: "4",
    referral: "referral4",
    status: "suspended",
    alias: null,
    created_at: 1633296000,
    balance: { USD: 300, AUD: 400 },
    status_verification: "not_verified",
    complete_name: "Bob Brown",
    identification_external_uuid: "uuid-4",
  },
  {
    id: "5",
    referral: "referral5",
    status: "active",
    alias: null,
    created_at: 1633382400,
    balance: { USD: 2000, CAD: 2500 },
    status_verification: "verified",
    complete_name: "Charlie Davis",
    identification_external_uuid: "uuid-5",
  },
  {
    id: "6",
    referral: "referral6",
    status: "inactive",
    alias: null,
    created_at: 1633468800,
    balance: { USD: 0, NZD: 100 },
    status_verification: "pending",
    complete_name: "Diana Evans",
    identification_external_uuid: "uuid-6",
  },
  {
    id: "7",
    referral: "referral7",
    status: "active",
    alias: null,
    created_at: 1633555200,
    balance: { USD: 750, CHF: 600 },
    status_verification: "verified",
    complete_name: "Ethan Foster",
    identification_external_uuid: "uuid-7",
  },
  {
    id: "8",
    referral: "referral8",
    status: "active",
    alias: null,
    created_at: 1633641600,
    balance: { USD: 1200, SEK: 10000 },
    status_verification: "verified",
    complete_name: "Fiona Green",
    identification_external_uuid: "uuid-8",
  },
  {
    id: "9",
    referral: "referral9",
    status: "inactive",
    alias: null,
    created_at: 1633728000,
    balance: { USD: 400, NOK: 3000 },
    status_verification: "not_verified",
    complete_name: "George Harris",
    identification_external_uuid: "uuid-9",
  },
  {
    id: "10",
    referral: "referral10",
    status: "active",
    alias: null,
    created_at: 1633814400,
    balance: { USD: 600, SGD: 800 },
    status_verification: "verified",
    complete_name: "Hannah Ivers",
    identification_external_uuid: "uuid-10",
  },
];

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

