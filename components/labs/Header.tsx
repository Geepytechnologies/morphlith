"use client";
import React, { useRef, useState } from "react";
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
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebar = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    console.log(sidebarOpen);
    setSidebarOpen(!sidebarOpen);
  };
  const open = () => {
    if (sidebar.current) {
      sidebar.current.style.width = "300px";
      document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
  };
  const close = () => {
    if (sidebar.current) {
      sidebar.current.style.width = "0px";
      document.body.style.backgroundColor = "white";
    }
  };
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
        <div
          onClick={open}
          className="border flex md:hidden border-[#7d3e91] rounded-sm p-1"
        >
          <HiOutlineMenuAlt1 className="text-[#7d3e91] text-[20px]" />
        </div>
      </div>
      {/* sidebar */}

      <div
        ref={sidebar}
        className={`bg-white top-0 left-0 sidebar h-screen z-[888]  `}
      >
        <div className="flex justify-end py-4 pr-3">
          <div
            onClick={close}
            className="border self-end flex md:hidden border-[#7d3e91] rounded-sm p-1"
          >
            <IoMdClose className="text-[#7d3e91] text-[20px]" />
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <img
            src={"/morphlithlogovertical.png"}
            alt=""
            className=" h-[200px]"
          />
        </div>
        <div className="flex flex-col items-center w-full gap-3 text-xl">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Services</Link>
          <Link href={"/"}>Blog</Link>
          <Link href={"/"}>Portfolio</Link>
          <Link href={"/"}>Contact</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
