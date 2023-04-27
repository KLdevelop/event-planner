import React from 'react';

import { Input, Button } from 'src/components';

import styles from './authBlock.module.scss';

export const AuthBlock = () => {
  return (
    <div className={styles.authBlock}>
      <Input type="text" placeholder="ваша почта" />
      <Input type="password" placeholder="пароль" />
      <Button>Войти</Button>
    </div>
  );
};
