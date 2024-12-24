import React from "react";
import Servicecard from "../common/cards/Servicecard";

type Props = {};

const Services = (props: Props) => {
  return (
    <div className="p-3">
      <div className="font-cab">
        <p className="font-[600] text-offset">Our Services</p>
      </div>
      <Servicecard />
    </div>
  );
};

export default Services;
