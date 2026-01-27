import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const LoginForm = () => {
  return (
    <div>
      <form>
        <input type="email" placeholder="Email Id" name="email" required />
        <input type="password" placeholder="abc123@" name="password" required />
        <Button>Submit</Button>
      </form>
      <p>
        Do not have account? <Link href="/register"> Register </Link>
      </p>
    </div>
  );
};

export default LoginForm;
