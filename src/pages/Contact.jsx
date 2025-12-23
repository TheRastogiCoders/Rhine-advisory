import React, { useState } from 'react'
import '../styles/contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ success: null, message: '' })

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'c227dff2-8df3-43fe-91c4-40353cd715d3',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
          subject: `New Contact Form Submission from ${formData.name}`,
          from_name: 'Rhine Advisory Contact Form',
          reply_to: formData.email,
        }),
      });

      const result = await response.json()
      
      if (result.success) {
        setSubmitStatus({ success: true, message: 'Thank you for your message! We will get back to you soon.' })
        // Reset form on successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        })
      } else {
        throw new Error(result.message || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: error.message || 'Failed to send message. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact">
      {/* ================= PAGE HEADER ================= */}
      <section className="page-header">
        <div className="container">
          <h1>CONTACT US</h1>
          <p className="page-subtitle" style={{ color: "var(--primary-red)" }}>
            Engage with Rhine Advisory to evaluate, structure, and execute
            complex transactions with confidence.
          </p>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="section contact-section">
        <div className="container">
          <div className="contact-wrapper">
            
            {/* ================= CONTACT INFO ================= */}
            <div className="contact-info">
              <div className="info-card">
                <h3>Connect With Us</h3>
                <p className="info-description">
                  We work with corporates, investors, sponsors, and founders on
                  high-impact transactions and strategic decisions.
                </p>

                <div className="info-item">
                  <strong>Email</strong>
                  <a href="mailto:contact@rhineadvisory.com">
                    contact@rhineadvisory.com
                  </a>
                </div>

                <div className="info-item">
                  <strong>Phone</strong>
                  <a href="tel:+918140243880">
                    +91 81402 43880
                  </a>
                </div>

                <div className="info-item">
                  <strong>Office</strong>
                  <p>Ahmedabad, Gujarat — India</p>
                </div>
              </div>

              <div className="info-card">
                <h3>Business Hours</h3>
                <p>Monday – Friday: 9:00 AM – 6:00 PM (IST)</p>
                <p>Saturday: By appointment</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            {/* ================= CONTACT FORM ================= */}
            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3 className="form-title">Send Us a Message</h3>
                <p className="form-subtitle">
                  Tell us about your transaction, investment, or advisory requirement.
                </p>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company / Organization"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your requirement or transaction"
                    required
                  ></textarea>
                </div>

                <div className="form-actions">
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
                  </button>
                  {submitStatus.message && (
                    <div className={`form-message ${submitStatus.success ? 'success' : 'error'}`}>
                      {submitStatus.message}
                    </div>
                  )}
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
