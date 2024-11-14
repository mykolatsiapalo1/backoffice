"use client";

import { ThemeProvider } from "@/models/general/theme-provider";
import { Navbar } from "@/models/layout/header/navbar";
import { Sidebar } from "@/models/layout/sidebar/sidebar";
import { useEffect, useState } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Only render the ThemeProvider after mounting
  }, []);

  if (!mounted) {
    return <>{children}</>; // Render without theme provider initially (avoids mismatch)
  }
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <main className="flex h-screen flex-col">
        <Navbar />
        <div className="grid flex-1 grid-cols-[250px_1fr]">
          <Sidebar />
          {children}
        </div>
      </main>
    </ThemeProvider>
  );
}
