import React from 'react';
import teamCardImage from 'src/assets/img/teamCardImage.png';
import addTeam from 'src/assets/img/addTeam.png';

import styles from './TeamCard.module.scss';

interface TeamCardProps {
  image: string | undefined;
  name: string | undefined;
  roles: string | undefined;
}

export const TeamCard = (props: TeamCardProps) => {
  return (
    <div className={styles.teamCard}>
      {props.name && (
        <div
          style={{ backgroundImage: `url(${teamCardImage})` }}
          className={styles.teamCard_image}
        ></div>
      )}
      {props.name && <div className={styles.teamCard_name}>{props.name}</div>}
      {props.name && <div className={styles.teamCard_roles}>{props.roles}</div>}

      {props.name === undefined && (
        <div className={styles.teamCard_add}>
          <div className={styles.teamCard_circle}>
            <img src={addTeam} />
          </div>
          <div className={styles.teamCard_title}>Добавить участника</div>
        </div>
      )}
    </div>
  );
};
