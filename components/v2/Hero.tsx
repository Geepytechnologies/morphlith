import React from "react";
import { FaMousePointer } from "react-icons/fa";
import AnimatedCursor from "./AnimatedCursor";
import Image from "next/image";
import Vertex from "@/assets/svg/companies/vertex.svg";
import aromix from "@/assets/svg/companies/aromix.svg";
import fireli from "@/assets/svg/companies/fireli.svg";
import martino from "@/assets/svg/companies/martino.svg";
import squarestone from "@/assets/svg/companies/squarestone.svg";
import ScrollingLogos from "../ScrollingLogos";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="bg-[url('/heroimage.png')] bg-no-repeat bg-cover min-h-[500px] text-white p-4 sm:p-6 md:p-8 lg:p-10">
      {/* Cursors */}
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col w-[120px] sm:w-[150px]">
          <div className="self-end">
            <AnimatedCursor pointerClassName={"scale-x-[1]"} />
          </div>
          <div>
            <button className="font-pop pulse text-[12px] w-full bg-white rounded-[25px] text-black py-[10px] px-4">
              Software Solutions
            </button>
          </div>
        </div>
        <div className="flex flex-col w-[120px] sm:w-[150px] mr-4 sm:mr-10">
          <div className="self-end">
            <AnimatedCursor pointerClassName={"scale-x-[-1]"} />
          </div>
          <div>
            <button className="font-pop pulse text-[12px] w-full bg-white rounded-[25px] text-black py-[10px] px-4">
              Smart Business Tools
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center mt-6 sm:mt-8 md:mt-10 gap-6 sm:gap-10 md:gap-20">
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-[20px] text-left lg:text-left">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold leading-tight sm:leading-[50px] md:leading-[60px] font-space">
            Empowering Businesses with Smarter Tools
          </p>
          <p className="text-sm sm:text-base md:text-[18px] font-[400] font-pop">
            Transforming Industries with Cutting-Edge Technology
          </p>
          <div>
            <button className="bg-offset font-medium font-pop rounded-[25px] py-3 sm:py-[15px] px-6 sm:px-[35px]">
              Discover Morphlith Labs
            </button>
          </div>
        </div>
        <div className="w-full sm:w-[500px] md:w-[600px] lg:w-[700px] h-[250px] sm:h-[350px] md:h-[450px] relative ">
          <Image
            src="/heroel1.png"
            alt="Hero Element"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Companies Section */}
      <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 my-6 sm:my-8 md:my-10">
        <p className="font-space text-lg sm:text-xl md:text-[22px] text-center leading-relaxed sm:leading-[30px] md:leading-[35.2px]">
          Join the Growing Community of Businesses Embracing Smarter Solutions
        </p>
        {/* Companies Logos */}
        <div className="flex items-center justify-center w-full">
          <ScrollingLogos />
        </div>
      </div>
    </div>
  );
};

export default Hero;
