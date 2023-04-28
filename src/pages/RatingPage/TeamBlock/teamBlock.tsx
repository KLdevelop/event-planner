import React, { useEffect, useState } from 'react';
import styles from './teamBlock.module.scss';

export const TeamBlock = () => {
  const [teams, setTeams] = useState([
    {
      name: 'Команда 1',
      criteries: [10, 10, 10, 10, 10],
      summary: 50,
    },
  ]);
  useEffect(() => {
    const fiction: typeof teams = [];
    for (let i = 1; i < 11; i++) {
      fiction.push({
        name: `Команда ${i}`,
        criteries: [10, 10, 10, 10, 10],
        summary: 50,
      });
      console.log(fiction);
      setTeams(fiction);
    }
  }, []);
  return (
    <div className={styles.teamBlock}>
      <div className={styles.header}>
        <div>Название</div>
        <div>Критерий 1</div>
        <div>Критерий 2</div>
        <div>Критерий 3</div>
        <div>Критерий 4</div>
        <div>Критерий 5</div>
        <div>Итог</div>
      </div>
      <div className={styles.content}>
        {teams.map((team) => (
          <div className={styles.row} key={team.name}>
            <>
              <div className={styles.name}>{team.name}</div>
              {team.criteries.map((score) => (
                <div key={team.name}>{score}</div>
              ))}
              <div className={styles.summary}>{team.summary}</div>
            </>
          </div>
        ))}
      </div>
    </div>
  );
};
