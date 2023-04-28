import React from 'react';
import styles from './ratingPage.module.scss';
import { Dropdown } from 'src/components/Dropdown';
import { Outlet } from 'react-router';

export const RatingPage = () => {
  return (
    <div className={styles.ratingPage}>
      <div className={styles.headBlock}>
        <Dropdown
          placeholder="Выберите рейтинг"
          items={['Рейтинг по командам', 'Личный рейтинг', 'Рейтинг мероприятий']}
          setActiveOption={() => null}
        />
        <Outlet />
      </div>
    </div>
  );
};
