import About from "@/components/labs/About";
import Footer from "@/components/labs/Footer";
import Header from "@/components/labs/Header";
import Hero from "@/components/labs/Hero";
import Services from "@/components/labs/Services";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="relative">
      <Header />
      <div className="min-h-screen">
        <Hero />
        <About />
        <Services />
      </div>
      <Footer />
    </div>
  );
};

export default page;
