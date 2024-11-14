import { BankAccountsSelect } from "@/models/dashboard/bank-accounts/bank-accounts-select";
import { mockAccountsData } from "../page";

export default function BankAccountsPage() {
  return (
    <div className="flex flex-col p-6">
      <BankAccountsSelect data={mockAccountsData} />
    </div>
  );
}
