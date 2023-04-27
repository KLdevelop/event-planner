import React from 'react';

import { Input, Button } from 'src/components';
import styles from './RegBlock.module.scss';

export const RegBlock = () => {
  return (
    <div className={styles.registrationBlock}>
      <Input placeholder="введите имя" />
      <Input placeholder="введите фамилию" />
      <Input placeholder="ваша почта" />
      <Input type="password" placeholder="пароль" />
      <Button>Войти</Button>
    </div>
  );
};
