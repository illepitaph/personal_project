import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Portfolio.module.css";
import new_sinews_preview from "../public/images/new_sinews_preview.jpg";
import dlr_preview from "../public/images/dlr_preview.jpg";
Portfolio.title = "web_portfolio — Steve Barbaro";
Portfolio.pieceName = "web_portfolio — Steve Barbaro";
Portfolio.description = "web apps developed + designed by Steve Barbaro";
Portfolio.image = "https://www.stevebarbaro.com/images/Tatemae6.jpg";

export default function Portfolio() {
  return (
    <>
      <Head />
      <div className={styles.container}>
        <div className={styles.nav}>
          <div className={styles.buttonBox}>
            <Link href="/" passHref>
              <button className={styles.navButton}>altar (home)</button>
            </Link>
            <Link href="/writing" passHref>
              <button className={styles.navButton}>writing</button>
            </Link>
            <Link href="/about" passHref>
              <button className={styles.navButton}>about</button>
            </Link>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.twitter.com/illepitaph"
              className={styles.navButton}
            >
              tweeter
            </a>
            <br/>
              <br/>
              <Link href="/plane" passHref>
                <button className={styles.navButton}>
                <span className={styles.alignButton}>plane of consummate finitude
                  </span>
                </button>
              </Link>
          </div>
          <div className={styles.name}>
            S<i>t</i>
            <span className={styles.alternateLettering}>e</span>v
            <span className={styles.alternateLetteringTwo}>
              <i>e</i>
            </span>{" "}
            B<span className={styles.alternateLettering}>a</span>
            <i>r</i>
            <span className={styles.alternateLetteringTwo}>
              <i>b</i>
            </span>
            ar
            <span className={styles.alternateLettering}>o</span>
          </div>
        </div>
        <div className={styles.entryContainer}>
          <div className={styles.pageTitle}>
            [..apps programmed + designed..]
          </div>
          <p className={styles.headerText}>
            <span className={styles.grayTextUppercaseOne}>
              &#43;
              <span className={styles.alternateUppercaseOne}>n</span>e
              <span className={styles.alternateUppercaseOne}>w</span>
              <br />
              <span className={styles.alternateUppercaseOne}> s</span>i
              <span className={styles.alternateUppercaseOne}>n</span>e
              <span className={styles.alternateUppercaseOne}>w</span>s
              <span className={styles.alternateUppercaseOne}>&#43;</span>
            </span>
          </p>
          <br />
          <div className={styles.imageBox}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.newnewsinews.com/"
            >
              <Image
                src={new_sinews_preview}
                width={200}
                height={100}
                layout={`responsive`}
                alt="Preview Photograph of new_sinews Splash Page"
              />
            </a>
          </div>
          <p className={styles.entryCaption}>
            .. new_sinews is a publisher of innovative fiction + poetry +
            nonfiction + criticism .. <br /> .. new_sinews is built in next.js
            with image + design support from Adobe Photoshop + Lightroom ..
          </p>
        </div>
        <div className={styles.entryContainer}>
          <p className={styles.headerText}>
            <span className={styles.grayTextUppercaseOne}>
              &#43;
              <span className={styles.alternateUppercaseOne}>d</span>a
              <span className={styles.alternateUppercaseOne}>v</span>i
              <span className={styles.alternateUppercaseOne}>d</span>
              <br />
              <span className={styles.alternateUppercaseOne}>l</span>e
              <span className={styles.alternateUppercaseOne}>o</span>
              <br />r<span className={styles.alternateUppercaseOne}>i</span>c
              <span className={styles.alternateUppercaseOne}>e</span>&#43;
            </span>
          </p>
          <br />
          <div className={styles.imageBox}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.raviddice.com/"
            >
              <Image
                src={dlr_preview}
                width={200}
                height={100}
                layout={`responsive`}
                alt="Preview Photograph of David Leo Rice's Homepage"
              />
            </a>
          </div>
          <p className={styles.entryCaption}>
            .. personal website of author David Leo Rice .. <br /> .. built in
            next.js with image + design support from Adobe Photoshop + Lightroom
            ..
          </p>
        </div>
      </div>
    </>
  );
}
