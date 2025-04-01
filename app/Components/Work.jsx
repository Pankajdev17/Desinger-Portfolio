import React from "react";
import WorkCards from "./WorkCards";

const Work = () => {
  return (
    <div className="bg-[var(--coloroff-white)] relative z-[2] py-10 md:py-22 px-5 md:px-10">
      <h2 className="font-[Boldonse] text-2xl md:text-4xl leading-[2]">
        Featured Projects
      </h2>
      <WorkCards />
    </div>
  );
};

export default Work;
