import React from "react";
import Image from "next/image";
import devops from "@/assets/devops2.png";
import innovation from "@/assets/innovation.svg";
import security from "@/assets/security.svg";
import focused from "@/assets/focused.svg";
import CountUp from "react-countup";

type Props = {};

const Mission = (props: Props) => {
  return (
    <div className="flex flex-col justify-between gap-4 p-4 sm:p-6 md:p-8 lg:p-[20px] mt-6 sm:mt-8 md:mt-9">
      {/* Mission Statement */}
      <p className="font-medium font-space text-xl sm:text-2xl md:text-[28px] leading-relaxed sm:leading-[40px] md:leading-[44px] text-[#423280] text-center px-4 sm:px-8 md:px-[100px]">
        Morphlith has been at the forefront of revolutionizing business
        productivity through innovative software solutions. Our mission is to
        empower businesses with technology that drives success and growth.
      </p>

      {/* Who We Are Section */}
      <div className="whowearegradient flex flex-col lg:flex-row mt-6 sm:mt-8 md:mt-[56px] gap-6 sm:gap-8 md:gap-10">
        {/* Left Side: Image and Heading */}
        <div className="flex flex-col items-center lg:items-start">
          <p className="text-3xl sm:text-4xl md:text-[40px] font-bold leading-tight sm:leading-[45px] md:leading-[50px] font-space text-center lg:text-left">
            Who we Are
          </p>
          <Image
            alt="DevOps"
            src={devops}
            width={400}
            height={400}
            className="w-full max-w-[400px] h-auto"
          />
        </div>

        {/* Right Side: Content and Metrics */}
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-11">
          <p className="text-[#73779C] p-4 sm:p-5 text-center lg:text-left">
            We are committed to making sure you achieve your goal. Our experts
            are ever ready to give you the best solutions you need.
          </p>

          {/* Features List */}
          <div className="flex flex-col gap-4 sm:gap-5">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 font-pop">
              <Image src={innovation} alt="Innovation" width={70} height={70} />
              <div className="flex flex-col text-center sm:text-left">
                <h2 className="text-lg sm:text-[18px] text-[#35383F]">
                  Innovation First:
                </h2>
                <h3 className="text-sm sm:text-[14px] text-[#73779C] leading-relaxed sm:leading-[22px]">
                  Staying ahead of trends with tools and services designed for
                  future challenges.
                </h3>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 font-pop">
              <Image src={security} alt="Security" width={70} height={70} />
              <div className="flex flex-col text-center sm:text-left">
                <h2 className="text-lg sm:text-[18px] text-[#35383F]">
                  Security You Can Trust:
                </h2>
                <h3 className="text-sm sm:text-[14px] text-[#73779C] leading-relaxed sm:leading-[22px]">
                  Ensuring the highest standards for data protection
                </h3>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 font-pop">
              <Image src={focused} alt="User-Focused" width={70} height={70} />
              <div className="flex flex-col text-center sm:text-left">
                <h2 className="text-lg sm:text-[18px] text-[#35383F]">
                  User-Focused Solutions:
                </h2>
                <h3 className="text-sm sm:text-[14px] text-[#73779C] leading-relaxed sm:leading-[22px]">
                  Building intuitive and adaptable tools for businesses and
                  individuals.
                </h3>
              </div>
            </div>
          </div>

          {/* Metrics Section */}
          <div className="h-auto sm:h-[143px] bg-[#423280] text-white px-4 sm:px-6 md:px-10 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-center rounded-[10px] gap-4 sm:gap-6 md:gap-[23px]">
            <div className="text-center sm:text-left">
              <p className="font-pop text-3xl sm:text-4xl md:text-[40px] font-[600] leading-tight sm:leading-[40px]">
                <CountUp end={150} duration={3} />+
              </p>
              <p className="text-sm sm:text-[18px] font-medium leading-5">
                Active Users
              </p>
            </div>
            <div className="w-[2px] h-[50px] sm:h-[103px] bg-white"></div>
            <div className="text-center sm:text-left">
              <p className="font-pop text-3xl sm:text-4xl md:text-[40px] font-[600] leading-tight sm:leading-[40px]">
                <CountUp end={150} duration={3} />+
              </p>
              <p className="text-sm sm:text-[18px] font-medium leading-5">
                Hours Saved
              </p>
            </div>
            <div className="w-[2px] h-[50px] sm:h-[103px] bg-white"></div>
            <div className="text-center sm:text-left">
              <p className="font-pop text-3xl sm:text-4xl md:text-[40px] font-[600] leading-tight sm:leading-[40px]">
                <CountUp end={60} duration={3} />%
              </p>
              <p className="text-sm sm:text-[18px] font-medium leading-5">
                Productivity Boost
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
