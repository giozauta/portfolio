import React from "react";
import { faSketch } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Lottie from "lottie-react";

import animationScroll from "@/assets/animations/Scroll-Animation - 1749495927443.json";
import "./hero-styles.css";

const Hero: React.FC = () => {



  return (
    <section className="hero h-auto lg:max-h-[667px] relative top-[-40px]  w-full flex flex-col-reverse lg:flex-row">
      {/* Hero Info */}
      <div className="hero-info autoBlur h-full flex flex-col items-start justify-start lg:pt-20 w-full px-7 md:pl-20 lg:px-0 lg:pl-10 xl:pl-30 ">
        {/* Hero Title */}
        <div className="hero-info-title w-[250px] flex items-center justify-center gap-1 rounded-[50px] border-[#727fde77] bg-[#2200493d] py-2 px-2 text-[#727fde] shadow-[0_0_5px_#727fde88]">
          <FontAwesomeIcon icon={faSketch} />
          Front-end Developer Portfolio
        </div>
        {/* Main Heading */}
        <h1 className="mt-5 mb-[30px] text-[40px] sm:text-[50px] md:text-[30px] lg:text-[40px] xl:text-[60px] font-bold lg:leading-[70px] max-w-[600px]">
          Providing <span className="gradient">the best</span> Project{" "}
          <span className="gradient">Experience</span>
        </h1>

        {/* Description */}
        <p className="mb-10 max-w-[550px] text-[20px] leading-[25px]">
          I'm a Front-end developer with experience in website, mobile, and
          software development. Check out my skills.
        </p>

        {/* Contact Button */}
        <a
          href="/files/Giorgi zautashvili.pdf"
          download
          className="flex  items-center border justify-center gap-4 rounded-[10px] border-[#727fdeb4] bg-[#2200493d] px-[20px] py-[15px] text-white shadow-[0_0_5px_#727fde86] transition duration-300 hover:shadow-[0_0_15px_#727fde86]"
        >
          <img src="/images/cv2.png" className="w-6 h-6" alt="cv " />
          Look at my CV

        </a>



      </div>

      {/* Scroll Indicator */}
      <div className=" hidden pr-20  lg:flex justify-center items-end w-1/2 ">
        <Lottie
          animationData={animationScroll}
          loop
          className="scroll-down h-[60px] w-[40px]  rounded-[50px] border-2 border-[lightgray] shadow-[0_0_15px_rgba(211,211,211,0.477)] cursor-pointer"
        />
      </div>

      {/* Hero Video */}
      <div className="hero-vid-box   w-full flex justify-center items-center my-10 sm:my-0">
        <video
          loop
          autoPlay
          muted
          src="videos/hero-video3.mp4"
          className="autoBlur mix-blend-lighten"
        ></video>
      </div>
    </section>
  );
};

export default Hero;
