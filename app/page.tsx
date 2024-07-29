"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import art from "../public/morphlith-art.png";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import useStore from "@/config/store";
import Cookieconsent from "@/components/Cookieconsent";
import { motion } from "framer-motion";
import { useCookies } from "react-cookie";
import Products from "@/components/Products";
import Labs from "@/components/Labs";

export default function Home() {
  const [cookies, setCookie] = useCookies(["ml-cookie"]);
  console.log(cookies["ml-cookie"]);
  return (
    <div className="relative">
      <Header />
      <main className="flex bg-white min-h-screen flex-col">
        <Hero />
        <Mission />
        <Labs />
        <Products />
      </main>
      {/* cookie */}
      {!cookies["ml-cookie"] && (
        <motion.div
          initial={{ y: 250 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          className="fixed z-[200] bottom-3 right-[20px]"
        >
          <Cookieconsent />
        </motion.div>
      )}
      <Footer />
    </div>
  );
}
