import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
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

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
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

          <button type="submit" className="contact-submit-btn">
            Send Message
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
