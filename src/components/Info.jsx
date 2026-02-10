import ScrollReveal from './ScrollReveal'
import './Info.css'

const title = 'Ročna keramika'

export default function Info() {
  return (
    <ScrollReveal as="section" className="info-section">
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
        Vsak kos je z ljubeznijo ročno izdelan s skrbnostjo in pozornostjo do detajlov.
        Odkrijte edinstvene keramične stvaritve, ki vašemu domu prinašajo toplino in lepoto.
      </p>
      <p className="info-tagline">
        Ustvarjeno s strastjo, oblikovano za vas.
      </p>
    </ScrollReveal>
  )
}
