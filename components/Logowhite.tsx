import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/artboard.png";

type Props = {};

const Logowhite = (props: Props) => {
  return (
    <Link href="/" className="flex items-center gap-4">
      <Image src={logo} alt="logo" className="w-[40px] h-[40px]" />
      <p className="font-pop text-white tracking-[6px] text-[24px] leading-3 font-[600] ">
        MORPHLITH
      </p>
    </Link>
  );
};

export default Logowhite;
