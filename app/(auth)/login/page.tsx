import React from "react";
import LoginForm from "./login_form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const Login = async () => {
  const session = await auth();
  if (session) {
    return redirect("/");
  }
  return (
    <>
      <h1 className="text-lg">Login...</h1>
      <LoginForm />
    </>
  );
};

export default Login;
