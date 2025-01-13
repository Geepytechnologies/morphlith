import Image from "next/image";
import React from "react";
import Future from "@/public/tenweb.webp";

type Props = {};

const ImageCardHero = (props: Props) => {
  return (
    <div className="flex gap-3 h-full">
      <div className="flex flex-col gap-3">
        <Image
          src={Future}
          alt=""
          className="object-cover rounded-tl-[200px] rounded-bl-none rounded-br-[200px] rounded-tr-[200px] max-w-[200px]"
        />
        <Image
          src={Future}
          alt=""
          className="object-cover rounded-tl-[200px] h-[325px] rounded-bl-[200px] rounded-br-[200px] rounded-tr-none max-w-[200px]"
        />
      </div>
      <Image
        src={Future}
        alt=""
        className="object-cover rounded-tl-[200px] h-[450px] rounded-bl-[200px] rounded-br-[200px] rounded-tr-none max-w-[200px]"
      />
      {/* <div className="flex flex-col gap-3">
        <Image
          src={Future}
          alt=""
          className="rounded-[12px] max-w-[200px] h-[75%]"
        />
      </div> */}
    </div>
  );
};

export default ImageCardHero;
