"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "motion/react";

const Skills = () => {
  const constraintRef = useRef(null);
  const timeoutRef = useRef(null);
  const hasMounted = useRef(false); 

  const skillIcons = [
    "figmalogo.svg",
    "photoshop.svg",
    "illustrator.svg",
    "html.svg",
    "css.svg",
    "tailwindcss.svg",
    "javascript.svg",
    "reactjs.svg",
  ];

  const [draggingSet, setDraggingSet] = useState(new Set());
  const controlsArray = useRef(skillIcons.map(() => useAnimation()));

  const startResetTimer = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (draggingSet.size === 0) {
      timeoutRef.current = setTimeout(() => {
        if (!hasMounted.current) return; // 🔐 Only animate if mounted

        controlsArray.current.forEach((controls) =>
          controls.start({
            x: 0,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 30 },
          })
        );
      }, 3000);
    }
  };

  const handleDragStart = (index) => {
    setDraggingSet((prev) => {
      const newSet = new Set(prev);
      newSet.add(index);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      return newSet;
    });
  };

  const handleDragEnd = (index) => {
    setDraggingSet((prev) => {
      const newSet = new Set(prev);
      newSet.delete(index);
      return newSet;
    });
  };

  useEffect(() => {
    startResetTimer();
  }, [draggingSet]);

  // ✅ Mount status tracker + cleanup
  useEffect(() => {
    hasMounted.current = true;

    return () => {
      hasMounted.current = false;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // ✅ Handle window resize animations safely
  useEffect(() => {
    const handleResize = () => {
      if (!hasMounted.current) return;
      controlsArray.current.forEach((controls) =>
        controls.start({
          x: 0,
          y: 0,
          transition: { type: "spring", stiffness: 300, damping: 30 },
        })
      );
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const midpoint = Math.ceil(skillIcons.length / 2);
  const row1 = skillIcons.slice(0, midpoint);
  const row2 = skillIcons.slice(midpoint);
  const rows = [row1, row2];

  return (
    <div
      ref={constraintRef}
      className="relative z-[1] bg-[var(--bgcolor)] px-10 py-20 overflow-hidden"
    >
      <h2 className="font-[Boldonse] text-center text-white text-2xl md:text-4xl leading-[2]">
        Crafted With These Tools
      </h2>

      <table className="w-full md:w-fit md:table-fixed md:mx-auto border-collapse text-white mt-8 pointer-events-none">
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="grid grid-cols-2 md:table-row">
              {row.map((icon, colIndex) => {
                const index = rowIndex * midpoint + colIndex;
                return (
                  <td
                    key={colIndex}
                    className="border md:border-2 border-dashed flex justify-center md:table-cell border-white py-3 w-full md:px-8"
                  >
                    <motion.div
                      drag
                      dragConstraints={constraintRef}
                      dragElastic={0.5}
                      onDragStart={() => handleDragStart(index)}
                      onDragEnd={() => handleDragEnd(index)}
                      animate={controlsArray.current[index]}
                      whileDrag={{ scale: 1.1, zIndex: 10 }}
                      className="w-24 h-24 flex items-center px-3 justify-center bg-white rounded-lg cursor-grab active:cursor-grabbing pointer-events-auto"
                      style={{ touchAction: "none" }}
                    >
                      <Image
                        src={`/images/${icon}`}
                        alt={icon}
                        width={60}
                        height={60}
                        className="object-contain size-auto pointer-events-none"
                      />
                    </motion.div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Skills;
