import React from 'react';
import add from 'src/assets/img/addAvatar.svg';
import styles from './sendappPage.module.scss';
import { Button, OutEditInfo } from 'src/components';

export const SendappPage = () => {
  return (
    <div className={styles.sendappPage}>
      <div className={styles.addLogo}>
        <p>Логотип</p>
        <img src={add} alt="" />
      </div>
      <div className={styles.mid}>
        <OutEditInfo title="Название мероприятия" inpValue="Хакатон" />
        <OutEditInfo
          title="Название мероприятия"
          inpValue="Разработка инструмента для организации и проведения соревнований"
        />
        <OutEditInfo
          title="Кейс"
          inpValue="Разработка инструмента для организации и проведения соревнований"
        />
        <OutEditInfo
          title="Организатор"
          inpValue="Федерации спортивного программирования г. Пенза"
        />
        <Button>Отправить</Button>
      </div>
      <div className={styles.right}>
        <OutEditInfo
          title="Описание мероприятия"
          inpValue="26-29 апреля пройдут первые Всероссийские соревнования по спортивному программированию среди студентов при поддержке Правительства Воронежской области.
          Федерация спортивного программирования и Акселератор Возможностей при ИНТЦ МГУ «Воробьевы горы» подготовили продуктовую задачу, которая позволит проверить скилы спортсменов на площадке хакатона!"
        />
        <OutEditInfo title="Даты проведения" inpValue="26 – 29 апреля 2023 года" />
        <OutEditInfo
          title="Место проведения"
          inpValue="Центр гребли на дамбе Чернавского моста. Адрес: Димитрова, 2 В."
        />
      </div>
    </div>
  );
};
