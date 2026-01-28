"use client";

import { Button } from "@/components/ui/button";
import { register } from "@/lib/actions/user";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

const RegisterForm = () => {
  const [data, action] = useActionState(register, {
    success: false,
    message: "",
  });
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const RegisterButton = () => {
    const { pending } = useFormStatus();
    return (
      <Button disabled={pending}>
        {pending ? "Registering..." : "Register"}
      </Button>
    );
  };

  return (
    <div>
      <form action={action}>
        <input type="hidden" name="callbackUrl" value={callbackUrl} />
        <input type="name" placeholder="Name" name="name" required />
        <input type="email" placeholder="Email Id" name="email" required />
        <input type="password" placeholder="abc123@" name="password" required />
        <input
          type="password"
          placeholder="abc123@"
          name="confirmPassword"
          required
        />
        <RegisterButton />
      </form>

      {data && !data.success && <p className="text-red-600">{data.message}</p>}

      <p>
        Already have account? <Link href="/login"> Login </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
