import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import art from "../public/morphlith-art.png";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex bg-white min-h-screen flex-col">
        <Hero />
        <Mission />
      </main>
      <Footer />
    </>
  );
}
