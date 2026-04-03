import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/careers.css'

const Careers = () => {
  const navigate = useNavigate()

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

  const valueProps = [
    {
      title: 'Accelerated Learning',
      description:
        'Take ownership early, work on live advisory mandates, and sharpen your thinking with direct senior mentorship.'
    },
    {
      title: 'Merit-Driven Growth',
      description:
        'We value outcomes and initiative. High performance is recognized with meaningful responsibility and progression.'
    },
    {
      title: 'Inclusive Team Culture',
      description:
        'Diverse perspectives, respectful collaboration, and a transparent environment where everyone can contribute.'
    },
    {
      title: 'Client-Facing Impact',
      description:
        'Your work translates into measurable results for founders, investors, and enterprise leadership teams.'
    }
  ]

  const hiringSteps = [
    { step: '01', title: 'Application Review', detail: 'We evaluate fit across domain skills, communication, and growth potential.' },
    { step: '02', title: 'Role Discussion', detail: 'A focused conversation on your background, goals, and role expectations.' },
    { step: '03', title: 'Case / Skill Round', detail: 'Practical assessment to understand problem-solving depth and execution quality.' },
    { step: '04', title: 'Final Interaction', detail: 'Leadership discussion followed by a clear offer and onboarding plan.' }
  ]

  const handleSubmitResume = (e) => {
    e.preventDefault()
    navigate('/contact')
  }


  return (
    <div className="careers">
      <section className="careers-hero">
        <div className="container">
          <div className="careers-hero-grid">
            <div className="careers-hero-copy">
              <p className="careers-eyebrow">Careers at Rhine Advisory</p>
              <h1>Build a high-impact career with a team that values excellence.</h1>
              <p className="hero-intro">
                Join a modern advisory platform where performance, ownership, and continuous learning drive both client success and professional growth.
              </p>
              <div className="careers-hero-actions">
                <a href="#open-roles" className="btn btn-primary">View Open Roles</a>
                <Link to="/contact" className="btn btn-secondary">Submit Resume</Link>
              </div>
            </div>
            <div className="careers-hero-panel">
              <h3>Why professionals choose us</h3>
              <ul>
                <li>Cross-functional exposure across advisory, analytics, and strategy</li>
                <li>Direct collaboration with leadership and client decision-makers</li>
                <li>Structured feedback culture with real growth pathways</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="careers-value-section section">
        <div className="container">
          <div className="careers-section-head">
            <h2 className="section-title left">Career Value Proposition</h2>
            <p>
              Designed for ambitious professionals who want to do meaningful work, learn fast, and create measurable business outcomes.
            </p>
          </div>
          <div className="careers-value-grid">
            {valueProps.map(item => (
              <article key={item.title} className="careers-value-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="careers-process section">
        <div className="container">
          <h2 className="section-title">Hiring Journey</h2>
          <div className="careers-process-grid">
            {hiringSteps.map(item => (
              <article key={item.step} className="careers-process-card">
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="careers-ready-section">
        <div className="container">
          <h2>Ready to Build With Us?</h2>
          <p>
            If you are passionate about quality execution and long-term growth, we would love to hear from you. Explore current openings or write to us at{' '}
            <a href="mailto:contact@rhineadvisory.com">contact@rhineadvisory.com</a>
          </p>
        </div>
      </section>

      <section id="open-roles" className="job-openings section">
        <div className="container">
          <h2 className="section-title">Current Openings</h2>
          <div className="jobs-table-wrap" role="region" aria-label="Current openings table" tabIndex={0}>
            <table className="jobs-table">
              <thead>
                <tr>
                  <th scope="col">Role</th>
                  <th scope="col">Type</th>
                  <th scope="col">Qualification</th>
                  <th scope="col">Experience</th>
                  <th scope="col">Compensation</th>
                  <th scope="col">Eligibility</th>
                  <th scope="col">Role Scope</th>
                  <th scope="col">Apply</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job, idx) => (
                  <tr key={`${job.jobTitle}-${idx}`}>
                    <td>{job.jobTitle}</td>
                    <td>
                      <span className="job-duration-pill">{job.duration}</span>
                    </td>
                    <td>{job.qualification}</td>
                    <td>{job.experience}</td>
                    <td>{job.ctc}</td>
                    <td>{job.eligibility}</td>
                    <td>{job.jobDescription}</td>
                    <td>
                      <Link to="/contact" className="job-apply-link">Apply</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Do not see your perfect role yet?</h2>
            <p>We are always open to exceptional talent. Share your profile, domain strengths, and preferred role with our team.</p>
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
