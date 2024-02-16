import React from "react";
import Logo from "../Logo";
import Link from "next/link";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="h-[90px] flex items-center justify-between px-2">
      <Logo />
      <div className=" hidden md:flex gap-3 items-center">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Services</Link>
        <Link href={"/"}>Blog</Link>
        <Link href={"/"}>Portfolio</Link>
        <Link href={"/"}>Contact</Link>
      </div>
      <div className="border flex md:hidden border-[#7d3e91] rounded-sm p-1">
        <HiOutlineMenuAlt1 className="text-[#7d3e91] text-[20px]" />
      </div>
    </div>
  );
};

export default Header;
