import './ChooseGrid.css'
import FeaturesHeader from '../../components/FeaturesSection/FeaturesHeader/FeaturesHeader'
import { useScrollAnimations } from '../../Hooks/useScrollAnimations'

const chooseTitle = [
    {
        title: "Top Reasons to Choose Gamzway"
    }
]

function ChooseGrid() {
    useScrollAnimations()
  return (
    <div className='choose-section'>
            <FeaturesHeader featuresText={chooseTitle}/>
            <div className='choosev2-container'>
                <div className='choosev2-grid'>

                    <div className='animate-on-scroll' data-direction="right" data-delay="0">
                        <div className='choose-card'>
                            <div className='card-icon'>
                                <i className="fas fa-gauge-high"></i>
                            </div>
                            <h3>Rapid Launch</h3>
                            <p>Accelerate your project timelines with our swift deployment solutions, ensuring your product hits the market faster without compromising quality.</p>
                        </div>
                    </div>

                    <div className='animate-on-scroll' data-direction="right" data-delay="0.1">
                        <div className='choose-card'>
                            <div className='card-icon'>
                                <i className="fas fa-microchip"></i>
                            </div>
                            <h3>Completely Manage Solutions</h3>
                            <p>Let us handle the complexities while you focus on growth. Our fully managed services cover everything from setup to maintenance. </p>
                        </div>
                    </div>

                    <div className='animate-on-scroll' data-direction="right" data-delay="0.2">
                        <div className='choose-card'>
                            <div className='card-icon'>
                                <i className="fa-solid fa-shield"></i>
                            </div>
                            <h3>End to End Security</h3>
                            <p> We prioritize user trust by integrating robust data protection protocols, fraud prevention mechanisms, and secure payment gateways in every poker game app we develop.</p>
    
                        </div>
                    </div>

                    <div className='animate-on-scroll' data-direction="left" data-delay="0">
                        <div className='choose-card'>
                            <div className='card-icon'>
                                <i className="fas fa-code"></i>
                            </div>
                            <h3>Cross Platform Compatibility</h3>
                            <p>Whether your users are on desktop, mobile, or web browsers, our poker games are optimized to run smoothly across all devices.</p>
                        </div>
                    </div>

                    <div className='animate-on-scroll' data-direction="left" data-delay="0.1">
                        <div className='choose-card'>
                            <div className='card-icon'>
                                <i className="fas fa-shopping-cart"></i>
                            </div>
                            <h3>Bug Free Product</h3>
                            <p> We utilize the latest tech stack including real-time gaming engines, high-level programming languages, and responsive UI/UX to create dynamic and scalable poker platforms.</p>
                        </div>
                    </div>

                    <div className='animate-on-scroll' data-direction="left" data-delay="0.2">
                        <div className='choose-card'>
                            <div className='card-icon'>
                                <i className="fas fa-headset"></i>
                            </div>
                            <h3>24x7 Support</h3>
                            <p>Looking to enter the market quickly? You can purchase a fully functional, customizable poker game app developed by experts at Gamzway.</p>
                        </div>
                    </div>

                </div>
            </div>
      </div>
  )
}

export default ChooseGrid