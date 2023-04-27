import React, { useState } from 'react';
import { Card, DatePoint } from 'src/components';
import cardImage from 'src/assets/img/cardImage.png';
import styles from './overviewPage.module.scss';
import { cards, month } from 'src/helpers/fakeData';
import { getMonthFromDate } from 'src/helpers/commandFunc';

export const OverviewPage = () => {
  const d = new Date();
  const [activeMonth, setActiveMonth] = useState(month[d.getMonth()]);
  const getActiveMonth = (month: string) => {
    setActiveMonth(month);
  };
  return (
    <div className={styles.overviewPage}>
      <div className={styles.overviewPage_title}> {'<Календарь мероприятий>'}</div>
      <DatePoint getActiveMonth={getActiveMonth} />
      <div className={styles.overviewPage_card}>
        {cards.map((i, ind) =>
          activeMonth === month[getMonthFromDate(i.date)] ? (
            <Card
              key={ind}
              image={cardImage}
              description={i.description}
              date={i.date}
              team={i.team}
              tags={i.tags}
            />
          ) : null,
        )}
      </div>
    </div>
  );
};
