import './FeaturesGridV3.css'
import FeaturesHeader from "../FeaturesSection/FeaturesHeader/FeaturesHeader"
import { useScrollAnimations } from '../../Hooks/useScrollAnimations'

function FeaturesGridV3({ featuresGridV3, featuresTitleV3 }) {
  useScrollAnimations()
  return (
    <div className='features-gridv3-section'>
        <FeaturesHeader featuresText={featuresTitleV3} />
        <div className='features-gridv3'>
        {featuresGridV3.map((item, index) => (
              <div className='features-gridv3-item' key={index}>
                      <img src={item.image} alt="" />
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
              </div>
            ))}
        </div>
    </div>
  )
}

export default FeaturesGridV3