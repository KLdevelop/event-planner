import React from 'react';
import { SideBarLk } from 'src/components';
import styles from './personalPage.module.scss';

export const PersonalPage = () => {
  return (
    <div className={styles.personalPage}>
      <SideBarLk
        list={[
          { name: 'Личная информация ', link: '/test' },
          { name: 'Мои мероприятия ', link: '/test' },
          { name: 'Моя команда', link: '/test' },
          { name: 'Мой рейтинг', link: '/test' },
        ]}
      />
    </div>
  );
};
