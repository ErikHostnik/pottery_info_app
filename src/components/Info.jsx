import './Info.css'

const title = 'Handcrafted Pottery'

export default function Info() {
  return (
    <section className="info-section">
      <h2 className="info-title">
        {title.split('').map((char, i) => (
          <span
            key={i}
            className="info-title-char"
            style={{ animationDelay: `${i * 0.04}s` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </h2>
      <p className="info-description">
        Each piece is lovingly handmade with care and attention to detail.
        Discover unique ceramic creations that bring warmth and beauty to your home.
      </p>
      <p className="info-tagline">
        Made with passion, crafted for you.
      </p>
    </section>
  )
}
