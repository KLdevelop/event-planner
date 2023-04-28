import React from 'react';
import { teamUsers, representativeCards } from 'src/helpers/fakeData';
import { OutEditInfo } from '../OutEditInfo';
import { TeamCard } from '../TeamCard';
import addAvatar from 'src/assets/img/addAvatar.svg';

import styles from './AddTeam.module.scss';
import { RepresentativeCard } from '../RepresentativeCard';

export const AddTeam = () => {
  return (
    <div className={styles.addTeam}>
      <div className={styles.addTeam_info}>
        <div className={styles.addTeam_info_left}>
          <OutEditInfo title="Название команды" inpValue="Паприка" />
          <OutEditInfo
            title="Навыки"
            inpValue=" Back-end PostgreSQL React SpringBoot Figma WebDesign"
          />
        </div>
        <div className={styles.addTeam_info_center}>
          <p className={styles.addTeam_info_center_title}>Логотип</p>
          <div className={styles.addTeam_info_center_avatar}>
            <img src={addAvatar} />
          </div>
        </div>
        <OutEditInfo
          title="Описание команды"
          inpValue="Команда из 5 разработчиков: дизайнер, 2 фронтендера, 2
          бэкендера."
        />
      </div>
      <div className={styles.addTeam_teamCards}>
        {teamUsers.map((i, ind) => (
          <TeamCard name={i.name} roles={i.roles} image="" key={ind} />
        ))}
      </div>
      <div className={styles.addTeam_teamCards}>
        {representativeCards.map((i, key) => (
          <RepresentativeCard name={i.name} role={i.role} avatar={i.avatar} key={key} />
        ))}
      </div>
    </div>
  );
};
