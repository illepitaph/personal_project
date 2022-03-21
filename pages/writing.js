import Head from 'next/head'
import Image from 'next/Image'
import StreetlightShadow from '../public/images/Tatemae6.jpg'
import Clouds from '../public/images/7. Clouds.jpg'
import Hmmmm from '../public/images/6. Hmmmm.jpg'
import Pozzallo from '../public/images/1. Pozzallo.jpg'
import Cracks from '../public/images/5. Cracks.jpg'
import Doggie from '../public/images/Tatemae2.jpg'
import Tipici from '../public/images/17. Tipici.jpg'
import LiquorFruits from '../public/images/Tatemae23.jpg'
import Altar from '../public/images/18. Altar.jpg'
import Sprawl from '../public/images/18.5 Sprawl.jpg'
import TerminiImerese from '../public/images/15. Termini Imerese.jpg'
import Car from '../public/images/Tatemae8.jpg'
import Pantelleria from '../public/images/10. Pantelleria.jpg'
import Cat from '../public/images/Tatemae25.jpg'
import Train from '../public/images/20.5 Train.jpg'
import Tatemae21half from '../public/images/Tatemae21half.jpg'
import HeraclesAndLeucothea from  '../public/images/10. Heracles & Leucothea.jpg'
import Diptych from '../public/images/4. Diptych.jpg'
import Footer from '../components/footer.js'
import styles from '../styles/Writing.module.css'
Writing.title = "writing — Steve Barbaro"

export default function Writing() {
  return (
      <>
      <Head/>
      <div className={styles.imageBoxZero}><Image src={Clouds} width={250} height={150}
        layout={`fixed`} alt="Photograph of Park with Two Faintly Walking Humans Under Puffy Clouds"/></div>
        <div className={styles.imageBoxZeroPointFive}><Image src={Clouds} width={250} height={150}
          layout={`fixed`} alt="Photograph of Park with Two Faintly Walking Humans Under Puffy Clouds"/></div>
      <div className={styles.imageBoxOne}><Image src={StreetlightShadow} width={100} height={100}
        layout={`fixed`} alt="Photograph of the Midday Shadow of a Streetlight"/></div>
        <div className={styles.imageBoxTwo}><Image src={StreetlightShadow} width={100} height={100}
          layout={`fixed`} alt="Photograph of the Midday Shadow of a Streetlight"/></div>
          <div className={styles.imageBoxThree}><Image src={Pozzallo} width={230} height={300}
            layout={`fixed`} alt="Photocollage titled 'Pozzallo'"/></div>
            <div className={styles.imageBoxThreePointFive}><Image src={Pozzallo} width={230} height={300}
              layout={`fixed`} alt="Photocollage titled 'Pozzallo'"/></div>
            <div className={styles.imageBoxFour}><Image src={Cracks} width={100} height={120}
              layout={`fixed`} alt="Photograph of Cracks and Distortion atop a Neoclassical Arch"/></div>
              <div className={styles.imageBoxFourPointFive}><Image src={Cracks} width={100} height={120}
                layout={`fixed`} alt="Photograph of Cracks and Distortion atop a Neoclassical Arch"/></div>
              <div className={styles.imageBoxFive}><Image src={Doggie} width={300} height={320}
                layout={`fixed`} alt="Photograph of Man in front of a Truck with a Doggie in Back"/></div>
                <div className={styles.imageBoxFivePointFive}><Image src={Doggie} width={300} height={320}
                  layout={`fixed`} alt="Photograph of Man in front of a Truck with a Doggie in Back"/></div>
                <div className={styles.imageBoxSix}><Image src={Tipici} width={120} height={120}
                  layout={`fixed`} alt="Photograph of Remnant Romant Brickwall in front of a Cypress Tree"/></div>
                  <div className={styles.imageBoxSeven}><Image src={Tipici} width={120} height={120}
                    layout={`fixed`} alt="Photograph of Remnant Romant Brickwall in front of a Cypress Tree"/></div>
                    <div className={styles.imageBoxEight}><Image src={LiquorFruits} width={220} height={220}
                      layout={`fixed`} alt="Photograph of Store Selling Liquor and Fruits and a Line of Patrons"/></div>
                      <div className={styles.imageBoxEightPointFive}><Image src={LiquorFruits} width={220} height={220}
                        layout={`fixed`} alt="Photograph of Store Selling Liquor and Fruits and a Line of Patrons"/></div>
                      <div className={styles.imageBoxNine}><Image src={Sprawl} width={220} height={140}
                        layout={`fixed`} alt="Photograph of A Remnant Room in Pompeii and Two Observers"/></div>
                        <div className={styles.imageBoxTen}><Image src={Sprawl} width={220} height={140}
                          layout={`fixed`} alt="Photograph of A Remnant Room in Pompeii and Two Observers"/></div>
                          <div className={styles.imageBoxEleven}><Image src={Sprawl} width={220} height={140}
                            layout={`fixed`} alt="Photograph of A Remnant Room in Pompeii and Two Observers"/></div>
                            <div className={styles.imageBoxTwelve}><Image src={Sprawl} width={220} height={140}
                              layout={`fixed`} alt="Photograph of A Remnant Room in Pompeii and Two Observers"/></div>
                              <div className={styles.imageBoxThirteen}><Image src={Altar} width={200} height={280}
                                layout={`fixed`} alt="Photograph of A Random Roman Ledge with Two Empty Beer Bottles Atop"/></div>
                                <div className={styles.imageBoxThirteenPointFive}><Image src={Altar} width={200} height={280}
                                  layout={`fixed`} alt="Photograph of A Random Roman Ledge with Two Empty Beer Bottles Atop"/></div>
                                  <div className={styles.imageBoxFourteen}><Image src={TerminiImerese} width={230} height={280}
                                    layout={`fixed`} alt="Photocollage titled 'Termini Imerese'"/></div>
                                  <div className={styles.imageBoxFourteenPointFive}><Image src={TerminiImerese} width={230} height={280}
                                    layout={`fixed`} alt="Photocollage titled 'Termini Imerese'"/></div>
                                  <div className={styles.imageBoxFifteen}><Image src={Cracks} width={100} height={120}
                                    layout={`fixed`} alt="Photograph of Cracks and Distortion atop a Neoclassical Arch in Rome"/></div>
                                    <div className={styles.imageBoxSixteen}><Image src={Train} width={100} height={120}
                                      layout={`fixed`} alt="Photograph of Passengers Aboard a Train in Rome"/></div>
                                      <div className={styles.imageBoxSeventeen}><Image src={Car} width={100} height={120}
                                        layout={`fixed`} alt="Photograph of a Car with A Tarp atop Held Down with Bamboo"/></div>
                                        <div className={styles.imageBoxEighteen}><Image src={Pantelleria} width={100} height={120}
                                          layout={`fixed`} alt="Photocollage titled 'Pantelleria'"/></div>
                                          <div className={styles.imageBoxNineteen}><Image src={Cat} width={230} height={300}
                                            layout={`fixed`} alt="Photograph of a Cat Sleeping atop a Ledge"/></div>
                                            <div className={styles.imageBoxTwenty}><Image src={Cat} width={230} height={300}
                                              layout={`fixed`} alt="Photograph of a Cat Sleeping atop a Ledge"/></div>
                                              <div className={styles.imageBoxTwentyOne}><Image src={Cat} width={210} height={300}
                                                layout={`fixed`} alt="Photograph of a Cat Sleeping atop a Ledge"/></div>
                                                <div className={styles.imageBoxTwentyTwo}><Image src={Tatemae21half} width={100} height={120}
                                                  layout={`fixed`} alt="Photograph of a Ship-like Building in Tokyo with Passerby"/></div>
                                                  <div className={styles.imageBoxTwentyThree}><Image src={Diptych} width={100} height={120}
                                                    layout={`fixed`} alt="Photograph of a Distorted Bench In Front of a Neoclassical Facade in Rome"/></div>
                                                    <div className={styles.imageBoxTwentyFour}><Image src={Tatemae21half} width={100} height={120}
                                                      layout={`fixed`} alt="Photograph of a Ship-like Building in Tokyo with Passerby"/></div>
                                                      <div className={styles.imageBoxTwentyFive}><Image src={Diptych} width={100} height={120}
                                                        layout={`fixed`} alt="Photograph of a Distorted Bench In Front of a Neoclassical Facade in Rome"/></div>
                                                        <div className={styles.imageBoxTwentySix}><Image src={Tatemae21half} width={100} height={120}
                                                          layout={`fixed`} alt="Photograph of a Ship-like Building in Tokyo with Passerby"/></div>
                                                          <div className={styles.imageBoxTwentySeven}><Image src={Diptych} width={100} height={120}
                                                            layout={`fixed`} alt="Photograph of a Distorted Bench In Front of a Neoclassical Facade in Rome"/></div>
                                                            <div className={styles.imageBoxTwentyEight}><Image src={Tatemae21half} width={100} height={120}
                                                              layout={`fixed`} alt="Photograph of a Ship-like Building in Tokyo with Passerby"/></div>
                                                              <div className={styles.imageBoxTwentyNine}><Image src={Diptych} width={100} height={120}
                                                                layout={`fixed`} alt="Photograph of a Distorted Bench In Front of a Neoclassical Facade in Rome"/></div>
                                                                <div className={styles.imageBoxThirty}><Image src={Tatemae21half} width={100} height={120}
                                                                  layout={`fixed`} alt="Photograph of a Ship-like Building in Tokyo with Passerby"/></div>
                                                                  <div className={styles.imageBoxThirtyOne}><Image src={Diptych} width={100} height={120}
                                                                    layout={`fixed`} alt="Photograph of a Distorted Bench In Front of a Neoclassical Facade in Rome"/></div>
                                                                    <div className={styles.imageBoxThirtyTwo}><Image src={HeraclesAndLeucothea} width={200} height={320}
                                                                      layout={`fixed`} alt="Photograph of Two Statues of Deities in Rome"/></div>
                                                                      <div className={styles.imageBoxThirtyThree}><Image src={HeraclesAndLeucothea} width={200} height={320}
                                                                        layout={`fixed`} alt="Photograph of Two Statues of Deities in Rome"/></div>
                                                                        <div className={styles.imageBoxThirtyFour}><Image src={HeraclesAndLeucothea} width={200} height={320}
                                                                          layout={`fixed`} alt="Photograph of Two Statues of Deities in Rome"/></div>
                                                                          <div className={styles.imageBoxThirtyFive}><Image src={HeraclesAndLeucothea} width={200} height={320}
                                                                            layout={`fixed`} alt="Photograph of Two Statues of Deities in Rome"/></div>
                                                                            <div className={styles.imageBoxThirtySix}><Image src={HeraclesAndLeucothea} width={200} height={320}
                                                                              layout={`fixed`} alt="Photograph of Two Statues of Deities in Rome"/></div>

      <div className={styles.textContainer}>
      <p>––<span className={styles.grayTextUppercase}>online</span>––</p>
      <br/>
        <p>[<span className={styles.grayText}>fiction</span>]<br/><br/>
          “<span className={styles.pieceTitleText}>Celestial Camo</span>” – <a target="_blank" href="https://socratesonthebeach.com/steve-barbaro">Socrates on The Beach</a> – ( .. in Sicily .. a tale of inebriated reckoning .. )
        </p>
        <p>
        "<span className={styles.pieceTitleText}>A Genealogy of Instinct</span>" – <a target="_blank" href="http://www.conjunctions.com/online/article/steve-barbaro-09-17-2013">Conjunctions</a> – ( .. also in Sicily .. porcupines .. migration.. ancestry .. )
        </p>
        <p>
        “<span className={styles.pieceTitleText}>Um…A Sensorium</span>” – <a target="_blank" href="http://www.3ammagazine.com/3am/um-a-sensorium/">3:AM</a> – ( .. in a room overlooking a street .. synaesthesia .. biological odysseys .. )
        </p><br/><br/>
          <p>[<span className={styles.grayText}>poetry</span>]<br/><br/>
          "<span className={styles.pieceTitleText}>For Georges Braque</span>" – <a target="_blank" href="http://thediagram.com/16_1/barbaro.html">DIAGRAM</a> – ( .. utensils .. the body .. geometry .. )
          </p>
          <p>
          "<span className={styles.pieceTitleText}>Quadratic</span>" – <a target="_blank" href="https://yalereview.org/article/quadratic">The Yale Review</a> – ( .. property .. suppression .. the otherworldly .. )
          </p>
          <p>
          "<span className={styles.pieceTitleText}>Sorta</span>" + "<span
          className={styles.pieceTitleText}>For a Friend</span>" + "<span
          className={styles.pieceTitleText}>The Lighthouse Verdict</span>" – <a target="_blank" href="http://www.conjunctions.com/online/article/steve-barbaro-07-17-2012">Conjunctions</a> – ( .. estrangement .. crowding .. )
          </p>
          <p>
          "<span className={styles.pieceTitleText}>Graffito Beholds a Sculpted Dionysus Head</span>" – <a target="_blank" href="https://www.thecommononline.org/graffito-beholds-a-sculpted-doinysus-head">The Common</a> – ( .. self .. explanatory .. )
          </p>
          <p>
          "<span className={styles.pieceTitleText}>Wee</span>" – <a target="_blank" href="https://preludemag.com/posts/wee/">Prelude</a> – ( .. hmmmmmmmmm .. OK .. )
          </p>
          <p>
          “<span className={styles.pieceTitleText}>The Bottle of Schnapps</span>” – <a target="_blank" href="https://www.therupturemag.com/rupture/the-bottle-of-schnapps">The Rupture</a> – ( .. memory .. aphrodisiacs .. forgetting .. )
          </p>
          <p>
          “<span className={styles.pieceTitleText}>Ontbijtjes</span>” – <a target="_blank" href="https://www.natbrut.com/steve-barbaro">Nat. Brut</a> – ( .. coffee .. flooding .. dillydallyings .. )
          </p>
          <p>
          "<span className={styles.pieceTitleText}>In The Omnibus (1891)</span>" – <a target="_blank" href="http://thecollagist.com/the-collagist/2018/1/20/in-the-omnibus-1891.html">The Collagist</a> – ( .. Mary .. Cassatt .. functionality .. )
          </p>
          <p>
          "<span className={styles.pieceTitleText}>Summons in the Form of an Evasion</span>" + "<span
          className={styles.pieceTitleText}>37 Panoramic Views of Edo</span>" – <a target="_blank" href="https://interim.squarespace.com/barbaro">Interim</a> – ( .. volcanism .. flapping .. )
          </p>
          <p>
          "<span className={styles.pieceTitleText}>The Pond</span>" + "<span
          className={styles.pieceTitleText}>Articles of Capitulation</span>" – <a target="_blank" href="https://positjournal.com/2018/03/12/steve-barbaro/">Posit</a> – ( .. Cézanne .. fumaroles .. Caillebotte .. )
          </p>
          <p>
          "<span className={styles.pieceTitleText}>Of Property + Precipitation</span>" – <a target="_blank" href="https://preludemag.com/posts/of-property-precipitation/">Prelude</a> – ( .. intrusion .. skulls .. lackeys .. )
          </p>
          <p>
          "<span className={styles.pieceTitleText}>Disk</span>" + "<span
          className={styles.pieceTitleText}>Pare</span>" + "<span
          className={styles.pieceTitleText}>What A Perky Little Edifice</span>" + "<span
          className={styles.pieceTitleText}>Letter</span>" + "<span
          className={styles.pieceTitleText}>Post-Archipelago</span>" + "<span
          className={styles.pieceTitleText}>Tychtrip</span>" – <a target="_blank" href="https://theelephants.net/records/steve-barbaro">The Elephants</a> – ( .. the gamut .. everything .. nothing .. )
          </p>
          <p>
          "<span className={styles.pieceTitleText}>The Terrace at Vernonnet (1939)</span>" + "<span
          className={styles.pieceTitleText}>Der Weihnachtsmann (Santa Claus) (1922)</span>" + "<span
          className={styles.pieceTitleText}>Cue</span>" + "<span
          className={styles.pieceTitleText}>The Cadet & His Sister (1988)</span>" + "<span
          className={styles.pieceTitleText}>A Container in Midair</span>" + "<span
          className={styles.pieceTitleText}>Le Suicidé (1887)</span>" + "<span
          className={styles.pieceTitleText}>Diptych</span>"– <a target="_blank" href="https://drive.google.com/file/d/1OT9heIbkQ6lbx7gpMWJaA-zNzcYuE1op/view">The Equalizer</a> – ( .. paintings .. other stuff .. paintings .. )
          </p>
          <p>
          “<span className={styles.pieceTitleText}>The Surface Appliance</span>” – <a target="_blank"
          href="http://thediagram.com/13_1/barbaro.html">DIAGRAM</a> – ( .. icecastles .. weaponry .. )
          </p>
          <p>
          “<span className={styles.pieceTitleText}>Concave Decades</span>” – <a target="_blank"
          href="https://yalereview.org/article/concave-decades">The Yale Review</a> – ( .. plates .. alienation .. plates .. )
          </p>
          <p>
          “<span className={styles.pieceTitleText}>Space from Nothing</span>” – <a target="_blank"
          href="http://www.versedaily.org/2013/spacefromnothing.shtml">Verse Daily</a> – (via <i>The Literary Review</i>) ( .. old tombs .. airplanes .. )
          </p>
          <p>
          “<span className={styles.pieceTitleText}>Rue'd</span>” – <a target="_blank"
          href="https://preludemag.com/posts/rued/">Prelude</a> – ( .. well .. ahem .. see .. )
          </p>
          <p>
          "<span className={styles.pieceTitleText}>Space + Gesture</span>" + "<span
          className={styles.pieceTitleText}>Portrait of Henri Rochefort (1881)</span>" – <a target="_blank" href="http://thediagram.com/9_6/barbaro.html">DIAGRAM</a> – ( .. rain .. globes .. cheeks .. )
          </p><br/><br/>
          <p>[<span className={styles.grayText}>criticism</span>]<br/><br/>
            “<span className={styles.pieceTitleText}>Even Flesh Seems a Formality; or, Vi Khi Nao’s Organic Oscillations</span>” – <a target="_blank"
            href="http://newnewsinews.com/evenflesh">new sinews</a> – ( .. eyes .. ears .. eye-ears .. ear-eyes .. )
          </p>
          <p>
          "<span className={styles.pieceTitleText}>Saluting a Hex of Gangrenous Sky; or, Brandon Shimoda’s Ritual Inversions</span>" – <a target="_blank"
          href="https://newnewsinews.com/salutingahex">new sinews</a> – ( .. monuments .. rites .. forgettings .. )
          </p>
          <p>
          "<span className={styles.pieceTitleText}>Poem-Coerced Novel, Novel-Brandishing Poem</span>" – <a target="_blank"
          href="http://www.3ammagazine.com/3am/poem-coerced-novel-novel-brandishing-poem/">3:AM</a> – ( .. limos .. rats .. lightning .. )
          </p><br/><br/>
          <p>[<span className={styles.grayText}>photography</span>]<br/><br/>

          "<span className={styles.pieceTitleText}>1 Via San Lorenzo</span>" + "<span
          className={styles.pieceTitleText}>Puddle</span>" + "<span
          className={styles.pieceTitleText}>Reflection</span>" – <a target="_blank" href="http://www.fstopmagazine.com/pastissues/69/groupexhibition.html">F-Stop Magazine</a> – ( .. solidity .. anti-solidity .. )
          </p><br/><br/><br/>
          <p>––<span className={styles.grayTextUppercase}>in print</span>––</p><br/>
          <p>[<span className={styles.grayText}>fiction</span>]<br/><br/>

          "<span className={styles.pieceTitleText}>Plush Altar</span>" – <a target="_blank"
          href="https://www.facebook.com/denverquarterlyjournal/photos/pcb.3254464931249118/3254464341249177/?theater&type=3">Denver Quarterly</a> – ( .. sleep .. the underworld .. sleep .. )
           </p><br/><br/>
           <p>[<span className={styles.grayText}>poetry</span>]<br/><br/>
           "<span className={styles.pieceTitleText}>Guilt of The Graphomaniac</span>" – <a target="_blank" href="http://www.newamericanwriting.com/issue-34.html">New American Writing</a> – ( .. it .. yes, IT .. + so it-fully .. )
           </p>
           <p>
           "<span className={styles.pieceTitleText}>Consecration of a Hookup</span>" – <a target="_blank" href="http://www.hotelamerika.net/project/winter-2016-17-15/">Hotel Amerika</a> – ( .. RE: distance .. also RE: proximity .. )
           </p>
           <p>
           "<span className={styles.pieceTitleText}>The Body According to Neptune</span>" – <a target="_blank" href="http://www.du.edu/denverquarterly/past/index.html">Denver Quarterly</a> – ( .. kids .. hissing .. unfixity ..  )
           </p>
           <p>
           "<span className={styles.pieceTitleText}>A Rather Contemporary Inquiry</span>" – <a target="_blank" href="http://salthilljournal.net/sh34/">Salt Hill</a> – ( .. antiquity .. the lyric .. today .. )
           </p>
           <p>
           "<span className={styles.pieceTitleText}>Quadratic</span>" + "<span
           className={styles.pieceTitleText}>Concave Decades</span>" – <a target="_blank" href="https://yalereview.org/issues/january-2018">The Yale Review</a> – ( .. circles .. squares .. seams .. )
           </p>
           <p>
           "<span className={styles.pieceTitleText}>Deaf</span>" + "<span
           className={styles.pieceTitleText}>The Dearth of Pyres</span>" – <a target="_blank" href="http://www.westernhumanitiesreview.com/summer14/">Western Humanities Review</a> – ( .. smoke .. smokiness .. what's smoky .. )
           </p>
           <p>
           "<span className={styles.pieceTitleText}>Graffito Beholds a Sculpted Dionysus Head</span>" – <a target="_blank" href="https://www.thecommononline.org/issues/issue-14/">The Common</a> – ( .. self .. explanatory .. )
           </p>
           <p>
           "<span className={styles.pieceTitleText}>Tease of Unlikeness</span>" – <a target="_blank" href="http://www.amletters.org/Issues/issue24.html">American Letters + Commentary</a> – ( .. crackedness .. a face .. fakery .. )
           </p>
           <p>
           "<span className={styles.pieceTitleText}>A Girl from Cannon Beach</span>" – <a target="_blank" href="https://www.washingtonsquarereview.com/archives/5yv56ymr3lcq4jclt48nbfpkgbywq8">Washington Square</a> – ( .. more paintings .. more slippery .. )
           </p>
           <p>
           "<span className={styles.pieceTitleText}>Space from Nothing</span>" + "<span
           className={styles.pieceTitleText}>The Shut-In, Compromised</span>" + "<span
           className={styles.pieceTitleText}>1348 A.D.</span>" – <a target="_blank" href="https://www.theliteraryreview.org/issue/invisible-cities/">The Literary Review</a> – ( .. building .. the buildings .. those dang buildings .. )
           </p>
           <p>
           "<span className={styles.pieceTitleText}>Two Graphical Impulses</span>" – <a target="_blank" href="https://www.14hills.net/19-2">Fourtenn Hills</a> – ( .. what .. Fancy ..  fancies ..)
           </p>
           <p>
           "<span className={styles.pieceTitleText}>The Stream as Pure Ornament</span>" – <a target="_blank" href="http://thejournalmag.org/archives/4149">The Journal</a> – ( .. but what .. just WHAT ..  to say ..)
           </p>
           <p>
           "<span className={styles.pieceTitleText}>Divers</span>" + "<span
           className={styles.pieceTitleText}>Picture Plane</span>" – <a target="_blank" href="http://www.caketrain.org/10/">Caketrain</a> – ( .. noise .. not empty .. )
           </p>
           <p>
           "<span className={styles.pieceTitleText}>Distance + Concentration</span>" – <a target="_blank" href="http://www.amletters.org/Issues/issue22a.html">American Letters + Commentary</a> – ( .. more bodies .. more estrangement ..  more Sicily ..)
           </p>
           <p>
           "<span className={styles.pieceTitleText}>Buildings in a Lagoon: Triptych</span>" + "<span
           className={styles.pieceTitleText}>Aqua Alta: Triptych</span>" – <a target="_blank" href="http://www.du.edu/denverquarterly/past/index.html">Denver Quarterly</a> – ( .. venezia .. you know, like, <i>Venice</i> .. sheesh .. )
           </p>
      </div>

      <Footer/>
   </>
  )
}
