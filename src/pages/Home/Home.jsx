import React, { useState } from 'react'
import { useScrollAnimations } from "../../Hooks/useScrollAnimations"
import './Home.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { motion } from "framer-motion"
import FeaturesHeader from '../../components/FeaturesSection/FeaturesHeader/FeaturesHeader'
import ProductGrid from '../../components/ProductGrid/ProductGrid'
import ContactBanner from '../../components/ContactBanner/ContactBanner'
import CarouselSection from '../../components/CarouselSection/CarouselSection'
import ChooseGrid from '../../components/ChooseGrid/ChooseGrid'
import ProvidersSection from '../../components/ProvidersSection/ProvidersSection'


const productfeaturesText = [
    {
        title: "Explore Our Ready-to-Play Games",
        description: "At Gamzway, we provide a large selection of market-tested, multiple devices optimised pre-built gaming items."
    }
]

const platformFeaturesText = [
    {
        title: "HIGHLIGHTS OF OUR GAMING PLATFORM",
        description: "Gamzway's products are engineered for reliability, flexibility, and performance."
    }
]

const engagementModelsText = [
    {
        title: "Our Engagement Models That Fits Your Business",
        description: "Gamzway offers flexible engagement models to suit both enterprises and startups."
    }
]

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
        title: "Let's Discuss",
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
    useScrollAnimations()

    const platformGrid = [
        {
          image:"/platform-100.webp",
          title:"Cross-Platform",
          description:"Android, iOS, Web, Desktop compatibility"
        },
        {
          image:"/scalable-100.webp",
          title:"Scalable Architecture",
          description:"Support thousands of concurrent players"
        },
        {
          image:"/browser-customization-100.webp",
          title:"Customizable UI",
          description:"Customizable themes and interfaces for brand personalization"
        },
        {
          image:"/globe-100.webp",
          title:"Global Ready",
          description:"Multi-language and multi-currency support"
        },
        {
          image:"/admin-100.webp",
          title:"Admin Control",
          description:"Admin panel and analytics dashboard for complete business control"
        },
      ]
      

  return (
    <div className='home-div'>
        <div className='hero-div'>
            <CarouselSection/>
        </div>

        <div className='products-div'>
            <div className='products-title-div'>
                <FeaturesHeader featuresText={productfeaturesText} titleStyle={{color:'#000'}}/>
            </div>
            <ProductGrid/>
        </div>

        <div className='engagement-section'>
            <FeaturesHeader featuresText={engagementModelsText}/>
            <div className='models-grid'>
                <div className='model-card animate-on-scroll' data-direction="left">
                    <div className='model-icon'>
                        <i className="fas fa-handshake"></i>
                    </div>
                    <h3>Game APIs</h3>
                    <p>Integrate leading studios with top games with our practical, scalable API solution.</p>
                </div>
                <div className='model-card animate-on-scroll' data-direction="up">
                    <div className='model-icon'>
                        <i className="fas fa-handshake"></i>
                    </div>
                    <h3>Game Aggregators</h3>
                    <p>Access an extensive selection of popular casino games through a single API</p>
                </div>
                <div className='model-card animate-on-scroll' data-direction="right">
                    <div className='model-icon'>
                        <i className="fas fa-tag"></i>
                    </div>
                    <h3>White Label Platform</h3>
                    <p>Get a branded version of our pre-built games tailored for your business</p>
                </div>
            </div>
        </div>

        <div className='platform-feature-section'>
                <FeaturesHeader featuresText={platformFeaturesText}/>
                <div className='platform-features'>
                    <div className='platform-feature-grid'>
                    {platformGrid.map((item, index) => (
                        <motion.div 
                        key={index} 
                        className="platform-feature-card animate-on-scroll"
                        data-direction="down"
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

        <ChooseGrid />

        <ProvidersSection />
        
        <div className='support-section'>
            <FeaturesHeader featuresText={supportTitle}/>
            <div className='support-container'>
                {/* <h2>Aid + Let's Discuss</h2>
                <p className='support-desc'>Still have doubts. Here to assist are our professionals.</p> */}
                
                <div className='support-cards' data-direction="left">
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

    </div>
  )
}

export default Home