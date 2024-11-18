import { Account } from "@/types/accounts";

export type Alias = {
  name: string;
  date: number;
  id: string;
}
export type BankAccountInfo = {
  alias: Alias;
  holder: string;
  accountNumber: string;
  bic: string;
  kind: string;
  transactions: string;
}
export interface BankAccount extends Account {
  bankAccountsList: BankAccountInfo[];
}
export const mockAccountsData: BankAccount[] = [
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
    bankAccountsList: [
      {
        alias: {
          name: "alias1",
          date: 1731593757,
          id: "1",
        },
        holder: "holder1",
        accountNumber: "accountNumber1",
        bic: "bic1",
        kind: "kind1",
        transactions: "transactions1",
      }
    ]
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
    bankAccountsList: [
      {
        alias: {
          name: "alias2",
          date: 1633123200,
          id: "2",
        },
        holder: "holder2",
        accountNumber: "accountNumber2",
        bic: "bic2",
        kind: "kind2",
        transactions: "transactions2",
      }
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
    bankAccountsList: [
      {
        alias: {
          name: "alias3",
          date: 1633209600,
          id: "3",
        },
        holder: "holder3",
        accountNumber: "accountNumber3",
        bic: "bic3",
        kind: "kind3",
        transactions: "transactions3",
      },
      {
        alias: {
          name: "alias4",
          date: 1330515905,
          id: "4",
        },
        holder: "holder4",
        accountNumber: "accountNumber4",
        bic: "bic4",
        kind: "kind4",
        transactions: "transactions4",
      },
    ],
  }
];
