import React from 'react'
import '../styles/team.css'

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Rishabh Jain',
      title: 'Founder & Chief Executive Officer',
      roleOverview: `Rishabh Jain leads Rhine Advisory’s strategic direction, client engagements, and organizational development, with overall accountability for aligning the firm’s people, leadership, governance, and operating frameworks with its transaction advisory and investment objectives. With regional responsibility across Europe, Africa, and the Middle East, he brings deep expertise in HR strategy, leadership development, people management, and HR M&A integration, advising organizations through complex growth, integration, and transformation scenarios.

Rishabh has strong hands-on experience in people advisory and workforce strategy, particularly in transaction-driven environments where organizational structure, leadership alignment, and cultural integration are critical to value creation. He provides executive leadership across HR M&A integration, workforce transformation, governance design, and people risk management, including oversight of employment law, regulatory compliance, and cross-border people considerations.

He is accountable for building scalable, future-ready organizational and operating infrastructure that supports disciplined execution, effective risk management, and consistent institutional standards across diverse markets. Rishabh works closely with boards, senior leadership teams, and portfolio management teams to advise on complex people and organizational matters, ensuring that growth initiatives, integrations, and capital events are underpinned by strong leadership, clear accountability, robust governance, and long-term sustainability.
`,
      image: '/Picture1.png'
    },
    {
      id: 2,
      name: 'Ayush Raj Kaushik',
      title: 'Board Advisor – M&A and SPAC',
      roleOverview: `Ayush Raj Kaushik serves as a Board Advisor for M&A and SPAC-related matters at Rhine Advisory, providing strategic guidance on complex transactions, capital structuring, and investment decisions. He brings experience across private equity, mergers and acquisitions, and capital-raising engagements, advising promoters, investors, and senior leadership teams across multiple sectors and geographies.

Ayush has advised on 20+ live mandates with cumulative deal exposure exceeding USD 100 million, spanning buy-side and sell-side M&A, growth capital raises, and SPAC-related transaction assessments. His advisory work focuses on helping boards and management teams evaluate transaction rationale, assess execution risks, and make informed go / no-go decisions.
`,
      image: '/Picture2.png'
    },
    {
      id: 3,
      name: 'Reha Nagpal',
      title: 'Head of Business Development',
      roleOverview: `Reha Nagpal leads Business Development at Rhine Advisory, where she is responsible for driving the firm’s growth strategy through client origination, relationship management, and market outreach across transaction advisory, investment research, and capital markets services. She works closely with senior leadership to identify strategic opportunities, support proposal development, and position Rhine Advisory’s capabilities with corporates, investors, founders, and institutional stakeholders. 

Reha plays a key role in managing client interactions across the engagement lifecycle, ensuring continuity between business development and delivery teams. With a strong focus on understanding client needs and market dynamics, she contributes to strengthening long-term client relationships, expanding the firm’s advisory footprint, and reinforcing Rhine Advisory’s brand presence across priority sectors and regions.`,
      image: '/Picture3.png'
    },
    {
      id: 4,
      name: 'Sameer Nayak',
      title: 'Finance Director & Research Analyst',
      roleOverview: `Sameer Nayak serves as Finance Director & Research Analyst at Rhine Advisory, where he leads investment research, financial analysis, and capital allocation support across capital-raising and strategic investment engagements. He plays a central role in shaping investment theses, evaluating opportunities, and supporting disciplined decision-making through rigorous market, sector, and financial analysis.
\nSameer brings strong expertise in company and sector research, supporting both strategic and financial investment decisions. He works closely with leadership and investment teams to assess opportunity fundamentals, benchmark performance, and evaluate risk-return profiles across potential investments. His research-driven approach ensures that recommendations are grounded in robust fundamentals, defensible assumptions, and market-aligned insights.
In addition to research, Sameer supports financial governance and decision support across client engagements, contributing to investment committee materials, research frameworks, and internal review processes. His ability to combine analytical rigor with clear communication enables senior stakeholders to evaluate opportunities objectively and make informed decisions across complex capital initiatives.
`,
      image: '/Picture4.png'
    },
    {
      id: 5,
      name: 'Sonali Singh',
      title: 'Investor Relations & Corporate Communications',
      roleOverview: `Sonali Singh leads Investor Relations and Corporate Communications at Rhine Advisory, with responsibility for shaping how transaction narratives, investment theses, and corporate messaging are communicated to investors and external stakeholders. She works closely with transaction, research, and leadership teams to translate complex financial analysis and deal structures into clear, consistent, and credible communications across the transaction lifecycle.

Sonali plays a key role in supporting capital markets-facing activities, including investor updates, transaction announcements, investment materials, and post-transaction communications. She ensures messaging is aligned with regulatory expectations, investor sensitivities, and governance standards, while maintaining consistency across presentations, disclosures, and stakeholder interactions. Her work helps manage market perception, reduce communication risk, and support disciplined engagement with investors during high-stakes transactions.
`,
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

