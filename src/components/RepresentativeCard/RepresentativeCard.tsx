import React from 'react';
import addTeam from 'src/assets/img/addTeam.png';

import styles from './RepresentativeCard.module.scss';
interface RepresentativeCardProps {
  avatar: string | undefined;
  name: string | undefined;
  role: string | undefined;
}

export const RepresentativeCard = (props: RepresentativeCardProps) => {
  return (
    <div className={styles.represCard}>
      {props.name && <div className={styles.represCard_avatar}></div>}
      {props.name && (
        <div className={styles.represCard_right}>
          <div className={styles.represCard_right_name}>{props.name}</div>
          <div className={styles.represCard_right_role}>{props.role}</div>
        </div>
      )}
      {props.name == undefined && (
        <div className={styles.represCard_add}>
          <div className={styles.represCard_circle}>
            <img src={addTeam} />
          </div>
          <div className={styles.represCard_title}>Добавить представителя</div>
        </div>
      )}
    </div>
  );
};
