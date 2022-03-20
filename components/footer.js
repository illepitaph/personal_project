import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.socialLinkFooter}>
    <a className={styles.socialLinkTag} href="https://www.twitter.com/illepitaph" target="_blank" rel="noreferrer">. <span
    className={styles.reddishText}>.</span> . tW<span
    className={styles.reddishText}><i>e</i></span>e<span className={styles.reddishText}>T</span><i>e</i><span
    className={styles.reddishText}>R .</span> . .</a>
      </footer>
  )
}
