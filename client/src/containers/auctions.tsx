import React from "react";
import Card from "./card";

import * as styles from "../styles/auctions.module.css"

const Auctions = () => {
  return (
    <div className={styles.auctions}>
      <Card className="auction_area_1" image="" username="" title="" bid={0} timer={0}/>
      <Card className="auction_area_2" image="" username="" title="" bid={0} timer={0}/>
      <Card className="auction_area_3" image="" username="" title="" bid={0} timer={0}/>
    </div>
  );
};

export default Auctions;
