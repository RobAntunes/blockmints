import React, { FC } from "react";

import * as styles from "../styles/card.module.css";

interface Props {
  content: string;
}

const AuctionInfoContentItem: FC<Props> = ({ content }) => {
  return <h4 className={styles.auctionInfoContentItem}>{content}</h4>;
};

export default AuctionInfoContentItem;
