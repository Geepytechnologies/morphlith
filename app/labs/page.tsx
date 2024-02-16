import About from "@/components/labs/About";
import Footer from "@/components/labs/Footer";
import Header from "@/components/labs/Header";
import Hero from "@/components/labs/Hero";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Header />
      <div className="min-h-screen">
        <Hero />
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default page;
