import React from "react";
import StatsSection from "./StatsSection";

const HomeAbout = () => {
  return (
    <div className="bg-[var(--coloroff-white)] rounded-t-2xl md:rounded-t-4xl relative z-[2] py-10 md:py-15 px-5 md:px-10">
      <h2 className="font-[Boldonse] text-base md:text-2xl lg:text-4xl 2xl:text-5xl leading-[2] relative">
        A frontend developer who loves to create breathtaking yet usable digital
        experiences. High on performance in JavaScript, React, WordPress, and
        Shopify, working with responsive interfaces and attractive designs for
        web pages. Functionality merged with creativity gives rise to a real
        sense of smoothness and flawless performance, from the user's
        perspective.
      </h2>
      <StatsSection />
    </div>
  );
};

export default HomeAbout;
