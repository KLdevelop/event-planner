import React from 'react';
import styles from './header.module.scss';
import userLK from 'src/assets/logo/userLK.png';
import headerLogo from 'src/assets/logo/headerLogo.svg';

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_left}>
        <img src={headerLogo} />
        <span>Программируя будущее</span>
      </div>
      <div className={styles.header_right}>
        <div className={styles.header_right_img}>
          <img src={userLK} />
        </div>
        <div className={styles.header_right_items}>
          <span className={styles.header_right_span}>Главная</span>
          <span className={styles.header_right_span}>Мероприятия</span>
          <span className={styles.header_right_span}>Рейтинг</span>
          <span className={styles.header_right_span}>Оценки</span>
        </div>
      </div>
    </div>
  );
};
