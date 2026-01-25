import { Feather, LogIn, ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex space-x-16 p-4">
      <span className="flex">
        <Feather />
        <Link href="/">Prostore</Link>
      </span>
      <span className="flex">
        <ShoppingBag />
        <Link href="/cart">Cart</Link>
      </span>
      <span className="flex">
        <LogIn />
        <Link href="/login">Login</Link>
      </span>
    </div>
  );
};

export default Header;
