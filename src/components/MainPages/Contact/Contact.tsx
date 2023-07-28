import React from 'react';
import styles from './Contact.module.css'
import TextBG from '../../TextBG/TextBG';

function Portfolio() {
  return (
      <TextBG>
          <h1><u className={styles.Title }>CONTACT</u>
          </h1>
          <a className={styles.Text} href="https://www.youtube.com/channel/UCM-5ABws69LIdZ_PBEGbONw">Youtube</a> <br/>
          <a className={styles.Text} href="https://discord.gg/aPeBrQb6DS">Discord Server</a><br />
          <p className={styles.Text} >More links will be added later...</p><br />
      </TextBG>
  );
}

export default Portfolio;