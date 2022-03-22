import Head from 'next/head'
import Image from 'next/image'
import Tatemae1 from '../public/images/Tatemae1.jpg'
import Cracks from '../public/images/5. Cracks.jpg'
import Aqueduct from '../public/images/23. Aqueduct.jpg'
import Tatemae9 from '../public/images/Tatemae9.jpg'
import Levanzo from '../public/images/12. Levanzo.jpg'
import Way from '../public/images/14. Way.jpg'
import Tipici from '../public/images/17. Tipici.jpg'
import PortoEmpedocle from '../public/images/11. Porto Empedocle.jpg'
import styles from '../styles/Home.module.css'
Home.title = "Steve Barbaro"

export default function Home() {
  return (
      <>
      <Head/>
      <div className={styles.imageBoxZero}><Image src={Tatemae1} width={90} height={50}
        layout={`fill`} alt="Upclose Photgraph of a Staircase-ledge above which Looms a Ridge of Mountains"/></div>
        <div className={styles.imageBoxOne}><Image src={Cracks} width={100} height={120}
          layout={`fixed`} alt="Photograph of Cracks and Distortion atop a Neoclassical Arch"/></div>
          <div className={styles.imageBoxTwo}><Image src={Aqueduct} width={100} height={120}
            layout={`fixed`} alt="Photograph of An Aqueduct in Sun"/></div>
            <div className={styles.imageBoxThree}><Image src={Tatemae9} width={100} height={120}
              layout={`fixed`} alt="Photograph of a Young Child in the Foreground of Thatched Houses Beneath Clouds"/></div>
              <div className={styles.imageBoxFour}><Image src={Levanzo} width={100} height={120}
                layout={`fixed`} alt="Photocollage titled 'Levanzo'"/></div>
                <div className={styles.imageBoxFive}><Image src={Way} width={100} height={120}
                  layout={`fixed`} alt="Photo of a Doorway Abetting a Fresco in Pompeii'"/></div>
                  <div className={styles.imageBoxSix}><Image src={Tipici} width={100} height={120}
                    layout={`fixed`} alt="Photograph of Remnant Romant Brickwall in front of a Cypress Tree'"/></div>
                    <div className={styles.imageBoxSeven}><Image src={PortoEmpedocle} width={100} height={120}
                      layout={`fixed`} alt="Photocollage Titled 'Porto Empedocle''"/></div>
   </>
  )
}
