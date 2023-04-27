import React from 'react';
import { Card, DatePoint } from 'src/components';
import cardImage from 'src/assets/img/cardImage.png';
import styles from './overviewPage.module.scss';

export const OverviewPage = () => {
  return (
    <div className={styles.overviewPage}>
      <DatePoint />
      <div className={styles.overviewPage_card}>
        <Card
          image={cardImage}
          description="Хакатон в рамках Всероссийских соревнований по спортивному программированию"
          date="27.04.2023 "
          team="от 3 до 5 участников"
          tags={['AI/ML', 'Backend', 'Frontend', 'С++', 'Data Science']}
        />
        <Card
          image={cardImage}
          description="Хакатон в рамках Всероссийских соревнований по спортивному программированию"
          date="27.04.2023 "
          team="от 3 до 5 участников"
          tags={['AI/ML', 'Backend', 'Frontend', 'С++', 'Data Science']}
        />
        <Card
          image={cardImage}
          description="Хакатон в рамках Всероссийских соревнований по спортивному программированию"
          date="27.04.2023 "
          team="от 3 до 5 участников"
          tags={['AI/ML', 'Backend', 'Frontend', 'С++', 'Data Science']}
        />
        <Card
          image={cardImage}
          description="Хакатон в рамках Всероссийских соревнований по спортивному программированию"
          date="27.04.2023 "
          team="от 3 до 5 участников"
          tags={['AI/ML', 'Backend', 'Frontend', 'С++', 'Data Science']}
        />
      </div>
    </div>
  );
};
