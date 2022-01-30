import React, { FC } from "react";

interface Props {
  className: string;
  content: string;
}

import * as styles from "../styles/headings.module.css";

export const HeaderOne: FC<Props> = ({ className, content }) => (
  <h1 className={styles[className]}>{content}</h1>
);
export const HeaderTwo: FC<Props> = ({ className, content }) => (
  <h2 className={styles[className]}>{content}</h2>
);
export const HeaderThree: FC<Props> = ({ className, content }) => (
  <h3 className={styles[className]}>{content}</h3>
);
export const HeaderFour: FC<Props> = ({ className, content }) => (
  <h4 className={styles[className]}>{content}</h4>
);
export const HeaderFive: FC<Props> = ({ className, content }) => (
  <h5 className={styles[className]}>{content}</h5>
);
export const HeaderSix: FC<Props> = ({ className, content }) => (
  <h6 className={styles[className]}>{content}</h6>
);
