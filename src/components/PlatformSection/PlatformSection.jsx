import FeaturesHeader from "../FeaturesSection/FeaturesHeader/FeaturesHeader"
import "./PlatformSection.css"

function PlatformSection({ platformItems }) {
  return (
    <div className="platform-section">
      {platformItems.map((section, sectionIndex) => (
        <div className="platform-container" key={sectionIndex}>
            <div className="platform-header">
                <FeaturesHeader featuresText={section.featuresText} />
            </div>
            <p className="platform-desc">{section.description}</p>
            <div className="platform-grid">
            {section.platformGrid.map((item, index) => (
                <div className="platform-grid-item" key={index}>
                    <img src={item.image} alt='' />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
            </div>
        </div>
      ))}
    </div>
  )
}

export default PlatformSection
