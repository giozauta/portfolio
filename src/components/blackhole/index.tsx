import React from "react";

const BlackHole: React.FC = () => {
  return (
    <div className="blackhole-box  w-full  flex justify-center  mix-blend-lighten  ">
      <video
        poster="/images/blackhole.png"
        preload="auto"
        loop
        autoPlay
        muted
        playsInline
        className="w-full h-46 sm:h-54 md:h-59 lg:h-72 pointer-events-none"
      >
        <source src="/videos/blackhole2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    </div>
  );
};

export default BlackHole;
