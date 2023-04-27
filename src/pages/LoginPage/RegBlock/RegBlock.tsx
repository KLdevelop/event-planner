import React from 'react';

import { Input, Button } from 'src/components';
import styles from './RegBlock.module.scss';
import { Dropdown } from 'src/components/Dropdown';

export const RegBlock = () => {
  return (
    <div className={styles.registrationBlock}>
      <Input placeholder="введите имя" />
      <Input placeholder="введите фамилию" />
      <Input placeholder="введите отчество" />
      <Input placeholder="ваша почта" />
      <Dropdown
        placeholder="выберите свою роль"
        items={[
          'Спортсмен',
          'Представитель региональной организации',
          'Партнер федерации',
          'Администратор ФСП',
        ]}
      />
      <Input type="password" placeholder="пароль" />
      <Button>Войти</Button>
    </div>
  );
};
