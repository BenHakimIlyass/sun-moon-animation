import React from "react";
import { motion } from "framer-motion";
import Moon from "./moon";
import Beach from "./beach";
import Buoy from "./buoy";
import Lighthouse from "./lighthouse";

const Midday = ({ ...props }) => {
  const motions = (delay: number) => ({
    initial: { y: -400 },
    animate: { y: 0 },
    transition: { delay: delay, type: "spring", stiffness: 200, damping: 20 }
  });
  return (
    <div {...props}>
      <Moon />
      <Beach />
      <Buoy />
      <Lighthouse />
    </div>
  );
};
export default Midday;
