import './SolutionsAPI.css'
import FeaturesHeader from '../FeaturesSection/FeaturesHeader/FeaturesHeader'

function SolutionsAPI() {
  return (
    <div className='solutions-api-section'>
        <div>
            <FeaturesHeader featuresText={[{title: "How the Integration Process Works", description: ""}]}/>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        <h3>Initial Requirements Assessment</h3>
                        <p>Define your platform’s specific needs for a tailored approach.</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        <h3>API Deployment</h3>
                        <p>The live casino API is integrated into your system by your team or our experts.</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        <h3>Testing & Optimization</h3>
                        <p>Rigorous testing ensures the functionality and performance of all games.</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        <h3>Launch & Support</h3>
                        <p>Your platform goes live, supported by ongoing assistance to ensure smooth operations.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='api-scale'>
            <FeaturesHeader featuresText={[{title: "Customisation and Scalability Features", description: ""}]}/>
            <div className='api-scale-container'>
                <div className='api-scale-item'>
                    <img src="/admin-100.png" alt="" />
                    <h3>Branded tables</h3>
                    <p>Customise every aspect, from table layouts to dealer uniforms, for brand consistency.</p>
                </div>

                <div className='api-scale-item'>
                    <img src="/browser-customization-100.png" alt="" />
                    <h3>Tailored Designs</h3>
                    <p>We allow operators to design their offerings, ensuring an experience that resonates with their audience.</p>
                </div>
                
                <div className='api-scale-item'>
                    <img src="/globe-100.png" alt="" />
                    <h3>Global adaptation</h3>
                    <p>Multilingual support and currency options for different regions.</p>
                </div>
                
                <div className='api-scale-item'>
                    <img src="/scalable-100.png" alt="" />
                    <h3>Scalable options</h3>
                    <p>Easily add new games or features as your platform grows.</p>
                </div>
            </div>
        </div>

        <div className='api-custom'>
            <FeaturesHeader featuresText={[{title: "Challenges in Live Casino API Integration", description: ""}]}/>
            <div className='api-custom-container'>
                <div  className='api-custom-item'>
                    <h3>Compatibility issues</h3>
                    <div className='api-custom-line'></div>
                    <p>Legacy systems may not support the latest APIs.</p>
                </div>
                
                <div  className='api-custom-item'>
                    <p>Transitioning to new systems can temporarily disrupt operations.</p>
                    <div className='api-custom-line'></div>
                    <h3>Integration downtime</h3>
                </div>

                <div  className='api-custom-item'>
                    <h3>Data security concerns</h3>
                    <div className='api-custom-line'></div>
                    <p>Protecting sensitive player information is a top priority.</p>
                </div>

                <div  className='api-custom-item'>
                    <p>Poorly optimised APIs can result in lag or gameplay interruptions.</p>
                    <div className='api-custom-line'></div>
                    <h3>Player experience gaps</h3>                
                </div>
            </div>
        </div>

        <div className='api-solve'>
            <FeaturesHeader featuresText={[{title: "How We Solve These Challenges", description: ""}]}/>
            <div className='api-solve-container'>
                <div className='api-solve-item'>
                    <h1>1</h1>
                    <h3>Thorough compatibility checks</h3>
                    <p>We ensure that the API works seamlessly with your existing systems.</p>
                </div>

                <div className='api-solve-item'>
                    <h1>2</h1>
                    <h3>Quick deployment</h3>
                    <p>Our team reduces downtime by streamlining the integration process.</p>
                </div>

                <div className='api-solve-item'>
                    <h1>3</h1>
                    <h3>High-level security</h3>
                    <p>Advanced encryption, fraud detection, and compliance with international regulations safeguard player data.</p>
                </div>

                <div className='api-solve-item'>
                    <h1>4</h1>
                    <h3>Optimised performance</h3>
                    <p>APIs are tested rigorously to deliver smooth, uninterrupted gameplay, ensuring players remain engaged.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SolutionsAPI