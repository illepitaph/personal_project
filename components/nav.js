import Link from 'next/Link'
import styles from '../styles/Nav.module.css'

export default function Nav() {
  return (

<div className={styles.nav}>
<div className={styles.name}>Steve Barbaro</div>
<div className={styles.buttonBox}>
<Link href="/" passHref><button className={styles.navButton}>home</button></Link>
<Link href="/writing" passHref><button className={styles.navButton}>writing</button></Link>
<a target="_blank" href="https://www.twitter.com/illepitaph" className={styles.navButton}>tweeter</a>
</div>
</div>
)
}
