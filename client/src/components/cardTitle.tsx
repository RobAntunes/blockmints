import React, {FC} from 'react';

import * as styles from "../styles/card.module.css";

interface Props {
  title: string;
}

const CardTitle: FC<Props> = ({title}) => {
  return <h3 className={styles.card__title}>{title}</h3>;
}

export default CardTitle;