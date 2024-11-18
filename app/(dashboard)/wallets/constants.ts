import { Account } from "@/types/accounts";

export type WalletName = {
  name: string;
  date: number;
};
export type Wallet = {
  walletName: WalletName;
  kind: string;
  address: string;
  network: string;
  transactions: string;
};
export interface WalletAccount extends Account {
  wallets: Wallet[];
}
export const mockAccountsData: WalletAccount[] = [
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
    identification_uuid: "uuid-1",
    wallets: [
      {
        walletName: {
          name: "walletName1",
          date: 1731593757,
        },
        kind: "kind1",
        address: "address1",
        network: "network1",
        transactions: "transactions1",
      },
    ],
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
    identification_uuid: "uuid-2",
    wallets: [
      {
        walletName: {
          name: "walletName2",
          date: 1633123200,
        },
        kind: "kind2",
        address: "address2",
        network: "network2",
        transactions: "transactions2",
      },
    ],
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
    identification_uuid: "uuid-3",
    wallets: [
      {
        walletName: {
          name: "walletName3",
          date: 1633209600,
        },
        kind: "kind3",
        address: "address3",
        network: "network3",
        transactions: "transactions3",
      },
      {
        walletName: {
          name: "walletName4",
          date: 1633209600,
        },
        kind: "kind4",
        address: "address4",
        network: "network4",
        transactions: "transactions4",
      },
    ],
  },
];
