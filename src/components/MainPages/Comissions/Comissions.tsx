import React from 'react';
import TextBG from '../../TextBG/TextBG';
import styles from './Comissions.module.css'


function Portfolio() {

    return (
        <TextBG>
            <h1><u className={styles.Title }>COMISSIONS</u>
            </h1>
            <i className={styles.Subtitle}>
                All prices are negotiable based on budget, project nature etc.  
            </i>
            <div className={styles.AudioContainer}>
                <div className={styles.AudioAndText}>
                    <audio className={styles.Audio} controls src={"/Audio/spoopy.mp3"} />
                    <p className={styles.Text }>10GBP/Min of instrumental audio, Rounded up. I can make any genre but specialize in Dubstep/DnB, Metal, Orchestral, and Ambient</p>
                </div>
                <div className={styles.AudioAndText}>
                    <audio className={styles.Audio} controls src={"/Audio/good stories cover.mp3"} />
                    <p className={styles.Text}>10GBP/Min of Vocals if I'm also writting the lyrics. 7.5 if lyrics are pre-written, its a cover or if it's a harmony line. Same price for both clean and unclean/screamed vocals. (song: my 1 take, no autotune, vocal cover of Good Stories by Annisokay)</p>
                </div>
                <div className={styles.AudioAndText}>
                    <audio className={styles.Audio} controls src={"/Audio/doom smth demo.mp3"} />
                    <p className={styles.Text}> 25GBP/Min of song with vocals if I'm also writting the lyrics. 20 if lyrics are pre-written. Same price for both clean and unclean/screamed vocal </p>
                </div>
                <div className={styles.AudioAndText}>
                    <audio className={styles.Audio} controls src={"/Audio/deez drop.mp3"} />
                    <p className={styles.Text}> 7.5GBP/Sound effect. I specialize in alien/bizzare sound design and sfx </p>
                </div>
            </div>
        </TextBG>
    )
}

export default Portfolio;