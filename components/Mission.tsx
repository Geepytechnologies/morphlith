import React from "react";
import ImageCardHero from "./common/cards/ImageCardHero";

type Props = {};

const Mission = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4  p-[20px]">
      <div className="w-full md:w-[50%] lg:w-[60%] h-full order-2 p-2 md:order-1">
        <h2 className="text-offset font-cab text-[14px] font-[600] leading-[30px]">
          WHO WE ARE
        </h2>
        <h1 className="leading-[36px] text-[30px] font-[600] font-cab">
          Bridging the Gap Between Innovation and Impact
        </h1>
        <h2 className="leading-[30px] font-[400] font-jost">
          At Morphlith, we&apos;re a team fueled by curiosity and a passion for
          groundbreaking research. We believe that innovative solutions stem
          from a deep understanding of the challenges we face. That&apos;s why
          we&apos;re dedicated to conducting cutting-edge research across
          various fields, pushing the boundaries of what&apos;s possible.
        </h2>
      </div>
      <div className="h-full flex justify-center order-1 md:order-2">
        <ImageCardHero />
      </div>
    </div>
  );
};

export default Mission;
