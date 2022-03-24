import Head from 'next/head'
import Link from 'next/Link'
import styles from '../styles/About.module.css'
About.title = "about — Steve Barbaro"

export default function About() {
  return (
      <>
      <Head/>
      <div className={styles.container}>
      <div className={styles.nav}>
      <div className={styles.name}>St<span className={styles.alternateLettering}>e</span>ve B<span
      className={styles.alternateLettering}>a</span>r<span className={styles.alternateLettering}>b</span>ar<span
      className={styles.alternateLettering}>o</span></div>
      <div className={styles.buttonBox}>
      <Link href="/" passHref><button className={styles.navButton}>altar (home)</button></Link>
      <Link href="/writing" passHref><button className={styles.navButton}>writing</button></Link>
      <a target="_blank" href="https://www.twitter.com/illepitaph" className={styles.navButton}>tweeter</a>
      </div>
      </div>
      <div className={styles.textContainer}>
      <p>Steve Barbaro is a first-generation American of Sicilian descent. His writing appears in such
      venues as <i>The Yale Review</i> + <i>Socrates on The Beach</i> + <i>Web
      Conjunctions</i> + <i>DIAGRAM</i> + <i>Denver Quarterly</i>. A
      former Poe-Faulkner Fellow at the University of Virginia where he earned his MFA, Steve is also
      the founder + editor + programmer + designer of <a target="_blank" href="https://newnewsinews.com">new sinews</a></p><br/><br/><br/>
      ( ... all of the photographs on this website were taken by
      Steve ... + all of this website was likewise programmed + designed by Steve ... he lives in Chicago ... contact him <a
      href="mailto:steve.barbaro@gmail.com" className={styles.email}>here</a> )
      </div>
      </div>
   </>
  )
}
