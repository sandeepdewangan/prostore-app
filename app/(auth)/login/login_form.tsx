"use client";

import { Button } from "@/components/ui/button";
import { loginWithCredentials } from "@/lib/actions/user";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";

const LoginForm = () => {
  const [data, action] = useFormState(loginWithCredentials, {
    success: false,
    message: "",
  });
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const SignInButton = () => {
    const { pending } = useFormStatus();
    return (
      <Button disabled={pending}>{pending ? "Logging in..." : "Login"}</Button>
    );
  };

  return (
    <div>
      <form action={action}>
        <input type="hidden" name="callbackUrl" value={callbackUrl} />
        <input type="email" placeholder="Email Id" name="email" required />
        <input type="password" placeholder="abc123@" name="password" required />
        <SignInButton />
      </form>

      {data && !data.success && <p className="text-red-600">{data.message}</p>}

      <p>
        Do not have account? <Link href="/register"> Register </Link>
      </p>
    </div>
  );
};

export default LoginForm;
