import './PlatformSection.css'
import FeaturesHeader from '../FeaturesSection/FeaturesHeader/FeaturesHeader'
function PlatformSection() {
    return (
        <div className='platform-section'>
            <FeaturesHeader featuresText={[{title: "WE BUILD GAMES FOR ALL PLATFORMS", description: ""}]}/>
            <div className='platform-section-container'>
                <div className='platform-section-item animate-on-scroll' data-direction="left" data-delay="0.0">
                    <div className='platform-section-icon'>
                        <i className="fa-brands fa-html5 fa-8x" style={{color: "var(--primary-yellow)"}}></i>
                    </div>
                    <h3>Mobile Browser</h3>
                    <div className='platform-section-line'></div>
                    <p>Our games support all modern mobile browsers. </p>
                </div>
                <div className='platform-section-item animate-on-scroll' data-direction="left" data-delay="0.1">
                    <div className='platform-section-icon'>
                        <i className="fa-solid fa-mobile-screen-button fa-8x" style={{color: "var(--primary-yellow)"}}></i>
                    </div>
                    <h3>Native Mobile App</h3>
                    <div className='platform-section-line'></div>
                    <p>Build to work with budget devices in low bandwidth environment</p>
                </div>
                <div className='platform-section-item animate-on-scroll' data-direction="left" data-delay="0.2">
                    <div className='platform-section-icon'>
                        <i className="fa-solid fa-laptop fa-8x" style={{color: "var(--primary-yellow)"}}></i>
                    </div>
                    <h3>PC & Mac Browser</h3>
                    <div className='platform-section-line'></div>
                    <p>We build games for Windows and macOS browsers.</p>
                </div>
            </div>
        </div>
    )
}

export default PlatformSection
