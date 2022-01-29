import React, { FC } from "react";

import * as styles from "../styles/timer.module.css";

interface Props {
  time: number;
}

const Timer: FC<Props> = ({ time }) => {
  return (
    <div className={styles.timer__container}>
      <p className={styles.timer}>{time}</p>
    </div>
  );
};

export default Timer;
