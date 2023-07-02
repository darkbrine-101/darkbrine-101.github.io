import React, { MouseEventHandler, ReactNode } from 'react';
import styles from './MenuButton.module.css'

interface Props {
    children?: ReactNode;
    method: MouseEventHandler;
}

const MenuButton = ({ children = <></>, method}:Props)=> {
  return (
      <button className={styles.MenuButton} type="button" onClick={method}>{children}</button>
  );
}

export default MenuButton;