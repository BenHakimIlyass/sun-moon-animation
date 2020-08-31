import React from "react";
import { motion } from "framer-motion";

const Beach = ({ ...props }) => {
  const motions = (delay: number) => ({
    initial: { y: -400 },
    exit: { y: -400 },
    animate: { y: 0 },
    transition: { delay: delay, type: "spring", stiffness: 200, damping: 20 }
  });
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        bottom: 0,
        width: "100%"
      }}
      {...props}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 665 87"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M195.614 29.1161C115.901 35.6028 -1 87 -1 87H665V51.7663C665 51.7663 581.452 12.3061 524.632 13.0093C470.246 13.6824 444.759 45.394 390.735 51.7663C314.552 60.7525 272.067 22.8947 195.614 29.1161Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M273.5 90.4998C200.3 12.8998 60.3333 -1.50022 -0.5 0.99978V90.4998H273.5Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="-0.502242"
            y1="86.4968"
            x2="665.498"
            y2="86.4968"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#98AEEB" />
            <stop offset="0.0001" stop-color="#647ACB" />
            <stop offset="1" stop-color="#E0E8F9" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="4.15839e-06"
            y1="0.999997"
            x2="274"
            y2="90"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F9DA8B" />
            <stop offset="1" stop-color="#FCEFC7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
export default Beach;
