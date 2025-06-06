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

const landingItems = [
  {
    title: "CRASH GAME DEVELOPMENT",
    description: "Faster, adrenaline-fueled action in crash games has transformed the online casino gaming scene. These games follow basic concepts whereby players make bets before a rising multiplier 'crashes'. Aim is to Cash out to lock your gains before the game crashes.",
    description2: "With proven fair algorithms, real-time interaction, and flawless graphics, live RNG (Random Number Generator) crash games provide an added degree of excitement. Crash games can quickly enthral a large audience regardless of your goals—engaging casual gamers or high-stakes bettors.",
    button: "REQUEST A QUOTE",
  }
]

const typesItems = [
  {
    featuresText:[
      {
        title: "Categories of Crash Games",
        description: "Our speciality at Gamzway is developing several variants of crash games to fit various player tastes and platform systems. We provide the following really well-liked varieties:"
      }
    ],
    platformGrid:[
      {
        image: "https://cdn-icons-png.flaticon.com/512/8336/8336949.png",
        title: "Classic Crash",
        description: "A classic multiplier game in which the thrill rises with increasing multiplier count."
      },
      {
        image: "https://cdn-icons-png.flaticon.com/512/1624/1624736.png",
        title: "Rocket Launch Crash",
        description: "Visually spectacular game with rocket-themed graphics and explosive effects."
      },
      {
        image: "https://cdn-icons-png.flaticon.com/512/2656/2656505.png",
        title: "Crypto Crash",
        description: "Designed for crypto casinos with instantaneous transactions and blockchain-based fairness."
      },
      {
        image: "https://cdn-icons-png.flaticon.com/512/2329/2329238.png",
        title: "Airplane Crash",
        description: "A themed variation whereby players must eject before the aircraft disappears as it rises."
      },
      {
        image: "https://cdn-icons-png.flaticon.com/512/536/536146.png",
        title: "Real-time Crash",
        description: "Real-time crash games whereby several participants gamble, chat, and cash out collectively."
      },
      {
        image: "https://cdn-icons-png.flaticon.com/512/536/536146.png",
        title: "Jackpot Crash Games",
        description: "These versions incorporate a progressive jackpot system, where a portion of each bet contributes to a jackpot pool."
      }
    ]
  }
]

const featuresItems = [
  {
    title: "Activities We Offer",
    description: "Apart than crash games, we present a whole suite of Live RNG-based casino games:"
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
    title: "Our RNG Games' Characteristics",
    description: "We designed our RNG games with the contemporary player in mind. Important elements consist in:"
  }
]

const platformItems = [
  {
    featuresText:[
      {
        title: "Our Online RNG Game Platforms",
        description: "RNG games developed by Gamzway fit several platforms and locations. We affirm:"
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
    title: "How We Create the Greatest RNG Games",
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
        "RNG engine development",
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
        "RNG gaming expertise",
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
    title: "RNG Games Development FAQ"
  }
]

const accordionData = [
  {
    title: "Different from live dealer games, what distinguishes RNG games?",
    description: "Faster, more scalable, and perfect for automated casinos, RNG games create outcomes using mathematical algorithms."
  },
  {
    title: "Are crash games allowed?",
    description: " Many countries allow crash games; if the platform follows local gambling regulations and employs certified RNG software, they are lawful."
  },
  {
    title: "Can we include your crash games into our current casino?",
    description: " Indeed, we offer flawless API interaction with your wallet structure and present systems."
  },
  {
    title: "Building a crash or RNG game takes what length of time?",
    description: "Usually depending on platform needs and customising, it takes 4 to 8 weeks."
  },
  {
    title: "Are white label RNG casino platforms something you provide?",
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
    description: " All set to realise your casino concept?  Either want a live demo or need assistance selecting the appropriate RNG games?",
    hrefText: "CONTACT US",
  }
]

const CrashGames = () => {
  return (
    <div className="crash-game">
      <div className="landing-crash-section">
        <LandingSection landingItems={landingItems}/>
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
      <AchievementsBanner />
      
      <div className="crash-types">
        <PlatformSection platformItems={typesItems}/>
      </div>

      <div className='crash-features-section'>
        <FeaturesHeader featuresText={featuresItems} />
        <div className='crash-features-grid'>
          {featuresGrid.map((item, index) => (
            <div className='crash-features-grid-item' key={index}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className='solutions-crash-section'>
        <div className='solutions-crash-top'>
          <FeaturesHeader featuresText={hireTitle}/>
        </div>

        <div className='solutions-crash-bottom'>
          <div className='solutions-desc-container'>
            <div className='solutions-desc'>
              <br/><br/>
              <span className='text-yellow'>Our crash games are built on principles of fairness, engagement, and reliability.</span>
              <br/><br/>
              <ul>
                <li>Provably Fair Algorithms: Ensuring fairness</li>
                <br/>
                <li>Reactive Gameplay Across Devices</li>
                <br/>
                <li>Custom UI/UX Reflecting Your Brand</li>
                <br/>
                <li>Multi-language and Multi-currency Support</li>
                <br/>
                <li>Advanced SSL Security</li>
                <br/>
                <li>HD Graphics & Sound Effects</li>
                <br/>
                <li>AI-Driven Smart Game Logic</li>
                <br/>
                <li>Seamless API Integration</li>
              </ul>
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

      <PlatformSection platformItems={platformItems}/>

      <CustomGrid customTitle={crmTitle} customgridItems={crmItems}/>

      <div className="development-process-section">
        <FeaturesGrid 
          features={developmentFeatures}
          featuresTitle={developmentTitle}
        />
      </div>

      <div className="faq-section">
        <FeaturesHeader featuresText={faqTitle}/>
        <AccordionSection data={accordionData} className="rng-faq" />
      </div>

      <ContactBanner contactItems={touchItems} />

      <PaymentSection />
      <ProductSection productGrid={productItems}/>
    </div>
  )
}

export default CrashGames