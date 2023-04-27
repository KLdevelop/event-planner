import React from 'react';
import styles from './nameBlockLk.module.scss';

export const NameBlockLk = () => {
  return (
    <div className={styles.nameBlockLk}>
      <img src="" alt="" />
      <div className={styles.nameBlock}>
        <p>Имя Фамилия</p>
        <p>Роль</p>
      </div>
    </div>
  );
};
