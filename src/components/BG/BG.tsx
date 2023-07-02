import React, { ReactNode } from 'react';
import styles from './BG.module.css'

interface Props {
    children: ReactNode;
}
const BG = ({ children }: Props)=> {
  return (
      <div className={styles.BGImg}>{children}</div>
  );
}

export default BG;