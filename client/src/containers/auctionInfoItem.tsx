import React, { FC } from "react";

import AuctionInfoLabel from "../components/auctionInfoLabel";
import AuctionInfoContentItem from "../components/auctionInfoContentItem";

interface Props {
  label: string;
  content: string;
}

const auctionInfoItem: FC<Props> = ({ label, content }) => {
  return (
    <>
      <AuctionInfoLabel label={label} />
      <AuctionInfoContentItem content={content} />
    </>
  );
};

export default auctionInfoItem;
