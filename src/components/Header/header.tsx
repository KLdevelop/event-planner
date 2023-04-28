import React from 'react';
import styles from './header.module.scss';
import userLK from 'src/assets/logo/userLK.png';
import headerLogo from 'src/assets/logo/headerLogo.svg';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_left}>
        <img src={headerLogo} />
        <span>Программируя будущее</span>
      </div>
      <div className={styles.header_right}>
        <div className={styles.header_right_img}>
          <Link to="/login">
            <img src={userLK} />
          </Link>
        </div>
        <div className={styles.header_right_items}>
          <Link to="/">
            <span className={styles.header_right_span}>Главная</span>
          </Link>
          <Link to="/overview">
            <span className={styles.header_right_span}>Мероприятия</span>
          </Link>
          <Link to="/lk/rating">
            <span className={styles.header_right_span}>Рейтинг</span>
          </Link>
          <span className={styles.header_right_span}>Оценки</span>
        </div>
      </div>
    </header>
  );
};
