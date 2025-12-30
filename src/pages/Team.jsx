import React from 'react'
import '../styles/team.css'

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Rishabh Jain',
      title: 'Founder & Chief Executive Officer',
      roleOverview: `Rishabh Jain leads the overall strategic direction, client engagements, and organizational development at Rhine Advisory. As Founder & CEO, he is responsible for aligning the firm's leadership, governance, and operating frameworks with its transaction advisory and investment objectives across Europe, Africa, and the Middle East.\n\nHe brings deep expertise in HR strategy, leadership development, workforce transformation, and HR M&A integration, advising organizations through complex growth, restructuring, and cross-border integration scenarios. Rishabh has extensive experience in transaction-driven environments where organizational design, leadership alignment, and cultural integration are critical to value creation.\n\nRishabh works closely with boards, senior leadership teams, and portfolio management teams on matters including HR M&A integration, governance design, people risk management, employment law considerations, and regulatory compliance. He focuses on building scalable, future-ready organizational infrastructure that supports disciplined execution, effective risk management, and long-term sustainability.`,
      image: '/Picture1.png'
    },
    {
      id: 2,
      name: 'Ayush Raj Kaushik',
      title: 'Board Advisor – M&A and SPAC',
      roleOverview: `Ayush Raj Kaushik serves as Board Advisor for M&A and SPAC-related matters at Rhine Advisory, providing strategic guidance on complex transactions, capital structuring, and investment decision-making.\n\nHe has advised on more than 20 live mandates with cumulative deal exposure exceeding USD 100 million, covering buy-side and sell-side M&A, capital raises, and SPAC transaction assessments. His advisory focus includes evaluating transaction rationale, execution risk, valuation dynamics, and go/no-go decision frameworks.\n\nAyush works closely with boards, promoters, and senior management teams to ensure transactions are strategically sound, commercially viable, and aligned with long-term shareholder value creation.`,
      image: '/Picture2.png'
    },
    {
      id: 3,
      name: 'Reha Nagpal',
      title: 'Head of Business Development',
      roleOverview: `Reha Nagpal leads Business Development at Rhine Advisory, driving growth through client origination, relationship management, and strategic market outreach across transaction advisory and investment services.\n\nShe collaborates closely with senior leadership to identify new opportunities, support proposal development, and position the firm's capabilities with corporates, investors, founders, and institutional stakeholders. Reha plays a key role in managing client relationships and coordinating across internal teams to ensure consistent delivery.\n\nHer work contributes to expanding Rhine Advisory's advisory footprint, strengthening long-term client relationships, and reinforcing the firm's presence across priority sectors and regions.`,
      image: '/Picture3.png'
    },
    {
      id: 4,
      name: 'Sameer Nayak',
      title: 'Finance Director & Research Analyst',
      roleOverview: `Sameer Nayak serves as Finance Director & Research Analyst at Rhine Advisory, leading investment research, financial analysis, and capital allocation support across strategic advisory and capital-raising engagements.\n\nHe is responsible for developing investment theses, evaluating opportunities, and supporting data-driven decision-making through detailed company, sector, and market analysis. Sameer works closely with leadership and investment teams to assess fundamentals, benchmark performance, and evaluate risk-return profiles.\n\nIn addition to research, he supports financial governance, valuation modeling, and investment committee processes, ensuring recommendations are grounded in robust analysis and disciplined assumptions.`,
      image: '/Picture4.png'
    },
    {
      id: 5,
      name: 'Sonali Singh',
      title: 'Investor Relations & Corporate Communications',
      roleOverview: `Sonali Singh leads Investor Relations and Corporate Communications at Rhine Advisory, managing external communications and investor-facing messaging across transactions and advisory engagements.\n\nShe works closely with transaction, research, and leadership teams to translate complex financial analysis and deal structures into clear, consistent, and credible communications. Her responsibilities include investor updates, transaction materials, presentations, and post-transaction communications.\n\nSonali ensures messaging aligns with regulatory expectations, governance standards, and investor sensitivities, supporting transparent engagement and effective stakeholder communication.`,
      image: '/Picture5.png'
    }
  ]

  return (
    <div className="team-page">
      {/* Hero Section */}
      <section className="team-hero">
        <div className="container">
          <h1>Our Team</h1>
          <p>Meet the experienced professionals driving excellence at Rhine Advisory</p>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="team-members-section">
        <div className="container">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-member-card">
              <div className="team-member-content">
                <div className="team-member-image-wrapper">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="team-member-image"
                    onError={(e) => {
                      // Fallback placeholder if image doesn't exist
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="team-member-placeholder" style={{ display: 'none' }}>
                    <span>{member.name.charAt(0)}</span>
                  </div>
                </div>
                <div className="team-member-info">
                  <h2 className="team-member-name">{member.name}</h2>
                  <h3 className="team-member-title">{member.title}</h3>
                  <div className="team-member-divider"></div>
                  <h4 className="role-overview-title">Role Overview</h4>
                  <div className="team-member-bio">
                    {member.roleOverview.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Team

