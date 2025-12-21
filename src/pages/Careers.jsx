import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/careers.css'

const Careers = () => {
  const jobOpenings = [
    {
      id: 1,
      title: 'Investment Banking Associate',
      location: 'New York, NY',
      type: 'Full-time',
      department: 'Investment Banking'
    },
    {
      id: 2,
      title: 'Financial Analyst',
      location: 'Remote',
      type: 'Full-time',
      department: 'Research & Analysis'
    },
    {
      id: 3,
      title: 'Senior M&A Advisor',
      location: 'London, UK',
      type: 'Full-time',
      department: 'Mergers & Acquisitions'
    },
    {
      id: 4,
      title: 'Investment Intern',
      location: 'New York, NY',
      type: 'Internship',
      department: 'Investment Team'
    }
  ]

  return (
    <div className="careers">
      <section className="hero">
        <div className="container">
          <h1>Join Our Team</h1>
          <p>Build your career with Rhine Advisory - Where talent meets opportunity</p>
        </div>
      </section>

      <section className="why-join-us">
        <div className="container">
          <h2>Why Join Rhine Advisory?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">💼</div>
              <h3>Professional Growth</h3>
              <p>Continuous learning and development opportunities to advance your career.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🌍</div>
              <h3>Global Exposure</h3>
              <p>Work on international projects with a diverse team of experts.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚖️</div>
              <h3>Work-Life Balance</h3>
              <p>Flexible work arrangements to support your personal and professional life.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🚀</div>
              <h3>Impactful Work</h3>
              <p>Contribute to meaningful projects that shape the future of finance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="job-openings">
        <div className="container">
          <h2>Current Openings</h2>
          <div className="jobs-list">
            {jobOpenings.map(job => (
              <div key={job.id} className="job-card">
                <div className="job-info">
                  <h3>{job.title}</h3>
                  <div className="job-meta">
                    <span className="location">{job.location}</span>
                    <span className="type">{job.type}</span>
                    <span className="department">{job.department}</span>
                  </div>
                </div>
                <Link to={`/careers/apply/${job.id}`} className="btn btn-outline">Apply Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Don't See Your Perfect Role?</h2>
          <p>We're always looking for talented individuals. Send us your resume and tell us how you can contribute to our team.</p>
          <Link to="/contact" className="btn btn-primary">Submit Your Resume</Link>
        </div>
      </section>
    </div>
  )
}

export default Careers
