import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Tatemae1 from '../public/images/Tatemae1.jpg'
import Cracks from '../public/images/5. Cracks.jpg'
import Aqueduct from '../public/images/23. Aqueduct.jpg'
import Tatemae9 from '../public/images/Tatemae9.jpg'
import Levanzo from '../public/images/12. Levanzo.jpg'
import Way from '../public/images/14. Way.jpg'
import Tipici from '../public/images/17. Tipici.jpg'
import PortoEmpedocle from '../public/images/11. Porto Empedocle.jpg'
import HeraclesAndLeucothea from  '../public/images/10. Heracles & Leucothea.jpg'
import Diptych from '../public/images/4. Diptych.jpg'
import Inner from '../public/images/8. Inner.jpg'
import Tatemae21half from '../public/images/Tatemae21half.jpg'
import VesuviusTool from '../public/images/15. Vesuvius Tool.jpg'
import Tatemae5 from '../public/images/Tatemae5.jpg'
import PuntaBracetto from '../public/images/6. Punta Bracetto.jpg'
import Hmmmm from '../public/images/6. Hmmmm.jpg'
import Etruscan from '../public/images/22.5 Etruscan.jpg'
import Tatemae21 from '../public/images/Tatemae21.jpg'
import Clouds from '../public/images/7. Clouds.jpg'
import House from '../public/images/12. House.jpg'
import styles from '../styles/Home.module.css'
Home.title = "Steve Barbaro"
Home.pieceName = "Steve Barbaro"
Home.description = "homepage"
Home.image = "https://www.stevebarbaro.com/images/Tatemae1.jpg"



export default function Home() {
  return (
      <>
      <Head/>
      <div className={styles.container}>
      <div className={styles.imageBoxZero}><Image src={Tatemae1} width={90} height={50}
        layout={`fill`} alt="Upclose Photgraph of a Staircase-ledge above which Looms a Ridge of Mountains"/>  <div className={styles.nav}>
          <div className={styles.name}>S<span className={styles.alternateLetteringTwo}>t</span><span className={styles.alternateLettering}>e</span>v<span className={styles.alternateLetteringTwo}>e</span> B<span
          className={styles.alternateLetteringTwo}>a</span>r<span className={styles.alternateLettering}>b</span>a<span className={styles.alternateLetteringTwo}>r</span><span
          className={styles.alternateLettering}>o</span></div>
          <div className={styles.buttonBox}>
          <Link href="/writing" passHref><button className={styles.navButton}>writing</button></Link>
          <Link href="/about" passHref><button className={styles.navButton}>about</button></Link>
          <a target="_blank" href="https://www.twitter.com/illepitaph" className={styles.navButton}>tweeter</a>
          </div>
          </div></div>
        <div className={styles.imageBoxOne}><Image src={Cracks} width={100} height={120}
          layout={`fixed`} alt="Photograph of Cracks and Distortion atop a Neoclassical Arch"/></div>
          <div className={styles.imageBoxTwo}><Image src={Aqueduct} width={100} height={120}
            layout={`fixed`} alt="Photograph of An Aqueduct in Sun"/></div>
            <div className={styles.imageBoxThree}><Image src={Tatemae9} width={100} height={120}
              layout={`fixed`} alt="Photograph of a Young Child in the Foreground of Thatched Houses Beneath Clouds"/></div>
              <div className={styles.imageBoxFour}><Image src={Levanzo} width={100} height={120}
                layout={`fixed`} alt="Photocollage titled 'Levanzo'"/></div>
                <div className={styles.imageBoxFive}><Image src={Way} width={100} height={120}
                  layout={`fixed`} alt="Photo of a Doorway Abetting a Fresco in Pompeii"/></div>
                  <div className={styles.imageBoxSix}><Image src={Tipici} width={100} height={120}
                    layout={`fixed`} alt="Photograph of Remnant Romant Brickwall in front of a Cypress Tree"/></div>
                    <div className={styles.imageBoxSixPointZero}><Image src={HeraclesAndLeucothea} width={100} height={120}
                      layout={`fixed`} alt="Photograph of Two Statues of Deities in Rome"/></div>
                    <div className={styles.imageBoxSixPointOne}><Image src={Diptych} width={100} height={120}
                      layout={`fixed`} alt="Photograph of a Distorted Bench In Front of a Neoclassical Facade in Rome"/></div>
                      <div className={styles.imageBoxSixPointTwo}><Image src={Tipici} width={100} height={120}
                        layout={`fixed`} alt="Photograph of Remnant Romant Brickwall in front of a Cypress Tree"/></div>
                        <div className={styles.imageBoxSixPointThree}><Image src={Inner} width={100} height={120}
                          layout={`fixed`} alt="Photograph of an Erratically Lit Interior Bisected By Vertical Structural Bars"/></div>
                          <div className={styles.imageBoxSixPointFour}><Image src={Tatemae21half} width={100} height={120}
                            layout={`fixed`} alt="Photograph of a Ship-like Building in Tokyo with Passerby"/></div>
                            <div className={styles.imageBoxSixPointFive}><Image src={Diptych} width={100} height={120}
                              layout={`fixed`} alt="Photograph of a Distorted Bench In Front of a Neoclassical Facade in Rome"/></div>
                              <div className={styles.imageBoxSixPointSix}><Image src={Etruscan} width={100} height={120}
                                layout={`fixed`} alt="Photograph of a sculpture of an Estrucan Face"/></div>
                                  <div className={styles.imageBoxSixPointSeven}><Image src={HeraclesAndLeucothea} width={100} height={120}
                                    layout={`fixed`} alt="Photograph of Two Statues of Deities in Rome"/></div>
                                  <div className={styles.imageBoxSeven}><Image src={PortoEmpedocle} width={60} height={120}
                                    layout={`fixed`} alt="Photocollage Titled 'Porto Empedocle'"/></div>
                                    <div className={styles.imageBoxEight}><Image src={VesuviusTool} width={100} height={120}
                                      layout={`fixed`} alt="Picture of a Worker at the Pompeii Archeological Park in Front of Vesuvius"/></div>
                                      <div className={styles.imageBoxNine}><Image src={Tatemae5} width={100} height={120}
                                        layout={`fixed`} alt="Picture of a Distinctive Building Behind An Empty Public Railway Platform"/></div>
                                        <div className={styles.imageBoxTen}><Image src={PuntaBracetto} width={100} height={120}
                                          layout={`fixed`} alt="Photocollage titled 'Punta Bracetto'"/></div>
                                              <div className={styles.imageBoxEleven}><Image src={Aqueduct} width={200} height={120}
                                                layout={`fixed`} alt="Photograph of An Aqueduct in Sun"/></div>
                                                <div className={styles.imageBoxElevenPointOne}><Image src={Diptych} width={100} height={120}
                                                  layout={`fixed`} alt="Photograph of a Distorted Bench In Front of a Neoclassical Facade in Rome"/></div>
                                                  <div className={styles.imageBoxElevenPointTwo}><Image src={Way} width={100} height={120}
                                                    layout={`fixed`} alt="Photo of a Doorway Abetting a Fresco in Pompeii"/></div>
                                                    <div className={styles.imageBoxElevenPointThree}><Image src={Etruscan} width={100} height={120}
                                                      layout={`fixed`} alt="Photograph of a sculpture of an Estrucan Face"/></div>
                                                      <div className={styles.imageBoxElevenPointFour}><Image src={Tipici} width={100} height={120}
                                                        layout={`fixed`} alt="Photograph of Remnant Romant Brickwall in front of a Cypress Tree"/></div>
                                                        <div className={styles.imageBoxElevenPointFive}><Image src={Tatemae9} width={100} height={120}
                                                          layout={`fixed`} alt="Photograph of a Young Child in the Foreground of Thatched Houses Beneath Clouds"/></div>
                                                          <div className={styles.imageBoxElevenPointSix}><Image src={Cracks} width={100} height={120}
                                                            layout={`fixed`} alt="Photograph of Cracks and Distortion atop a Neoclassical Arch"/></div>
                                                              <div className={styles.imageBoxElevenPointSeven}><Image src={Clouds} width={100} height={120}
                                                                layout={`fixed`} alt="Photograph of Park with Two Faintly Walking Humans Under Puffy Clouds"/></div>
                                                                <div className={styles.imageBoxElevenPointEight}><Image src={HeraclesAndLeucothea} width={100} height={120}
                                                                  layout={`fixed`} alt="Photograph of Two Statues of Deities in Rome"/></div>
                                                                  <div className={styles.imageBoxElevenPointNine}><Image src={House} width={100} height={120}
                                                                    layout={`fixed`} alt="Photo of a House in Rome with a Picturesque Lone Car Parked in Front"/></div>


                          </div>
   </>
  )
}
