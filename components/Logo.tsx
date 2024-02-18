import Image from "next/image";
import React from "react";
import logo from "../public/logosmall2.png";
import Link from "next/link";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Link href="/" className="flex items-center gap-4">
      <Image src={logo} alt="logo" className="w-[40px] h-[40px]" />
      <p className="font-pop tracking-[6px] text-[24px] leading-3 font-[600] ">
        MORPHLITH
      </p>
    </Link>
  );
};

export default Logo;
