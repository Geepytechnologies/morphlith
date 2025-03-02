"use client";
import React, { useRef, useState } from "react";
import Logo from "./Logo";
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
  const sidebarbackground = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    console.log(sidebarOpen);
    setSidebarOpen(!sidebarOpen);
  };
  const open = () => {
    if (sidebar.current && sidebarbackground.current) {
      sidebarbackground.current.style.width = "100%";
      sidebar.current.style.width = "300px";
    }
  };
  const close = () => {
    if (sidebar.current && sidebarbackground.current) {
      sidebarbackground.current.style.width = "0px";

      sidebar.current.style.width = "0px";
    }
  };
  return (
    <>
      <div className="h-[100px] px-10 bg-white sticky top-0 z-[777] flex items-center justify-between">
        <Logo />
        <div className="font-pop font-[500] hidden md:flex gap-3 items-center">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/labs"}>Labs</Link>
          <Link href={"/"}>Products</Link>
          <Link href={"/"}>Communities</Link>
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
        ref={sidebarbackground}
        className="bg-[rgba(0,0,0,0.4)] h-screen absolute top-0 left-0 sidebarbackground z-[888]  "
      >
        <div
          ref={sidebar}
          className={`bg-white top-0 left-0 sidebar h-screen z-[888]`}
        >
          <div className="flex h-[90px] items-center justify-end pr-3">
            <div
              onClick={close}
              className="border flex md:hidden border-[#7d3e91] rounded-sm p-1"
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
            <Link href={"/labs"}>Labs</Link>
            <Link href={"/"}>Products</Link>
            <Link href={"/"}>Communities</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
