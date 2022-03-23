import Link from 'next/Link'
import styles from '../styles/Nav.module.css'

export default function Nav() {
  return (

<div className={styles.nav}>
<div className={styles.name}>St<span className={styles.alternateLettering}>e</span>ve B<span
className={styles.alternateLettering}>a</span>r<span className={styles.alternateLettering}>b</span>ar<span
className={styles.alternateLettering}>o</span></div>
<div className={styles.buttonBox}>
<Link href="/" passHref><button className={styles.navButton}>home</button></Link>
<Link href="/writing" passHref><button className={styles.navButton}>writing</button></Link>
<a target="_blank" href="https://www.twitter.com/illepitaph" className={styles.navButton}>tweeter</a>
</div>
</div>
)
}
