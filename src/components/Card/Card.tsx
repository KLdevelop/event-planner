import React from 'react';
import styles from './Card.module.scss';
interface CardProps {
  image: string;
  description: string;
  date: string;
}
export const Card = (props: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage} style={{ backgroundImage: `url(${props.image})` }}></div>
      <div>{props.description}</div>
      <div>{props.date}</div>
    </div>
  );
};
