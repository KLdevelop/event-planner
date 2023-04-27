import React from 'react';
import styles from './Card.module.scss';
interface CardProps {
  image: string;
  description: string;
  date: string;
  team: string;
  tags: string[];
}
export const Card = (props: CardProps) => {
  return (
    <div className={styles.card}>
      <img src={props.image} />
      <div className={styles.cardDesc}>{props.description}</div>
      <div className={styles.cardDate}>
        <span>Дата:</span>
        {props.date}
      </div>
      <div className={styles.cardTeam}>
        <span>Команда: </span>
        {props.team}
      </div>
      <div className={styles.cardTag}>
        {props.tags.map((i, ind) => (
          <div className={styles.cardTagElem} key={ind}>
            {i}
          </div>
        ))}
      </div>
    </div>
  );
};
