import React from "react";
import Logo from "./Logo";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="h-[250px] bg-secondary">
      <Link className="text-white" href={"/labs"}>
        Morphlith Labs
      </Link>
    </div>
  );
};

export default Footer;
