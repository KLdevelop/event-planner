import React from 'react';
import { SideBarLk, Header, NameBlockLk } from 'src/components';
import { Outlet } from 'react-router-dom';
import styles from './personalPage.module.scss';

export const PersonalPage = () => {
  return (
    <div className={styles.personalPage}>
      <Header />
      <NameBlockLk />
      <div className={styles.mainBlock}>
        <div className={styles.tabBlock}>
          <SideBarLk
            list={[
              { name: 'Личная информация ', link: 'info' },
              { name: 'Мои мероприятия ', link: 'events' },
              { name: 'Моя команда', link: 'team' },
              { name: 'Мой рейтинг', link: 'rating' },
            ]}
          />
        </div>
        <div className={styles.contentBlock}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
