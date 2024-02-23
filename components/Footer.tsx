import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";

type Props = {};

const Footer = (props: Props) => {
  const year = new Date().getFullYear();

  return (
    <div className="h-[250px] bg-secondary">
      <Link className="text-white" href={"/labs"}>
        Morphlith Labs
      </Link>
      <div className="flex justify-center mt-3">
        {/* :::socials::: */}
        <div className="">
          {/* <p className="text-offset">Socials</p> */}
          <div className="flex items-center gap-3">
            <Link
              href=""
              className="border h-7 w-7 flex items-center justify-center border-white rounded-full hover:border-opacity-80 hover:text-opacity-80 text-white"
            >
              <FaFacebookF />
            </Link>
            <Link
              href=""
              className="border h-7 w-7 flex items-center justify-center border-white rounded-full hover:border-opacity-80 hover:text-opacity-80 text-white"
            >
              <FaTwitter />
            </Link>
            <Link
              href=""
              className="border h-7 w-7 flex items-center justify-center border-white rounded-full hover:border-opacity-80 hover:text-opacity-80 text-white"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href=""
              className="border h-7 w-7 flex items-center justify-center border-white rounded-full hover:border-opacity-80 hover:text-opacity-80 text-white"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center mt-auto">
        <div className="w-[90%] md:w-[95%]">
          <hr />
          <div className="text-white text-center">
            <p className="py-2">
              Copyright © {year}{" "}
              <span className="text-offset font-[500]">Morphlith.</span> All
              Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
