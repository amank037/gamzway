import './FeaturesGridV4.css'
import FeaturesHeader from "../FeaturesSection/FeaturesHeader/FeaturesHeader"

function FeaturesGridV4({ featuresGrid, featuresTitle }) {
  return (
    <div className='features-gridv4-section'>
        <FeaturesHeader featuresText={featuresTitle} />
        <div className='features-gridv4'>
        {featuresGrid.map((item, index) => (
            <div className='features-gridv4-item' key={index}>
                    <img src={item.image} alt="" />
                    <h3>{item.title}</h3>
            </div>
            ))}
        </div>
    </div>
  )
}

export default FeaturesGridV4