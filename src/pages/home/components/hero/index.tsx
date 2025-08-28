import React from "react";
import { faSketch } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Lottie from "lottie-react";

import animationScroll from "@/assets/animations/Scroll-Animation - 1749495927443.json";
import "./hero-styles.css";
import AutoBlurWrapper from "@/components/auto-blur-wrapper";

const Hero: React.FC = () => {



  return (
    <section className="hero h-auto   lg:max-h-[667px] relative top-[-40px]  w-full flex flex-col-reverse lg:flex-row">

      {/* Hero Info */}
      <AutoBlurWrapper className="w-full">
        <div className="hero-info    h-full flex flex-col items-start justify-start lg:pt-20 w-full px-7 md:pl-20 lg:px-0 lg:pl-10 xl:pl-30 ">
          {/* Hero Title */}
          <div className="hero-info-title w-[250px]  flex items-center justify-center gap-1 rounded-[50px] border-[#727fde77] bg-[#2200493d] py-2 px-2 text-[#727fde] shadow-[0_0_5px_#727fde88]">
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
            href="/files/Giorgi Zautashvili.pdf"
            download
            className="flex  items-center border justify-center gap-4 rounded-[10px] border-[#727fdeb4] bg-[#2200493d] px-[20px] py-[15px] text-white shadow-[0_0_5px_#727fde86] transition duration-300 hover:shadow-[0_0_15px_#727fde86]"
          >
            <img src="/images/cv2.png" className="w-6 h-6" alt="cv " />
            Look at my CV

          </a>



        </div>
      </AutoBlurWrapper>

      {/* Scroll Indicator */}
      <div className=" hidden pr-20  lg:flex justify-center items-end w-1/2 ">
        <Lottie
          animationData={animationScroll}
          loop
          className="scroll-down h-[60px] w-[40px]  rounded-[50px] border-2 border-[lightgray] shadow-[0_0_15px_rgba(211,211,211,0.477)] cursor-pointer"
        />
      </div>

      {/* Hero Video */}
      <AutoBlurWrapper className="hero-vid-box    w-full flex justify-center items-center my-10 sm:my-0 mix-blend-lighten ">

        <video
          loop
          autoPlay
          muted
          playsInline
          className="   mix-blend-lighten pointer-events-none "
        >
          <source src="/videos/heroVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      </AutoBlurWrapper>

    </section>
  );
};

export default Hero;
