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
        </div>
      </section>

      <section className="funding-options">
        <div className="container">
          <h2>Our Fundraising Services</h2>
          
          <div className="funding-cards">
            <div className="funding-card">
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
