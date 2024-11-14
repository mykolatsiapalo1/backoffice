"use client";
import Link from "next/link";
import Image from "next/image";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ThemeDropdown } from "./theme-dropdown";

export const Navbar = () => {
  return (
    <nav className="border-[1px] border-input">
      <div className="container flex flex-row items-center justify-between px-8 py-2">
        <div className="flex items-center justify-start">
          <Link href={"/"} className="flex items-center">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/2/24/LEGO_logo.svg"
              className="mr-2 h-10"
              alt="Gravity Logo"
              width={40}
              height={40}
            />
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">Dashboard</span>
          </Link>
        </div>

        <ul className="flex flex-row items-center justify-end gap-4">
          <li>
            <ThemeDropdown />
          </li>
          <li>
            <div>
              <Avatar className="border border-input">
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
