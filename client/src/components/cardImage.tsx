import React, { FC } from "react";

import * as styles from "../styles/card.module.css";

interface Props {
  src: string;
}

const CardImage: FC<Props> = ({ src }) => {
  return (
    <div className={styles.artwork__container}>
      <img className={styles.artwork} src={src} alt="" />
    </div>
  );
};

export default CardImage;