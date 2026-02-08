import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
} from '../config/emailjs'
import './Contact.css'

export default function Contact() {
  const [searchParams] = useSearchParams()
  const productName = searchParams.get('product')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState(null) // { type: 'success' | 'error', text: string }

  useEffect(() => {
    if (productName) {
      setFormData((prev) => ({
        ...prev,
        subject: `Povpraševanje o ${productName}`,
        message: `Pozdravljeni, zanima me izdelek "${productName}". Mi lahko posredujete več informacij?`,
      }))
    }
  }, [productName])

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setStatus(null)

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Ni podano',
      subject: formData.subject,
      message: formData.message,
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      )
      setStatus({ type: 'success', text: 'Hvala! Vaše sporočilo je bilo uspešno poslano.' })
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus({
        type: 'error',
        text: 'Nekaj je šlo narobe. Prosimo, poskusite znova ali nam pišite neposredno.',
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="contact-page">
      <div className="contact-hero">
        <h2 className="contact-title">Stopite v stik</h2>
        <p className="contact-subtitle">
          Če imate vprašanje o izdelku, naročilu po meri ali čemerkoli drugem — z veseljem vam pomagam.
        </p>
      </div>

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          {status && (
            <div className={`contact-status contact-status--${status.type}`}>
              {status.text}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="name">Ime *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Vaše polno ime"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-pošta *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="vas@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Telefon (neobvezno)</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="031 123 456"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Zadeva *</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="O čem gre?"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Sporočilo *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Povejte nam, kaj vas zanima..."
            />
          </div>

          <button
            type="submit"
            className="contact-submit-btn"
            disabled={sending}
          >
            {sending ? 'Pošiljanje...' : 'Pošlji sporočilo'}
          </button>
        </form>

        <aside className="contact-sidebar">
          <div className="contact-info-card">
            <h3>Kontaktni podatki</h3>
            <p>
              <strong>Telefon:</strong> (503) 555-0142<br />
              <strong>E-pošta:</strong> hello@potterystudio.com
            </p>
          </div>

          <div className="contact-info-card">
            <h3>Odzivni čas</h3>
            <p>
              Na sporočila se trudim odgovoriti v najkrajšem možnem času, običajno v roku 24 ur.
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}
