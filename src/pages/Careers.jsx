import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/careers.css'

const Careers = () => {
  const [bannerStates, setBannerStates] = useState({
    learning: 0,
    equal: 1,
    fun: 2,
    hybrid: 3,
    impact: 4
  })

  const banners = [
    '/iStock-1444490817.jpg',
    '/iStock-2152298806.jpg',
    '/iStock-2190159060.jpg',
    '/iStock-1188211595.jpg',
    '/iStock-1395448518.jpg'
  ]

  const changeBanner = (section, direction) => {
    setBannerStates(prev => ({
      ...prev,
      [section]: (prev[section] + direction + banners.length) % banners.length
    }))
  }


  return (
    <div className="careers">
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="container">
          <h1>Join Our Team!</h1>
          <p className="hero-intro">
            At Rhine Advisory, we offer an exciting, dynamic environment where growth, learning, and fun are at the core of everything we do.
          </p>
          <p className="hero-subtitle">
            Here's what makes working with us special:
          </p>
        </div>
      </section>

      {/* Steep Learning Curve */}
      <section className="careers-feature-section">
        <div className="container">
          <div className="feature-content">
            <div className="feature-text">
              <h2>Steep Learning Curve</h2>
              <p>
                You'll be challenged from day one and will rapidly grow your skills. We believe in learning by doing, and you'll take on real responsibilities that push you forward.
              </p>
            </div>
            <div className="feature-banner">
              <div className="banner-carousel">
                <div className="banner-track" style={{ transform: `translateX(-${bannerStates.learning * 100}%)` }}>
                  {banners.map((banner, index) => (
                    <div key={index} className="banner-slide">
                      <img src={banner} alt={`Banner ${index + 1}`} />
                    </div>
                  ))}
                </div>
                <button className="banner-nav banner-prev" onClick={() => changeBanner('learning', -1)} aria-label="Previous banner">‹</button>
                <button className="banner-nav banner-next" onClick={() => changeBanner('learning', 1)} aria-label="Next banner">›</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equal Opportunity Employer */}
      <section className="careers-feature-section careers-feature-alt">
        <div className="container">
          <div className="feature-content">
            <div className="feature-banner">
              <div className="banner-carousel">
                <div className="banner-track" style={{ transform: `translateX(-${bannerStates.equal * 100}%)` }}>
                  {banners.map((banner, index) => (
                    <div key={index} className="banner-slide">
                      <img src={banner} alt={`Banner ${index + 1}`} />
                    </div>
                  ))}
                </div>
                <button className="banner-nav banner-prev" onClick={() => changeBanner('equal', -1)} aria-label="Previous banner">‹</button>
                <button className="banner-nav banner-next" onClick={() => changeBanner('equal', 1)} aria-label="Next banner">›</button>
              </div>
            </div>
            <div className="feature-text">
              <h2>Equal Opportunity Employer</h2>
              <p>
                We are proud to be an equal opportunity employer with a focus on diversity. Women are represented at all levels of the company, and everyone is given an equal chance to succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fun and Collaborative Culture */}
      <section className="careers-feature-section">
        <div className="container">
          <div className="feature-content">
            <div className="feature-text">
              <h2>Fun and Collaborative Culture</h2>
              <p>
                Work hard, party harder! We believe in balancing work with fun – from offsites to parties, we make sure there's always time for team bonding.
              </p>
            </div>
            <div className="feature-banner">
              <div className="banner-carousel">
                <div className="banner-track" style={{ transform: `translateX(-${bannerStates.fun * 100}%)` }}>
                  {banners.map((banner, index) => (
                    <div key={index} className="banner-slide">
                      <img src={banner} alt={`Banner ${index + 1}`} />
                    </div>
                  ))}
                </div>
                <button className="banner-nav banner-prev" onClick={() => changeBanner('fun', -1)} aria-label="Previous banner">‹</button>
                <button className="banner-nav banner-next" onClick={() => changeBanner('fun', 1)} aria-label="Next banner">›</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Your Way: Hybrid & Balanced */}
      <section className="careers-feature-section careers-feature-alt">
        <div className="container">
          <div className="feature-content">
            <div className="feature-banner">
              <div className="banner-carousel">
                <div className="banner-track" style={{ transform: `translateX(-${bannerStates.hybrid * 100}%)` }}>
                  {banners.map((banner, index) => (
                    <div key={index} className="banner-slide">
                      <img src={banner} alt={`Banner ${index + 1}`} />
                    </div>
                  ))}
                </div>
                <button className="banner-nav banner-prev" onClick={() => changeBanner('hybrid', -1)} aria-label="Previous banner">‹</button>
                <button className="banner-nav banner-next" onClick={() => changeBanner('hybrid', 1)} aria-label="Next banner">›</button>
              </div>
            </div>
            <div className="feature-text">
              <h2>Work Your Way: Hybrid & Balanced</h2>
              <p>
                At Rhine Advisory, we believe in flexibility and productivity going hand in hand. Our hybrid work culture empowers you to work from where you thrive while maintaining a healthy work-life balance. Great work happens when you're at your best!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact: Work Directly with Clients */}
      <section className="careers-feature-section">
        <div className="container">
          <div className="feature-content">
            <div className="feature-text">
              <h2>Impact: Work Directly with Clients</h2>
              <p>
                Your work directly impacts our clients. You'll have the chance to collaborate with them and see your ideas implemented in real-world projects.
              </p>
            </div>
            <div className="feature-banner">
              <div className="banner-carousel">
                <div className="banner-track" style={{ transform: `translateX(-${bannerStates.impact * 100}%)` }}>
                  {banners.map((banner, index) => (
                    <div key={index} className="banner-slide">
                      <img src={banner} alt={`Banner ${index + 1}`} />
                    </div>
                  ))}
                </div>
                <button className="banner-nav banner-prev" onClick={() => changeBanner('impact', -1)} aria-label="Previous banner">‹</button>
                <button className="banner-nav banner-next" onClick={() => changeBanner('impact', 1)} aria-label="Next banner">›</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Join Us */}
      <section className="careers-ready-section">
        <div className="container">
          <h2>Ready to Join Us?</h2>
          <p>
            If you're passionate about growth, equality, impact, and enjoying your work, we'd love to have you. Check out our open positions and apply today! Or write to us at{' '}
            <a href="mailto:contact@rhineadvisory.ae">contact@rhineadvisory.ae</a>
          </p>
        </div>
      </section>

      {/* Current Openings */}
      <section className="job-openings">
        <div className="container">
          <h2>Current Openings</h2>
          <div className="coming-soon-container">
            <div className="coming-soon-card">
              <div className="coming-soon-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
                </svg>
              </div>
              <h3>Coming Soon</h3>
              <p>We're currently preparing exciting new opportunities. Check back soon for our latest job openings!</p>
              <div className="coming-soon-badge">
                <span>Stay Tuned</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Don't See Your Perfect Role?</h2>
            <p>We're always looking for talented individuals. Send us your resume and tell us how you can contribute to our team.</p>
            <Link to="/contact" className="cta-button">
              <span>Submit Your Resume</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Careers
