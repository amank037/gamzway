import './FeaturesGridV8.css'
import FeaturesHeader from "../FeaturesSection/FeaturesHeader/FeaturesHeader"

function FeaturesGridV8({ featuresGrid, featuresTitle }) {
  return (
    <div className='features-gridv8-section'>
        <FeaturesHeader featuresText={featuresTitle} />
        <div className='features-gridv8'>
        {featuresGrid.map((item, index) => (
          <div className='animate-on-scroll' data-direction="left" key={index}>
              <div className='features-gridv8-item' key={index}>
                      <img src={item.image} alt="" />
                      <h3>{item.title}</h3>
              </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default FeaturesGridV8