import './PokerGameAPI.css'
import LandingSection from "../../../components/LandingSection/LandingSection"
import AchievementsBanner from "../../../components/AchievementsBanner/AchievementsBanner"
import FeaturesHeader from '../../../components/FeaturesSection/FeaturesHeader/FeaturesHeader'
import FeaturesGrid from '../../../components/FeaturesSection/FeaturesGrid/FeaturesGrid'
import PlatformSection from '../../../components/PlatformSection/PlatformSection'
import ContactBanner from '../../../components/ContactBanner/ContactBanner'
import CustomGrid from '../../../components/CustomGrid/CustomGrid'

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
    </div>
  )
}

export default PokerGameAPI