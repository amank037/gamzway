import './PokerGameAPI.css'
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

const landingItems = [
  {
    title: "POKER GAME API DEVELOPMENT",
    description: "Online gaming is exploding, and poker is at the core of this change. At Gamzway, we offer a modern poker game API that lets developers, gaming businesses, and entrepreneurs start and expand strong, engaging poker platforms. Our API guarantees flawless game mechanics, real-time performance, and an interesting user experience whether your aim is desktop, web, or mobile users.",
    description2: "Built to provide scalability, security, and speed—all with a plug-and-play configuration—our poker game API provides From Texas Hold'em and Omaha to private poker rooms and tournaments, we have everything you need to introduce a competitive product onto the market.",
    button: "REQUEST A QUOTE",
  }
]

const platformFeatures = {
  sections: [
    {
      title: "CORE PLATFORM FEATURES",
      points: [
        "Cross-platform compatibility available for Android, iOS, Web, and desktop",
        "Scalable architecture designed for maximum concurrent players",
        "Real-time synchronizing guarantees flawless updates across devices",
        "Low-latency performance with 99.9% uptime worldwide server infrastructure"
      ]
    },
    {
      title: "TABLE LAYOUT AND GAMEPLAY",
      points: [
        "Custom tables with 2, 6, or 9-seater options",
        "Multiple game variants: Texas Hold'em, Omaha, 5 Card Draw, Sit & Go",
        "Customizable timer settings, blinds, buy-ins, and betting restrictions",
        "AI Bots support for 24/7 gameplay accessibility"
      ]
    },
    {
      title: "CUSTOMIZATION AND BRANDING",
      points: [
        "White-label UI that captures your brand character",
        "Custom avatars, chip designs, and backgrounds",
        "Multiple lobby designs and animations",
        "Festival and event-centered theme updates"
      ]
    },
    {
      title: "MANAGEMENT AND ANALYTICS",
      points: [
        "Complete back-office management dashboard",
        "Real-time player activity tracking",
        "Rack analysis and commission management",
        "Sophisticated reporting systems for player insights"
      ]
    }
  ]
}

const platformTitle = [
  {
    title: "POKER GAME API FEATURES"
  }
]

const platformItems = [
  {
    featuresText:[
      {
        title: "POKER GAME API PLATFORMS",
        description: "The poker game API of Gamzway connects easily with many systems for seamless integration"
      }
    ],
    platformGrid:[
      {
        image: "https://beta.mobzway.com/assets/images/HTML_five-broweswer.webp",
        title: "HTML5 Web Platform",
        description: "Browser-based gaming free of downloads needed with HTML5 technology ensuring cross-browser compatibility."
      },
      {
        image: "https://beta.mobzway.com/assets/images/Native_Mobile.webp",
        title: "Mobile Platform (Android & iOS)",
        description: "Savvy touch controls and light apps optimized for both Android and iOS platforms."
      },
      {
        image: "https://beta.mobzway.com/assets/images/Mac_PC.webp",
        title: "Desktop Platform",
        description: "Advanced UI and high-performance gaming clients for PC owners with seamless desktop integration."
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
    description: "A vibrant poker platform is about user experience, branding, and management, not only games. Our comprehensive solution provides complete control and analytics."
  }
]

const servicesTitle = [
  {
    title: "WHY SELECT THE POKER GAME API OF GAMZWAY?",
    description: "Developers and game companies trust us for our comprehensive solution and professional support."
  }
]

const faqTitle = [
  {
    title: "POKER GAME API FAQ",
    description: ""
  }
]

const faqData = [
  {
    title: " Is it possible to make the poker game my brand's specific?",
    description: "True!  We provide complete white-label customising including rules, design, and functionality."
  },
  {
    title: "Following deployment, what type of support do you provide?",
    description: "For every one of our clients, we offer updates, technical support available 24/7, and maintenance."
  },
  {
    title: "Exists a safe poker game API?",
    description: " Sure.  End-to- end encryption, firewalls, and anti- cheat systems define our platform."
  },
  {
    title: "Are multi-currency payments something you endorse?",
    description: "Absolutely including regional currencies, fiat, and cryptocurrencies."
  }
]

const beginItems = [
  {
    featuresText:[
      {
        title:"Begin Your Business Travel with Gamzway"
      }
    ],
    description: "Whether your company is new or established, Gamzway's Poker Game API is your starting point into the explosive internet poker scene.  Your poker ambitions are just one API away from reality under total control, limitless customising, and dependable support.",
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

const PokerGameAPI = () => {
  return (
    <div className="poker-api-game">
      <div className="landing-poker-api-section">
        <LandingSection landingItems={landingItems}/>
      </div>
      <AchievementsBanner />

      <FeaturesGrid features={platformFeatures} featuresTitle={platformTitle} />

      <PlatformSection platformItems={platformItems}/>

      <ContactBanner contactItems={findItems}/>

      <div className='choose-section'>
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
      </div>

      <div className='solutions-poker-section'>
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
                    <li>Strong security with SSL encryption, anti-cheat measures, and fraud detection</li>
                    <br/>
                    <li>Scalable architecture from startup to enterprise without performance decline</li>
                    <br/>
                    <li>Fully customizable branding and white-label solutions</li>
                    <br/>
                    <li>Global market support with multi-language and currency options</li>
                    <br/>
                    <li>24/7 technical support with dedicated account managers</li>
                    <br/>
                    <li>Comprehensive documentation and integration support</li>
                    <br/>
                    <li>Regular updates and feature enhancements</li>
                    <br/>
                  </ul>
            </p>
          </div>
        </div>
      </div>

      <div className="ludo-faq-section">
        <FeaturesHeader featuresText={faqTitle}/>
        <div className="ludo-faq-container">
          <div className="ludo-faq-left">
            <AccordionSection data={faqData}/>
          </div>
        </div>
        <button className='faq-btn'><span>ASK A QUESTION</span></button>
      </div>

      <PaymentSection />

      <ProductSection productGrid={productItems}/>

      <ContactBanner contactItems={beginItems}/>
    </div>
  )
}

export default PokerGameAPI