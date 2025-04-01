import React from "react";
import Banner from "./Components/Banner";
import HomeAbout from "./Components/HomeAbout";
import Work from "./Components/Work";
import Skills from "./Components/Skills";

const page = () => {
  return (
    <main className="bg-[var(--bgcolor)]">
      <Banner />
      <HomeAbout />
      <Skills />
      <Work />
    </main>
  );
};

export default page;
