import Image from "next/image";
import React from "react";
import logo from "../public/logosmall2.png";

type Props = {};

const Logo = (props: Props) => {
  return (
    <div className="flex items-center gap-4">
      <Image src={logo} alt="logo" className="w-[40px] h-[40px]" />
      <p className="font-pop tracking-[8px] text-[24px] leading-3 font-[600] ">
        MORPHLITH
      </p>
    </div>
  );
};

export default Logo;
