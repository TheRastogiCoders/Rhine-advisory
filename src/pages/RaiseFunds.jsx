import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/raise-funds.css'

const RaiseFunds = () => {
  return (
    <div className="raise-funds">
      <section className="hero">
        <div className="container">
          <h1>Raise Capital with Confidence</h1>
          <p>Strategic funding solutions to fuel your business growth and expansion</p>
          <div className="hero-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=1200&h=500&fit=crop&q=80" 
              alt="Capital raising and investment growth" 
              className="hero-image"
            />
          </div>
        </div>
      </section>

      <section className="funding-options">
        <div className="container">
          <h2>Our Fundraising Services</h2>
          
          <div className="funding-cards">
            <div className="funding-card">
              <div className="funding-card-image">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop&q=80" 
                  alt="Equity financing" 
                  className="card-img"
                />
              </div>
              <h3>Equity Financing</h3>
              <p>Secure growth capital while maintaining strategic control of your business.</p>
              <ul>
                <li>Venture Capital</li>
                <li>Private Equity</li>
                <li>Angel Investment</li>
                <li>Growth Equity</li>
              </ul>
            </div>

            <div className="funding-card">
              <div className="funding-card-image">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop&q=80" 
                  alt="Debt financing" 
                  className="card-img"
                />
              </div>
              <h3>Debt Financing</h3>
              <p>Access capital while retaining full ownership of your business.</p>
              <ul>
                <li>Term Loans</li>
                <li>Asset-Based Lending</li>
                <li>Mezzanine Financing</li>
                <li>Convertible Notes</li>
              </ul>
            </div>

            <div className="funding-card">
              <div className="funding-card-image">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b41319e35b32?w=600&h=300&fit=crop&q=80" 
                  alt="Alternative financing" 
                  className="card-img"
                />
              </div>
              <h3>Alternative Financing</h3>
              <p>Innovative funding solutions for unique business needs.</p>
              <ul>
                <li>Revenue-Based Financing</li>
                <li>Royalty Financing</li>
                <li>Factoring</li>
                <li>Equipment Financing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}

export default RaiseFunds
