import { Account } from "@/types/accounts";

export type Amount = {
  currency: string;
  value: number;
};
export type Activity = {
  pair: string;
  type: string;
  amount: Amount[];
  price: number;
  time: number;
  status: string;
};
export interface TreasuryAccount extends Account {
  activities: Activity[];
  otherBalance: Amount;
}
export const mockAccountsData: TreasuryAccount[] = [
  {
    id: "1",
    referral: "referral1",
    status: "active",
    alias: null,
    created_at: 1731593757,
    balance: { USD: 1000, EUR: 850 },
    status_verification: "verified",
    complete_name: "John Doe",
    identification_external_uuid: "uuid-1",
    activities: [
      {
        pair: "BTC/USD",
        type: "buy",
        amount: [{ currency: "USD", value: 1000 }, { currency: "BTC", value: 0.01 }],
        price: 10000,
        time: 1731593757,
        status: "confirmed",
      },
      {
        pair: "BTC/USD",
        type: "sell",
        amount: [{ currency: "USD", value: 1000 }, { currency: "BTC", value: 0.01 }],
        price: 10000,
        time: 1731593757,
        status: "confirmed",
      },
    ],
    otherBalance: { currency: "USD", value: 1000 },
  },
  {
    id: "2",
    referral: "referral2",
    status: "inactive",
    alias: null,
    created_at: 1633123200,
    balance: { USD: 500, EUR: 400 },
    status_verification: "pending",
    complete_name: "Jane Smith",
    identification_external_uuid: "uuid-2",
    activities: [],
    otherBalance: { currency: "USD", value: 500 },
  },
  {
    id: "3",
    referral: "referral3",
    status: "active",
    alias: null,
    created_at: 1633209600,
    balance: { USD: 1500, EUR: 200000 },
    status_verification: "verified",
    complete_name: "Alice Johnson",
    identification_external_uuid: "uuid-3",
    activities: [
      {
        pair: "BTC/USD",
        type: "buy",
        amount: [{ currency: "USD", value: 1500 }, { currency: "BTC", value: 0.01 }],
        price: 10000,
        time: 1731666245,
        status: "pending",
      },
      {
        pair: "BTC/USD",
        type: "sell",
        amount: [{ currency: "USD", value: 1500 }, { currency: "BTC", value: 0.01 }],
        price: 10000,
        time: 1731593757,
        status: "confirmed",
      },
      {
        pair: "BTC/USD",
        type: "buy",
        amount: [{ currency: "USD", value: 1500 }, { currency: "BTC", value: 0.01 }],
        price: 10000,
        time: 1731593757,
        status: "confirmed",
      },
    ],
    otherBalance: { currency: "USD", value: 1500 },
  },
];

export type TradePair = {
  value: string;
  label: string;
  price: number;
};

export const tradePairs: TradePair[] = [
  { value: "btc/usd", label: "BTC/USD", price: 0 },
  { value: "eth/usd", label: "ETH/USD", price: 1 },
  { value: "sol/usd", label: "SOL/USD", price: 2 },
];

export type OrderType = "market" | "limit";
export const orderTypes: OrderType[] = ["market", "limit"];
export const buyAmounts: string[] = ["1000", "2500", "5000", "10000"];
export const sellPercentages: number[] = [0.25, 0.5, 0.75, 1];
