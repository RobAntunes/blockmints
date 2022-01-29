import React, { FC } from "react";

import * as styles from "../styles/card.module.css";

interface Props {
  label: string;
}

const AuctionInfoLabel: FC<Props> = ({ label }) => {
  return <p className={styles.AuctionInfoLabel}>{label}</p>;
};

export default AuctionInfoLabel;
