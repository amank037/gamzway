import './FeaturesGridV2.css'
import FeaturesHeader from "../FeaturesSection/FeaturesHeader/FeaturesHeader"

function FeaturesGridV2({ featuresGrid, featuresTitle }) {
  return (
    <div className='features-gridv2-section'>
        <FeaturesHeader featuresText={featuresTitle} />
        <div className='features-gridv2'>
        {featuresGrid.map((item, index) => (
            <div className='features-gridv2-item' key={index}>
                    <img src={item.image} alt="" />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
            </div>
            ))}
        </div>
    </div>
  )
}

export default FeaturesGridV2