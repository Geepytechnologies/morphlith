import Link from "next/link";
import React from "react";
import ServiceCard from "./labs/ServiceCard";
import mobile from "@/assets/svg/mobile.svg";
import web from "@/assets/svg/web.svg";
import cloud from "@/assets/svg/cloud.svg";
import Image from "next/image";
import spiral from "@/assets/spiral.png";

type Props = {};

const Labs = (props: Props) => {
  return (
    <div className="labsgradient flex flex-col items-center my-5 py-6 sm:py-8 md:py-10 relative">
      {/* Spiral Image */}
      <div className="absolute right-0 top-0 -z-0">
        <Image
          src={spiral}
          width={150}
          height={150}
          alt=""
          className="w-[100px] sm:w-[150px] md:w-[200px]"
        />
      </div>

      {/* Heading and Description */}
      <div className="w-full sm:w-[90%] md:w-[80%] flex flex-col gap-2 px-4 sm:px-6 md:px-0">
        <h2 className="gradient-text text-center font-cab text-xl sm:text-2xl md:text-[24px] font-[600] leading-tight sm:leading-[30px]">
          Discover the Innovation at Morphlith Labs
        </h2>
        <h3 className="text-sm sm:text-base md:text-[18px] text-center font-pop text-[#73779C]">
          We offer special services through which we can provide quality digital
          services for your businesses to scale
        </h3>
      </div>

      {/* Service Cards */}
      <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 mt-6 sm:mt-8 md:mt-10 z-10 px-4 sm:px-6 md:px-0">
        <ServiceCard
          iconImage={web}
          title={"Website Development"}
          description={
            "We design and develop responsive, user-friendly websites that captivate your audience and drive results. From sleek portfolios to robust e-commerce platforms, we’ve got you covered."
          }
        />
        <ServiceCard
          iconImage={mobile}
          title={"Software Development"}
          description={
            "We create custom software solutions that solve real-world problems. Whether it’s a mobile app, a SaaS platform, or enterprise software, we deliver scalable and efficient solutions."
          }
        />
        <ServiceCard
          iconImage={cloud}
          title={"Cloud Solutions"}
          description={
            "We provide secure and scalable cloud solutions to help businesses manage their data and applications efficiently. From migration to optimization, we’ve got you covered."
          }
        />
      </div>
    </div>
  );
};

export default Labs;
