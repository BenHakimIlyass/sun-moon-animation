import React from "react";
import { motion } from "framer-motion";
import Sun from "./sun";
import Umbrella from "./umbrella";
import Beach from "./beach";
import Boat from "./boat";

const Midday = () => {
  const motions = (delay: number) => ({
    initial: { y: -400 },
    animate: { y: 0 },
    transition: { delay: delay, type: "spring", stiffness: 200, damping: 20 }
  });
  return (
    <>
      <Sun />
      <Beach />
      <Umbrella />
      <Boat />
    </>
  );
};
export default Midday;
