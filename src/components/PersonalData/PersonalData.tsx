import React, { useEffect } from 'react';
import { OutEditInfo } from '../OutEditInfo';
import styles from './PersonalData.module.scss';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { getUserData } from 'src/models/thunks/usersThunks';

export const PersonalData = () => {
  const { userId, userData } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserData(userId || 2));
  }, [dispatch, userId]);

  return (
    <div className={styles.personalData}>
      <p className={styles.personalData_title}>ФИО</p>
      <div className={styles.personalData_inps}>
        <OutEditInfo title="Фамилия" inpValue={userData?.surname || ''} />
        <OutEditInfo title="Имя" inpValue={userData?.username || ''} />
        <OutEditInfo title="Отчество" inpValue={userData?.lastname || ''} />
      </div>
      <p className={styles.personalData_title}>Место проживания</p>
      <div className={styles.personalData_inps}>
        <OutEditInfo title="Страна проживания" inpValue="Российская Федерация" />
        <OutEditInfo title="Город проживания" inpValue="Пенза" />
      </div>
      <p className={styles.personalData_title}>Контакты</p>
      <div className={styles.personalData_inps}>
        <OutEditInfo title="Телефон" inpValue="+7(927)272-72-72" />
        <OutEditInfo title="E-mail" inpValue={userData?.email || ''} />
      </div>
      <p className={styles.personalData_title}>Паспортные данные</p>
      <div className={styles.personalData_inps}>
        <OutEditInfo title="Серия " inpValue="5615" />
        <OutEditInfo title="Номер" inpValue="33333" />
      </div>
      <p className={styles.personalData_title}>Полис ОМС</p>
      <OutEditInfo title="Номер полиса" inpValue="0000000000000000" />
    </div>
  );
};
