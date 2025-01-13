import Link from "next/link";
import React, { useState } from "react";
import useStore from "@/config/store";
import { useCookies } from "react-cookie";

type Props = {};

const Cookieconsent = (props: Props) => {
  const [cookies, setCookie] = useCookies(["ml-cookie"]);

  const handleAccept = (e: any) => {
    setCookie("ml-cookie", true, { path: "/" });
  };
  const handleDecline = (e: any) => {
    setCookie("ml-cookie", false, { path: "/" });
  };
  return (
    <div className="flex flex-col bg-white rounded-[16px] w-[350px] h-auto p-[20px] gap-2">
      <h1 className="font-[700] text-[1.2rem] font-cab">
        We value your privacy
      </h1>
      <h2 className="text-[0.85rem] font-jost">
        Our website uses cookies to enhance your user experience. By clicking
        &apos;accept all cookies&apos;, you agree to our use of cookies, and
        consent to our&nbsp;
        <span>
          <Link className="text-offset underline" href="/">
            Privacy Policy.
          </Link>
        </span>
      </h2>
      <div className="flex w-full  gap-4 text-[0.85rem] font-jost">
        <button
          onClick={handleDecline}
          className="border border-black rounded-md px-4 py-2"
        >
          Reject All
        </button>
        <button
          onClick={handleAccept}
          className="text-white bg-offset rounded-md px-4 py-2"
        >
          Accept All
        </button>
      </div>
    </div>
  );
};

export default Cookieconsent;
