/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState } from 'react';

import { Input, Button } from 'src/components';
import styles from './RegBlock.module.scss';
import { Dropdown } from 'src/components/Dropdown';
import { RegistrationUser } from 'src/types/interfaces';
import { useDispatch } from 'react-redux';
import { registrUser } from 'src/models/thunks';

export const RegBlock = () => {
  const [user, setUser] = useState<RegistrationUser>();
  const dispatch = useDispatch();

  return (
    <div className={styles.registrationBlock}>
      <Input
        placeholder="введите имя"
        value={user?.username}
        onChange={(e) => setUser({ ...user!, username: e.target.value })}
      />
      <Input
        placeholder="введите фамилию"
        value={user?.surname}
        onChange={(e) => setUser({ ...user!, surname: e.target.value })}
      />
      <Input
        placeholder="введите отчество"
        value={user?.lastname}
        onChange={(e) => setUser({ ...user!, lastname: e.target.value })}
      />
      <Input
        placeholder="ваша почта"
        value={user?.email}
        onChange={(e) => setUser({ ...user!, email: e.target.value })}
      />
      <Dropdown
        placeholder="выберите свою роль"
        items={[
          'Спортсмен',
          'Представитель региональной организации',
          'Партнер федерации',
          'Администратор ФСП',
        ]}
        setActiveOption={(role: string) => setUser({ ...user!, role })}
        activeOption={user?.role || ''}
      />
      <Input type="password" placeholder="пароль" />
      <Button
        onClick={() => {
          dispatch(registrUser(user as never) as never);
        }}
      >
        Зарегистрироваться
      </Button>
    </div>
  );
};
