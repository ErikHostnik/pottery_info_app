import './About.css'

export default function About() {
  return (
    <section className="about-page">
      <div className="about-hero">
        <h2 className="about-title">O Mica Studiu</h2>
        <p className="about-subtitle">
          Ročno izdelana keramika, zakoreninjena v tradiciji, oblikovana s strastjo.
        </p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h3>Naša zgodba</h3>
          <p>
            Mica Studio je bil ustanovljen leta 2020 kot majhna delavnica s preprostim
            poslanstvom: ustvarjati lepo, funkcionalno keramiko, ki v vsakdanje
            življenje prinaša toplino. Kar se je začelo kot osebna strast, je zraslo
            v priljubljen studio, znan po svoji prepoznavni obrtniški kakovosti in
            pozornosti do detajlov.
          </p>
          <p>
            Vsak kos, ki zapusti naš studio, je ročno oblikovan, skrbno glaziran
            in premišljeno žgan. Verjamemo, da morajo predmeti, s katerimi se
            obdajamo, pripovedovati zgodbo — in to prepričanje vlijemo v vsako
            stvaritev.
          </p>
        </div>

        <div className="about-section">
          <h3>Naš postopek</h3>
          <p>
            Vsak kos se začne kot surova glina, skrbno izbrana glede na teksturo
            in značaj. Od oblikovanja na vretenu in ročnega modeliranja do glaziranja
            in žganja v peči — vsak korak našega postopka je opravljen ročno v
            našem studiu. Delamo s kameninsko in porcelanasto glino ter uporabljamo
            za živila varne glazure v zemeljskih, naravnih odtenkih.
          </p>
        </div>

        <div className="about-section">
          <h3>Naše vrednote</h3>
          <div className="about-values">
            <div className="about-value-card">
              <h4>Mojstrstvo</h4>
              <p>
                Ponašamo se z vsakim detajlom, od krivulje ročaja do globine
                glazure. Noben kos ni popolnoma enak drugemu.
              </p>
            </div>
            <div className="about-value-card">
              <h4>Trajnostnost</h4>
              <p>
                Materiale pridobivamo odgovorno, v studiu zmanjšujemo odpadke
                in ustvarjamo izdelke, narejene za vse življenje.
              </p>
            </div>
            <div className="about-value-card">
              <h4>Skupnost</h4>
              <p>
                Organiziramo delavnice, sodelujemo z lokalnimi umetniki in
                verjamemo v moč ustvarjalnosti, da združuje ljudi.
              </p>
            </div>
          </div>
        </div>

        <div className="about-section about-cta">
          <h3>Obiščite nas</h3>
          <p>
            Naš studio je odprt za obiskovalce med rednim delovnim časom. Pridite
            si ogledat naša najnovejša dela, opazovat nastajanje novega kosa ali
            preprosto uživat ob skodelici čaja, obdani s keramiko.
          </p>
          <p>
            <strong>123 Clay Lane, Artisan District, Portland, OR 97201</strong>
          </p>
        </div>
      </div>
    </section>
  )
}
