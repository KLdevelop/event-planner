import React from 'react';
import { myEvents } from 'src/helpers/fakeData';
import { Card } from '../Card';
import cardImage from 'src/assets/img/cardImage.png';
import styles from './MyEvents.module.scss';

export const MyEvents = () => {
  return (
    <div className={styles.myEvents}>
      {myEvents.map((i, ind) => (
        <Card
          key={ind}
          image={cardImage}
          description={i.description}
          status={i.status}
          teamName={i.teamName}
          result={i.results}
        />
      ))}
    </div>
  );
};
