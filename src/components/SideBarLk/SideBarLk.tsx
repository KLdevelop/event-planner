import React from 'react';
import styles from './SideBarLk.module.scss';
import { TabListElement } from 'src/types/interfaces';
import { NavLink as Link } from 'react-router-dom';

//
export const SideBarLk = (props: { list: TabListElement[] }) => {
  return (
    <div className={styles.sideBar}>
      {props.list.map((i, ind) => (
        <div className={styles.sideBar_elem} key={ind}>
          <Link to={`${i.link}`} relative="route">
            {i.name}
          </Link>
        </div>
      ))}
    </div>
  );
};
