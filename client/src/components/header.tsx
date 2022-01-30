import React from "react";
import { Link } from "gatsby";

import ButtonLarge from "./buttons";
import Logo from "./logo";

import * as styles from "../styles/header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          <Link className={styles.nav__list__item} to="/">
            Home
          </Link>
          <Link className={styles.nav__list__item} to="/about">
            About
          </Link>
          <Link className={styles.nav__list__item} to="/marketplace">
            Marketplace
          </Link>
          <Link className={styles.nav__list__item} to="/filter">
            Sports & Teams
          </Link>
        </ul>
      </nav>
      <ButtonLarge className="header_button" content="Connect Wallet" />
    </div>
  );
};

export default Header;
