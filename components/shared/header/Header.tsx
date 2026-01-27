import { Feather, ShoppingBag, UserIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import AppUserIcon from "../user_icon";

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
        <AppUserIcon />
      </span>
    </div>
  );
};

export default Header;
