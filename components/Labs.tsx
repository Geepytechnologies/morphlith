import Link from "next/link";
import React from "react";

type Props = {};

const Labs = (props: Props) => {
  return (
    <div className="flex flex-col items-center my-5">
      <img src="/computerlabs.png" className="w-[30%] h-full" />
      <div className="w-[80%] flex flex-col gap-2">
        <h2 className="gradient-text text-center font-cab text-[24px] font-[600] leading-[30px]">
          Discover the Innovation at Morphlith Labs
        </h2>
        {/* <h3 className="text-[20px] text-center md:text-[25px] font-cab text-black font-[500]">
          Building Tomorrow&apos;s Possibilities
        </h3> */}
        <h1 className="font-cab md:text-left font-[400]">
          At Morphlith Labs, we are dedicated to pushing the boundaries of
          technology. Our team specializes in creating cutting-edge websites,
          mobile applications, and cloud services that drive business success
          and growth.
        </h1>
        <Link
          href={"/labs"}
          className="px-3 py-2 rounded-[20px] w-max  bg-offset text-white"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default Labs;
