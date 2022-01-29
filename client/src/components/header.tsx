import React from "react";

import { Link } from "gatsby";

import * as styles from "../styles/header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src="" alt="" />
        <h2>Blockmints</h2>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          <Link className={styles.nav__list__item} to="/">Home</Link>
          <Link className={styles.nav__list__item} to="/about">About</Link>
          <Link className={styles.nav__list__item} to="/marketplace">Marketplace</Link>
          <Link className={styles.nav__list__item} to="/filter">Sports & Teams</Link>
        </ul>
      </nav>
      <button className={styles.connect} type="button">
        Connect Wallet
      </button>
    </div>
  );
};

export default Header;
