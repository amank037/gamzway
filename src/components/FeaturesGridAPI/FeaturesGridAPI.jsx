import './FeaturesGridAPI.css'
import FeaturesHeader from '../../components/FeaturesSection/FeaturesHeader/FeaturesHeader'

function FeaturesGridAPI({ features, featuresTitle }) {  
    if (!features || !features.sections) {
        return null;
    }

    return (
        <div className="featuresAPI-section">
        <div className="featuresAPI-container">
            <div className="featuresAPI-header">
            <FeaturesHeader featuresText={featuresTitle} />
            </div>
            
            <div className="featuresAPI-grid">
            {features.sections.map((section, index) => (
                <div key={index} className="feature-category">
                    <div className="feature-category-header">
                        <h3>{section.title}</h3>
                        <div className="category-line"></div>
                    </div>
                    <div className="feature-points">
                        {section.points.map((point, pointIndex) => (
                        <div key={pointIndex} className="feature-point">
                            <span className="point-bullet"></span>
                            <p>{point}</p>
                        </div>
                        ))}
                    </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    )
}

export default FeaturesGridAPI