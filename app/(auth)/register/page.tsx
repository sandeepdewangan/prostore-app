import { auth } from "@/auth";
import { redirect } from "next/navigation";
import RegisterForm from "./register_form";

const Register = async (props: {
  searchParams: Promise<{ callbackUrl: string }>;
}) => {
  const { callbackUrl } = await props.searchParams;
  const session = await auth();
  if (session) {
    return redirect(callbackUrl || "/");
  }
  return (
    <>
      <h1 className="text-lg">Register...</h1>
      <RegisterForm />
    </>
  );
};

export default Register;
