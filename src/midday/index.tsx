import React from "react";
import { motion } from "framer-motion";
import Sun from "./sun";
import Beach from "./beach";
const Midday = ({ ...props }) => {
  const motions = (delay: number) => ({
    initial: { y: -400 },
    animate: { y: 0 },
    transition: { delay: delay, type: "spring", stiffness: 200, damping: 20 }
  });
  return (
    <div {...props}>
      <Sun />
      <Beach />
    </div>
  );
};
export default Midday;
