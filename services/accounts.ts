import { axiosInstance } from "@/lib/axios";
import { Account } from "@/types/accounts";
export type AccountsResponse = {
  data: Account[];
  pagination: Pagination;
};
export type Pagination = {
  current_page: number;
  per_page: number;
  total_count: number;
  total_pages: number;
};

export const getAccounts = async (status_verification: string, current_page: number, per_page: number) => {
  const response = await axiosInstance.post(`/requestDepasify/accounts?status_verification=${status_verification}`, {
    current_page: current_page,
    per_page: per_page,
  });
  return response.data as AccountsResponse;
};

export const getAllAccounts = async () => {
  const response = await getAccounts("", 1, 1000);
  return response.data as Account[];
};

export const getBankAccounts = async (accountId: string) => {
  const response = await axiosInstance.post("/requestDepasify", {
    url: `https://sandbox.depasify.com/api/v1/accounts/${accountId}/bank-accounts`,
    method: "GET",
  });
  return response.data;
};
