import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Writing.module.css'
Writing.title = "writing — Steve Barbaro"

export default function Writing() {
  return (
      <>
      <Head/>
      <div className={styles.textContainer}>
      <p>––<span className={styles.grayTextUppercase}>online</span>––</p>
      <br/>
        <p>[<span className={styles.grayText}>fiction</span>]<br/><br/>
          “Celestial Camo” – <a target="_blank" href="https://socratesonthebeach.com/steve-barbaro">Socrates on The Beach</a> – ( .. in Sicily .. a tale of inebriated reckoning .. )
        </p>
        <p>
        "A Genealogy of Instinct" – <a target="_blank" href="http://www.conjunctions.com/online/article/steve-barbaro-09-17-2013">Web Conjunctions</a> – ( .. also in Sicily .. porcupines + ancestry + the blurry migrations of dreams .. )
        </p>
        <p>
        “Um…A Sensorium” – <a target="_blank" href="http://www.3ammagazine.com/3am/um-a-sensorium/">3:AM</a> – ( .. in a room overlooking a street .. synaesthesia + biological odysseys .. )
        </p><br/><br/>
          <p>[<span className={styles.grayText}>poetry</span>]</p><br/><br/>

      </div>
   </>
  )
}
