import Link from "next/link";
import React from "react";

type Props = {};

const Labs = (props: Props) => {
  return (
    <div className="flex flex-col items-center my-5">
      <img src="/computerlabs.png" />
      <div className="w-[80%] flex flex-col gap-2">
        <h2 className="gradient-text text-center font-cab text-[24px] font-[600] leading-[30px]">
          Morphlith Labs
        </h2>
        <h3 className="text-[20px] text-center md:text-[25px] font-cab text-black font-[500]">
          Building Tomorrow&apos;s Possibilities
        </h3>
        <h1 className=" font-cab text-center md:text-left font-[400]">
          Morphlith Labs is the pulsating heart of the morphlith tech innovation
          ecosystem. Here in our Labs, we transcend the boundaries of
          conventional thinking, where ideas are not just conceived but
          meticulously crafted into technological marvels.
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
