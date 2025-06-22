import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { cardInfo } from "./card-data";
import {
  cardVariants,
  cardTitleVariants,
  cardDescriptionVariants,
} from "./card-styles";

const Info: React.FC = () => {

  const handleContactClick = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

  }
  return (
    <section id="About" className="info-section  flex flex-col items-center w-[80%] mt-10 md:mt-[150px] mx-auto ">
      <h1 className="section-title autoDisplay text-3xl sm:text-4xl font-bold mb-16 text-center">
        Hello, There 👋
      </h1>

      <div className="info-cards grid grid-cols-2 sm:grid-cols-3 gap-[20px] w-full h-auto mt-[30px]">
        {cardInfo?.map((card, index) => {
          const isThirdCard = index === 2;
          const isFourthCard = index === 3;
          const isDefault = [0, 1, 4].includes(index);

          return (
            <div
              key={index}
              className={cardVariants({ isThirdCard, isFourthCard })}
            >
              {card.image && (
                <img
                  src={card.image}
                  alt="card-image"
                  className="w-[60%]  h-[50%] object-cover mx-auto"
                />
              )}

              {card.video && (
                <video
                  poster="/images/glob2.png"
                  preload="auto"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full mx-auto sm:w-[80%] h-[50%] xl:h-[50%] mt-10 mix-blend-lighten pointer-events-none"
                >
                  <source src={card.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

              )}

              <h1
                className={cardTitleVariants({
                  isThirdCard,
                  isFourthCard,
                  default: isDefault,
                })}
              >
                {card.title}
              </h1>

              <p
                className={cardDescriptionVariants({
                  isThirdCard,
                  isFourthCard,
                })}
              >
                {card.description}
              </p>

              {isThirdCard && (
                <button onClick={handleContactClick} className=" flex border mt-4 xl:mt-8 items-center ml-4  gap-1  py-[5px] px-[15px] text-white  border-[#727fdeb4] bg-[#2200493d] rounded-[10px] shadow-[0_0_5px_#727fde86] transition duration-300 hover:shadow-[0_0_15px_#727fde86] hover:opacity-[0.7]">
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="w-[12px] h-[12px]"
                  />
                  Contact Me
                </button>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Info;
