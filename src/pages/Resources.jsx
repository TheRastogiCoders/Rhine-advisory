import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/resources.css'

const Resources = () => {
  return (
    <div className="resources">
      <section className="hero">
        <div className="container">
          <h1>Resources</h1>
          <p>Insights, research, and tools to help you make informed financial decisions</p>
          <div className="hero-image-wrapper">
            <img 
              src="/image.png" 
              alt="Research and data analysis" 
              className="hero-image"
            />
          </div>
        </div>
      </section>

      <section className="resource-categories">
        <div className="container">
          <div className="resource-category">
            <h2>Market Insights</h2>
            <div className="resource-grid">
              <div className="resource-card">
                <div className="resource-card-image">
                  <img 
                    src="/iStock-1395448518.jpg" 
                    alt="M&A Report" 
                    className="resource-img"
                  />
                </div>
                <h3>Quarterly M&A Report</h3>
                <p>Analysis of current market trends and transactions in the M&A landscape.</p>
                <a href="#" className="btn-link">Read Report →</a>
              </div>
              <div className="resource-card">
                <div className="resource-card-image">
                  <img 
                    src="/image.png" 
                    alt="Industry analysis" 
                    className="resource-img"
                  />
                </div>
                <h3>Industry Spotlights</h3>
                <p>In-depth analysis of specific industries and their investment potential.</p>
                <a href="#" className="btn-link">Explore Industries →</a>
              </div>
            </div>
          </div>

          <div className="resource-category">
            <h2>Guides & Tools</h2>
            <div className="resource-grid">
              <div className="resource-card">
                <div className="resource-card-image">
                  <img 
                    src="/iStock-1395448518.jpg" 
                    alt="Valuation calculator" 
                    className="resource-img"
                  />
                </div>
                <h3>Valuation Calculator</h3>
                <p>Estimate your business's worth with our interactive valuation tool.</p>
                <a href="#" className="btn-link">Calculate Now →</a>
              </div>
              <div className="resource-card">
                <div className="resource-card-image">
                  <img 
                    src="/iStock-2152298806.jpg" 
                    alt="Funding roadmap" 
                    className="resource-img"
                  />
                </div>
                <h3>Funding Roadmap</h3>
                <p>Step-by-step guide to securing the right funding for your business.</p>
                <a href="#" className="btn-link">Download Guide →</a>
              </div>
            </div>
          </div>

          <div className="resource-category">
            <h2>Webinars & Events</h2>
            <div className="resource-grid">
              <div className="resource-card">
                <div className="resource-card-image">
                  <img 
                    src="/iStock-1444490817.jpg" 
                    alt="Webinars" 
                    className="resource-img"
                  />
                </div>
                <h3>Upcoming Webinars</h3>
                <p>Join our experts for live discussions on market trends and strategies.</p>
                <a href="#" className="btn-link">View Schedule →</a>
              </div>
              <div className="resource-card">
                <div className="resource-card-image">
                  <img 
                    src="/iStock-2190159060.jpg" 
                    alt="Past events" 
                    className="resource-img"
                  />
                </div>
                <h3>Past Events</h3>
                <p>Access recordings and materials from our previous events.</p>
                <a href="#" className="btn-link">Watch Now →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter-cta">
        <div className="container">
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter for the latest insights and updates.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Resources
