import './FeaturesBanner.css'
import { useScrollAnimations } from '../../Hooks/useScrollAnimations'


function FeaturesBanner() {
    useScrollAnimations()
  return (
    <div className='features-banner'>
        <div className='features-banner-container'>
            <div className='features-banner-item animate-on-scroll' data-direction="right" data-delay="0.0">
                <div className='features-banner-icon'>
                    <i className="fa-regular fa-star fa-5x" style={{color: "var(--primary-yellow)"}}></i>
                </div>
                <h3>On The Rise</h3>
                <div className='features-banner-line'></div>
                <p className='bold-text'>One of best performing games on every casino it launched</p>
            </div>
            <div className='features-banner-item animate-on-scroll' data-direction="right" data-delay="0.2">
                <div className='features-banner-icon'>
                    <i className="fa-solid fa-code fa-5x" style={{color: "var(--primary-yellow)"}}></i>
                </div>
                <h3>Light</h3>
                <div className='features-banner-line'></div>
                <p>Build to work with budget devices in low bandwidth environment</p>
            </div>
            <div className='features-banner-item animate-on-scroll' data-direction="right" data-delay="0.4">
                <div className='features-banner-icon'>
                    <i className="fa-solid fa-laptop fa-5x" style={{color: "var(--primary-yellow)"}}></i>
                </div>
                <h3>Adaptive</h3>
                <div className='features-banner-line'></div>
                <p>All of our games provide superb experience on all devices</p>
            </div>
        </div>
    </div>
  )
}

export default FeaturesBanner