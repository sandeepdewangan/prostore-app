import { auth } from "@/auth";
import { logout } from "@/lib/actions/user";
import { LogIn, UserIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const AppUserIcon = async () => {
  const session = await auth();
  if (!session) {
    return (
      <Link href="/login">
        <LogIn /> Login
      </Link>
    );
  } else {
    return (
      <div>
        <UserIcon />
        Welcome {session.user?.name}
        <form action={logout}>
          <Button>Log out</Button>
        </form>
      </div>
    );
  }
};

export default AppUserIcon;
