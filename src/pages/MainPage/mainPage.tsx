import React from 'react';
import styles from './mainPage.module.scss';
import { Banner } from 'src/components';

export const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <Banner />
      <div className={styles.newsBlock}>
        <p className={styles.title}>{'<Новости>'}</p>
        <div className={styles.news}></div>
      </div>
    </div>
  );
};
