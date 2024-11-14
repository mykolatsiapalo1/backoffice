'use client';
import Link from 'next/link';

import { ArrowRight } from 'lucide-react';
import LoginForm from '@/models/auth/login-form/login-form';

function Login() {
  return (
    <main className="container flex h-screen max-w-screen-xl items-center justify-center">
      <section className="flex h-screen w-96 flex-col justify-center">
        <LoginForm />
        <div className="mt-6 flex items-center justify-center text-sm font-medium dark:text-white">
          Don&apos;t have an account?
          <Link
            href={'/auth/sign-up'}
            className="ml-1 flex items-center text-primary underline"
          >
            Create an account
            <ArrowRight className="ml-1 text-primary" />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Login;
