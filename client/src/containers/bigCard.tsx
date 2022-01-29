import React, { useEffect, useState } from "react";

import CardImage from "../components/cardImage";
import CardContent from "./cardContent";

import glassEffect from "../images/card_glass_effect.svg";

import * as styles from "../styles/bigCard.module.css";

const BigCard = () => {
  const [placeholder, setPlaceholder] = useState<string>("");
  //IPFS LOGIC
  useEffect(() => {
    const hash = "bafybeifmm4mmcfqdf7oilq53dxhfutf5mpkpjd5hxaa33l7nu2ea2rdl5a";
    (() => {
      fetch(`http://localhost:3000/image?hash=${hash}`)
        .then(res => res.json())
        .then(res => {
          setPlaceholder(res.image);
        });
    })();
  }, []);

  return (
    <div className={styles.container}>
      <CardImage src={placeholder} />
      <CardContent
        profilePic=""
        username=""
        title=""
        info={{ label: "", content: "" }}
      />
      <div className={styles.glass_effect__container}>
        <img src={glassEffect} alt="" className={styles.glass_effect} />
      </div>
    </div>
  );
};

export default BigCard;
