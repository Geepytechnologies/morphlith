import Image from "next/image";
import Vertex from "@/assets/svg/companies/vertex.svg";
import aromix from "@/assets/svg/companies/aromix.svg";
import fireli from "@/assets/svg/companies/fireli.svg";
import martino from "@/assets/svg/companies/martino.svg";
import squarestone from "@/assets/svg/companies/squarestone.svg";

const ScrollingLogos = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradient Overlay for Fade Effect */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r  to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l  to-transparent z-10"></div>

      {/* Scrolling Container */}
      <div className="flex animate-scroll">
        <div className="flex items-center justify-center gap-10">
          <Image
            src={Vertex}
            alt="Vertex logo"
            width={100} // Adjust width as needed
            height={50} // Adjust height as needed
          />
          <Image src={aromix} alt="Aromix logo" width={100} height={50} />
          <Image src={fireli} alt="Fireli logo" width={100} height={50} />
          <Image src={martino} alt="Martino logo" width={100} height={50} />
          <Image
            src={squarestone}
            alt="Squarestone logo"
            width={100}
            height={50}
          />
          {/* Repeat the images to create a seamless loop */}
          <Image src={Vertex} alt="Vertex logo" width={100} height={50} />
          <Image src={aromix} alt="Aromix logo" width={100} height={50} />
          <Image src={fireli} alt="Fireli logo" width={100} height={50} />
          <Image src={martino} alt="Martino logo" width={100} height={50} />
          <Image
            src={squarestone}
            alt="Squarestone logo"
            width={100}
            height={50}
          />
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
          display: flex;
          width: max-content;
        }
      `}</style>
    </div>
  );
};

export default ScrollingLogos;
