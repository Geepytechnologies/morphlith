import React from "react";

type Props = {};

const Mission = (props: Props) => {
  return (
    <div className="flex items-center p-[20px]">
      <div className="">
        <h2 className="text-offset font-cab text-[14px] font-[600] leading-[30px]">
          WHO WE ARE
        </h2>
        <h1 className="leading-[36px] text-[30px] font-[600] font-cab">
          Bridging the Gap Between Innovation and Impact
        </h1>
        <h2 className="leading-[30px] font-[400] font-jost">
          At Morphlith, we&apos;re a team fueled by curiosity and a passion for
          groundbreaking research. We believe that innovative solutions stem
          from a deep understanding of the challenges we face. That's why
          we&apos;re dedicated to conducting cutting-edge research across
          various fields, pushing the boundaries of what&apos;s possible.
        </h2>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Mission;
