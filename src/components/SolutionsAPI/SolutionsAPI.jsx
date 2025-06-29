import './SolutionsAPI.css'
import { useState } from 'react'
import FeaturesHeader from '../FeaturesSection/FeaturesHeader/FeaturesHeader'
import { useScrollAnimations } from '../../Hooks/useScrollAnimations'

const challengeData = [
    {
        challenge: "Compatibility issues",
        solutionTitle: "Thorough compatibility checks",
        solution: `
            Our team conducts a comprehensive audit of your legacy systems to identify potential conflicts before integration begins. We use modular API adapters to bridge gaps between older systems and modern protocols, ensuring seamless communication. Additionally, we provide a sandbox environment for testing API behavior with your specific setup, minimizing surprises during deployment.
        `
    },
    {
        challenge: "Integration downtime",
        solutionTitle: "Quick deployment with zero-downtime strategies",
        solution: `
            We implement blue-green deployment techniques to switch traffic between old and new systems without interruption. Our automated rollback system detects integration anomalies within 30 seconds, reverting changes if needed. For critical systems, we offer phased rollouts that update components incrementally while maintaining full operational capacity.
        `
    },
    {
        challenge: "Data security concerns",
        solutionTitle: "Multi-layered security framework",
        solution: `
            All data transmissions use TLS 1.3 encryption with perfect forward secrecy. Our fraud detection system analyzes 120+ behavioral parameters in real-time, with machine learning models updated hourly. We maintain PCI DSS Level 1 certification and conduct quarterly penetration testing by independent security firms. Data residency options ensure compliance with regional regulations like GDPR and CCPA.
        `
    },
    {
        challenge: "Player experience gaps",
        solutionTitle: "Performance-optimized API architecture",
        solution: `
            Our edge computing network delivers API responses in under 50ms globally. Adaptive quality scaling automatically adjusts video bitrates and gameplay sync based on network conditions. We implement WebSocket connections for real-time updates, eliminating polling delays. Rigorous load testing simulates 10,000 concurrent users before certification, with automated failover to backup nodes during traffic spikes.
        `
    }
]



function SolutionsAPI() {
    const [activeTab, setActiveTab] = useState(0)
    useScrollAnimations()

  return (
    <div className='solutions-api-section'>

        <div className='api-benefit'>
            <FeaturesHeader featuresText={[{title: "Benefits of Seamless API Integration for Operators", description: "API integration is more than a technical upgrade; it’s a gateway to transforming your platform. Here’s why it’s invaluable:"}]}/>
            <div className='api-benefit-container animate-on-scroll' data-direction='left' >
                <div className='api-benefit-item'>
                    <div className='api-benefit-icon'>
                        <img src="/casino.png" alt="" />
                        <h3>Enhanced game offering</h3>
                    </div>
                    <p>Access a wide selection of live casino games like blackjack, roulette, and more via a single API.</p>
                </div>
                <div className='api-benefit-item'>
                    <div className='api-benefit-icon'>
                        <img src="/engagement.png" alt="" />
                        <h3>Improved engagement</h3>
                    </div>
                    <p>High-definition streaming and live dealer interaction keep players entertained, immersed and build a sense of community among players.</p>
                </div>
                <div className='api-benefit-item'>
                    <div className='api-benefit-icon'>
                        <img src="/branding.png" alt="" />
                        <h3>Custom branding</h3>
                    </div>
                    <p>Reinforce your platform’s identity by branding every detail, from table layouts to dealer uniforms, creating a cohesive user experience that reflects your brand.</p>
                </div>
                <div className='api-benefit-item'>
                    <div className='api-benefit-icon'>
                        <img src="/scalability.png" alt="" />
                        <h3>Scalable growth</h3>
                    </div>
                    <p>As your platform grows, add new games, betting options, or tables without disrupting operations. Gamzway’s flexible API ensures your infrastructure can evolve alongside your business.</p>
                </div>
                <div className='api-benefit-item'>
                    <div className='api-benefit-icon'>
                        <img src="/rocket.png" alt="" />
                        <h3>Quick deployment</h3>
                    </div>
                    <p>Avoid prolonged downtimes with an API that integrates quickly and easily, keeping your platform operational and your players satisfied.</p>
                </div>
            </div>
        </div>

        <div className='api-process'>
            <FeaturesHeader featuresText={[{title: "How the Integration Process Works", description: ""}]}/>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className='animate-on-scroll' data-direction="left" data-delay="">
                        <div className="timeline-content">
                            <h3>Initial Requirements Assessment</h3>
                            <p>Define your platform’s specific needs for a tailored approach.</p>
                        </div>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className='animate-on-scroll' data-direction="left" data-delay="">
                        <div className="timeline-content">
                            <h3>API Deployment</h3>
                            <p>The live casino API is integrated into your system by your team or our experts.</p>
                        </div>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className='animate-on-scroll' data-direction="left" data-delay="">
                        <div className="timeline-content">
                            <h3>Testing & Optimization</h3>
                            <p>Rigorous testing ensures the functionality and performance of all games.</p>
                        </div>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className='animate-on-scroll' data-direction="left" data-delay="">
                        <div className="timeline-content">
                            <h3>Launch & Support</h3>
                            <p>Your platform goes live, supported by ongoing assistance to ensure smooth operations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='api-scale'>
            <FeaturesHeader featuresText={[{title: "Customisation and Scalability Features", description: ""}]}/>
            <div className='api-scale-container'>
                <div className='animate-on-scroll' data-direction="left" data-delay="">
                    <div className='api-scale-item'>
                        <img src="/admin-100.png" alt="" />
                        <h3>Branded tables</h3>
                        <p>Customise every aspect, from table layouts to dealer uniforms, for brand consistency.</p>
                    </div>
                </div>

                <div className='animate-on-scroll' data-direction="left" data-delay="">
                    <div className='api-scale-item'>
                        <img src="/browser-customization-100.png" alt="" />
                        <h3>Tailored Designs</h3>
                        <p>We allow operators to design their offerings, ensuring an experience that resonates with their audience.</p>
                    </div>
                </div>
                
                <div className='animate-on-scroll' data-direction="left" data-delay="">
                    <div className='api-scale-item'>
                        <img src="/globe-100.png" alt="" />
                        <h3>Global adaptation</h3>
                        <p>Multilingual support and currency options for different regions.</p>
                    </div>
                </div>
                
                <div className='animate-on-scroll' data-direction="left" data-delay="">
                    <div className='api-scale-item'>
                        <img src="/scalable-100.png" alt="" />
                        <h3>Scalable options</h3>
                        <p>Easily add new games or features as your platform grows.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="challenges-solutions-container">
            <FeaturesHeader featuresText={[{title: "Common Issues Operators Face and how we solve them", description: "While live casino API integrations open doors to new opportunities, they can also present some challenges, but we have solutions for that at Gamzway!"}]}/>
            
            <div className="challenges-solutions">
                <div className="challenges-list animate-on-scroll" data-direction="left">
                {challengeData.map((item, index) => (
                    <div
                    key={index}
                    className={`challenge-item ${activeTab === index ? 'active' : ''}`}
                    onClick={() => setActiveTab(index)}
                    >
                    {item.challenge}
                    </div>
                ))}
                </div>

                <div className="solution-detail animate-on-scroll" data-direction="right">
                    <h3>{challengeData[activeTab].solutionTitle}</h3>
                    <div className="solution-content">
                        {challengeData[activeTab].solution}
                    </div>
                </div>
            </div>

            <p className="closing-note">
                By partnering with the right provider, you can mitigate risks and focus on growing your platform with confidence.
            </p>
        </div>

        <div className='api-support'>
            <FeaturesHeader featuresText={[{title: "Comprehensive Support and Assistance", description: ""}]}/>
            <div className='api-support-container'>
                <div className='api-support-text animate-on-scroll' data-direction='left'>
                    <div className='api-support-item'>
                        <div className='api-support-icon'>
                            <img src="/technical-support.png" alt="" />
                            <h3>Technical Support for Long-Term Success</h3>
                        </div>
                        <p>Integration is just the beginning. We offer 24/7 technical support to ensure your platform runs smoothly at all times. Whether you encounter bugs, require system updates, or need advice on optimising your offerings, our team is always ready to assist.</p>
                    </div>

                    <div className='api-support-item'>
                        <div className='api-support-icon'>
                            <img src="/user.png" alt="" />
                            <h3>Dedicated Account Management</h3>
                        </div>
                        <p>A dedicated account manager is assigned to every client, guiding you through every step of the process—from initial setup to post-launch support. This personalised service ensures your platform gets the attention it deserves.</p>
                    </div>
                </div>

                <div className='api-support-img animate-on-scroll' data-direction='right'>
                    <img src="/Dedicated Account Management.png" alt="" />
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default SolutionsAPI