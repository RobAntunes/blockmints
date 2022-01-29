import React, { FC } from "react";

import * as styles from "../styles/card.module.css";

export interface Props {
  image: string;
  title: string;
  username: string;
  bid: number;
  timer: number; // Might have to make custom timer component
}

const Card: FC<Props> = ({ image, username, title, bid, timer }) => {
  return (
    <div className={styles.card__container}>
      <div className={styles.artwork}>
        <div className={styles.card__content}>
          <div className={styles.artist}>
            <img src={image} alt="" className={styles.profile_picture} />
            <p className={styles.username}>{username}</p>
          </div>
          <div className={styles.artwork__title}>{title}</div>
          <div className={styles.bid__container}>
            <p className={styles.bid_label}>Current Bid</p>
            <h4>{bid} ETH</h4>
          </div>
          <div className={styles.timer__container}>
            <p className={styles.timer_label}>Auction ending in</p>
            <h4>{timer}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
