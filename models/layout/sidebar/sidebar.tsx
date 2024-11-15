import TagItem from "@/components/ui/tag-item";
// import AuthService from "@/services/auth-service";
import { HomeIcon, WalletIcon, BanknoteIcon, UsersIcon, ChartBarIcon, ShieldIcon } from "lucide-react";
import Link from "next/link";
export function Sidebar() {
  return (
    <aside className="flex h-full flex-col gap-2 border-[1px] border-input px-2 py-4">
      <Link href="/">
        <TagItem>
          <TagItem.Icon>
            <HomeIcon />
          </TagItem.Icon>
          <TagItem.Sign>Dashboard</TagItem.Sign>
        </TagItem>
      </Link>
      <Link href="/bank-accounts">
        <TagItem>
        <TagItem.Icon>
          <BanknoteIcon />
          </TagItem.Icon>
          <TagItem.Sign>Bank Accounts</TagItem.Sign>
        </TagItem>
      </Link>
      <Link href="/wallets">
        <TagItem>
          <TagItem.Icon>
            <WalletIcon />
        </TagItem.Icon>
          <TagItem.Sign>Wallets</TagItem.Sign>
        </TagItem>
      </Link>
      <Link href="/treasury">
        <TagItem>
          <TagItem.Icon>
            <WalletIcon />
        </TagItem.Icon>
          <TagItem.Sign>Treasury</TagItem.Sign>
        </TagItem>
      </Link>
      <TagItem>
        <TagItem.Icon>
          <ShieldIcon />
        </TagItem.Icon>
        <TagItem.Sign>Counterparties</TagItem.Sign>
      </TagItem>
    </aside>
  );
}
