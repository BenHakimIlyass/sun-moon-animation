import * as React from "react";
import "./styles.css";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
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
      <AnimatePresence exitBeforeEnter>{dark && <Night />}</AnimatePresence>
      <AnimatePresence exitBeforeEnter>{!dark && <Midday />}</AnimatePresence>
      <Playground
        whileTap={{ scale: 1.1 }}
        initial={{ backgroundColor: "#000" }}
        animate={{
          backgroundColor: dark ? "#fff" : "#000"
        }}
      >
        <Toggle
          initial={{ x: 0, backgroundColor: "#fff" }}
          animate={{
            x: dark ? 120 : 0,
            backgroundColor: dark ? "#000" : "#fff"
          }}
          onTap={() => toggle((prev) => !prev)}
        />
      </Playground>
    </Main>
  );
}
const Main = styled(motion.div)`
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;
const Toggle = styled(motion.div)`
  background-color: #fff;
  width: 100px;
  height: 100px;
  border: none;
  border-radius: 50px;
`;
const Playground = styled(motion.div)`
  background-color: #000;
  width: 220px;
  height: 100px;
  border-radius: 50px;
  padding: 4px;
  margin: calc(70vh - 100px) auto;
`;