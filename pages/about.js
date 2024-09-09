import Head from "next/head";
import Link from "next/link";
import styles from "../styles/About.module.css";
About.title = "about — Steve Barbaro";
About.pieceName = "about — Steve Barbaro";
About.description = "about page";
About.image = "https://www.stevebarbaro.com/images/Tatemae1.jpg";

export default function About() {
  return (
    <>
      <Head />
      <div className={styles.container}>
        <div className={styles.nav}>
          <div className={styles.name}>
            St<span className={styles.alternateLettering}>e</span>ve B
            <span className={styles.alternateLettering}>a</span>r
            <span className={styles.alternateLettering}>b</span>ar
            <span className={styles.alternateLettering}>o</span>
          </div>
          <div className={styles.buttonBox}>
            <Link href="/" passHref>
              <button className={styles.navButton}>altar (home)</button>
            </Link>
            <Link href="/writing" passHref>
              <button className={styles.navButton}>writing</button>
            </Link>
            <Link href="/portfolio" passHref>
              <button className={styles.navButton}>webportfolio</button>
            </Link>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.twitter.com/illepitaph"
              className={styles.navButton}
            >
              tweeter
            </a>
            <br />
            <br />
            <Link href="/plane" passHref>
              <button className={styles.navButton}>
                <span className={styles.alignButton}>
                  plane of consummate finitude
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className={styles.textContainer}>
          <p>
            Steve Barbaro is a first-generation American of Sicilian descent.
            His fiction appears in such venues as <i>3:AM</i> +{" "}
            <i>Web Conjunctions</i> + <i>Socrates on The Beach</i> + is also
            forthcoming in the <i>CYBERNETICS</i>, <i>OR GHOSTS</i>? anthology
            published by Subtext Recordings. His poems can meantime be found in
            such publications as<i> The Yale Review</i> + <i>DIAGRAM</i> +{" "}
            <i>The Common</i> + <i>Denver Quarterly</i>. A former Poe-Faulkner Fellow at
            the University of Virginia where he earned his MFA, Steve is also
            the founder + editor + programmer + designer of{" "}
            <a target="_blank" rel="noreferrer" href="https://newnewsinews.com">
              new sinews
            </a>
          </p>
          <br />
          <br />
          <br />( ... all of the photographs on this website were taken by Steve
          ... + all of this website was likewise programmed + designed by Steve
          ... he lives in Chicago ... contact him{" "}
          <a
            href="mailto:steve.barbaro@gmail.com"
            target="_blank"
            rel="noreferrer"
            className={styles.email}
          >
            here
          </a>{" "}
          )
        </div>
      </div>
    </>
  );
}
