import React, { useState } from 'react'
import '../styles/main.css'
import '../styles/rhine-hr.css'

const expertiseItems = [
  {
    id: 'hr',
    title: 'Human Resources',
    content: 'We help organisations build and transform their HR functions through strategic executive search and assessment. Our approach combines deep sector knowledge with data-driven methodologies to identify and place leaders who drive culture, performance, and growth.',
  },
  {
    id: 'central',
    title: 'Central Functions Practice',
    content: 'We support businesses in strengthening their central functions—including Finance, Legal, IT, and Operations—by identifying and evaluating senior talent. Our practice is built on rigour, diversity, and delivery, aligned with your organisation’s strategic goals.',
  },
]

const RhineHR = () => {
  const [popupItem, setPopupItem] = useState(null)

  return (
    <div className="rhine-hr-page">
      {/* ================= TAGLINE (first) ================= */}
      <section className="rhine-hr-tagline">
        <div className="container">
          <h2 className="rhine-hr-tagline-headline">Inspiring Growth Through Exceptional Talent</h2>
          <p className="rhine-hr-tagline-sub">
            Transforming HR and Central Functions through dynamic executive search solutions.
          </p>
        </div>
      </section>

      <section className="page-header">
        <div className="container">
          <h1>Rhine HR</h1>
          <p className="header-subtitle">Executive search and HR advisory</p>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="rhine-hr-who section">
        <div className="container">
          <h2 className="section-title">Who We Are</h2>
          <div className="rhine-hr-who-content">
            <p className="section-description">
              Identifying, attracting, evaluating, and supporting talent across the globe, helping organisations build exceptional HR and central functions teams.
            </p>
            <p className="section-description">
              At Rhine, we&apos;ve been pioneering data-driven search processes for more than two decades, continuously refining our sector expertise and advancing our leadership assessment capabilities.
            </p>
            <p className="section-description">
              Our reputation is built on efficiency, clear communication, and a people-centric approach. This sincerity of service enables us to partner equally well with start-ups and global blue-chip businesses, who trust us to evaluate and transform their HR and Central Functions.
            </p>
            <p className="section-description">
              Our unique 3D Framework® drives our success by placing Data, Diversity, and Delivery at the heart of our thinking, and at the core of our operations.
            </p>
          </div>
        </div>
      </section>

      {/* ================= OUR EXPERTISE ================= */}
      <section className="rhine-hr-expertise section">
        <div className="container">
          <div className="rhine-hr-expertise-header">
            <h2 className="section-title">Our Expertise</h2>
            <button type="button" className="rhine-hr-what-we-do-btn">What We Do</button>
          </div>
          <div className="rhine-hr-expertise-grid">
            {expertiseItems.map((item) => (
              <div key={item.id} className="rhine-hr-expertise-card">
                <h3>{item.title}</h3>
                <button
                  type="button"
                  className="rhine-hr-learn-more"
                  onClick={() => setPopupItem(item)}
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Learn More popup ================= */}
      {popupItem && (
        <div className="rhine-hr-popup-overlay" onClick={() => setPopupItem(null)}>
          <div className="rhine-hr-popup" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="rhine-hr-popup-close"
              onClick={() => setPopupItem(null)}
              aria-label="Close"
            >
              ×
            </button>
            <h3>{popupItem.title}</h3>
            <p>{popupItem.content}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default RhineHR
