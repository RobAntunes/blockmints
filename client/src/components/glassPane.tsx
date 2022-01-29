import React from 'react';

import backgroundGlass from "../images/Glass Effect.svg";

import * as styles from "../styles/heroGlass.module.css";

const GlassPane = () => {
  return (
    <div className={styles.background__glass}>
        <img src={backgroundGlass} alt="" />
      </div>
  );
};

export default GlassPane;