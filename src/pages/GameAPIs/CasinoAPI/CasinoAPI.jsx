import './CasinoAPI.css'
import LandingSection from "../../../components/LandingSection/LandingSection"
import AchievementsBanner from "../../../components/AchievementsBanner/AchievementsBanner"
import FeaturesGrid from '../../../components/FeaturesSection/FeaturesGrid/FeaturesGrid'
import PlatformSection from '../../../components/PlatformSection/PlatformSection'
import ContactBanner from '../../../components/ContactBanner/ContactBanner'
import FeaturesHeader from '../../../components/FeaturesSection/FeaturesHeader/FeaturesHeader'
import ProductSection from '../../../components/ProductSection/ProductSection'
import PaymentSection from '../../../components/PaymentSection/PaymentSection'
import AccordionSection from '../../../components/AccordionSection/AccordionSection'

import LandingPageV2 from '../../../components/LandingPageV2/LandingPageV2'
import FeaturesGridV3 from '../../../components/FeaturesGridV3/FeaturesGridV3'
import PlatformImg from '../../../components/LudoPlatformImg/LudoPlatformImg'
import PromoTools from '../../../components/PromoTools/PromoTools'
import ChooseGrid from '../../../components/ChooseGrid/ChooseGrid'
import FeaturesBanner from '../../../components/FeaturesBanner/FeaturesBanner'
import CustomGrid from '../../../components/CustomGrid/CustomGrid'
import SolutionsAPI from '../../../components/SolutionsAPI/SolutionsAPI'

const landingItems = [
  {
    title: "CASINO API",
    description: " With our strong and flexible Casino Game API, we at Gamzway deliver the pleasures of Vegas directly to your digital door.  Our API allows smooth integration of classic and new casino games including Blackjack, Roulette, Poker, Baccarat, Slots, and more, thereby helping companies start or improve their iGaming platforms.",
    description2: " Whether you run an established operator or a startup, our casino game API offers the technological basis to create first-rate gaming experiences.  Our API is everything you need to rapidly and effectively scale thanks to strong backend systems, high-performance gameplay, and flexible design elements.",
    button: "REQUEST A QUOTE",
  }
]

const platformFeatures = {
  sections: [
    {
      title: "CORE PLATFORM FEATURES",
      points: [
        "Slots, table games, card games, jackpots, and live dealer choices",
        "Real-time multiplayer support with interactive tables and lobbies",
        "Integration of smart artificial intelligence",
        "In-built technologies for fair play"
      ]
    },
    {
      title: "TABLE LAYOUT AND GAMEPLAY",
      points: [
        "Dynamic UI/UX with drag-and-drop chips and animated card dealing",
        "Manual, automated, or live-dealer configurations",
        "Multilingual Interfaces for broad player base",
        "RNG certified fair play logic and game integrity"
      ]
    },
    {
      title: "CUSTOMIZATION AND BRANDING",
      points: [
        "Custom Casino Game Development with branded content",
        "White Label Solutions ready-to-launch",
        "Multiple lobby designs and themes",
        "Flexible game layout and advertising banners"
      ]
    },
    {
      title: "MANAGEMENT AND ANALYTICS",
      points: [
        "Real-time gaming and revenue tracking",
        "User behaviour monitoring and fraud detection",
        "Player segmentation and loyalty programs",
        "Comprehensive CRM integration"
      ]
    }
  ]
}

const platformTitle = [
  {
    title: "CASINO GAME API FEATURES"
  }
]

const platformItems = [
  {
    featuresText:[
      {
        title: "CASINO GAME API PLATFORMS",
        description: "Our Casino Game API provides companies the freedom to reach more people since it is compatible with all main systems"
      }
    ],
    platformGrid:[
      {
        image: "https://beta.mobzway.com/assets/images/HTML_five-broweswer.webp",
        title: "HTML5 Web Platform",
        description: "Web browsers: seamless Edge, Firefox, Safari, Chrome gameplay."
      },
      {
        image: "https://beta.mobzway.com/assets/images/Native_Mobile.webp",
        title: "Mobile Platform (Android & iOS)",
        description: "Android and iOS apps integrate natively with responsive controls."
      },
      {
        image: "https://beta.mobzway.com/assets/images/Mac_PC.webp",
        title: "Desktop Platform",
        description: "Superior performance for high-end PC buyers with seamless desktop integration."
      },
    ]
  }
]

const findItems = [
  {
    featuresText:[
      {
        title:"LEARN HOW WE MIGHT BE OF SERVICE"
      }
    ],
    description: "At Gamzway, we offer a relationship rather than only codes. From the first step to long after launch, our knowledgeable developers, support team, and strategists collaborate with you.",
    hrefText: "GET IN TOUCH"
  }
]

const chooseTitle = [
  {
    title: "LOBBY, BACK OFFICE, MULTIPLE THEMES",
    description: " Using Gamzway's extensive administration features will help you easily run your casino"
  }
]

const servicesTitle = [
  {
    title: "Why choose Gamzway's Casino Game API?",
    description: " Gamzway is your perfect partner for a Casino Game API since follows:"
  }
]

const faqTitle = [
  {
    title: "Common Questions—Casino Game API",
    description: ""
  }
]

const faqData = [
  {
    title: "  A Casino Game API is what?",
    description: "True!  We provide complete white-label customising including rules, design, and functionality.A Casino API is a collection of tools and protocols enabling simple integration of backend services and casino games into your app or website."
  },
  {
    title: "Can I concurrently integrate several casino games?",
    description: " Correct.  Our API allows one integration for bundling several games including live dealer games, table games, and slots."
  },
  {
    title: "Is the real-money gambling API safe?",
    description: "Right.  Our fair play systems are RNG-certified, compliant-ready, bank-level encryption; we also provide frameworks."
  },
  {
    title: "Are player performance and activity trackable?",
    description: "Indeed.  Our back-office systems include session data, heatmaps, thorough analytics, and customisable reports."
  },
  {
    title: "Do you provide a trial access?",
    description: " Indeed, get in touch to have a practical demonstration and investigate what our casino API can offer for your company."
  }
]

const beginItems = [
  {
    featuresText:[
      {
        title:"Begin Your Business Travel with Gamzway"
      }
    ],
    description: " Gamzway's Casino Game API is your portal to a flourishing iGaming company, not only a technical integration.  Using cutting-edge tools, strong backend support, and a dedication to customising will enable you to build a platform that gamers will value and use.",
    hrefText: "GET IN TOUCH"
  }
]
const productItems = [
  {
    image: "https://beta.mobzway.com/assets/images/rummy-game-development/Product_Poker.webp",
    title: "Poker Game",
    description: "Gamzway provides poker game development for all the popular poker games like Texas Hold’em, Omaha, Seven Stud, OFC Poker, and more. Our seasoned game developers utilize cutting-edge gaming technology to offer the player's best poker gaming experience.",
    href: "/skill-games/poker"
  },
  {
    image: "https://beta.mobzway.com/assets/images/poker-game-development/Product_Rummy.webp",
    title: "Rummy Game",
    description: "The highly talented team of rummy software developers ensures that very engaging and customized solutions of this “game of skill” are offered to the gaming clients. All the popular versions of rummy are developed as per the client’s requirements.",
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

const CasinoAPI = () => {
  return (
    <div className="casino-api-game">
      <div className="landing-casino-api-section">
      <LandingSection landingItems={landingItems}/>
      </div>
      <AchievementsBanner />

      <FeaturesBanner />

      <SolutionsAPI />

      <FeaturesGrid features={platformFeatures} featuresTitle={platformTitle} />

      <PlatformSection />
      {/* <PlatformImg /> */}
      <CustomGrid/>
      <ChooseGrid />

      <ContactBanner contactItems={findItems}/>

      {/* <div className='choose-section'>
        <FeaturesHeader featuresText={chooseTitle}/>
        <div className='choose-container'>
          <div className='choose-grid poker-choose-grid'>
            <div className='choose-card'>
              <div className='card-icon'>
                <i className="fas fa-gamepad"></i>
              </div>
              <h3>Dynamic Game Lobby</h3>
              <p>Multiple lobby designs with custom animations, avatars, and real-time game status updates.</p>
            </div>
            <div className='choose-card'>
              <div className='card-icon'>
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Back Office Panel</h3>
              <p>Comprehensive dashboard for player tracking, rake analysis, and commission management.</p>
            </div>
            <div className='choose-card'>
              <div className='card-icon'>
                <i className="fas fa-palette"></i>
              </div>
              <h3>Multiple Themes</h3>
              <p>Customizable themes with festival and event-centered updates to keep the experience fresh.</p>
            </div>
            <div className='choose-card'>
              <div className='card-icon'>
                <i className="fas fa-users"></i>
              </div>
              <h3>CRM Integration</h3>
              <p>Advanced player segmentation, promotional campaigns, and automated communication tools.</p>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className='solutions-poker-section'>
        <div className='solutions-poker-top'>
          <FeaturesHeader featuresText={servicesTitle}/>
        </div>
        <div className='solutions-poker-bottom'>
          <div className='solutions-img-1'>
            <img src="https://beta.mobzway.com/assets/images/poker-game-development-company.webp" alt="" style={{width: "450px"}}/>
          </div>

          <div className='solutions-desc-container'>
            <p className='solutions-desc'>
                  <br/>
                  <ul>
                    <li>Years of knowledge in API integration and casino game creation define proven expertise.</li>
                    <br/>
                    <li> From the lobby UI to the most minute game detail, 100% Customisable.</li>
                    <br/>
                    <li> Scalable Infrastructure: Manage thousands of concurrent users free from performance slights.</li>
                    <br/>
                    <li> Dedicated account managers and real-time troubleshooting constitute 24/7 support.</li>
                    <br/>
                    <li> Security First: Player data protection, anti-fraud mechanisms, end-to-end encryption.</li>
                    <br/>
                    <li>Options for global compatibility including multi-currency, multi-language, and regionally tailored UI.</li>
                    <br/>
                    <li> We are dedicated to provide nothing less than perfection.</li>
                    <br/>
                  </ul>
            </p>
          </div>
        </div>
      </div> */}

      <div className="ludo-faq-section">
        <FeaturesHeader featuresText={faqTitle}/>
        <div className="ludo-faq-container">
          <div className="ludo-faq-left">
            <AccordionSection data={faqData}/>
          </div>
        </div>
        <button className='faq-btn'><span>ASK A QUESTION</span></button>
      </div>

      <ProductSection productGrid={productItems}/>

      <ContactBanner contactItems={beginItems}/>
    </div>
  )
}

export default CasinoAPI