import './SolutionsSection.css'
import FeaturesHeader from '../../components/FeaturesSection/FeaturesHeader/FeaturesHeader'

function SolutionsSection({solutionsTitle, solutionsItems}) {
  return (
        <div className='solutions-section-container'>
            {solutionsItems.map((item, index) => (
                <div className='solutions-section' key={index}>
                    <div className='solutions-top'>
                        <FeaturesHeader featuresText={solutionsTitle} />
                    </div>
                    <div className='solutions-bottom'>
                        <div className='solutions-about-card' style={{backgroundImage: `url(${item.background})`}}>
                            <div className='solutions-about-card-img-section'>
                                <img src={item.image} alt="" className='solutions-about-card-logo'/>
                                <img src="https://spribe.co/pf.6ace4e8705f279ee.svg" alt="" className='solutions-about-card-fair'/>
                            </div>
                            <div className='solutions-about-card-info'>
                                <div className='solutions-about-card-info-item'>
                                    <p>Game Type</p>
                                    <h3>{item.gametype}</h3>
                                </div>
                                <div className='solutions-about-card-info-item'>
                                    <p>Return To Player (RTP)</p>
                                    <h3>{item.rtp}</h3>
                                </div>
                                <div className='solutions-about-card-info-item'>
                                    <p>Devices</p>
                                    <h3>{item.devices}</h3>
                                </div>
                            </div>
                        </div>

                        <div className='solutions-desc-container'>
                            <div className='solutions-desc'>
                                <div className='solutions-grid'>
                                    <div className='solutions-grid-item'>
                                        <div>
                                        <img src="/real-time.png" alt="" />
                                        <div className='solutions-banner-line'></div>
                                        </div>
                                        <p>Live Interaction</p>
                                    </div>
                                    <div className='solutions-grid-item'>
                                        <div>
                                        <img src="/bot.png" alt="" />
                                        <div className='solutions-banner-line'></div>
                                        </div>
                                        <p>Smart AI Bots</p>
                                    </div>
                                    <div className='solutions-grid-item'>
                                        <div>
                                        <img src="/chat.png" alt="" />
                                        <div className='solutions-banner-line'></div>
                                        </div>
                                        <p>In-Game Chats</p>
                                    </div>
                                    <div className='solutions-grid-item'>
                                        <div>
                                        <img src="/security.png" alt="" />
                                        <div className='solutions-banner-line'></div>
                                        </div>
                                        <p>Anti-Fraud Algorithms</p>
                                        </div>
                                    <div className='solutions-grid-item'>
                                        <div>
                                        <img src="/platform.png" alt="" />
                                        <div className='solutions-banner-line'></div>
                                        </div>
                                        <p>Cross-Platform Compatibility</p>
                                        </div>
                                    <div className='solutions-grid-item'>
                                        <div>
                                        <img src="/social-media.png" alt="" />
                                        <div className='solutions-banner-line'></div>
                                        </div>
                                        <p>Social-Media Integration</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className='solutions-p'>{item.description}</p>
                </div>
            ))}
        </div>
    )
}

export default SolutionsSection