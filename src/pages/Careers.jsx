import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/careers.css'

const Careers = () => {
  const navigate = useNavigate()
  const [bannerStates, setBannerStates] = useState({
    learning: 0,
    equal: 1,
    fun: 2,
    hybrid: 3,
    impact: 4
  })

  const jobs = [
    {
      jobTitle: 'Manager – Investment Research',
      duration: 'Full-time',
      qualification: 'MBA/PGDM in Finance or Analytics',
      ctc: 'Competitive, based on experience',
      eligibility:
        'Skilled in LBO and DCF modeling, with strong cash flow and valuation knowledge, advanced Excel and financial modeling proficiency, and excellent analytical and communication skills.',
      experience: '4-7 years of relevant experience',
      jobDescription:
        'The role involves valuations, M&A, and investment due diligence, building advanced financial models (LBO, DCF), conducting forecasting and scenario and risk analysis, preparing CIMs, pitch decks, and strategic materials, and leading teams through cross-functional collaboration to deliver high-quality outcomes.'
    },
    {
      jobTitle: 'Project Leader – Marketing & Business Development',
      duration: 'Full-time',
      qualification: 'MBA',
      ctc: 'Competitive, with performance incentives',
      eligibility:
        'Skilled in SEO/SEM, Performance marketing, Sales alignment, and Digital Campaign Management.',
      experience: '5+ years in B2B Marketing',
      jobDescription:
        'The role involves drive digital campaigns, SEO/SEM, and lead content strategy while also conduct market and competitor analysis and also track metrics and optimize for ROI. B2B marketing with global (USA, UK, Europe) BD exposure. Open to international travel when required.'
    },
    {
      jobTitle: 'Summer Interns',
      duration: '2 Months',
      qualification: 'MBA Batch 2026',
      ctc: 'Unpaid (with PPO consideration)',
      eligibility: 'MBA in Marketing, Finance, and Operations',
      experience: '0',
      jobDescription:
        'The program is fully remote (work-from-home) and lasts for two months. It is open to MBA students from all specializations, with exceptional performers being considered for Pre-Placement Offers (PPOs).'
    },
    {
      jobTitle: 'Summer Interns',
      duration: '2 Months',
      qualification: 'MBA Batch 2026',
      ctc: 'Stipend based on college ranking',
      eligibility: 'MBA in Marketing, Finance, and Operations',
      experience: '0',
      jobDescription:
        'The program requires a full-time, on-site presence at our Noida, NCR office. Stipends are determined by the ranking of the candidate.'
    }
  ]

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

  const handleSubmitResume = (e) => {
    e.preventDefault()
    navigate('/')
    setTimeout(() => {
      const el = document.getElementById('contact-section')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
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
          <div className="jobs-table-wrapper" role="region" aria-label="Current openings table">
            <table className="jobs-table">
              <thead>
                <tr>
                  <th scope="col">Job Title</th>
                  <th scope="col">Duration</th>
                  <th scope="col">Qualification</th>
                  <th scope="col">Eligibility</th>
                  <th scope="col">Experience</th>
                  <th scope="col">Job Description</th>
                  <th scope="col">CTC</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job, idx) => (
                  <tr key={`${job.jobTitle}-${idx}`}>
                    <td data-label="Job Title">{job.jobTitle}</td>
                    <td data-label="Duration">{job.duration}</td>
                    <td data-label="Qualification">{job.qualification}</td>
                    <td data-label="Eligibility">{job.eligibility}</td>
                    <td data-label="Experience">{job.experience}</td>
                    <td data-label="Job Description">{job.jobDescription}</td>
                    <td data-label="CTC">{job.ctc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Don't See Your Perfect Role?</h2>
            <p>We're always looking for talented individuals. Send us your resume and tell us how you can contribute to our team.</p>
            <Link to="/" className="cta-button" onClick={handleSubmitResume}>
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
