import { Select } from "@/components/ui/select";
import { SkDiv } from "@/components/ui/sk-div";
import { Account } from "@/types/accounts";
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
export function BankAccountsSelect({ data }: { data?: Account[] }) {
  return (
    <SkDiv isLoading={!data?.length}>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </SkDiv>
  );
}
