import React from 'react';
import styles from './OutEditInfo.module.scss';
interface OutEditInfoProps {
  title: string;
  inpValue: string;
}
export const OutEditInfo = (props: OutEditInfoProps) => {
  return (
    <div className={styles.editInfo}>
      <span className={styles.editInfo_title}>{props.title}</span>
      <div className={styles.editInfo_inp} contentEditable>
        {props.inpValue}
      </div>
    </div>
  );
};
