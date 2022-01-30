import React from 'react';

import logo from "../images/Blockmints.svg";

import * as styles from "../styles/logo.module.css";

const Logo = () => {
  return <div className={styles.logo__wrapper}>
    <img src={logo} alt="" className={styles.logo} />
  </div>
};

export default Logo;
