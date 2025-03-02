import React from "react";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";

type Props = {
  iconImage: any;
  title: string;
  description: string;
};

const ServiceCard = ({ iconImage, title, description }: Props) => {
  return (
    <div className="font-pop flex flex-col gap-6 sm:gap-8 md:gap-[50px] items-center bg-white p-4 sm:p-6 w-full sm:w-[300px] md:w-[339px] rounded-lg shadow-md">
      {/* Icon */}
      <div className="flex items-center justify-center">
        <Image
          alt=""
          src={iconImage}
          width={60}
          height={60}
          className="w-12 sm:w-16 md:w-[75px] h-12 sm:h-16 md:h-[75px]"
        />
      </div>

      {/* Title and Description */}
      <div className="flex flex-col gap-2 sm:gap-3">
        <h2 className="text-lg sm:text-xl md:text-[22px] font-[600] leading-tight sm:leading-[30px] text-center">
          {title}
        </h2>
        <h3 className="text-sm sm:text-base text-[#6A6A6A] text-center">
          {description}
        </h3>
      </div>

      {/* Learn More Link */}
      <div className="">
        <div className="flex items-center text-[#423280] gap-2 border-b-[2px] cursor-pointer border-b-[#423280]">
          <p className="font-bold leading-[28px]">Learn More</p>
          <FaLongArrowAltRight />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
