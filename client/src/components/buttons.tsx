import React, { FC } from "react";

import * as styles from "../styles/buttons.module.css";

interface Props {
  className: string;
  content: string;
}

const ButtonLarge: FC<Props> = ({ className, content }) => {
  return (
    <button className={`${styles.button_large} ${styles[className]}`} type="button">
      {content}
    </button>
  );
};

export default ButtonLarge;
