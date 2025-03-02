import Image from "next/image";
import React from "react";
import ProductCard from "./ProductCard";
import storage from "@/assets/svg/storage.svg";
import convo from "@/assets/svg/convo.svg";
import padlock from "@/assets/svg/padlock.svg";

type Props = {};

const Products = (props: Props) => {
  return (
    <div className="flex flex-col items-center my-5 mt-10 sm:mt-[60px]">
      <div className="w-full sm:w-[90%] md:w-[80%] flex flex-col gap-2">
        {/* Heading */}
        <h2 className="font-space text-[#35383F] text-center text-2xl sm:text-3xl md:text-[40px] font-[700] leading-tight sm:leading-[25px]">
          Our Core Products
        </h2>

        {/* Product Cards */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-10 mt-6 sm:mt-8 md:mt-[43px]">
          <ProductCard
            iconClasses={"bg-[#19AD8E]"}
            iconImage={storage}
            title={"Morphlith Blob"}
            description={
              "A hybrid cloud storage solution that integrates physical flash drives and hard drives for seamless data storage and access"
            }
          />
          <ProductCard
            iconClasses={"bg-primary"}
            iconImage={convo}
            title={"Convo"}
            description={
              "Convo is the ultimate chatbot for businesses, seamlessly integrating with WhatsApp to automate customer support, drive engagement, and boost sales"
            }
          />
          <ProductCard
            iconClasses={"bg-[#311735]"}
            iconImage={padlock}
            title={"Morphpass"}
            description={
              "A password manager that securely stores, generates, and manages passwords across devices to protect digital identities."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
