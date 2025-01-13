import React from "react";
import ImageCardHero from "./common/cards/ImageCardHero";

type Props = {};

const Mission = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4  p-[20px] mt-9">
      <div className="w-full md:w-[50%] lg:w-[60%] h-full order-2 p-2 md:order-1">
        <h2 className="text-offset font-cab text-[14px] font-[600] leading-[30px]">
          WHO WE ARE
        </h2>
        <h1 className="leading-[36px] text-[30px] font-[600] font-cab">
          Discover Morphlith's Vision
        </h1>
        <h2 className="leading-[30px] font-[400] font-jost mt-1 max-w-[450px]">
          Morphlith has been at the forefront of revolutionizing business
          productivity through innovative software solutions. Our mission is to
          empower businesses with technology that drives success and growth. We
          are dedicated to creating tools that enhance productivity and
          streamline operations. Our core values include Innovation, where we
          commit to continuous improvement
        </h2>
      </div>
      <div className="h-full flex justify-center order-1 md:order-2">
        <ImageCardHero />
      </div>
    </div>
  );
};

export default Mission;
