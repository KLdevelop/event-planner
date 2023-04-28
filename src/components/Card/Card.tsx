import React from 'react';
import styles from './Card.module.scss';
interface CardProps {
  image: string;
  description: string;
  date?: string | undefined;
  team?: string | undefined;
  tags?: string[] | undefined;
  result?: string | undefined;
  status?: string | undefined;
  teamName?: string | undefined;
}
export const Card = (props: CardProps) => {
  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src={props.image} />
      <div className={styles.cardDesc}>{props.description}</div>
      {props.date && (
        <div className={styles.cardDate}>
          <span>Дата:</span>
          {props.date}
        </div>
      )}
      {props.team && (
        <div className={styles.cardTeam}>
          <span>Команда: </span>
          {props.team}
        </div>
      )}
      {props.tags && (
        <div className={styles.cardTag}>
          {props?.tags?.map((i, ind) => (
            <div className={styles.cardTagElem} key={ind}>
              {i}
            </div>
          ))}
        </div>
      )}
      {props.status && (
        <div className={styles.status}>
          <span>Статус:</span>
          {props.status}
        </div>
      )}
      {props.teamName && (
        <div className={styles.teamName}>
          <span>Команда:</span>
          {props.teamName}
        </div>
      )}
      {props.result && (
        <div className={styles.result}>
          <span>Результат:</span>
          {props.result}
        </div>
      )}
      {props.result && <button className={styles.card_like}>Оценить</button>}
    </div>
  );
};
