import React from 'react';
// import logo from 'src/assets/logo/headerLogo.svg';
import styles from './banner.module.scss';

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.mapLayer}>
        <div className={styles.womenLayer}>
          <div className={styles.lineLayer}>
            <div className={styles.bottom}>
              <p>Программируя будущее</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
