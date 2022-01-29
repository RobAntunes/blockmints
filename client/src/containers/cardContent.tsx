import React, { FC } from "react";

import Seller from "../components/seller";
import CardTitle from "../components/cardTitle";
import AuctionInfo from "../containers/auctionInfo";

import * as styles from "../styles/card.module.css"

interface Props {
  profilePic: string,
  username: string,
  title: string,
  info: {
    label: string;
    content: string;
  }
}


const CardContent: FC<Props> = ({profilePic, username, title, info}) => {
  return (
    <div className={styles.card__content}>
      <Seller profilePic={profilePic} username={username} />
      <CardTitle title={title} />
      <AuctionInfo info={info} />
    </div>
  );
};

export default CardContent;
