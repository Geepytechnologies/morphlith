import Image from "next/image";
import React from "react";
import art from "../../public/morphlith-art.png";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="p-3 mt-[50px]">
      <div className="flex flex-col md:flex-row">
        {/* <div className=" relative">
          <Image src={art} alt="" />
        </div> */}
        <div>
          <p className="font-[500] text-secondary font-inter">Morphlith Labs</p>
          <p>
            Morphlith Labs is more than a space; it&apos;s an incubator of
            breakthroughs. As we delve into the realms of possibility, our team
            of visionaries, researchers, and engineers collaborate seamlessly to
            push the boundaries of technology. This is where hypotheses are
            tested, prototypes are perfected, and the seeds of tomorrow&apos;s
            innovations are sown.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
