import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
type Props = {};

const Footer = (props: Props) => {
  const year = new Date().getFullYear();
  return (
    <div className="min-h-[600px] md:min-h-[350px] flex flex-col relative bg-secondary p-3">
      <div className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.4)]"></div>
      <div className="w-full h-full absolute top-0 left-0 flex flex-col p-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-2   font-cab  text-white gap-4">
          <div className="flex flex-col">
            <p className="text-offset font-[600]">Services</p>
            <p>Web design and development</p>
            <p>Mobile App Development</p>
          </div>
          <div className="flex flex-col">
            <p className="text-offset font-[600]">Quick Links</p>
            <p>Web design and development</p>
            <p>Mobile App Development</p>
          </div>
          <div className="flex flex-col">
            <p className="text-offset font-[600]">Company</p>
            <p>Our Team</p>
            <p>MorphlithStores</p>
            <p>MorphlithHub</p>
            <p>MorphlithNews</p>
            <p>Careers</p>
          </div>
          <div className="flex flex-col">
            <p className="text-offset font-[600]">Get In Touch</p>
            <p>Chat with us</p>
            <p>Contact Us</p>
            <Link href={""}>Copyright Statement</Link>
            <Link href={""}>Privacy Policy</Link>
          </div>
        </div>
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
    </div>
  );
};

export default Footer;
