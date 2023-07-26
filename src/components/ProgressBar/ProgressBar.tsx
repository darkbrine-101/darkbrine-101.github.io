import React from 'react';
import styles from './ProgressBar.module.css'

interface Props {
    Value: number;
    Max: number;
}
let ProgressBar = ({ Value, Max }: Props) => {
    let Frac = (Value / Max) * 95 + "%"
    console.log(Frac)
  return (
      <div className={styles.ProgressBar} style={{ width: Frac }} >
      </div>
  );
}

export default ProgressBar;