import './About.css'

export default function About() {
  return (
    <section className="about-page">
      <div className="about-hero">
        <h2 className="about-title">About Mica Studio</h2>
        <p className="about-subtitle">
          Handcrafted pottery rooted in tradition, shaped by passion.
        </p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h3>Our Story</h3>
          <p>
            Founded in 2020, Mica Studio began as a small workshop with a simple
            mission: to create beautiful, functional pottery that brings warmth
            to everyday life. What started as a personal passion has grown into a
            beloved studio known for its distinctive craftsmanship and attention
            to detail.
          </p>
          <p>
            Every piece that leaves our studio is shaped by hand, glazed with
            care, and fired with intention. We believe that the objects we
            surround ourselves with should tell a story — and we pour that belief
            into every creation.
          </p>
        </div>

        <div className="about-section">
          <h3>Our Process</h3>
          <p>
            Each piece begins as raw clay, carefully selected for its texture
            and character. From wheel-throwing and hand-building to glazing and
            kiln-firing, every step of our process is done by hand in our
            Portland studio. We work with stoneware and porcelain clays, using
            food-safe glazes in earthy, natural tones.
          </p>
        </div>

        <div className="about-section">
          <h3>Our Values</h3>
          <div className="about-values">
            <div className="about-value-card">
              <h4>Craftsmanship</h4>
              <p>
                We take pride in every detail, from the curve of a handle to the
                depth of a glaze. No two pieces are exactly alike.
              </p>
            </div>
            <div className="about-value-card">
              <h4>Sustainability</h4>
              <p>
                We source materials responsibly, minimize waste in our studio,
                and create pieces built to last a lifetime.
              </p>
            </div>
            <div className="about-value-card">
              <h4>Community</h4>
              <p>
                We host workshops, collaborate with local artists, and believe
                in the power of creativity to bring people together.
              </p>
            </div>
          </div>
        </div>

        <div className="about-section about-cta">
          <h3>Visit Us</h3>
          <p>
            Our studio is open to visitors during regular hours. Stop by to see
            our latest work, watch a piece being made, or simply enjoy a cup of
            tea surrounded by pottery.
          </p>
          <p>
            <strong>123 Clay Lane, Artisan District, Portland, OR 97201</strong>
          </p>
        </div>
      </div>
    </section>
  )
}
