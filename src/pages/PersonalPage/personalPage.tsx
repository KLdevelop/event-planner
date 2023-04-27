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
              { name: 'Личная информация ', link: '/test' },
              { name: 'Мои мероприятия ', link: '/test' },
              { name: 'Моя команда', link: '/test' },
              { name: 'Мой рейтинг', link: '/test' },
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
