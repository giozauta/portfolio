import React from "react";

const Background: React.FC = () => {
  return (
    <video
      poster="/images/galaxy.png"
      preload="auto"
      loop
      autoPlay
      muted
      playsInline
      className="fixed top-0 left-0 w-full h-full object-cover  z-[-1] pointer-events-none"
    >
      <source src="/videos/galaxy2.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

  );
};

export default Background;
