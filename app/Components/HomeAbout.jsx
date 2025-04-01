import Image from "next/image";
import React from "react";
import StatsSection from "./StatsSection";

const HomeAbout = () => {
  return (
    <div className="bg-[var(--coloroff-white)] rounded-t-2xl md:rounded-t-4xl relative z-[2] py-10 md:py-15 px-5 md:px-10">
      <h2 className="font-[Boldonse] text-base md:text-2xl lg:text-4xl leading-[2] relative">
        A web designer is a creative professional who crafts the look and feel
        of websites. They focus on layout, colors, typography, and user
        experience to ensure each design is both visually appealing and
        functional. Their goal is to bring ideas to life through beautiful and
        user-friendly digital interfaces.
        <Image
          src="../images/figmalogo.svg"
          width={200}
          height={300}
          alt="figma-logo"
          className="absolute -bottom-10 right-0 md:left-[50vw] lg:left-[40vw] xl:left-1/5 rotate-20 size-12 md:size-20"
        />
      </h2>
      <StatsSection />
    </div>
  );
};

export default HomeAbout;
