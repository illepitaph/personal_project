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
        "A Genealogy of Instinct" – <a target="_blank" href="http://www.conjunctions.com/online/article/steve-barbaro-09-17-2013">Conjunctions</a> – ( .. also in Sicily .. porcupines .. ancestry .. the blurry migration of dreams .. )
        </p>
        <p>
        “Um…A Sensorium” – <a target="_blank" href="http://www.3ammagazine.com/3am/um-a-sensorium/">3:AM</a> – ( .. in a room overlooking a street .. synaesthesia + biological odysseys .. )
        </p><br/><br/>
          <p>[<span className={styles.grayText}>poetry</span>]<br/><br/>
          "For Georges Braque" – <a target="_blank" href="http://thediagram.com/16_1/barbaro.html">DIAGRAM</a> – ( .. utensils .. the body .. geometry .. )
          </p>
          <p>
          "Quadratic" – <a target="_blank" href="https://yalereview.org/article/quadratic">The Yale Review</a> – ( .. property .. suppression .. the otherworldly .. )
          </p>
          <p>
          "Sorta" + "For a Friend" + "The Lighthouse Verdict" – <a target="_blank" href="http://www.conjunctions.com/online/article/steve-barbaro-07-17-2012">Conjunctions</a> – ( .. estrangement .. crowding .. whatever's jangly .. )
          </p>
          <p>
          "Graffito Beholds a Sculpted Dionysus Head" – <a target="_blank" href="https://www.thecommononline.org/graffito-beholds-a-sculpted-doinysus-head">The Common</a> – ( .. self .. explanatory .. )
          </p>
          <p>
          "Wee" – <a target="_blank" href="https://preludemag.com/posts/wee/">Prelude</a> – ( .. hmmmmmmmmm .. OK .. )
          </p>
          <p>
          “The Bottle of Schnapps” – <a target="_blank" href="https://www.therupturemag.com/rupture/the-bottle-of-schnapps">The Rupture</a> – ( .. memory .. aphrodisiacs .. forgetting )
          </p>
          <p>
          "In The Omnibus (1891)" – <a target="_blank" href="http://thecollagist.com/the-collagist/2018/1/20/in-the-omnibus-1891.html">The Collagist</a> – ( .. ekphrasis .. Cassatt .. functionality )
          </p>

      </div>
   </>
  )
}
