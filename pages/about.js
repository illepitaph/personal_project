import Head from 'next/head'
import styles from '../styles/About.module.css'
import Footer from '../components/footer.js'
About.title = "about — Steve Barbaro"

export default function About() {
  return (
      <>
      <Head/>
      <div className={styles.textContainer}>
      <p>Steve Barbaro is a first-generation American of Sicilian descent. All of the photographs on this website were taken by
      Steve + all of this website was programmed + designed by Steve. Unrelatedly—or perhaps really really very relatedly—Steve's writing appears in such
      venues as <i>The Yale Review</i> + <i>Socrates on The Beach</i> + <i>Web
      Conjunctions</i> + <i>DIAGRAM</i> + <i>Denver Quarterly</i>. <br/><br/> A
      former Poe-Faulkner Fellow at the University of Virginia where he earned his MFA, Steve is also
      the founder + editor + programmer + designer of <a target="_blank" href="https://newnewsinews.com">new sinews</a></p>
      </div>
   </>
  )
}
