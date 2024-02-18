import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import art from "../public/morphlith-art.png";
import ScalingElement from "@/components/ScalingElement";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex bg-white min-h-screen flex-col">
        <div className=" relative">
          <Image src={art} alt="" />
        </div>
        {/* <ScalingElement /> */}
      </main>
      <Footer />
    </>
  );
}
