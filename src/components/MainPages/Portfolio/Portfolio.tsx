import React from 'react';
import TextBG from '../../TextBG/TextBG';
import styles from './Portfolio.module.css'

function Portfolio() {
  return (
      <TextBG>
          <h1><u className={styles.Title }>PORTFOLIO</u>
          </h1>
          <p className={styles.Text }>Under construction, please come back later.
          </p>
      </TextBG>
  );
}

export default Portfolio;