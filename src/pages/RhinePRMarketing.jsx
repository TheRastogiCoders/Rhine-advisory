import React, { useState, useEffect } from 'react'
import '../styles/main.css'
import '../styles/pr-marketing.css'

const heroSections = [
  { id: 1, headline: "Don't let your great idea go unnoticed.", text: 'Smart marketing makes sure the right people see it, love it, and buy it.' },
  { id: 2, headline: 'Ever wondered why your business feels stuck?', text: "It's not your product. It's your MARKETING. Let Rhine unlock your next level." },
  { id: 3, headline: "Everyone's watching. But who's standing out?", text: "If your marketing feels like part of the crowd — it's time for a smarter strategy." },
  { id: 4, headline: 'Stop guessing. Start growing', text: 'Data, insight, and performance marketing built for measurable results.' },
  { id: 5, headline: "Marketing isn't an expense – it's a growth engine.", text: 'The right strategy turns visibility into value. Let Rhine power your rise!' },
]

const expertiseCards = [
  {
    id: 1,
    title: 'Public Relations & Media Outreach',
    summary: 'Positioning brands for influence and credibility through powerful storytelling and earned media.',
    readMore: 'We secure top-tier media coverage across regional and international outlets, build lasting journalist relationships, and craft narratives that strengthen your reputation. From press releases and media kits to crisis communications, we ensure your brand is heard.',
  },
  {
    id: 2,
    title: 'Digital & AI Marketing',
    summary: 'Enhancing online visibility using SEO, GEO (Generative Engine Optimisation), paid campaigns, and automation tools.',
    readMore: 'Our team combines search optimisation, AI-driven content strategies, and targeted paid campaigns to grow traffic and conversions. We use data and automation to scale results while keeping your brand message clear and consistent.',
  },
  {
    id: 3,
    title: 'Event Management',
    summary: 'Conceptualising and producing high-impact launches, conferences, exhibitions, and brand experiences.',
    readMore: 'From concept to execution, we deliver events that create lasting impressions. Whether it’s a product launch, industry conference, or brand experience, we handle logistics, creative direction, and stakeholder engagement so your event stands out.',
  },
  {
    id: 4,
    title: 'Creative Content & Copywriting',
    summary: 'Crafting multilingual content that connects and converts — in English, Arabic, Russian, and French.',
    readMore: 'We produce copy and content that resonates across languages and channels. From website copy and thought leadership to social content and campaigns, our writers blend creativity with strategy to drive engagement and conversion.',
  },
  {
    id: 5,
    title: 'Hospitality & Lifestyle Marketing',
    summary: 'Tailored marketing and PR strategies for hotels, restaurants, and lifestyle brands across the region.',
    readMore: 'We help hospitality and lifestyle brands build visibility and loyalty in a competitive market. Our campaigns combine PR, digital, and experiential marketing to attract guests and diners and strengthen brand perception.',
  },
]

const whyChooseRhine = [
  'Proven track record with 200+ regional and international clients.',
  'Over 6,000+ media placements across print, online, and broadcast platforms.',
  'AI-powered marketing delivering up to 150% traffic growth YoY.',
  'Recognised for excellence by top publications and global partners.',
]

const RhinePRMarketing = () => {
  const [heroIndex, setHeroIndex] = useState(0)
  const [readMoreModalCard, setReadMoreModalCard] = useState(null)

  useEffect(() => {
    const t = setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroSections.length)
    }, 5000)
    return () => clearInterval(t)
  }, [])

  const goPrev = () => setHeroIndex((i) => (i - 1 + heroSections.length) % heroSections.length)
  const goNext = () => setHeroIndex((i) => (i + 1) % heroSections.length)

  return (
    <div className="pr-marketing-page">
      <section className="page-header">
        <div className="container">
          <h1>Rhine PR & Marketing</h1>
          <p className="header-subtitle">Smart marketing that gets you seen</p>
        </div>
      </section>

      {/* ================= HERO CAROUSEL (horizontal, one visible) ================= */}
      <section className="pr-marketing-hero-carousel">
        <div className="hero-carousel-track" style={{ transform: `translateX(-${heroIndex * 100}%)` }}>
          {heroSections.map((hero, index) => (
            <div
              key={hero.id}
              className={`hero-carousel-slide ${index % 2 === 0 ? 'hero-slide-light' : 'hero-slide-dark'}`}
            >
              <div className="hero-inner">
                <h2 className="hero-headline">{hero.headline}</h2>
                <p className="hero-text">{hero.text}</p>
              </div>
            </div>
          ))}
        </div>
        <button type="button" className="hero-carousel-btn hero-carousel-prev" onClick={goPrev} aria-label="Previous">‹</button>
        <button type="button" className="hero-carousel-btn hero-carousel-next" onClick={goNext} aria-label="Next">›</button>
        <div className="hero-carousel-dots">
          {heroSections.map((hero, index) => (
            <button
              key={hero.id}
              type="button"
              className={`hero-dot ${index === heroIndex ? 'active' : ''}`}
              onClick={() => setHeroIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="pr-marketing-about section">
        <div className="container">
          <h2 className="section-title">PR & Digital Marketing Solutions in MENA & Asia</h2>
          <div className="pr-marketing-about-content">
            <p className="section-description">
              Rhine PR & Marketing is a full-service public relations, digital marketing, & AI powered communications agency helping brands grow across the Middle East, Africa & Asia region.
            </p>
            <p className="section-description">
              We combine strategic storytelling, data-driven marketing and artificial intelligence to elevate visibility, build reputation, and drive measurable growth.
            </p>
            <p className="section-description">
              Our team delivers tailored solutions that transform how audiences perceive and engage with your brand — online, in media and in the market.
            </p>
          </div>
        </div>
      </section>

      {/* ================= OUR EXPERTISE ================= */}
      <section className="pr-marketing-expertise section">
        <div className="container">
          <h2 className="section-title">Our Expertise</h2>
          <p className="pr-marketing-expertise-intro">
            We deliver integrated campaigns that blend creativity and technology to generate results.
          </p>
          <div className="pr-marketing-expertise-grid">
            {expertiseCards.map((card) => (
              <div key={card.id} className="pr-expertise-card">
                <h3 className="pr-expertise-card-title">{card.title}</h3>
                <p className="pr-expertise-card-summary">{card.summary}</p>
                <button
                  type="button"
                  className="pr-expertise-read-more"
                  onClick={() => setReadMoreModalCard(card)}
                >
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Read More popup ================= */}
      {readMoreModalCard && (
        <div className="pr-readmore-overlay" onClick={() => setReadMoreModalCard(null)}>
          <div className="pr-readmore-modal" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="pr-readmore-close" onClick={() => setReadMoreModalCard(null)} aria-label="Close">×</button>
            <h3 className="pr-readmore-title">{readMoreModalCard.title}</h3>
            <p className="pr-readmore-summary">{readMoreModalCard.summary}</p>
            <div className="pr-readmore-body">
              <p>{readMoreModalCard.readMore}</p>
            </div>
          </div>
        </div>
      )}

      {/* ================= WHY BRANDS CHOOSE RHINE ================= */}
      <section className="pr-marketing-why section">
        <div className="container">
          <h2 className="section-title">Why Brands Choose Rhine</h2>
          <ul className="pr-marketing-why-list">
            {whyChooseRhine.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default RhinePRMarketing
