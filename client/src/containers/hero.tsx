import React from "react";

import HeroBlur from "../components/heroBlur";
import BigCard from "./bigCard";
import GlassPane from "../components/glassPane";

import * as styles from "../styles/hero.module.css";

const Hero = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background__container}></div>
        <HeroBlur />
        <GlassPane />
      </div>
      <BigCard />
    </>
  );
};

export default Hero;
