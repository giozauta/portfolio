import React, { useRef } from "react";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cardData } from "./cardData";
import "./my-projects-styles.css";

const MyProjects: React.FC = () => {
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const hoverSignRefs = useRef<HTMLDivElement[]>([]);

  const handleVideoHover = (index: number, state: "enter" | "leave") => {
    const video = videoRefs.current[index];
    const hoverSign = hoverSignRefs.current[index];

    if (!video || !hoverSign) return;

    if (state === "enter") {
      video.play();
      hoverSign.classList.add("active");
    } else {
      video.pause();
      hoverSign.classList.remove("active");
    }
  };

  return (
    <section className="my-projects relative flex flex-col mx-auto items-center w-full sm:w-[80%] mt-[300px] gap-[120px] px-4 sm:px-0">
      <h1 className="section-title text-[32px] sm:text-[40px] font-bold text-center">
        My Projects 👨‍💻
      </h1>

      {cardData.map((card, index) => (
        <div
          key={index}
          className="project-card flex flex-col sm:flex-row items-center justify-center w-full gap-[30px] sm:gap-[10%] "
        >
          {/* Video Box */}
          <div className="project-vidbox autoBlur  rounded-[20px] shadow-[0_0_10px_lightgray] hover:shadow-[0_0_20px_lightgray] transition duration-500 relative w-full sm:w-[500px] h-[310px] sm:h-[300px] flex justify-center items-center cursor-pointer mix-blend-exclusion">
            <video
              ref={(el) => {
                videoRefs.current[index] = el!;
              }}
              poster={card.img}
              preload="auto"
              src={card.video}
              loop
              muted
              playsInline
              onMouseEnter={() => handleVideoHover(index, "enter")}
              onMouseLeave={() => handleVideoHover(index, "leave")}
              className="object-cover w-full h-full rounded-[20px] "
            />
            <div
              ref={(el) => {
                hoverSignRefs.current[index] = el!;
              }}
              className="hover-sign flex justify-center items-center w-[30%] h-[100px]"
            ></div>
          </div>

          {/* Info Box */}
          <div className="project-info fadeInRight flex flex-col items-start justify-center w-full sm:w-[50%] sm:pl-[10%]">
            <h1 className="text-[20px] sm:text-[25px] font-bold w-full sm:w-[90%] mb-[10px] max-w-[450px] text-nowrap">
              {card.titleSection1}
              <span className="gradient"> {card.titleSection2} </span>
              {card.titleSection3}
            </h1>
            <p className="w-full sm:w-[90%] max-w-[400px] min-w-[300px] mb-[50px] text-[14px] sm:text-[16px] leading-relaxed">
              {card.description}
            </p>
            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white py-[10px] px-[15px] border border-[#727fdeb4] bg-[#22004934] rounded-[10px] shadow-[0_0_5px_#727fde86] transition duration-300 hover:shadow-[0_0_15px_#727fde86] hover:opacity-[0.7]"
            >
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="w-3 h-3"
              />
              Website
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MyProjects;
