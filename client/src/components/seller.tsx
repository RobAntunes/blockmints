import React, {FC} from "react";

import * as styles from "../styles/card.module.css";

interface Props {
  profilePic: string;
  username: string;
}

const Seller: FC<Props> = ({profilePic, username}) => {
  return (
    <div className={styles.artist}>
      <img src={profilePic} alt="" className={styles.profile_picture} />
      <p className={styles.username}>{username}</p>
    </div>
  );
}

export default Seller;