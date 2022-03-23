import Link from 'next/Link'
import styles from '../styles/Nav.module.css'

export default function Nav() {
  return (

<div className={styles.nav}>
<div className={styles.name}>Steve Barbaro</div>
<div className={styles.buttonBox}>
<Link href="/home"><button>home</button></Link>
<Link href="/writing"><button>writing</button></Link>
<a href="https://www.twitter.com/illepitaph">tweeter</a>
</div>
</div>
)
}
