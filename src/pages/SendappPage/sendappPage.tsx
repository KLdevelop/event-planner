import React, { useEffect, useState } from 'react';
import add from 'src/assets/img/addAvatar.svg';
import styles from './sendappPage.module.scss';
import { Button, OutEditInfo } from 'src/components';
import { Event } from 'src/types/interfaces';
import moment from 'moment';
import { useAppDispatch } from 'src/hooks';
import { postNewEvent } from 'src/models/thunks';
import axios from 'axios';

export const SendappPage = () => {
  const [event, setEvent] = useState<Event>({
    eventid: 0,
    eventname: 'Хакатон',
    eventcase: 'Разработка инструмента для организации и проведения соревнований',
    content:
      '26-29 апреля пройдут первые Всероссийские соревнования по спортивному программированию среди студентов при поддержке Правительства Воронежской области. Федерация спортивного программирования и Акселератор Возможностей при ИНТЦ МГУ «Воробьевы горы» подготовили продуктовую задачу, которая позволит проверить скилы спортсменов на площадке хакатона!',
    author: 'Федерации спортивного программирования г. Пенза',
    location: 'Центр гребли на дамбе Чернавского моста. Адрес: Димитрова, 2 В.',
    date: moment(Date.now()),
    rating: 0,
    firstplace: '',
    secondplace: '',
    thirdplace: '',
  });
  const dispatch = useAppDispatch();
  useEffect(() => {
    axios.get('/api/event/500', { headers: { 'ngrok-skip-browser-warning': true } });
  }, []);

  return (
    <div className={styles.sendappPage}>
      <div className={styles.addLogo}>
        <p>Логотип</p>
        <img src={add} alt="" />
      </div>
      <div className={styles.mid}>
        <OutEditInfo
          title="Название мероприятия"
          inpValue={event.eventname}
          onChange={(e: any) => setEvent({ ...event, eventname: String(e.target.value) })}
        />
        <OutEditInfo
          title="Кейс"
          inpValue={event.eventcase}
          onChange={(e: any) => setEvent({ ...event, eventcase: String(e.target.value) })}
        />
        <OutEditInfo
          title="Организатор"
          inpValue={event.author}
          onChange={(e: any) => setEvent({ ...event, author: String(e.target.value) })}
        />
        <Button onClick={() => dispatch(postNewEvent(event))}>Отправить</Button>
      </div>
      <div className={styles.right}>
        <OutEditInfo
          title="Описание мероприятия"
          inpValue={event.content}
          onChange={(e: any) => setEvent({ ...event, content: String(e.target.value) })}
        />
        <OutEditInfo
          title="Даты проведения"
          inpValue={event.date.format('DD.MM.YYYY')}
          onChange={(e: any) => setEvent({ ...event, date: moment(String(e.target.value)) })}
        />
        <OutEditInfo
          title="Место проведения"
          inpValue={event.location}
          onChange={(e: any) => setEvent({ ...event, location: String(e.target.value) })}
        />
      </div>
    </div>
  );
};
