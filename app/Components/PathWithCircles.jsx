"use client";
import { motion } from "motion/react";
import { usePageTransition } from "../context/allowPageAnimations";

const pathData = `M0 451.777C144.571 470.573 236.053 507.357 430 650.277C623.947 793.198 744.5 632.777 766.5 448.277C788.5 263.777 813.255 9.50003 1029 9.5C1090.5 9.49999 1195.68 79.3789 1182 214.277C1165.5 377 1014.83 503.229 1066 629C1119.5 760.5 1343.09 746.551 1399 590.277C1446.5 457.5 1460 241.277 1567 232.277C1674 223.277 1682.23 368.192 1698.5 442.5`;


const circles = [
  { cx: 432, cy: 651.2 },
  { cx: 754, cy: 517.277 },
  { cx: 1031, cy: 10 },
  { cx: 1182, cy: 220 },
  { cx: 1090, cy: 668.5 },
  { cx: 1395, cy: 600 },
  { cx: 1580, cy: 232 },
  { cx: 1700.5, cy: 450 },
];

const PathWithCircles = () => {
  const { allowPageAnimations } = usePageTransition(); 

  return (
    <svg
      viewBox="0 0 1776 785"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      preserveAspectRatio="xMinYMid meet"
    >
      <motion.path
        d={pathData}
        stroke="#8463FF"
        strokeWidth="18"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={allowPageAnimations ? { pathLength: 1 } : {}}
        transition={{ duration: 4, ease: "easeInOut" }}
        strokeLinecap="round"
      />

      {circles.map((circle, i) => (
        <motion.circle
          key={i}
          cx={circle.cx}
          cy={circle.cy}
          r="12"
          fill="white"
          stroke="#8463FF"
          strokeWidth="5"
          initial={{ scale: 0, opacity: 0 }}
          animate={allowPageAnimations ? { scale: 1, opacity: 1 } : {}}
          transition={{
            delay: (i + 1) * 0.5,
            duration: 0.4,
            type: "spring",
            stiffness: 300,
          }}
        />
      ))}
    </svg>
  );
};

export default PathWithCircles;
