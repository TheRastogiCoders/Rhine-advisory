import React, { useEffect } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import '../styles/services.css'
import '../styles/service-detail.css'

const ServiceDetail = () => {
  const { state } = useLocation()
  const navigate = useNavigate()
  const service = state?.service
  const subServiceIndex = state?.subServiceIndex

  useEffect(() => {
    if (!service) {
      navigate('/', { replace: true })
    }
  }, [service, navigate])

  if (!service) {
    return null
  }

  const isValuationGrid = service.subServicesGrid && service.subsections?.length
  const showSubServicePage = isValuationGrid && subServiceIndex != null && service.subsections[subServiceIndex]
  const subService = showSubServicePage ? service.subsections[subServiceIndex] : null

  /* Sub-service full content page (next page when user clicks a grid item) */
  if (showSubServicePage && subService) {
    return (
      <div className="service-detail-page">
        <section className="service-detail-section">
          <div className="container">
            <button
              type="button"
              className="service-detail-back service-detail-back-btn"
              onClick={() => navigate('/service/view', { state: { service } })}
            >
              ← Back to {service.title}
            </button>

            <div className="service-detail-card service-detail-subservice-card">
              <p className="service-detail-parent-breadcrumb">{service.title}</p>
              <h1 className="service-detail-title">{subService.title}</h1>
              <div className="service-detail-full-content">
                {subService.description && (
                  <div className="service-detail-full-description-block">
                    {subService.description.split(/\n\n+/).map((para, idx) => (
                      <p key={idx} className="service-detail-full-description">{para}</p>
                    ))}
                  </div>
                )}
                {subService.items && subService.items.length > 0 && (
                  <div className="service-detail-full-items">
                    <h3 className="service-detail-full-items-title">What we offer</h3>
                    <ul className="service-detail-full-list">
                      {subService.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="service-detail-actions">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => navigate('/service/view', { state: { service } })}
              >
                ← Back to sub-services
              </button>
              <Link to="/#contact-section" className="btn btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="service-detail-page">
      <section className="service-detail-section">
        <div className="container">
          <Link to="/" className="service-detail-back" onClick={(e) => {
            e.preventDefault()
            navigate(-1)
          }}>
            ← Back
          </Link>

          <div className="service-detail-card">
            <h1 className="service-detail-title">{service.title}</h1>
            <p className="service-detail-summary">{service.summary}</p>
            <p className="service-detail-description">{service.description}</p>

            {isValuationGrid ? (
              <>
                <div className="service-detail-grid-wrapper">
                  <h2 className="service-detail-grid-heading">Our sub-services</h2>
                  <div className="service-detail-grid">
                    {service.subsections.map((sub, i) => (
                      <button
                        key={i}
                        type="button"
                        className="service-detail-grid-item"
                        onClick={() => navigate('/service/view', { state: { service, subServiceIndex: i } })}
                      >
                        {sub.title}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              service.subsections?.map((sub, i) => (
                <div key={i} className="service-detail-subsection">
                  <h2 className="service-detail-subsection-title">{sub.title}</h2>
                  {sub.description && (
                    <p className="service-detail-subsection-desc">{sub.description}</p>
                  )}
                  <ul className="service-detail-list">
                    {sub.items?.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                  {sub.note && (
                    <p className="service-detail-note">{sub.note}</p>
                  )}
                </div>
              ))
            )}
          </div>

          <div className="service-detail-actions">
            <Link to="/" className="btn btn-secondary">
              ← Back to Services
            </Link>
            <Link to="/#contact-section" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServiceDetail
