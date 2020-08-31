import * as React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import "./styles.css";

import Night from "./night";
import Midday from "./midday";

export default function App() {
  const [dark, toggle] = React.useState(false);
  return (
    <Main
      initial={{
        backgroundImage: "linear-gradient(180deg, #FFFAEB, #FFFFFF)"
      }}
      animate={{
        backgroundImage: dark
          ? "linear-gradient(180deg, #627D98, #102A43)"
          : "linear-gradient(180deg, #FFFAEB, #FFFFFF)"
      }}
    >
      <Playground
        onTap={() => toggle((prev) => !prev)}
        whileTap={{ scale: 0.9, backgroundColor: dark ? "#102A43" : "#F4ECD1" }}
      >
        <AnimatePresence exitBeforeEnter>{!dark && <Midday />}</AnimatePresence>
        <AnimatePresence exitBeforeEnter>{dark && <Night />}</AnimatePresence>
        <P animate={{ color: !dark ? "#BCCCDC" : "#DFF7FA" }}>Tap here</P>
      </Playground>
    </Main>
  );
}
const Main = styled(motion.div)`
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const Playground = styled(motion.div)`
  overflow: hidden;
  height: 100vh;
  cursor: pointer;
  width: 100%;
  border-radius: 30px;
  position: relative;
`;
const P = styled(motion.p)`
  position: absolute;
  left: calc(50% - 30px);
  text-align: center;
  font-size: 0.9rem;
  font-family: sans-serif;
  margin-top: calc(50vh - 10px);
`;
