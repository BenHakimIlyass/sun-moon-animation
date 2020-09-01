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
          ? "linear-gradient(180deg,  #051728,#173756)"
          : "linear-gradient(180deg, #FFFFFF, #FFFAEB)"
      }}
      whileTap={{
        backgroundImage: dark
          ? "linear-gradient(180deg,  #071C31,#071C31)"
          : "linear-gradient(180deg, #FFFFFF, #FFFFFF)"
      }}
    >
      <Playground
        onTap={() => toggle((prev) => !prev)}
        animate={{
          boxShadow: dark
            ? "0px 0px 16px rgba(0, 0, 0, 0.24)"
            : "0px 0px 16px rgba(152, 163, 183, 0.24)"
        }}
        whileTap={{ scale: 0.9, backgroundColor: dark ? "#102A43" : "#F4ECD1" }}
      >
        <AnimatePresence exitBeforeEnter>{!dark && <Midday />}</AnimatePresence>
        <AnimatePresence exitBeforeEnter>{dark && <Night />}</AnimatePresence>
        <P animate={{ color: !dark ? "#BCCCDC" : "#DFF7FA" }}>
          Tap here to toggle time
        </P>
      </Playground>
    </Main>
  );
}
const Main = styled(motion.div)`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  padding: 40px;
  box-sizing: border-box;
`;

const Playground = styled(motion.div)`
  overflow: hidden;
  height: 90vh;
  cursor: pointer;
  width: 100%;
  border-radius: 30px;
  position: relative;
  margin: 0px auto;
  max-width: 1200px;
  box-shadow: 0px 0px 16px rgba(152, 163, 183, 0.24);
`;
const P = styled(motion.p)`
  position: absolute;
  left: calc(50% - 70px);
  text-align: center;
  font-size: 0.9rem;
  font-family: sans-serif;
  margin-top: calc(50vh - 10px);
`;
