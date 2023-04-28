import React, { useState } from 'react';

import { Input, Button } from 'src/components';

import styles from './authBlock.module.scss';
import { useAppDispatch } from 'src/hooks';
import { authUser } from 'src/models/thunks';
import { useNavigate } from 'react-router';

export const AuthBlock = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  return (
    <div className={styles.authBlock}>
      <Input
        value={email}
        onChange={(e) => setEmail(String(e.target.value))}
        type="text"
        placeholder="ваша почта"
      />
      <Input type="password" placeholder="пароль" />
      <Button
        onClick={() => {
          dispatch(
            authUser({
              email,
              password: '',
            }),
          );
          navigate('/lk');
        }}
      >
        Войти
      </Button>
    </div>
  );
};
