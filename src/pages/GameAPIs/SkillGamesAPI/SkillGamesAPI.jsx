import './SkillGamesAPI.css'
import LandingSection from "../../../components/LandingSection/LandingSection"
import AchievementsBanner from "../../../components/AchievementsBanner/AchievementsBanner"
import FeaturesGrid from '../../../components/FeaturesSection/FeaturesGrid/FeaturesGrid'
import PlatformSection from '../../../components/PlatformSection/PlatformSection'
import ContactBanner from '../../../components/ContactBanner/ContactBanner'
import FeaturesHeader from '../../../components/FeaturesSection/FeaturesHeader/FeaturesHeader'
import ProductSection from '../../../components/ProductSection/ProductSection'
import PaymentSection from '../../../components/PaymentSection/PaymentSection'
import AccordionSection from '../../../components/AccordionSection/AccordionSection'

const landingItems = [
  {
    title: "SKILL GAMES API DEVELOPMENT",
    description: "Gamzway is a top provider of Skill Game API solutions. They help organisations create and grow safe, customisable, and cross-platform skill-based games like rummy, poker, ludo, and more. We give you the tools and experienced help you need to thrive in the real money gambling business.",
    description2:"Gamzway's Skill Game API platform has everything you need to start, run, and grow an online skill gaming business.  Our skill gameAPI platform was developed with developers,digital operators, and business owners in mind. It has real-time data, customisable game rules, secure transactions, and tools that help you follow the law.  Our API makes sure that integration is smooth and can grow with your business, no matter if you are focusing on mobile, web, or desktop users.  We can give you everything you need, from skill game modules that are ready to go to powerful backend systems.",
    button: "REQUEST A QUOTE",
  }
]

const platformTitle = [
  {
    title: "SKILL GAMES API FEATURES"
  }
]
const platformFeatures = {
  sections: [
    {
      title: "SKILL GAMES PLATFORM",
      points: [
        "Everything you need to start, run, and grow an online skill gaming business",
        "Designed for developers, digital operators, and business owners",
        "Real-time data, customizable game rules, and secure transactions",
        "Scalable API for mobile, web, and desktop integrations"
      ]
    },
    {
      title: "INTEGRATION AND SCALABILITY",
      points: [
        "Smooth API integration process tailored for different platforms",
        "Support for legal compliance and industry regulations",
        "Ready-to-use skill game modules and backend systems",
        "Flexible growth-oriented architecture"
      ]
    },
    {
      title: "TABLE LAYOUT AND GAME FUNCTIONALITY",
      points: [
        "Simple and effective table configurations for all player levels",
        "Responsive interfaces that adapt to any screen size",
        "Live updates, smart scoring, and rule customization",
        "Supports various skill-based genres like rummy, poker, ludo, and carrom"
      ]
    },
    {
      title: "GAMEPLAY EXPERIENCE",
      points: [
        "Dynamic gameplay with multiplayer and solo challenge options",
        "Custom rule sets per game or tournament",
        "Real-time feedback and interactive player experiences",
        "Optimized for competitive and casual gaming environments"
      ]
    }
  ]
}

const platformItems = [
  {
    featuresText:[
      {
        title: "CASINO GAME API PLATFORMS",
        description: " Gamzway's API works with all major platforms, which makes it quite adaptable. Uses can start their skill-based games on:"
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
    title: "LOBBY, BACK OFFICE, MULTIPLE THEMES AND CRM",
    description: " We have a full ecosystem that includes:"
  }
]

const servicesTitle = [
  {
    title: "Why choose Gamzway's Skill Games API?",
    description: " When you choose Gamzway, you get access to:"
  }
]

const faqTitle = [
  {
    title: "Questions and Answers About the Skill Game API",
    description: ""
  }
]

const faqData = [
  {
    title: "What kinds of games can you play?",
    description: "Our API works with rummy, poker, ludo, fantasy, carrom, and other games that need skill."
  },
  {
    title: " How safe is the platform?",
    description: "We utilise end-to-end encryption, RNG certificates (if they apply), and ways to stop fraud."
  },
  {
    title: "Is it possible to change the API?",
    description: "Yes, of course.  You can change the UI, regulations, payment mechanisms, and other things to fit your brand."
  }
]

const beginItems = [
  {
    featuresText:[
      {
        title:"Begin Your Business Travel with Gamzway"
      }
    ],
    description: " Gamzway's Skill Game API is your portal to a flourishing iGaming company, not only a technical integration.  Using cutting-edge tools, strong backend support, and a dedication to customising will enable you to build a platform that gamers will value and use.",
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


const SkillGamesAPI = () => {
  return (
    <div className="skill-api-game">
      <div className="landing-skill-api-section">
      <LandingSection landingItems={landingItems}/>
      </div>
      <AchievementsBanner />

      <FeaturesGrid  features={platformFeatures} featuresTitle={platformTitle} />

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
                    <li> Architecture that can be easy to use and broken down into smaller parts</li>
                    <br/>
                    <li> API documentation and help for developers that is easy to scaled up.</li>
                    <br/>
                    <li> Tools for managing risk and finding fraud</li>
                    <br/>
                    <li>Quick launching and opportunities for white-labeling</li>
                    <br/>
                    <li> Upgrades and security compliance that never stop</li>
                    <br/>
                    <li> Our Skill Game API gives you performance-driven and future-ready solutions that will help you stay ahead in a competitive market.</li>
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

export default SkillGamesAPI