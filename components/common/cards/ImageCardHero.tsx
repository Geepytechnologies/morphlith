import Image from "next/image";
import React from "react";
import Future from "@/public/futuristic.jpg";

type Props = {};

const ImageCardHero = (props: Props) => {
  return (
    <div className="flex gap-3 h-full">
      <div className="flex flex-col gap-3">
        <Image
          src={Future}
          alt=""
          className="rounded-[12px] max-w-[200px] h-[65%]"
        />
        <Image
          src={Future}
          alt=""
          className="rounded-[12px] max-w-[200px] h-[35%]"
        />
      </div>
      <div className="flex flex-col gap-3">
        <Image
          src={Future}
          alt=""
          className="rounded-[12px] max-w-[200px] h-[35%]"
        />
        <Image
          src={Future}
          alt=""
          className="rounded-[12px] max-w-[200px] h-[75%]"
        />
      </div>
    </div>
  );
};

export default ImageCardHero;
