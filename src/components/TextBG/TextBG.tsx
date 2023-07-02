import React, { ReactNode } from 'react';
import styles from './TextBG.module.css'
interface props {
    children: ReactNode
}
const TextBG = ({children }:props)=> {
    return (
        <div className={styles.Outer}>
            <div className={styles.Middle}>
                <div className={styles.TextBG}>
                    {children}
                </div>
            </div>
        </div>
  );
}

export default TextBG;