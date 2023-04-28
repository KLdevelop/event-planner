import React from 'react';
import styles from './KeyValue.module.scss';
interface KeyValueProps {
  keys: string;
  value: string;
}

export const KeyValueDiv = (props: KeyValueProps) => {
  return (
    <div className={styles.keyValue}>
      <div className={styles.keyValue_left}> {props.keys}</div>
      <div className={styles.keyValue_right}>{props.value}</div>
    </div>
  );
};
