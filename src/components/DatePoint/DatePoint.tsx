import React, { useState } from 'react';
import { month } from 'src/helpers/fakeData';
import styles from './DatePoint.module.scss';

interface DatePointProps {
  getActiveMonth: (arg: string) => void;
}
export const DatePoint = (props: DatePointProps) => {
  const d = new Date();
  const [activeMonth, setActiveMonth] = useState(month[d.getMonth()]);
  return (
    <div className={styles.datePoint}>
      {month.map((i, ind) => (
        <div
          className={styles.datePoint_elem}
          key={ind}
          onClick={() => {
            setActiveMonth(i);
            props.getActiveMonth(i);
          }}
        >
          <div
            className={activeMonth === i ? styles.datePoint_circle_active : styles.datePoint_circle}
          ></div>
          <p className={styles.datePoint_month}>{i}</p>
        </div>
      ))}
    </div>
  );
};
