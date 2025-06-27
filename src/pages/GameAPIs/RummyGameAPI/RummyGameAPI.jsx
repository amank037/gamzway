import './RummyGameAPI.css'
import LandingSection from "../../../components/LandingSection/LandingSection"
import AchievementsBanner from "../../../components/AchievementsBanner/AchievementsBanner"
import FeaturesHeader from '../../../components/FeaturesSection/FeaturesHeader/FeaturesHeader'
import FeaturesGrid from '../../../components/FeaturesSection/FeaturesGrid/FeaturesGrid'
import PlatformSection from '../../../components/PlatformSection/PlatformSection'
import ContactBanner from '../../../components/ContactBanner/ContactBanner'
import CustomGrid from '../../../components/CustomGrid/CustomGrid'
import ProductSection from '../../../components/ProductSection/ProductSection'
import PaymentSection from '../../../components/PaymentSection/PaymentSection'
import AccordionSection from '../../../components/AccordionSection/AccordionSection'

import LandingPageV2 from '../../../components/LandingPageV2/LandingPageV2'
import FeaturesGridV3 from '../../../components/FeaturesGridV3/FeaturesGridV3'
import PlatformImg from '../../../components/LudoPlatformImg/LudoPlatformImg'
import PromoTools from '../../../components/PromoTools/PromoTools'
import ChooseGrid from '../../../components/ChooseGrid/ChooseGrid'
import FeaturesBanner from '../../../components/FeaturesBanner/FeaturesBanner'
import SolutionsAPI from '../../../components/SolutionsAPI/SolutionsAPI'
import CrmAPI from '../../../components/CrmAPI/CrmAPI'

const landingItems = [
  {
    title: "RUMMY GAME API",
    description: "Rummy Game is a culture, a legacy, and today a digital trend inviting players all around that transcends mere traditional card games. Designed to enable you easily establish and run a completely functional, flexible, and interesting Rummy platform.",
    description2: "Designed with modularity, adaptability, and seamlessness in mind, the Rummy API offers several Rummy variants, game modes, and monetisation mechanisms.",
    button: "REQUEST A QUOTE",
  }
]

const platformFeatures = {
  sections: [
    {
      title: "CORE PLATFORM FEATURES",
      points: [
        "Pre-integrated Payment Gateway with secure transactions",
        "Multi-language and platform support for global reach",
        "Perfect Wallet Integration with real-time analytics",
        "Comprehensive Bonus and Referral Systems"
      ]
    },
    {
      title: "TABLE LAYOUT AND GAMEPLAY",
      points: [
        "Support for Multiplayer: Two to Six Players",
        "Timer-based Motion with Drag-through Card Arrangement",
        "Auto Groups of Cards with Drop and Declare Options",
        "Instantaneous Chat and Emojis for player interaction"
      ]
    },
    {
      title: "CUSTOMIZATION AND BRANDING",
      points: [
        "White Label Solutions with complete branding options",
        "Custom game modes and UI elements",
        "Multiple pre-made themes and UI toolkit",
        "Personalized offers and promotional tools"
      ]
    },
    {
      title: "MANAGEMENT AND ANALYTICS",
      points: [
        "Comprehensive administrative dashboard",
        "Real-time tracking of players and revenue",
        "Advanced CRM tools for user engagement",
        "Affiliate & Bonus Systems management"
      ]
    }
  ]
}

const platformTitle = [
  {
    title: "RUMMY GAME API FEATURES"
  }
]

const platformItems = [
  {
    featuresText:[
      {
        title: "TOOLS FOR OUR RUMMY GAME API",
        description: "Our Rummy Game API is designed for global release with platform-independent functionality"
      }
    ],
    platformGrid:[
      {
        image: "https://beta.mobzway.com/assets/images/HTML_five-broweswer.webp",
        title: "HTML5 Web Platform",
        description: "HTML5 and JavaScript enabled web browsers for seamless gaming experience without downloads."
      },
      {
        image: "https://beta.mobzway.com/assets/images/Native_Mobile.webp",
        title: "Mobile Platform (Android & iOS)",
        description: "Native and hybrid apps for Android and iOS, optimized for smartphones and tablets."
      },
      {
        image: "https://beta.mobzway.com/assets/images/Mac_PC.webp",
        title: "Desktop Platform",
        description: "Desktop applications for Windows and Mac, providing consistent UX across all channels."
      },
    ]
  }
]

const findItems = [
  {
    featuresText:[
      {
        title:"DISCOVER HOW WE MIGHT BE OF USE"
      }
    ],
    description: "For your Rummy game company, Gamzway provides end-to-end development and API capabilities. From white-label solutions to custom development, we support your journey from start to success.",
    hrefText: "GET IN TOUCH"
  }
]

const chooseTitle = [
  {
    title: "LOBBY, CRM, BACK OFFICE, MULTIPLE THEMES",
    description: "A game's strength depends exclusively on its management system. Our Rummy platform provides powerful control and comprehensive tools."
  }
]

const servicesTitle = [
  {
    title: "WHY CHOOSE GAMZWAY'S RUMMY GAME API?",
    description: "The industry features a lot of Rummy APIs available. Discover why leading companies choose Gamzway."
  }
]

const faqTitle = [
  {
    title: "RUMMY GAME API FAQ",
    description: ""
  }
]

const faqData = [
  {
    title: "Is it possible to change the features and game layout?",
    description: "Sure. Full customising is supported by our API, which lets you add fresh features, change UI/UX, or even create custom game types."
  },
  {
    title: "Does this constitute a white-label solution?",
    description: "Definitely yes. Under the name, logo, and colour palette of your company, you can brand the platform."
  },
  {
    title: "Are you able to certify RNG?",
    description: "True. Certified RNG engines drives our Rummy API to guarantee fair play."
  },
  {
    title: "Which supported Rummy variations exist?",
    description: "We play points rummy, pool rummy, deals rummy, and Indian rummy."
  },
  {
    title: "Integration requires what length of time?",
    description: "Basic integration can take as low as 7–10 working days depending on customising."
  }
]

const beginItems = [
  {
    featuresText:[
      {
        title:"Begin Your Business Journey with Gamzway"
      }
    ],
    description: "Whether you're starting fresh or expanding your existing gaming platform, Gamzway's Rummy Game API provides the perfect foundation for success. With comprehensive features, reliable support, and proven technology, your rummy gaming venture is in expert hands.",
    hrefText: "GET IN TOUCH"
  }
]

const productItems = [
  {
    image: "https://beta.mobzway.com/assets/images/rummy-game-development/Product_Poker.webp",
    title: "Poker Game",
    description: "Gamzway provides poker game development for all the popular poker games like Texas Hold'em, Omaha, Seven Stud, OFC Poker, and more. Our seasoned game developers utilize cutting-edge gaming technology to offer the player's best poker gaming experience.",
    href: "/skill-games/poker"
  },
  {
    image: "https://beta.mobzway.com/assets/images/poker-game-development/Product_Rummy.webp",
    title: "Rummy Game",
    description: "The highly talented team of rummy software developers ensures that very engaging and customized solutions of this game of skill are offered to the gaming clients. All the popular versions of rummy are developed as per the client's requirements.",
    href: "/skill-games/rummy"
  },
  {
    image: "https://beta.mobzway.com/assets/images/rummy-game-development/Product_Teenpatti.webp",
    title: "Teen Patti Game",
    description: "Gamzway offers ready-to-use Teen Patti solutions for business ventures. We build customized solutions for all the variants like Fox,Vintage, and Teen Patti Plus. We provide solutions for all desktop & mobile devices, and web browsers at the best prices.",
    href: "/game-apis/teen-patti"
  },
  {
    image: "https://beta.mobzway.com/assets/images/rummy-game-development/Product_Casino.webp",
    title: "Casino Software",
    description: "For the online casino game entrepreneurs and businesses, Gamzway offers customized casino game solutions. All the popular casino games like Roulette, Blackjack, Slot, Baccarat, etc. are designed and developed at our gaming studio as per your business needs.",
    href: "/casino-games"
  },
]

const RummyGameAPI = () => {
  return (
    <div className="rummy-api-game">
      <div className="landing-rummy-api-section">
        <LandingSection landingItems={landingItems}/>
        <div className='landing-rummy-api-overlay'>
          <div className='rummy-api-title-container'>
            <img src="/rummyAPI/bg-title.png" alt="" className='image-stack'/>
          </div>
          <div className='rummy-api-chip-container rummy-api-chip1'>
            <img src="/rummyAPI/chip1.png" alt="" className='image-stack'/>
          </div>
          <div className='rummy-api-chip-container rummy-api-chip2'>
            <img src="/rummyAPI/chip2.png" alt="" className='image-stack'/>
          </div>
          <div className='rummy-api-chip-container rummy-api-chip3'>
            <img src="/rummyAPI/chip3.png" alt="" className='image-stack'/>
          </div>
          <div className='rummy-api-coin-container rummy-api-coin1'>
            <img src="/rummyAPI/coin1.png" alt="" className='image-stack'/>
          </div>
          <div className='rummy-api-coin-container rummy-api-coin2'>
            <img src="/rummyAPI/coin2.png" alt="" className='image-stack'/>
          </div>
        </div>
      </div>
      <AchievementsBanner />
      <FeaturesBanner />
      <SolutionsAPI />
      {/* <FeaturesGrid features={platformFeatures} featuresTitle={platformTitle} /> */}
      <PlatformSection />
      {/* <PlatformImg /> */}
      <CrmAPI />
      <ChooseGrid />

      <ContactBanner contactItems={findItems}/>

      {/* <div className='choose-section'>
        <FeaturesHeader featuresText={chooseTitle}/>
        <div className='choose-container'>
          <div className='choose-grid rummy-choose-grid'>
            <div className='choose-card'>
              <div className='card-icon'>
                <i className="fas fa-gamepad"></i>
              </div>
              <h3>Dynamic Lobby</h3>
              <p>Sort rooms by tournament style, skill level, or entry price with real-time updates.</p>
            </div>
            <div className='choose-card'>
              <div className='card-icon'>
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Back Office Panel</h3>
              <p>Monitor traffic, fraud, user behavior, and gameplay statistics in real-time.</p>
            </div>
            <div className='choose-card'>
              <div className='card-icon'>
                <i className="fas fa-palette"></i>
              </div>
              <h3>Multiple Themes</h3>
              <p>Choose from pre-made themes or create custom designs with our UI toolkit.</p>
            </div>
            <div className='choose-card'>
              <div className='card-icon'>
                <i className="fas fa-users"></i>
              </div>
              <h3>CRM Integration</h3>
              <p>Engage users with personalized offers, promotions, and automated alerts.</p>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className='solutions-rummy-section'>
        <div className='solutions-rummy-top'>
          <FeaturesHeader featuresText={servicesTitle}/>
        </div>
        <div className='solutions-rummy-bottom'>
          <div className='solutions-img slide-cards-container'>
            <div className='sol-rummy-board-container'>
              <img src="/rummyPage/solutions/1-01.webp" alt="" className="image-stack"/>
            </div>
            <div className='sol-rummy-card0'>
              <img src="/rummyPage/solutions/cards-01.webp" alt="" className="image-stack"/>
            </div>
            <div className='sol-rummy-cards-container sol-rummy-card1'>
              <img src="/rummyPage/solutions/2-01.webp" alt="" className="image-stack"/>
            </div>
            <div className='sol-rummy-cards-container sol-rummy-card2'>
              <img src="/rummyPage/solutions/3-01.webp" alt="" className="image-stack"/>
            </div>
            <div className='sol-rummy-cards-container sol-rummy-card3'>
              <img src="/rummyPage/solutions/4-01.webp" alt="" className="image-stack"/>
            </div>
            <div className='sol-rummy-cards-container sol-rummy-card4'>
              <img src="/rummyPage/solutions/5-01.webp" alt="" className="image-stack"/>
            </div>
            <div className='sol-rummy-coins-container sol-rummy-coin1'>
              <img src="/rummyPage/solutions/6-01.webp" alt="" className="image-stack"/>
            </div>
            <div className='sol-rummy-coins-container sol-rummy-coin2'>
              <img src="/rummyPage/solutions/7-01.webp" alt="" className="image-stack"/>
            </div>
            <div className='sol-rummy-coins-container sol-rummy-coin3'>
              <img src="/rummyPage/solutions/8-01.webp" alt="" className="image-stack"/>
            </div>
            <div className='sol-rummy-coins-container sol-rummy-coin4'>
              <img src="/rummyPage/solutions/9-01.webp" alt="" className="image-stack"/>
            </div>
            <div className='sol-rummy-coins-container sol-rummy-coin5'>
              <img src="/rummyPage/solutions/10-01.webp" alt="" className="image-stack"/>
            </div>
          </div>

          <div className='solutions-desc-container'>
            <p className='solutions-desc'>
                  <br/>
                  <ul>
                    <li>Performance-centric with minimal latency and lightning-fast API calls</li>
                    <br/>
                    <li>Secure and fair with anti-bot systems and RNG certification</li>
                    <br/>
                    <li>Comprehensive documentation for easy developer onboarding</li>
                    <br/>
                    <li>Scalable architecture for thousands of concurrent players</li>
                    <br/>
                    <li>24/7 global support with dedicated account managers</li>
                    <br/>
                    <li>Regulatory compliant for Indian and international markets</li>
                    <br/>
                    <li>Partnership-focused approach beyond technology</li>
                    <br/>
                  </ul>
            </p>
          </div>
        </div>
      </div> */}

      <div className="rummy-faq-section">
        <FeaturesHeader featuresText={faqTitle}/>
        <div className="rummy-faq-container">
          <div className="rummy-faq-left">
            <AccordionSection data={faqData}/>
          </div>
        </div>
        
      </div>


      <ProductSection productGrid={productItems}/>

      <ContactBanner contactItems={beginItems}/>
    </div>
  )
}

export default RummyGameAPI