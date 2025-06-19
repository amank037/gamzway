import './FeaturesGridV4.css'
import FeaturesHeader from "../FeaturesSection/FeaturesHeader/FeaturesHeader"
import { useScrollAnimations } from '../../Hooks/useScrollAnimations'

function FeaturesGridV4({ featuresGrid, featuresTitle }) {
  useScrollAnimations()
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