"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SignupForm from "@/models/auth/sign-up-form/sign-up-form";
import { useBool } from "@/hooks/useBool";

function Signup() {
  const { changeState, getState } = useBool();
  return (
    <main className="container flex h-screen max-w-screen-xl items-center justify-center">
      <section className="flex h-full w-96 flex-col items-center justify-center">
        {getState("isSuccess") ? (
          <div className="relative flex w-screen flex-col items-center justify-center">
            <h2 className="z-10 w-full text-nowrap text-center text-4xl font-bold text-white">
              Thank you for signing up!
            </h2>
            <h2 className="z-10 w-full text-nowrap text-center text-4xl font-bold text-white">
              Please check your email for confirmation
            </h2>
            <svg
              className="absolute bottom-[-100px] left-0 w-full rounded-[8%]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                className="fill-ring"
                fillOpacity="1"
                d="M0,64L80,85.3C160,107,320,149,480,138.7C640,128,800,64,960,42.7C1120,21,1280,43,1360,53.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
          </div>
        ) : (
          <>
            <SignupForm onSuccess={() => changeState("isSuccess", true)} />
            <div className="mt-6 flex items-center justify-center text-sm font-medium dark:text-white">
              Already have an account?{" "}
              <Link href={"/auth/login"} className="ml-1 flex items-center text-primary underline">
                Login
                <ArrowRight className="ml-1 text-primary" />
              </Link>
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default Signup;
