import React from 'react';
import { Header, NameBlockLk } from 'src/components';
import { Outlet } from 'react-router-dom';
import styles from './personalPage.module.scss';

export const PersonalPage = () => {
  return (
    <div className={styles.personalPage}>
      <Header />
      <NameBlockLk />
      <div className={styles.mainBlock}>
        <div className={styles.tabBlock}></div>
        <div className={styles.contentBlock}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
