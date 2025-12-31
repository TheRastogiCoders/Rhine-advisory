import React, { useState } from 'react'
import '../styles/contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    serviceInterest: '',
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

  const services = [
    'Select a service',
    'Mergers & Acquisitions (M&A) Advisory',
    'SPAC Advisory Services',
    'Transaction Advisory Services',
    'Investment Solutions & Advisory',
    'Valuation & Financial Modeling',
    'Capital Markets Advisory',
    'Fund Administration and Accounting'
  ]

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
          access_key: '4c3921bd-cea7-4945-a469-4791bd23c875',
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          subject: formData.subject,
          service_interest: formData.serviceInterest,
          message: formData.message,
          from_name: 'Rhine Advisory Contact Form',
          reply_to: formData.email,
        }),
      });

      const result = await response.json()
      
      if (result.success) {
        setSubmitStatus({ success: true, message: 'Thank you for your message! We will get back to you soon.' })
        // Reset form on successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          serviceInterest: '',
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
      <section className="proposal-header">
        <div className="container">
          <h1 className="proposal-title">Request a Custom Proposal</h1>
          <p className="proposal-description">
            Get a professional business valuation from our expert team. We'll provide you with a comprehensive analysis tailored to your specific business needs.
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
                  <a href="mailto:contact@rhineadvisory.ae">
                    contact@rhineadvisory.ae
                  </a>
                </div>

                <div className="info-item">
                  <strong>Phone</strong>
                  <a href="tel:+918140243880">
                    +91 81402 43880
                  </a>
                </div>

                <div className="info-item">
                  <strong>Delivery Center Address:</strong>
                  <p>Westgate, 510-511, 5th floor D Block, Near YMCA Club, SG Road, Ahmedabad - 380015 Gujarat, India.</p>
                </div>

                <div className="info-item">
                  <strong>HQ Address:</strong>
                  <p>Serene Centrum, 510, Near Gangotri Exotica, Laxshmipura Road Vadodara, GUJARAT 390021</p>
                </div>

                <div className="info-item">
                  <strong>Sales Office:</strong>
                  <p>Empire Heights Tower, Marasi Drive, Business Bay, Dubai – UAE</p>
                </div>
              </div>

              {/* ================= MAP SECTION ================= */}
              <div className="map-section">
                <h3>Find Us</h3>
                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d865.8153813454534!2d72.50062853553113!3d23.003052074405353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b268747c875%3A0xd44523a6cd7ccb19!2sWestgate%20Complex!5e0!3m2!1sen!2sin!4v1766928159351!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0, borderRadius: '12px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Rhine Advisory Location - Delivery Center"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* ================= CONTACT FORM ================= */}
            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3 className="form-title">Send Us a Message</h3>
                <p className="form-subtitle">
                  Ready to take control of your financial future? Contact our expert advisors for a free consultation and personalized financial guidance.
                </p>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company (Optional)</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter your company name"
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
                    placeholder="What is this regarding?"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="serviceInterest">Service Interest</label>
                  <select
                    id="serviceInterest"
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleChange}
                    className="form-select"
                  >
                    {services.map((service, index) => (
                      <option key={index} value={service === 'Select a service' ? '' : service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    required
                  ></textarea>
                </div>

                <div className="form-actions">
                  <button 
                    type="submit" 
                    className="btn btn-primary send-message-btn"
                    disabled={isSubmitting}
                  >
                    <span className="btn-icon"></span>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
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
