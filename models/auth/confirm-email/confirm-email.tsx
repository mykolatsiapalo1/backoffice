"use client";

import { SmallLoader } from "@/components/loader/small-loader";
import { useBool } from "@/hooks/useBool";
import authService from "@/services/auth-service";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function ConfirmEmail() {
  const { changeState, getState } = useBool();
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const handleConfirmEmail = async () => {
    if (!token) return;
    const response = await authService.confirmEmail(token);
    if (response.status === 200) {
      setTimeout(() => {
        changeState("isSuccess", true);
      }, 1000);
      setTimeout(() => {
        router.push("/auth/login");
      }, 2000);
    }
  };

  useEffect(() => {
    handleConfirmEmail();
  }, [token]);

  return (
    <div className="flex min-h-32 flex-row items-center justify-between gap-12 rounded-xl bg-ring px-12 py-4">
      {getState("isSuccess") ? <div className="h-16 w-16 rounded-full bg-white"></div> : <SmallLoader />}

      <span className="text-2xl font-bold text-white">
        {getState("isSuccess") ? "Email confirmed successfully" : "Confirming your email..."}
      </span>
    </div>
  );
}
