import React, { FC } from "react";
import ButtonLarge from "../components/buttons";

import { HeaderOne, HeaderThree } from "../components/headings";

import * as styles from "../styles/hero.module.css";

interface Props {
  header: string;
  tagline: string;
}
const HeroContent: FC<Props> = ({ header, tagline }) => {
  return (
    <div className={styles.hero__content}>
      <HeaderOne className="heading" content={header} />
      <HeaderThree className="tagline" content={tagline} />
      <ButtonLarge className="hero_button" content="Start Collecting" />
    </div>
  );
};

export default HeroContent;
