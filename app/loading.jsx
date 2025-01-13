// app/loading.js
"use client";
import logo from "@/public/logosmall2.png";

import { motion } from "framer-motion";
import Image from "next/image";
export default function Loading() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="loading-screen min-h-screen flex items-center justify-center w-full bg-red-400"
    >
      <div className="loader ">
        <Image src={logo} alt="logo" className="w-[40px] h-[40px]" />
      </div>
      <style jsx>{`
        .loading-screen {
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }
        .loader {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: inline-block;
          position: relative;
          border: 3px solid;
          border-color: #fff #fff transparent transparent;
          box-sizing: border-box;
          animation: rotation 1s linear infinite;
        }
        .loader::after,
        .loader::before {
          content: "";
          box-sizing: border-box;
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          border: 3px solid;
          border-color: transparent transparent #95469a #95469a;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-sizing: border-box;
          animation: rotationBack 0.5s linear infinite;
          transform-origin: center center;
        }
        .loader::before {
          width: 32px;
          height: 32px;
          border-color: #fff #fff transparent transparent;
          animation: rotation 1.5s linear infinite;
        }

        @keyframes rotation {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes rotationBack {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-360deg);
          }
        }
      `}</style>
    </motion.div>
  );
}
