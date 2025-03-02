"use client";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Logowhite from "./Logowhite";
import ReactGA from "react-ga4";
import { BsFillSendFill } from "react-icons/bs";

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
    <div className="h-[500px] md:h-[400px] bg-[#f0eff5]  flex flex-col relative p-3">
      <div className="w-full h-full flex flex-col p-4 md:px-10  md:pt-10 gap-2">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="font-space text-[#6A6A6A] text-[14px]">
              Your Partner in Building Smarter, Future-Ready Solutions
            </p>
            <div className="flex mt-3">
              {/* :::socials::: */}
              <div className="">
                <div className="flex items-center gap-3 mt-2">
                  <Link
                    href=""
                    className="border h-7 w-7 flex items-center justify-center bg-white rounded-full hover:bg-opacity-80 hover:text-opacity-80 text-secondary"
                  >
                    <FaFacebookF />
                  </Link>
                  <Link
                    href=""
                    className="border h-7 w-7 flex items-center justify-center bg-white rounded-full hover:bg-opacity-80 hover:text-opacity-80 text-secondary"
                  >
                    <FaXTwitter />
                  </Link>
                  <Link
                    onClick={() => firesocialevent("linkedin")}
                    href="https://linkedin.com/company/morphlith"
                    className="border h-7 w-7 flex items-center justify-center bg-white rounded-full hover:bg-opacity-80 hover:text-opacity-80 text-secondary"
                  >
                    <FaLinkedinIn />
                  </Link>
                  <Link
                    href=""
                    className="border h-7 w-7 flex items-center justify-center bg-white rounded-full hover:bg-opacity-80 hover:text-opacity-80 text-secondary"
                  >
                    <FaInstagram />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-2   font-space  text-[#444] gap-4">
            <div className="flex flex-col gap-1 text-[14px]">
              <p className="text-[#060336] font-[700] text-[16px]">Company</p>
              <p>Our Team</p>
              <p>MorphlithStores</p>
              <p>MorphlithHub</p>
              <p>MorphlithNews</p>
              <p>Careers</p>
            </div>
            <div className="flex flex-col gap-1 text-[14px]">
              <p className="text-[#060336] font-[600] text-[16px]">
                Get In Touch
              </p>
              <p>Chat with us</p>
              <p>Contact Us</p>
              <Link href={""}>Copyright Statement</Link>
              <Link href={""}>Privacy Policy</Link>
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-center text-[14px] mt-auto font-space">
          <div className="w-[90%] md:w-[95%]">
            <div className="h-[1px] w-full bg-[#73779C]"></div>
            <div className="text-[#060336] text-center">
              <p className="py-2">
                Copyright © {year}{" "}
                <span className=" font-[500]">Morphlith.</span> All Rights
                Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
