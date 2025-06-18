import './FeaturesGridV5.css'
import FeaturesHeader from "../FeaturesSection/FeaturesHeader/FeaturesHeader"
import { useScrollAnimations } from '../../Hooks/useScrollAnimations'

function FeaturesGridV5({ featuresGrid, featuresTitle }) {
  useScrollAnimations()
  return (
    <div className='features-gridv5-section'>
        <FeaturesHeader featuresText={featuresTitle} />
        <div className='features-gridv5'>
        {featuresGrid.map((item, index) => (
            <div className='animate-on-scroll' data-direction="left" data-delay={index * 0.1}>
              <div className='features-gridv5-item' key={index}>
                      <img src={item.image} alt="" />
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
              </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default FeaturesGridV5