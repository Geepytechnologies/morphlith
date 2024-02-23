import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import art from "../public/morphlith-art.png";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex bg-white min-h-screen flex-col">
        <Hero />
        {/* <div className=" relative">
          <Image src={art} alt="" />
        </div> */}
      </main>
      <Footer />
    </>
  );
}
