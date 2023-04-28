import React from 'react';

import { Input, Button } from 'src/components';

import styles from './authBlock.module.scss';
import { useAppDispatch } from 'src/hooks';
import { authUser } from 'src/models/thunks';

export const AuthBlock = () => {
  const dispatch = useAppDispatch();
  return (
    <div className={styles.authBlock}>
      <Input type="text" placeholder="ваша почта" />
      <Input type="password" placeholder="пароль" />
      <Button
        onClick={() =>
          dispatch(
            authUser({
              email: 'drapdrop1@gmail.com',
              password: '123456',
            }),
          )
        }
      >
        Войти
      </Button>
    </div>
  );
};
