import React, { FC } from "react";

import AuctionInfoItem from "./auctionInfoItem";

import * as styles from "../styles/card.module.css";

interface Props {
  info: {
    label: string;
    content: string;
  };
}

const AuctionInfo: FC<Props> = ({ info: { label, content } }) => {
  return (
    <div className={styles.auction__info}>
      <AuctionInfoItem label={label} content={content} />
      <AuctionInfoItem label={label} content={content} />
    </div>
  );
};

export default AuctionInfo;
