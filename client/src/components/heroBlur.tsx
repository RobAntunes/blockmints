import React from "react";

import backgroundBlur from "../images/Blur Effect.svg";

import * as styles from "../styles/heroBlur.module.css";

const HeroBlur = () => {
  return (
    <div className={styles.background__blur}>
      <img src={backgroundBlur} alt="" />
    </div>
  );
};

export default HeroBlur;
