import React from "react";

import HeroBlur from "../components/heroBlur";
import BigCard from "./bigCard";
import GlassPane from "../components/glassPane";

import data from "../data/hero.json";

import * as styles from "../styles/hero.module.css";

import HeroContent from "./heroContent";

const Hero = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background__container}></div>
        <HeroBlur />
        <HeroContent header={data.header} tagline={data.tagline} />
        <GlassPane />
      </div>
      <BigCard />
    </>
  );
};

export default Hero;
