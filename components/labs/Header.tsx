import React from "react";
import Logo from "../Logo";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import logovertical from "../../public/morphlithlogovertical.png";
import { IoMdClose } from "react-icons/io";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <div className="h-[90px] bg-white sticky top-0 z-[777] flex items-center justify-between px-2">
        <Logo />
        <div className=" hidden md:flex gap-3 items-center">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Services</Link>
          <Link href={"/"}>Blog</Link>
          <Link href={"/"}>Portfolio</Link>
          <Link href={"/"}>Contact</Link>
        </div>
        <div className="border flex md:hidden border-[#7d3e91] rounded-sm p-1">
          <HiOutlineMenuAlt1 className="text-[#7d3e91] text-[20px]" />
        </div>
      </div>
      {/* sidebar */}
      <div className="h-screen w-screen absolute top-0 z-[888] flex">
        <div className="flex-1 bg-[rgba(0,0,0,0.6)]"></div>
        <div className="bg-white w-[300px]">
          <div className="flex justify-end my-3 pr-3">
            <div className="border self-end flex md:hidden border-[#7d3e91] rounded-sm p-1">
              <IoMdClose className="text-[#7d3e91] text-[20px]" />
            </div>
          </div>
          <Image src={logovertical} alt="" />
          <div className="flex flex-col gap-3 text-xl">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Services</Link>
            <Link href={"/"}>Blog</Link>
            <Link href={"/"}>Portfolio</Link>
            <Link href={"/"}>Contact</Link>
          </div>
          <div className="">
            {/* <p className="text-offset">Socials</p> */}
            <div className="flex items-center gap-3">
              <Link
                href=""
                className="border h-7 w-7 flex items-center justify-center border-[#AF00ED] rounded-full hover:border-opacity-80 hover:text-opacity-80 text-[#AF00ED]"
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
      </div>
    </>
  );
};

export default Header;
