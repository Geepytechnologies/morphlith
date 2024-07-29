import React from "react";

type Props = {};

const Products = (props: Props) => {
  return (
    <div className="flex flex-col items-center my-5">
      <div className="w-[80%] flex flex-col gap-2">
        <h2 className="gradient-text text-center font-cab text-[24px] font-[600] leading-[30px]">
          Our Featured Products
        </h2>
        <div></div>
      </div>
    </div>
  );
};

export default Products;
