
import React, { MouseEventHandler, ReactNode } from 'react';
import styles from "./MenuBar.module.css";


interface Props {   
    children: ReactNode;
    Voided: MouseEventHandler;
}

function reload() {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
}
const MenuBar = ({ children, Voided }: Props) => {
    return (
        <>
            <div className={styles.TopBar}>
            
                {children}
                <button className={styles.Button} onClick={reload}>⟳</button>
                <button className={styles.Button} onClick={Voided}>X</button>
            </div>
    </>
    );
}

export default MenuBar;