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
        subject: `Inquiry about ${productName}`,
        message: `Hi, I'm interested in the "${productName}" piece. Could you please provide more information?`,
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
      phone: formData.phone || 'Not provided',
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
      setStatus({ type: 'success', text: 'Thank you! Your message has been sent successfully.' })
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus({
        type: 'error',
        text: 'Something went wrong. Please try again or email us directly.',
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="contact-page">
      <div className="contact-hero">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtitle">
          We'd love to hear from you. Whether you have a question about a piece, custom orders, or anything else — our team is ready to help.
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
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone (optional)</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(555) 123-4567"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject *</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="What is this about?"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Tell us what you're looking for..."
            />
          </div>

          <button
            type="submit"
            className="contact-submit-btn"
            disabled={sending}
          >
            {sending ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <aside className="contact-sidebar">
          <div className="contact-info-card">
            <h3>Visit Our Studio</h3>
            <p>123 Clay Lane<br />Artisan District<br />Portland, OR 97201</p>
          </div>

          <div className="contact-info-card">
            <h3>Contact Info</h3>
            <p>
              <strong>Phone:</strong> (503) 555-0142<br />
              <strong>Email:</strong> hello@potterystudio.com
            </p>
          </div>

          <div className="contact-info-card">
            <h3>Studio Hours</h3>
            <p>
              Mon – Fri: 10am – 6pm<br />
              Saturday: 10am – 4pm<br />
              Sunday: Closed
            </p>
          </div>

          <div className="contact-map-placeholder">
            <span>Map Coming Soon</span>
          </div>
        </aside>
      </div>
    </section>
  )
}
