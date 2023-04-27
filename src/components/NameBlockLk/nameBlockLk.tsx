import React from 'react';
import styles from './nameBlockLk.module.scss';

export const NameBlockLk = () => {
  return (
    <div className={styles.nameBlockLk}>
      <img src="" alt="" className={styles.avatar} />
      <div className={styles.nameBlock}>
        <p className={styles.FIO}>Имя Фамилия</p>
        <p className={styles.role}>Роль</p>
      </div>
    </div>
  );
};
