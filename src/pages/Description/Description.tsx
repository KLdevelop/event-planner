import React from 'react';
import { KeyValueDiv } from 'src/components';
import cardImage from 'src/assets/img/cardImage.png';

import styles from './Description.module.scss';
import { programs } from 'src/helpers/fakeData';

export const Description = () => {
  const tags = ['AI/ML', 'Backend', 'Frontend', 'С++', 'Data Science'];
  return (
    <div className={styles.description}>
      <div className={styles.description_top}>
        <div className={styles.description_top_left}>
          <p className={styles.description_top_title}>
            Хакатон в рамках Всероссийских соревнований по спортивному программированию.
          </p>
          <p className={styles.description_top_title}>26-29 апреля 2023</p>
          <p className={styles.description_top_title}>Воронеж</p>
        </div>
        <img src={cardImage} />
      </div>
      <div className={styles.description_bottom}>
        <div className={styles.description_bottom_left}>
          <KeyValueDiv keys="Рейтинг мероприятия:" value="5.0" />
          <KeyValueDiv keys="Статус мероприятия:" value="активно" />
          <KeyValueDiv keys="Веб-сайт мероприятия:" value="https://деньинтернета.рф" />

          <div className={styles.description_tags}>
            {tags?.map((i, ind) => (
              <div className={styles.cardTagElem} key={ind}>
                {i}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.description_bottom_right}>
          <p className={styles.description_bottom_right_title}> Описание мероприятия:</p>
          <div className={styles.description_bottom_right_desc}>
            26-29 апреля пройдут первые Всероссийские соревнования по спортивному программированию
            среди студентов при поддержке Правительства Воронежской области. Федерация спортивного
            программирования и Акселератор Возможностей при ИНТЦ МГУ «Воробьевы горы» подготовили
            продуктовую задачу, которая позволит проверить скилы спортсменов на площадке хакатона!
          </div>
          <p className={styles.description_bottom_right_title}>
            Приглашаем команды принять участие в кейсе:
          </p>
          <div className={styles.description_bottom_right_desc}>
            Разработка инструмента для организации и проведения соревнований от Федерации
            спортивного программирования
          </div>
          <p className={styles.description_bottom_right_title}>На мероприятии тебя ждет:</p>
          {programs.map((i, ind) => (
            <div className={styles.description_bottom_right_programs} key={ind}>
              - {i}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
