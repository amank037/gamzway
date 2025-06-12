import './CrashGames.css'
import LandingSection from "../../../components/LandingSection/LandingSection"
import AchievementsBanner from "../../../components/AchievementsBanner/AchievementsBanner"
import PlatformSection from '../../../components/PlatformSection/PlatformSection'
import ContactBanner from '../../../components/ContactBanner/ContactBanner'
import FeaturesHeader from '../../../components/FeaturesSection/FeaturesHeader/FeaturesHeader'
import FeaturesGrid from '../../../components/FeaturesSection/FeaturesGrid/FeaturesGrid'
import CustomGrid from '../../../components/CustomGrid/CustomGrid'
import AccordionSection from '../../../components/AccordionSection/AccordionSection'
import PaymentSection from '../../../components/PaymentSection/PaymentSection'
import ProductSection from '../../../components/ProductSection/ProductSection'
import FeaturesGridV3 from '../../../components/FeaturesGridV3/FeaturesGridV3'
import PlatformImg from '../../../components/LudoPlatformImg/LudoPlatformImg'
import PromoTools from '../../../components/PromoTools/PromoTools'
import ChooseGrid from '../../../components/ChooseGrid/ChooseGrid'
import LandingPageV2 from '../../../components/LandingPageV2/LandingPageV2'
import AboutSection from '../../../components/AboutSection/AboutSection'

const landingItems = [
  {
    title: "CRASH GAME DEVELOPMENT",
    description: "Faster, adrenaline-fueled action in crash games has transformed the online casino gaming scene. These games follow basic concepts whereby players make bets before a rising multiplier 'crashes'.",
    description2: "With proven fair algorithms, real-time interaction, and flawless graphics, live Crash (Random Number Generator) crash games provide an added degree of excitement.",
    button: "REQUEST A QUOTE",
  }
]
const landingImages = [
  {
    image: "https://beta.mobzway.com/assets/images/pokerSlide1.webp"
  },
  {
    image: "https://beta.mobzway.com/assets/images/pokerSlide1.webp"
  },
  {
    image: "https://beta.mobzway.com/assets/images/pokerSlide1.webp"
  },
  {
    image: "https://beta.mobzway.com/assets/images/pokerSlide1.webp"
  },
  {
    image: "https://beta.mobzway.com/assets/images/pokerSlide1.webp"
  },
]


const featuresTitleV3 = [
      {
        title: "Types of Crash Games",
      }
]

const featuresGridV3 = [
      {
        image: "https://cdn-icons-png.flaticon.com/512/8336/8336949.png",
        title: "Classic Crash",

      },
      {
        image: "https://cdn-icons-png.flaticon.com/512/1624/1624736.png",
        title: "Rocket Launch Crash",

      },
      {
        image: "https://cdn-icons-png.flaticon.com/512/2656/2656505.png",
        title: "Crypto Crash",

      },
      {
        image: "https://cdn-icons-png.flaticon.com/512/2329/2329238.png",
        title: "Airplane Crash",

      },
      {
        image: "https://cdn-icons-png.flaticon.com/512/536/536146.png",
        title: "Real-time Crash",
      },
      {
        image: "https://cdn-icons-png.flaticon.com/512/536/536146.png",
        title: "Jackpot Crash Games",
      }
]

const featuresItems = [
  {
    title: "Activities We Offer",
    description: "Apart than crash games, we present a whole suite of Live Crash-based casino games:"
  } 
]

const featuresGrid = [
  { 
    title: "Roulette",
    image: "https://cdn-icons-png.flaticon.com/512/2038/2038363.png"
  },
  { 
    title: "Blackjack",
    image: "https://cdn-icons-png.flaticon.com/512/10646/10646123.png"
  },
  { 
    title: "Lottery",
    image: "https://cdn-icons-png.flaticon.com/512/2460/2460454.png"
  },
  { 
    title: "Andar Bahar",
    image: "https://cdn-icons-png.flaticon.com/512/10073/10073807.png"
  },
  { 
    title: "Teen Patti",
    image: "https://cdn-icons-png.flaticon.com/512/1055/1055846.png"
  },
  { 
    title: "Dragon Tiger",
    image: "https://www.kpis.in/newassets/img/dragon-tiger/dragon-tiger.png"
  },
  { 
    title: "Sic Bo",
    image: "https://cdn-icons-png.flaticon.com/512/7400/7400798.png"
  },
  { 
    title: "Hi-Lo",
    image: "https://cdn-icons-png.flaticon.com/512/10553/10553465.png"
  }
]

const hireTitle = [
  {
    title: "Our Crash Games' Characteristics",
    description: "We designed our Crash games with the contemporary player in mind. Important elements consist in:"
  }
]

const platformItems = [
  {
    featuresText:[
      {
        title: "Our Online Crash Game Platforms",
        description: "Crash games developed by Gamzway fit several platforms and locations. We affirm:"
      }
    ],
    platformGrid:[
      {
        image: "https://beta.mobzway.com/assets/images/HTML_five-broweswer.webp",
        title: "Online Casino Portals",
        description: "Casino Websites with seamless integration"
      },
      {
        image: "https://img.icons8.com/?size=480&id=17836&format=png",
        title: "Mobile Apps",
        description: "Android and iOS native applications"
      },
      {
        image: "https://beta.mobzway.com/assets/images/Mac_PC.webp",
        title: "Progressive Web Apps",
        description: "PWA for cross-platform compatibility"
      },
      {
        image: "https://img.icons8.com/?size=480&id=IPzemd2v4Ubj&format=png",
        title: "Kiosk Systems",
        description: "Kiosk-style Casino Systems"
      },
      {
        image: "https://img.icons8.com/?size=200&id=MKRHZpOBBZqD&format=png",
        title: "White Label Platform",
        description: "Complete White Label Gaming Solutions"
      },
      {
        image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
        title: "API Integration",
        description: "Seamless API Integration for Aggregators"
      }
    ]
  }
]

const crmTitle = [
  { 
    title: "CRM and Backoffice Policies",
    description: "Our smart backoffice technology allows you complete control over your gaming activities. From analysing data to handling bonuses, our tools simplify your company:" 
  }
]

const crmItems = [
  {
    title: "Real-time Analytics",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/analytics.png"
  },
  {
    title: "Wallet Management",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/player-management.png"
  },
  {
    title: "Bonus Engine",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/promotion-management.png"
  },
  {
    title: "User Management",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/user-management.png"
  },
  {
    title: "Marketing Tools",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/game-management.png"
  },
  {
    title: "Compliance Reports",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/affiliate-management.png"
  },
  {
    title: "Game Settings",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/notificstion-management.png"
  },
  {
    title: "Support System",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/user-management.png"
  }
]

const developmentTitle = [
  {
    title: "How We Create the Greatest Crash Games",
    description: "Our approach of game production is meant to produce excellence, quickness, and customising:"
  }
]

const developmentFeatures = {
  sections: [
    {
      title: "Requirements Analysis",
      points: [
        "Understanding your objectives",
        "Regional requirements analysis",
        "Compliance standards review",
        "Platform compatibility planning"
      ]
    },
    {
      title: "UI/UX Design",
      points: [
        "Beautiful interface creation",
        "User-friendly navigation",
        "Responsive design implementation",
        "Brand integration"
      ]
    },
    {
      title: "Game Logic Programming",
      points: [
        "Crash engine development",
        "Performance optimization",
        "Fairness algorithms",
        "Real-time data sync"
      ]
    },
    {
      title: "Testing & QA",
      points: [
        "Multi-device testing",
        "Performance verification",
        "Security testing",
        "User acceptance testing"
      ]
    },
    {
      title: "Deployment",
      points: [
        "Platform integration",
        "Technical documentation",
        "Performance monitoring",
        "Launch support"
      ]
    },
    {
      title: "Post-Launch Support",
      points: [
        "24/7 technical support",
        "Regular updates",
        "Performance optimization",
        "Ongoing maintenance"
      ]
    },
    {
      title: "Why Choose Gamzway",
      points: [
        "10+ years experience",
        "Customizable solutions",
        "Global compliance",
        "Agile development"
      ]
    },
    {
      title: "Our Expertise",
      points: [
        "Crash gaming expertise",
        "Real money gaming",
        "Scalable solutions",
        "Open communication"
      ]
    }
  ]
}

const productItems = [
  {
    image: "https://beta.mobzway.com/assets/images/rummy-game-development/Product_Poker.webp",
    title: "Poker Game Development",
    description: "Gamzway provides poker game development for all the popular poker games like Texas Hold’em, Omaha, Seven Stud, OFC Poker, and more. Our seasoned game developers utilize cutting-edge gaming technology to offer the player's best poker gaming experience.",
    href: "/skill-games/poker"
  },
  {
    image: "https://beta.mobzway.com/assets/images/poker-game-development/Product_Rummy.webp",
    title: "Rummy Game Development",
    description: "The highly talented team of rummy software developers ensures that very engaging and customized solutions of this “game of skill” are offered to the gaming clients. All the popular versions of rummy are developed as per the client’s requirements.",
    href: "/skill-games/rummy"
  },
  {
    image: "https://beta.mobzway.com/assets/images/rummy-game-development/Product_Teenpatti.webp",
    title: "Teen Patti Game Development",
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

const faqTitle = [
  {
    title: "Crash Games Development FAQ"
  }
]

const accordionData = [
  {
    title: "Different from live dealer games, what distinguishes Crash games?",
    description: "Faster, more scalable, and perfect for automated casinos, Crash games create outcomes using mathematical algorithms."
  },
  {
    title: "Are crash games allowed?",
    description: " Many countries allow crash games; if the platform follows local gambling regulations and employs certified Crash software, they are lawful."
  },
  {
    title: "Can we include your crash games into our current casino?",
    description: " Indeed, we offer flawless API interaction with your wallet structure and present systems."
  },
  {
    title: "Building a crash or Crash game takes what length of time?",
    description: "Usually depending on platform needs and customising, it takes 4 to 8 weeks."
  },
  {
    title: "Are white label Crash casino platforms something you provide?",
    description: "We do indeed offer turnkey casino solutions together with white labels.."
  }
]

const touchItems = [
  {
    featuresText: [
      {
        title: "Get in Touch - Ask Us Anything",
      }
    ],
    description: " All set to realise your casino concept?  Either want a live demo or need assistance selecting the appropriate Crash games?",
    hrefText: "CONTACT US",
  }
]

const aboutItems = [
  {
    description:" We follow your objectives, regional particular requirements, and compliance standards. Our creative team creates beautiful, simple interfaces in UI/UX design. RNG engines are coded for performance, speed, and fairness under game logic programming. Games are linked to your platform using real-time data sync. Testing and quality assurance guarantees safe, error-free gameplay on several devices.",
    image:"/crashPage/p1.png"
  }
]

const CrashGames = () => {
  return (
    <div className="crash-game">
      <div className="landing-crash-section">
        <LandingSection landingItems={landingItems}/>
        {/* <LandingPageV2 landingItems={landingItems} landingImages={landingImages} /> */}
      </div>
      <AchievementsBanner />

      <AboutSection aboutItems={aboutItems} />
      
      {/* <FeaturesGridV3 featuresGridV3={featuresGridV3} featuresTitleV3={featuresTitleV3} /> */}

      <div className='solutions-crash-section'>
        <div className='solutions-crash-top'>
          <FeaturesHeader featuresText={hireTitle}/>
        </div>

        <div className='solutions-crash-bottom'>
          <div className='solutions-desc-container'>
            <div className='solutions-ludo-grid'>
                  <div className='solutions-ludo-grid-item'>
                    <img src="/real-time.png" alt="" />
                    <div className='solutions-banner-line'></div>
                    <p>Live Interaction</p>
                  </div>
                  <div className='solutions-ludo-grid-item'>
                    <img src="/bot.png" alt="" />
                    <div className='solutions-banner-line'></div>
                    <p>Smart AI Bots</p>
                  </div>
                  <div className='solutions-ludo-grid-item'>
                    <img src="/chat.png" alt="" />
                    <div className='solutions-banner-line'></div>
                    <p>In-Game Chats</p>
                  </div>
                  <div className='solutions-ludo-grid-item'>
                    <img src="/security.png" alt="" />
                    <div className='solutions-banner-line'></div>
                    <p>Anti-Fraud Algorithms</p>
                  </div>
                  <div className='solutions-ludo-grid-item'>
                    <img src="/platform.png" alt="" />
                    <div className='solutions-banner-line'></div>
                    <p>Cross-Platform Compatibility</p>
                  </div>
                  <div className='solutions-ludo-grid-item'>
                    <img src="/social-media.png" alt="" />
                    <div className='solutions-banner-line'></div>
                    <p>Social-Media Integration</p>
                  </div>

                </div>
            </div>
          <div className='crash-solutions-img'>
            <div className='crash-overlay-images-div'>
            <img src="/crashPage/p1.png" alt="" className='crash-overlay-images crash-over1'/>
            </div>
            <div className='crash-overlay-images-div'>
              <img src="/crashPage/p2.png" alt=""  className='crash-overlay-images crash-over2'/>
            </div>
            <div className='crash-overlay-images-div'>
              <img src="/crashPage/c1.png" alt=""  className='crash-overlay-images crash-over3'/>
            </div>
            <div className='crash-overlay-images-div'>
              <img src="/crashPage/c2.png" alt=""  className='crash-overlay-images crash-over4'/>
            </div>
            <div className='crash-overlay-images-div'>
              <img src="/crashPage/c3.png" alt=""  className='crash-overlay-images crash-over5'/>
            </div>
          </div>
        </div>
      </div>

      <PromoTools />
      <PlatformSection/>
      <PlatformImg />
      <CustomGrid/>
      <ChooseGrid />

      {/* <div className="development-process-section">
        <FeaturesGrid 
          features={developmentFeatures}
          featuresTitle={developmentTitle}
        />
      </div> */}

      <div className="faq-section">
        <FeaturesHeader featuresText={faqTitle}/>
        <AccordionSection data={accordionData} className="Crash-faq" />
      </div>

      <ContactBanner contactItems={touchItems} />

      <PaymentSection />
      <ProductSection productGrid={productItems}/>
    </div>
  )
}

export default CrashGames