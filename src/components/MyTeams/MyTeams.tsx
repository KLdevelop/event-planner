import React from 'react';
import { myTeamsData } from 'src/helpers/fakeData';
import styles from './MyTeams.module.scss';
import add from 'src/assets/img/addAvatar.svg';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router';

export const MyTeams = () => {
  return (
    <div className={styles.myTeams}>
      <div className={styles.myTeams_cards}>
        {myTeamsData.map((i, key) => (
          <div className={styles.card} key={key}>
            <div className={styles.avatar}></div>
            <div className={styles.card_right}>
              <div className={styles.card_name}>{i.name}</div>
              <div className={styles.card_count}>
                <span>Количество участников:</span>
                {i.count}
              </div>
              <Link to="/lk/team">
                <div className={styles.card_btn}>Редактировать</div>
              </Link>
              {/* <button onClick={() => navigate('teams')}></button> */}
            </div>
          </div>
        ))}
        <button className={styles.card_add}>
          <img src={add} />
        </button>
      </div>
    </div>
  );
};
