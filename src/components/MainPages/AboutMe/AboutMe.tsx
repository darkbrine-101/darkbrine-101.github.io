import React from 'react';
import TextBG from '../../TextBG/TextBG';
import styles from './AboutMe.module.css'
import ProgressTable from '../../ProgressTable/ProgressTable';

function AboutMe() {

    return (
        <TextBG>
            <h1><u className={styles.Title}>ABOUT ME</u>
            </h1>
            <h2 className={styles.Subtitle}>BIO</h2>
            <p className={styles.Text}>
                Coming from a future where the rich live in a virtual heaven while the poor are left to burn with the earth, Darkbrine has a story to tell.
                He shares his experiences through his complex sound design, haunting atmospheres, horrifying vocals, and broken melodies.<br /><br />
                With roots in dubstep, he has since branched out to other genres such as ambient, orchestral, and symphonic death metal, with an ever-present desire to experiment.
                From unsettling to sometimes psychedelic, you can always recognise a Darkbrine drop.
                Be it due to the watery sound design, machineguns that will get even the most grumpy person headbanging, or the glitchy uncertainty of their irregular flow, it will for sure have a profund impact.
                Pictures of vast landscapes, desolate worlds, and hopelessness soon fill the mind of the listener, as they hear his massive symphonic deathcore inspired verses, nightmareish ambient soundscapes, and <a href="https://lornashorestore.com/">Lorna Shore</a> inspired lyrics that articulate his story to the listener.<br /><br />
                His music videos are nothing to understate either, although not the primary focus of his art they turn his music into a cinematic experience, providing clarity to his sometimes metaphorical lyrics. Made using <a href="https://www.unrealengine.com/en-US/unreal-engine-5">Unreal Engine</a>, with environments and models he creates in <a href="https://www.blender.org/">Blender</a> they show the breadth of his skills. <br /><br />

            </p>
            <h2 className={styles.Subtitle}>As well as music, Darkbrine has branched out to other areas</h2>
            <ProgressTable TableData={[
                { Name: "3D art", Progress: 3 },
                { Name: "2D art", Progress: 2 },
                { Name: "C/C++", Progress: 1 },
                { Name: "JS/TS", Progress: 0.5 },
                { Name: "React", Progress: 0.25 },
                { Name: "HTML", Progress: 2 },
                { Name: "CSS", Progress: 0.5 },
                { Name: "Python", Progress: 5 },
                { Name: "Music Production", Progress: 2.5 },
                { Name: "Sound Design", Progress: 2.5 },
                { Name: "Singing", Progress: 2 },
                { Name: "Drumming", Progress: 0.125 }
            ]} />
            <h2 className={styles.Subtitle}>Darkbrine has many infulences</h2>
            <div className={styles.DoubbleSection }>
                <p className={styles.List}> 
                    <a target="_blank" rel="noreferrer noopener" href="https://open.spotify.com/artist/1QeTjGvzNdgEbglFeedKWe?si=937c3a11243441ae">INHUMAN</a> <br/>
                    <a target="_blank" rel="noreferrer noopener" href="https://open.spotify.com/artist/07OF36h5y4S6s9ckQliaj3?si=5a7b3f6886e44e8b">SWARM</a> <br />
                    <a target="_blank" rel="noreferrer noopener" href="https://open.spotify.com/artist/7vLzvApFaZktEnl0Shcuad?si=f19a8e58d4794b28">Talurre</a> <br />
                    <a target="_blank" rel="noreferrer noopener" href="https://open.spotify.com/artist/7vlBJhLIORnTMtC9ZKcTFo?si=92b0771e4be34f26">Qoiet</a> <br />
                    <a target="_blank" rel="noreferrer noopener" href="https://open.spotify.com/artist/4Li9XzqHb3KHgM423sA3nX?si=93f4f3c280834fac">Xtrullor</a> <br />
                </p>
                <p className={styles.List}>
                    <a target="_blank" rel="noreferrer noopener" href="https://open.spotify.com/artist/5EEuae5uigQnwgYCl0s8EF?si=da07f8b960de4ae3">Teminite</a> <br />
                    <a target="_blank" rel="noreferrer noopener" href="https://open.spotify.com/artist/105tq5SEQrWpamVFoKrUKK?si=11c56aaf48214117">Ohmie</a> <br />
                    <a target="_blank" rel="noreferrer noopener" href="https://open.spotify.com/artist/7lAi1Cv19DsukgGjbZQxFg?si=32b53f7de1584497">Annisokay</a> <br />
                    <a target="_blank" rel="noreferrer noopener" href="https://open.spotify.com/artist/24Oiw7BlvO1BETecDLJt6m?si=78264ae22bdb4d53">Slaughter to Provail</a> <br />
                    <a target="_blank" rel="noreferrer noopener" href="https://open.spotify.com/artist/6vXYoy8ouRVib302zxaxFF?si=49eb4d7c10214242">Lorna shore</a> <br />
                </p>
                <p className={styles.List}>
                    <a target="_blank" rel="noreferrer noopener" href="https://open.spotify.com/artist/2n2RSaZqBuUUukhbLlpnE6?si=67101f9951634a46">Sleep Token</a> <br />
                    <a target="_blank" rel="noreferrer noopener" href="https://open.spotify.com/artist/1oeo6cC9Fqa2bxxv67qBQL?si=1b812bee8829450f">Caliban</a> <br />
                    <a target="_blank" rel="noreferrer noopener" href="https://open.spotify.com/artist/2ooWmQC4NQUQZ3z00mZQyK?si=9a94645a80a34a26">Ghostkid</a> <br />
                    <a target="_blank" rel="noreferrer noopener" href="https://open.spotify.com/artist/13kMpt8IdcHcdxPLcJrgU2?si=c3a1d0a628294ceb">Christopher Larkin</a> <br />
                    <a target="_blank" rel="noreferrer noopener" href="https://open.spotify.com/artist/6hAbXr13zOOS03VTQMX8DL?si=8ab4ca767ae54d26">Venus theory</a> <br />
                </p>
            </div>
            <h2 className={styles.Subtitle}>And uses a veriet of tools</h2>
            <ProgressTable TableData={[
                { Name: "Blender", Progress: 3 },
                { Name: "Blockbench", Progress: 2 },
                { Name: "Unreal Engine", Progress: 1.5 },
                { Name: "GIMP", Progress: 1.5 },
                { Name: "Paint.net", Progress: 2 },
                { Name: "Inkscape", Progress: 2},
                { Name: "Fl studio", Progress: 2.5 },
                { Name: "Audacity", Progress: 5 },
                { Name: "Vital", Progress: 2.5 },
                { Name: "Phaseplant", Progress: 1 },
                { Name: "Visual studio", Progress: 4 },
                { Name: "VS Code", Progress: 2 }
            ]} />
            <h2 className={styles.Subtitle}>Credits</h2>   
            <ul className={styles.Text}>
                <li>This website was inspired by:</li>
                <ul>
                    <li> <a href="https://germanbread.github.io/">GermanBread</a></li>
                    <li> <a href="https://kaisermann.me/">Christian kaisermann</a></li>
                    <li> <a href="https://reimnop.com/">Reimnop</a></li>
                    <li> <a href="https://www.inhuman-society.com/">INHUMAN</a></li>
                </ul>
                <li>Website by Darkbrine</li>
                <li>Made using React TS</li>
            </ul>
        </TextBG>
    );
}

export default AboutMe;