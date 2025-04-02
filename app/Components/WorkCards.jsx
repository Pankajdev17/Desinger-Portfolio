"use client";
import { motion } from "motion/react";
import Link from "next/link";
import React, { useState } from "react";

const WorkCards = () => {
  const cards = [
    {
      
      image:
        "/images/hostgenius.webp",
      text: "Hostgenius",
      stack: ["webflow"],
      url:'https://hostgenius-063f3c.webflow.io/'
    },
    {
  
      image:
        "/images/unibuddy.webp",
      text: "Unibuddy",
      stack: ["Reactjs"],
      url:'https://unibuddy.com/'
    },
    {

      image:
        "/images/bassmedi.webp",
      text: "Future Vision",
      stack: ["webflow"],
      url:'https://bass-medical-group.webflow.io/'
    },
    {

      image:
        "/images/bankrate.webp",
      text: "Bankrate",
      stack: ["Nextjs"],
      url:'https://www.bankrate.com/'
    },
    {
   
      image:
        "/images/furniture.webp",
      text: "Furniture Labels",
      stack: ["Wordpress","WooCommerce"],
      url:'https://thefurniturelabels.com/'
    },
    {
   
      image:
        "/images/atlas.webp",
      text: "Atlas",
      stack: ["Shopify","ecommerces"],
      url:'https://atlasbars.com/'
    },
  ];

  const [hoverStates, setHoverStates] = useState(
    cards.map(() => ({ isHovering: false }))
  );

  const handleHover = (index, value) => {
    setHoverStates((prev) => {
      const newState = [...prev];
      newState[index] = { isHovering: value };
      return newState;
    });
  };

  return (
    <div className="w-full grid md:grid-cols-2 gap-x-5 gap-y-8 md:gap-y-15 mx-auto mt-4 md:mt-8">
      {cards.map((card, index) => (
        <Link
          href={card.url}
          target="_blank"
          key={card.text}
          className="group relative"
          onMouseEnter={() => handleHover(index, true)}
          onMouseLeave={() => handleHover(index, false)}
        >
          <h3 className="flex items-center gap-1.5 pl-2 text-lg mb-1.5">
            <span className="size-3 rounded-full inline-block bg-[var(--color-purple)]"></span>{" "}
            {card.text}
          </h3>
          <div className="w-full h-auto group-active:scale-98 group-hover:scale-98 duration-700 rounded overflow-hidden">
            <img
              width={663}
              height={551}
              className="w-full h-full group-active:scale-110 group-hover:scale-110 object-cover duration-500"
              src={card.image}
              alt={card.text}
            />
          </div>

          <h4
            style={{ zIndex: index + 1 }}
            className={`font-[Boldonse] absolute stroke text-[var(--coloroff-white)] !pointer-events-none font-bold text-nowrap text-3xl md:text-[6vw] ${
              index % 2 === 0
                ? "left-1/2 md:left-full -translate-x-1/2"
                : "left-1/2 md:left-[unset] md:right-full -translate-x-1/2 md:translate-x-1/2"
            } -translate-y-1/2 top-1/2`}
          >
            <p className="w-full h-full leading-[2] overflow-hidden">
              {card.text.split("").map((char, ind) => (
                <motion.span
                  key={ind}
                  className="inline-block whitespace-pre"
                  initial={{ y: 200 }}
                  animate={{ y: hoverStates[index].isHovering ? 0 : 200 }}
                  transition={{
                    duration: 0.35,
                    ease: [0.83, 0, 0.17, 1],
                    delay: (ind + 1) * 0.02,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </p>
          </h4>

          <div className="flex items-center gap-2 mt-3">
            {card.stack.map((st) => (
              <span
                key={st}
                className="border uppercase border-dashed px-3 py-0.5 text-base border-[var(--color-purple)] font-medium text-[var(--color-purple)]"
              >
                {st}
              </span>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default WorkCards;
