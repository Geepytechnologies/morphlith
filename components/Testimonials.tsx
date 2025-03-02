import Image from "next/image";
import React from "react";
import man from "@/assets/man.png";
import mail from "@/assets/svg/mail.svg";
import chat from "@/assets/svg/chat.svg";
import spiral from "@/assets/spiral.png";

type Props = {};

const Testimonials = (props: Props) => {
  return (
    <div className="flex items-center justify-center relative">
      <div className="absolute right-0 top-0 -z-0">
        <Image src={spiral} width={200} height={200} alt="" />
      </div>
      <div className="absolute left-0 top-0 -z-0 scale-x-[-1]">
        <Image src={spiral} width={200} height={200} alt="" />
      </div>
      <div className="w-[40%] flex items-center justify-center">
        <div className="flex items-center justify-center">
          <Image src={mail} alt="" width={70} height={70} />
        </div>
        <div className="flex flex-col gap-[30px] font-pop">
          <h1 className="text-[#35383F] text-center font-[600] leading-[50px]">
            What People Say About Us
          </h1>
          <div className="flex gap-3 justify-center">
            <div className="w-[73px] h-[73px] relative bg-[#D9D9D9] rounded-full">
              <Image
                alt=""
                src={man}
                fill
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <div className="">
              <p className="font-[500] text-[24px] leading-[30px] text-[#A497F9]">
                Delvan Christopher A
              </p>
              <p className="text-[#73779C]">CEO DigiHub</p>
            </div>
          </div>
          <p className="text-[#73779C] text-center">
            Morphlith's productivity tools have transformed the way we work.
            Highly recommended!
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image src={chat} alt="" width={70} height={70} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
