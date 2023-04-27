import React from 'react';
import styles from './DatePoint.module.scss';

export const DatePoint = () => {
  const month = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];
  return (
    <div className={styles.datePoint}>
      {month.map((i, ind) => (
        <div className={styles.datePoint_elem} key={ind}>
          <div className={styles.datePoint_circle_active}></div>
          <p className={styles.datePoint_month}>{i}</p>
        </div>
      ))}
    </div>
  );
};
