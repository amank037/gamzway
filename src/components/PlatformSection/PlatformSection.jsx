import FeaturesHeader from "../FeaturesSection/FeaturesHeader/FeaturesHeader"
import "./PlatformSection.css"
import { useEffect, useRef } from 'react'

function PlatformSection({ platformItems }) {
  const gridRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.2 }
    )

    const gridItems = gridRef.current?.querySelectorAll('.platform-grid-item')
    gridItems?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="platform-section">
      <div className="platform-background"></div>
      {platformItems.map((section, sectionIndex) => (
        <div className="platform-container" key={sectionIndex}>
          <div className="platform-header">
            <FeaturesHeader featuresText={section.featuresText} />
          </div>
          <p className="platform-desc">{section.description}</p>
          <div className="platform-grid" ref={gridRef}>
            {section.platformGrid.map((item, index) => (
              <div className="platform-grid-item" key={index}>
                <div className="platform-item-content">
                  <div className="image-container">
                    <img src={item.image} alt={item.title} />
                    <div className="image-glow"></div>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="grid-item-border"></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default PlatformSection
