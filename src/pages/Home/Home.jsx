import React, { useState } from 'react'
import './Home.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { motion } from "framer-motion"
import FeaturesHeader from '../../components/FeaturesSection/FeaturesHeader/FeaturesHeader'
import ProductGrid from '../../components/ProductGrid/ProductGrid'
import ContactBanner from '../../components/ContactBanner/ContactBanner'
import AboutGrid from '../../components/AboutGrid/AboutGrid'
import FeaturesGrid from '../../components/FeaturesSection/FeaturesGrid/FeaturesGrid'


const productfeaturesText = [
    {
        title: "Our Products: View Our Pre-Ready Games",
        description: "At Gamzway, we provide a large selection of market-tested, customisable, multiple devices optimised pre-built gaming items."
    }
]


const platformFeaturesText = [
    {
        title: "Our Gaming Platform",
        description: "Gamzway's products are built on our robust gaming platform, engineered for reliability, flexibility, and performance."
    }
]

const engagementModelsText = [
    {
        title: "Our Models: Engagement That Fits Your Business",
        description: "Gamzway offers flexible engagement models to suit both enterprises and startups."
    }
]

// const productGrid = [
//     { image: "https://www.mobzway.com/assets/images/game-icon/poker.webp" },
//     { image: "https://www.mobzway.com/assets/images/game-icon/rummy.webp" },
//     { image: "https://www.mobzway.com/assets/images/game-icon/ludo.webp" },
//     { image: "https://www.mobzway.com/assets/images/game-icon/teenpatti.webp" },
//     { image: "https://www.mobzway.com/assets/images/game-icon/callbreak.webp" },
//     { image: "https://www.mobzway.com/assets/images/game-icon/tambola.webp" },
//     { image: "https://www.mobzway.com/assets/images/game-icon/snake.webp" },
//     { image: "https://www.mobzway.com/assets/images/game-icon/livecasino.webp" },
//     { image: "https://www.mobzway.com/assets/images/game-icon/aviator.webp" },
//     { image: "https://www.mobzway.com/assets/images/game-icon/andar.webp" },
//     { image: "https://www.mobzway.com/assets/images/game-icon/blackjack.webp" },
//     { image: "https://www.mobzway.com/assets/images/game-icon/baccrat.webp" },
//     { image: "https://www.mobzway.com/assets/images/game-icon/tiger.webp" },
//     { image: "https://www.mobzway.com/assets/images/game-icon/roulete.webp" },
//     { image: "https://www.mobzway.com/assets/images/game-icon/slots.webp" },
//     { image: "https://www.mobzway.com/assets/images/game-icon/sicbo.webp" },
//     { image: "https://www.mobzway.com/assets/images/game-icon/keno.webp" },
//     { image: "https://www.mobzway.com/assets/images/game-icon/triple.webp" },
//     { image: "https://www.mobzway.com/assets/images/game-icon/ball.webp" },
//     { image: "https://www.mobzway.com/assets/images/game-icon/virtual.webp" }
// ]

const chooseTitle =[
    {
        title: "WHY SHOULD ONE CHOOSE US"
    }
]

const quoteItems =[
    {
        featuresText: [
          {
            title: "Interest in finding out how expensive starting your own game would be?"
          }
        ],
        description: "Under Your Needs, click the button below to ask for a customised, free quote.",
        href: "",
        hrefText: "Request Free Quote"
      }
]

const supportTitle = [
    {
        title: "Aid + Let's Discuss",
        description: "Still have doubts. Here to assist are our professionals."
    }
]

const travelItems =[
    {
        featuresText: [
          {
            title: "Start your journey.  Today."
          }
        ],
        description: "Starting a gaming company doesn't need complexity.  Gamzway's pre-ready games let you choose speed, quality, and a reliable partner with past performance. All set to view our games in action? Plan a live demo right now to learn how fast you can join the explosive online gaming scene.",
        href: "",
        hrefText: "Schedule a Demo"
    }
]

const Home = () => {

    const [name, setName] = useState('')
    const [contactType, setContactType] = useState('phone')
    const [contactValue, setContactValue] = useState('')

    const renderContactInput = () => {
        switch(contactType) {
        case 'phone':
        case 'whatsapp':
            return (
            <PhoneInput
                country={'in'}
                value={contactValue}
                onChange={phone => setContactValue(phone)}
                containerClass="phone-input-container"
                inputClass="contact-input"
            />
            )
        case 'email':
            return (
            <input
                type="email"
                placeholder="Your Email"
                value={contactValue}
                onChange={(e) => setContactValue(e.target.value)}
                className="contact-input"
            />
            )
        case 'telegram':
        case 'skype':
            return (
            <input
                type="text"
                placeholder={`Your ${contactType} ID`}
                value={contactValue}
                onChange={(e) => setContactValue(e.target.value)}
                className="contact-input"
            />
            )
        default:
            return null
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log({
        name,
        contactType,
        contactValue
        })
        setName('')
        setContactType('phone')
        setContactValue('')
    }

    const platformGrid = [
        {
          image:"/platform-100.png",
          title:"Cross-Platform",
          description:"Android, iOS, Web, Desktop compatibility"
        },
        {
          image:"/scalable-100.png",
          title:"Scalable Architecture",
          description:"Support thousands of concurrent players"
        },
        {
          image:"/browser-customization-100.png",
          title:"Customizable UI",
          description:"Customizable themes and interfaces for brand personalization"
        },
        {
          image:"/globe-100.png",
          title:"Global Ready",
          description:"Multi-language and multi-currency support"
        },
        {
          image:"/admin-100.png",
          title:"Admin Control",
          description:"Admin panel and analytics dashboard for complete business control"
        },
      ]
      

  return (
    <div className='home-div'>
        <div className='hero-div'>
            <div className='hero-nested-div'>

                <h1 className='hero-title'>WELCOME TO GAMZWAY</h1>
                <p className='hero-title-dec'>Welcome to Gamzway, where entertainment meets inventiveness.  Leading name in real-money and skill-based gaming solutions, we specialise in pre-ready games to enable you to get off right away.  Whether your company is established operator, gaming startup, or entrepreneurial, our plug-and-play gaming solutions guarantee a quick, effective, scalable launch. 
                    <br/><br/>Driven by a strong backend and easy interface, our games are meant to provide great performance, flawless gameplay, and rich user experiences.</p>

                {/* <div className='hero-btns'>
                    <a className='hero-btn-red' href="">Buy</a>
                    <a className='' href="">Try demos</a>
                </div> */}

                <div className="carousel-form">
                    <p className="form-heading"> All set to open your gaming portal?  Complete the form here and contact our knowledgeable team right now.</p>
                    <form className="form-container" onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <input 
                        type="text" 
                        placeholder="Your Name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="name-input"
                        required
                        />
                    </div>
                    <div className="contact-group">
                        <select 
                        className="contact-type"
                        value={contactType}
                        onChange={(e) => {
                            setContactType(e.target.value)
                            setContactValue('')
                        }}
                        >
                        <option value="phone">Phone</option>
                        <option value="whatsapp">WhatsApp</option>
                        <option value="email">Email</option>
                        <option value="telegram">Telegram</option>
                        <option value="skype">Skype</option>
                        </select>
                        {renderContactInput()}
                    </div>
                    <button type="submit" className="consultation-btn">Free Consultation</button>
                    </form>
                </div>

                {/* <div className='hero-video-div'>
                    <video autoPlay muted loop>
                        <source src="https://enterra-poker.com/wp-content/themes/enterra-poker-2024/video/Enterra_Poker_website_Desktop_Horizont_EN_1140x640_2.mp4" type="video/mp4"/>
                    </video>
                </div> */}  
            </div>
        </div>

        <div className='products-div'>
            <div className='products-title-div'>
                <FeaturesHeader featuresText={productfeaturesText} titleStyle={{color:'#000'}}/>
            </div>
            <ProductGrid/>
            <p className='productgridDesc'>Every product is created with industry-compliant elements including live chat, multilingual help, anti-fraud systems, and safe payment gates.</p>
        </div>

        <div className='platform-feature-section'>
                <FeaturesHeader featuresText={platformFeaturesText}/>
                <div className='platform-features'>
                    <div className='platform-feature-grid'>
                    {platformGrid.map((item, index) => (
                        <motion.div 
                        key={index} 
                        className="platform-feature-card"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div 
                            className="feature-image-container"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.div
                                className="glossy-effect"
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: "-100%",
                                    width: "300%",
                                    height: "100%",
                                    background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0) 35%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 65%, transparent 100%)",
                                    transform: "skewX(-20deg)",
                                    zIndex: 2,
                                    pointerEvents: "none"
                                }}
                                animate={{
                                    left: ["-100%", "100%"]
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat:Infinity,
                                    ease: "easeInOut",
                                    repeatType: "mirror"
                                }}
                            />
                            <img src={item.image} alt={item.title} style={{ zIndex: 1 }} />
                        </motion.div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </motion.div>
                    ))}
                    </div>
                </div>
        </div>



        <div className='engagement-section'>
            <FeaturesHeader featuresText={engagementModelsText}/>
            <div className='models-grid'>
                <div className='model-card'>
                    <div className='model-icon'>
                        <i className="fas fa-key"></i>
                    </div>
                    <h3>Turnkey Model</h3>
                    <p>Launch a fully ready-to-use gaming solution with minimal customization</p>
                </div>
                <div className='model-card'>
                    <div className='model-icon'>
                        <i className="fas fa-tag"></i>
                    </div>
                    <h3>White Label Solutions</h3>
                    <p>Get a branded version of our pre-built games tailored for your business</p>
                </div>
                <div className='model-card'>
                    <div className='model-icon'>
                        <i className="fas fa-tools"></i>
                    </div>
                    <h3>Custom Game Development</h3>
                    <p>Want to add a special feature or modify gameplay? We've got you covered</p>
                </div>
                <div className='model-card'>
                    <div className='model-icon'>
                        <i className="fas fa-handshake"></i>
                    </div>
                    <h3>Revenue Share Partnership</h3>
                    <p>A low-investment approach with shared growth and revenue</p>
                </div>
            </div>
        </div>

        <div className='choose-section'>
            <FeaturesHeader featuresText={chooseTitle}/>
            <div className='choose-container'>
                {/* <h2 className='choose-title'>Why Should One Choose Us?</h2> */}
                <div className='choose-grid'>
                    <div className='choose-card'>
                        <div className='card-icon'>
                            <i className="fas fa-rocket"></i>
                        </div>
                        <h3>Quick Time to Market</h3>
                        <p>Launch faster with our pre-built solutions</p>
                    </div>
                    <div className='choose-card'>
                        <div className='card-icon'>
                            <i className="fas fa-user-tie"></i>
                        </div>
                        <h3>Dedicated Support</h3>
                        <p>Personal account managers for your project</p>
                    </div>
                    <div className='choose-card'>
                        <div className='card-icon'>
                            <i className="fas fa-balance-scale"></i>
                        </div>
                        <h3>Compliance Expertise</h3>
                        <p>Deep knowledge of real-money gaming regulations</p>
                    </div>
                    <div className='choose-card'>
                        <div className='card-icon'>
                            <i className="fas fa-headset"></i>
                        </div>
                        <h3>Ongoing Support</h3>
                        <p>Continuous support and updates post-launch</p>
                    </div>
                    <div className='choose-card'>
                        <div className='card-icon'>
                            <i className="fas fa-hand-holding-usd"></i>
                        </div>
                        <h3>Transparent Pricing</h3>
                        <p>Clear pricing with no hidden fees</p>
                    </div>
                </div>
            </div>
            <ContactBanner contactItems={quoteItems}/>
        </div>

        
        <div className='support-section'>
            <FeaturesHeader featuresText={supportTitle}/>
            <div className='support-container'>
                {/* <h2>Aid + Let's Discuss</h2>
                <p className='support-desc'>Still have doubts. Here to assist are our professionals.</p> */}
                
                <div className='support-cards'>
                    <a className='support-card' href="">
                        <div className='support-icon'>
                            <i className="fas fa-headset"></i>
                        </div>
                        <h3>24/7 Live Support</h3>
                        <p>Available round the clock to assist you</p>
                    </a>
                    
                    <a className='support-card' href="">
                        <div className='support-icon'>
                            <i className="fas fa-envelope"></i>
                        </div>
                        <h3>Email Support</h3>
                        <p>Reach us at support@gamzway.com</p>
                    </a>
                    
                    <a className='support-card' href="">
                        <div className='support-icon'>
                            <i className="fas fa-comments"></i>
                        </div>
                        <h3>Live Chat</h3>
                        <p>Talk to us right now on our website</p>
                    </a>
                </div>
                
                <p className='support-footer'>From technical enquiries to revenue models, our consultative approach guarantees you never be left wondering. We explain everything.</p>
            </div>
        </div>

        {/* <div className='start-journey-section'>
            <div className='journey-container'>
                <div className='journey-content'>
                    <h2>Start Your Business Travel with Us</h2>
                    <p>Starting a gaming company doesn't need complexity. Gamzway's pre-ready games let you choose speed, quality, and a reliable partner with past performance.</p>
                    <button className='demo-btn'>Schedule a Demo</button>
                </div>
                <div className='journey-image'>
                    <img src="/path-to-your-image.png" alt="Gaming Business Journey" />
                </div>
            </div>
        </div> */}

        <ContactBanner contactItems={travelItems}/>

    </div>
  )
}

export default Home