import React, { InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

export const Input = (props: CustomInputProps) => {
  return (
    <div className={styles.customInput}>
      <input
        type={props.type || 'text'}
        placeholder={props.placeholder}
        onChange={props.onChange}
        className={styles.input}
      />
    </div>
  );
};
