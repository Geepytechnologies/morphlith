"use client";

import React from "react";
import Logo from "../Logo";
import Link from "next/link";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import ReactGA from "react-ga4";
import { BsFillSendFill } from "react-icons/bs";
import Logowhite from "../Logowhite";

type Props = {};

const Footer = (props: Props) => {
  const year = new Date().getFullYear();
  const firesocialevent = (social: string) => {
    ReactGA.event({
      category: "Social",
      action: social,
    });
  };
  return (
    <div className="min-h-[700px] h-auto md:min-h-[500px] bg-fixed flex flex-col relative bg-[url('/futuristic.jpg')] p-3">
      <div className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.8)]"></div>
      <div className="w-full h-full absolute top-0 left-0 flex flex-col p-3 md:px-5 md:pt-10 gap-2">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col gap-4">
            <Logowhite />
            <div className="flex mt-3">
              {/* :::socials::: */}
              <div className="">
                <p className="text-offset">Follow Us</p>
                <div className="flex items-center gap-3 mt-2">
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
                    <FaXTwitter />
                  </Link>
                  <Link
                    onClick={() => firesocialevent("linkedin")}
                    href="https://linkedin.com/company/morphlith"
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
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-2   font-cab  text-white gap-4">
            <div className="flex flex-col">
              <p className="text-offset font-[600]">Services</p>
              <p>Web design and development</p>
              <p>Mobile App Development</p>
            </div>
            <div className="flex flex-col gap-1 text-[14px]">
              <p className="text-offset font-[600] text-[16px]">Company</p>
              <p>Our Team</p>
              <p>MorphlithStores</p>
              <p>MorphlithHub</p>
              <p>MorphlithNews</p>
              <p>Careers</p>
            </div>
            <div className="flex flex-col gap-1 text-[14px]">
              <p className="text-offset font-[600] text-[16px]">Get In Touch</p>
              <p>Chat with us</p>
              <p>Contact Us</p>
              <Link href={""}>Copyright Statement</Link>
              <Link href={""}>Privacy Policy</Link>
            </div>
          </div>
        </div>
        {/* Newsletter */}
        <div className="flex flex-col gap-2">
          <p className="text-offset">NewsLetter</p>
          <p className="text-white text-[12px]">
            Don&apos;t miss to subscribe to our new feeds, kindly fill the form
            below.
          </p>
          <div className="flex gap-2 items-center pl-5 p-2 w-[300px] bg-white rounded-[40px]">
            <input
              placeholder="Email Address"
              className="outline-0 border-0 flex-1"
            />
            <div className="cursor-pointer rounded-full p-2 bg-offset">
              <BsFillSendFill className="text-white" />
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center text-[14px] mt-auto">
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
