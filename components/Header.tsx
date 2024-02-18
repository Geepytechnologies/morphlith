import React from "react";
import Logo from "./Logo";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="h-[90px] sticky top-0  flex items-center justify-between px-2">
      <Logo />
      <div className="flex gap-3 items-center">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>About Us</Link>
        <Link href={"/labs"}>Labs</Link>
      </div>
    </div>
  );
};

export default Header;
