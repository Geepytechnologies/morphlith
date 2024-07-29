import React from "react";
import Image from "next/image";
import lady from "../public/ladyfull.png";
import plan from "../public/futuristic.jpg";
import Rectangle from "@/public/Rectangle.svg";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  return (
    <>
      <div className="min-h-[500px] md:h-[400px] relative bg-[rgba(45,47,123,0.8)] ">
        <div className="min-h-[500px] md:h-[400px] w-full absolute top-0 left-0 bottom-0 z-10">
          <Image src={plan} alt="" fill />
        </div>
        <div className="min-h-[500px] md:h-[400px] w-full bg-[rgba(0,0,0,0.7)] absolute top-0 left-0 bottom-0 z-20"></div>

        <div className="min-h-[500px] md:h-[400px] w-full absolute top-0 left-0 bottom-0 flex flex-col md:flex-row justify-center items-center gap-2 lg:gap-5 py-4 px-3 lg:p-4 z-30">
          <div className="flex flex-col justify-center md:basis-[50%] ">
            <div className="flex flex-col items-center md:items-start gap-4">
              {/* beyond the ordinary */}
              {/* <div className="flex gap-2 items-center">
                <div className="w-[40px] bg-offset h-[2px]"></div>
                <span className="text-white uppercase">
                  Beyond the ordinary
                </span>
                <div className="w-[40px] bg-offset h-[2px]"></div>
              </div> */}
              <h1 className="text-[30px] md:text-[40px] font-cab text-white font-[500]">
                Shaping a Better Future Through{" "}
                <span className="text-offset">Technology.</span>
              </h1>
              <h1 className=" font-cab text-center md:text-left text-white font-[400]">
                Morphlith is a research-driven organization developing solutions
                across diverse sectors.
              </h1>
              <Link
                href={"/labs"}
                className="px-3 py-2 rounded-[20px] w-max  bg-offset text-white"
              >
                Learn more
              </Link>
            </div>
          </div>
          <div className=" text-white w-full font-cab md:basis-[50%] flex items-center justify-center">
            {/* <div className="relative w-full h-full flex justify-center">
              <Image src={lady} alt="morphlith" className="bg-center" />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
