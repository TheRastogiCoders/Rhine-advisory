import React from 'react'
import '../styles/who-we-serve.css'

const WhoWeServe = () => {
  return (
    <div className="who-we-serve">
      <section className="hero">
        <div className="container">
          <h1>Who We Serve</h1>
          <p>Dedicated to empowering businesses and investors with strategic financial solutions</p>
       
        </div>
      </section>

      <section className="client-categories">
        <div className="container">
          <div className="client-category">
            <div className="category-image">
              <img 
                src="/iStock-2152298806.jpg" 
                alt="Corporate business" 
                className="category-img"
              />
            </div>
            <h2>Corporates</h2>
            <p>Strategic advisory for businesses looking to grow, restructure, or navigate complex financial landscapes.</p>
            <ul>
              <li>Mergers & Acquisitions</li>
              <li>Divestitures & Carve-outs</li>
              <li>Strategic Partnerships</li>
              <li>Capital Raising</li>
            </ul>
          </div>

          <div className="client-category">
            <div className="category-image">
              <img 
                src="/iStock-2190159060.jpg" 
                alt="Private equity and investment" 
                className="category-img"
              />
            </div>
            <h2>Private Equity & Investors</h2>
            <p>Comprehensive support for investment firms and individual investors.</p>
            <ul>
              <li>Deal Sourcing & Evaluation</li>
              <li>Due Diligence</li>
              <li>Portfolio Company Support</li>
              <li>Exit Strategy Planning</li>
            </ul>
          </div>

          <div className="client-category">
            <div className="category-image">
              <img 
                src="/iStock-1188211595.jpg" 
                alt="Entrepreneurs and startups" 
                className="category-img"
              />
            </div>
            <h2>Founders & Startups</h2>
            <p>Guidance for emerging businesses at every stage of growth.</p>
            <ul>
              <li>Seed & Early-stage Funding</li>
              <li>Growth Capital</li>
              <li>Strategic Planning</li>
              <li>Investor Readiness</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhoWeServe
