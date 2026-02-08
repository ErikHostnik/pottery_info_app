import aboutPhoto from '../assets/real/MicaStudio.JPG'
import './About.css'

export default function About() {
  return (
    <section className="about-page">
      <div className="about-hero">
        <h2 className="about-title">O meni</h2>
        <p className="about-subtitle">
          Ročno izdelana keramika, zakoreninjena v tradiciji, oblikovana s strastjo.
        </p>
      </div>

      <div className="about-content">
        <div className="about-intro">
          <div className="about-photo-wrapper">
            <img
              src={aboutPhoto}
              alt="Mica Studio — avtorica"
              className="about-photo"
            />
          </div>
          <div className="about-intro-text">
            <div className="about-section">
              <h3>Moja zgodba</h3>
              <p>
                Mica Studio sem ustanovila leta 2020 kot majhno delavnico s preprostim
                poslanstvom: ustvarjati lepo, funkcionalno keramiko, ki v vsakdanje
                življenje prinaša toplino. Kar se je začelo kot osebna strast, je zraslo
                v priljubljen studio, znan po svoji prepoznavni obrtniški kakovosti in
                pozornosti do detajlov.
              </p>
              <p>
                Vsak kos, ki zapusti moj studio, je ročno oblikovan, skrbno glaziran
                in premišljeno žgan. Verjamem, da morajo predmeti, s katerimi se
                obdajamo, pripovedovati zgodbo — in to prepričanje vlijem v vsako
                stvaritev.
              </p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h3>Moj postopek</h3>
          <p>
            Vsak kos se začne kot surova glina, skrbno izbrana glede na teksturo
            in značaj. Od oblikovanja na vretenu in ročnega modeliranja do glaziranja
            in žganja v peči — vsak korak mojega postopka je opravljen ročno.
            Delam s kameninsko in šamotirano glino ter uporabljam
            za živila varne glazure v zemeljskih, naravnih odtenkih.
          </p>
        </div>

        <div className="about-section">
          <h3>Moje vrednote</h3>
          <div className="about-values">
            <div className="about-value-card">
              <h4>Mojstrstvo</h4>
              <p>
                Ponašam se z vsakim detajlom, od krivulje ročaja do globine
                glazure. Noben kos ni popolnoma enak drugemu.
              </p>
            </div>
            <div className="about-value-card">
              <h4>Trajnostnost</h4>
              <p>
                Materiale pridobivam odgovorno, zmanjšujem odpadke
                in ustvarjam izdelke, narejene za vse življenje.
              </p>
            </div>
            <div className="about-value-card">
              <h4>Unikatnost</h4>
              <p>
                Vsak izdelek je edinstven in nosi v sebi prstni odtis
                mojega dela — nepopolnosti so del zgodbe, ne napake.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
