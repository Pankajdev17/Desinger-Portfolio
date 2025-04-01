"use client";
import { motion } from "motion/react";
const pathData = `M2 520.777C146.571 539.573 238.053 576.357 432 719.277C625.947 862.198 746.5 701.777 768.5 517.277C790.5 332.777 815.255 78.5 1031 78.5C1092.5 78.5 1165.47 148.959 1184 283.277C1206.93 449.511 936.426 524.75 1023 668.5C1108.63 810.679 1262.98 751.465 1401 659.277C1529.42 573.498 1462 310.277 1569 301.277C1676 292.277 1684.23 437.192 1700.5 511.5`;

const circles = [
  { cx: 432, cy: 719.277 },
  { cx: 768.5, cy: 517.277 },
  { cx: 1031, cy: 78.5 },
  { cx: 1184, cy: 283.277 },
  { cx: 1023, cy: 668.5 },
  { cx: 1401, cy: 659.277 },
  { cx: 1569, cy: 301.277 },
  { cx: 1700.5, cy: 511.5 },
];

const PathWithCircles = () => {
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
        animate={{ pathLength: 1 }}
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
          animate={{ scale: 1, opacity: 1 }}
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
