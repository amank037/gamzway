import './LandingSection.css'
import { useScrollAnimations } from '../../Hooks/useScrollAnimations'

function LandingSection({ landingItems }) {
  useScrollAnimations()
  return (
    <div className='landing-section'>
        {/* <div className='overlay'></div> */}
        {landingItems.map((item, index) => (
            <div key={index} className='landing-text animate-on-scroll' data-direction="left" data-delay="0.5">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <p>{item.description2}</p>
                {/* <button className='landing-btn'><span>{item.button}</span></button> */}
            </div>
        ))}
    </div>
  )
}

export default LandingSection