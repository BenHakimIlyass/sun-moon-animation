import React from "react";
import { motion } from "framer-motion";

const Beach = ({ ...props }) => {
  const motions = (delay: number, y: number) => ({
    initial: { y: 400 },
    exit: { y: 600 },
    animate: { y: y },
    transition: { delay: delay, type: "spring", stiffness: 200, damping: 40 }
  });
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        bottom: -10,
        width: "100%"
      }}
      {...props}
    >
      <svg width="100%" height="100%" viewBox="0 0 665 87" fill="none">
        <motion.path
          {...motions(0, 10)}
          d="M195.614 29.1161C115.901 35.6028 -1 87 -1 87H665V51.7663C665 51.7663 581.452 12.3061 524.632 13.0093C470.246 13.6824 444.759 45.394 390.735 51.7663C314.552 60.7525 272.067 22.8947 195.614 29.1161Z"
          fill="url(#night_water)"
        />
        <motion.path
          {...motions(0.1, 0)}
          d="M273.5 90.4998C200.3 12.8998 60.3333 -1.50022 -0.5 0.99978V90.4998H273.5Z"
          fill="url(#night_sand)"
        />
        <defs>
          <linearGradient
            id="night_water"
            x1="-0.502242"
            y1="86.4968"
            x2="665.498"
            y2="86.4968"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#98AEEB" />
            <stop offset="0.0001" stop-color="#647ACB" />
            <stop offset="1" stop-color="#19216C" />
          </linearGradient>
          <linearGradient
            id="night_sand"
            x1="4.15839e-06"
            y1="0.999997"
            x2="274"
            y2="90"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#334E68" />
            <stop offset="1" stop-color="#9FB3C8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
export default Beach;
