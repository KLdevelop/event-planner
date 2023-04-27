import React from 'react';
import styles from './footer.module.scss';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.leftBlock}>
        <div className={styles.contacts}>
          <p className={styles.title}>{'<Контакты>'}</p>
          <p className={styles.inf}>info@fsp-russia.com</p>
        </div>
        <p className={styles.copyright}>© Федерация спортивного программирования</p>
      </div>
      <div className={styles.rightBlock}>
        <p>Помогите сделать сервис лучше, напишите отзыв</p>
        <div className={styles.review}>
          <textarea className={styles.field} />
          <button className={styles.send}>Отправить</button>
        </div>
      </div>
    </div>
  );
};
