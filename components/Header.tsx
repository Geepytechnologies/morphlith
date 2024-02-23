import React from "react";
import Logo from "./Logo";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="h-[90px] sticky top-0 z-[888] bg-white flex items-center justify-between px-2">
      <Logo />
      <div className="flex font-cab gap-3 items-center">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>About Us</Link>
        <Link href={"/labs"}>Labs</Link>
        <Link href={"/labs"}>Products</Link>
        <Link href={"/labs"}>Communities</Link>
      </div>
    </div>
  );
};

export default Header;
