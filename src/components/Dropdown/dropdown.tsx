import React, { Dispatch, useState } from 'react';
import dropdown from 'src/assets/img/downArrow.svg';
import styles from './dropdown.module.scss';

interface Props {
  placeholder: string;
  items: string[];
  activeOption: string;
  setActiveOption: (item: string) => void;
}

export const Dropdown = (props: Props) => {
  const [show, setShow] = useState(false);
  // const [activeOption, setActiveOption] = useState('');

  const clickOption = (item: string) => {
    // props.setActiveOption(item)
    props.setActiveOption(item);
    setShow(false);
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.field} onClick={() => setShow(!show)}>
        <input type="text" placeholder={props.placeholder} value={props.activeOption} />
        <img
          className={show ? styles.arrowUp : styles.arrowDown}
          src={dropdown}
          alt=""
          // onClick={() => setShow(!show)}
        />
      </div>
      {show && (
        <div className={styles.drop}>
          {props.items.map((item) => (
            <div className={styles.item} key={item} onClick={() => clickOption(item)}>
              <div className={item === props.activeOption ? styles.activeCircle : styles.circle} />
              <p>{item}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
