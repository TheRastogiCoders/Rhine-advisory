import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/team.css'

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null)

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

  const teamStats = [
    { label: 'Senior Advisors', value: '20+' },
    { label: 'Cross-Border Focus', value: 'EMEA + APAC' },
    { label: 'Live Deal Exposure', value: 'USD 100M+' }
  ]

  const selectedMemberParagraphs = useMemo(() => {
    if (!selectedMember?.roleOverview) return []
    return selectedMember.roleOverview
      .split('\n')
      .map((item) => item.trim())
      .filter(Boolean)
  }, [selectedMember])

  const getShortBio = (bio) => {
    const firstLine = bio.split('\n')[0]?.trim() || ''
    if (firstLine.length <= 135) return firstLine
    return `${firstLine.slice(0, 132).trim()}...`
  }

  useEffect(() => {
    if (!selectedMember) return undefined
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [selectedMember])

  return (
    <div className="team-page premium-team-page">
      <section className="team-hero premium-team-hero">
        <div className="premium-team-orb premium-team-orb--one" aria-hidden="true" />
        <div className="premium-team-orb premium-team-orb--two" aria-hidden="true" />
        <div className="container premium-team-hero-grid">
          <div className="premium-team-hero-content">
            <p className="premium-eyebrow">Leadership Team</p>
            <h1>Experienced advisors for high-stakes strategic decisions.</h1>
            <p>
              Rhine Advisory combines transaction, capital markets, and people strategy expertise through a
              senior-led team focused on disciplined execution, institutional governance, and measurable outcomes.
            </p>
            <div className="premium-team-pillars">
              <span>Independent Judgment</span>
              <span>Board-Ready Advisory</span>
              <span>Execution-Led Thinking</span>
            </div>
          </div>
          <div className="premium-team-stats">
            {teamStats.map((item) => (
              <article key={item.label} className="premium-team-stat-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="team-members-section">
        <div className="container">
          <div className="team-members-header">
            <h2>The Rhine Collective</h2>
            <p>Multidisciplinary experts united by a single vision: compounding excellence.</p>
          </div>
          <div className="team-members-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-member-card">
                <div className="team-member-content">
                  <div className="team-member-image-wrapper">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="team-member-image"
                      onError={(e) => {
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
                    <div className="team-member-bio">
                      <p>{getShortBio(member.roleOverview)}</p>
                      <button
                        type="button"
                        className="team-read-profile-btn"
                        onClick={() => setSelectedMember(member)}
                      >
                        View Bio
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section premium-info-band">
        <div className="container">
          <h2 className="section-title">Our Advisory Philosophy</h2>
          <div className="premium-info-grid">
            <article className="premium-info-card">
              <h3>Client-Aligned Thinking</h3>
              <p>We align recommendations with client context, governance priorities, and real execution constraints.</p>
            </article>
            <article className="premium-info-card">
              <h3>Independent Judgment</h3>
              <p>Our work is driven by analytical integrity and objectivity rather than product-led incentives.</p>
            </article>
            <article className="premium-info-card">
              <h3>Institutional Standards</h3>
              <p>Every engagement follows disciplined frameworks across research, valuation, and decision support.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section team-cta">
        <div className="container">
          <h2>Let’s Build Clarity Together</h2>
          <p>
            Reach out to our team for independent, senior-led guidance across transaction advisory, capital markets,
            and investment research.
          </p>
          <div className="team-cta-actions">
            <Link to="/contact" className="btn btn-primary">
              Get in touch
            </Link>
            <Link to="/services" className="btn btn-secondary">
              Explore services
            </Link>
          </div>
        </div>
      </section>

      {selectedMember && (
        <div className="team-profile-modal-overlay" onClick={() => setSelectedMember(null)}>
          <div
            className="team-profile-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedMember.name} profile`}
          >
            <button
              type="button"
              className="team-profile-modal-close"
              onClick={() => setSelectedMember(null)}
              aria-label="Close profile"
            >
              ×
            </button>
            <div className="team-profile-modal-header">
              <h3>{selectedMember.name}</h3>
              <p>{selectedMember.title}</p>
            </div>
            <div className="team-profile-modal-body">
              {selectedMemberParagraphs.map((paragraph, index) => (
                <p key={`${selectedMember.id}-${index}`}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Team

