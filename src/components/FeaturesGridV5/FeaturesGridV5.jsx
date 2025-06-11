import './FeaturesGridV5.css'
import FeaturesHeader from "../FeaturesSection/FeaturesHeader/FeaturesHeader"

function FeaturesGridV5({ featuresGrid, featuresTitle }) {
  return (
    <div className='features-gridv5-section'>
        <FeaturesHeader featuresText={featuresTitle} />
        <div className='features-gridv5'>
        {featuresGrid.map((item, index) => (
            <div className='features-gridv5-item' key={index}>
                    <img src={item.image} alt="" />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
            </div>
            ))}
        </div>
    </div>
  )
}

export default FeaturesGridV5