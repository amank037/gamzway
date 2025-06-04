import './TableGames.css'
import LandingSection from "../../../components/LandingSection/LandingSection"
import AchievementsBanner from "../../../components/AchievementsBanner/AchievementsBanner"
import FeaturesHeader from '../../../components/FeaturesSection/FeaturesHeader/FeaturesHeader'
import PlatformSection from '../../../components/PlatformSection/PlatformSection'
import ContactBanner from '../../../components/ContactBanner/ContactBanner'
import CustomGrid from '../../../components/CustomGrid/CustomGrid'
import FeaturesGrid from '../../../components/FeaturesSection/FeaturesGrid/FeaturesGrid'
import AccordionSection from '../../../components/AccordionSection/AccordionSection'
import PaymentSection from '../../../components/PaymentSection/PaymentSection'
import ProductSection from '../../../components/ProductSection/ProductSection'

const landingItems = [
  {
    title: "TABLE GAMES DEVELOPMENT",
    description: " Table games have been a pillar of casinos since they provide players with interesting gaming relying on different skill-set, chance, or both.  Table games are now available to players globally with RNG (Random Number Generator) technology, guaranteeing fairness, openness, and excitement in every action with the change to digital gaming.  At Gamzway, we bring these experiences online and provide completely tailored Table RNG Game Development solutions meant for worldwide users.",
    description2:" Our profound developers create innovative and compatible table gaming environments to fit desktop and mobile users, whether they traditionally unique card games or traditional games like Blackjack and Roulette.",
    button: "REQUEST A QUOTE",
  }
]

const typesItems = [
  {
    featuresText:[
      {
        title: " Various Kinds of Table Games",
        description: "We address a wide spectrum of virtual table games to satisfy different tastes of casino players:"
      }
    ],
    platformGrid:[
      { 
        title: "Blackjack",
        image: "https://cdn-icons-png.flaticon.com/512/10646/10646123.png",
        description:"Blackjack is a timeless classic now driven by verified RNG for safe gameplay."
      },
      { 
        title: "Roulette",
        image: "https://cdn-icons-png.flaticon.com/512/2038/2038363.png",
        description:" European, American, and French variations include vibrant table UI for roulette."
      },
      {
        title: "Poker",
        image:"https://cdn-icons-png.flaticon.com/512/9590/9590095.png",
        description:" Poker is a popular card game with RNG-based gameplay for fair value."
      },
      {
        title: "Baccarat",
        image: "https://cdn-icons-png.flaticon.com/512/4694/4694389.png",
        description:"Smooth gameplay with adjustable betting limits and payout systems in baccarat guarantees."
      },
      { 
        title: "Teen Patti",
        image: "https://cdn-icons-png.flaticon.com/512/1055/1055846.png",
        description:" Popular in India and Asian countries, Teen Patti presents RNG-backed fair value."
      },
      { 
        title: "Andar Bahar",
        image: "https://cdn-icons-png.flaticon.com/512/10073/10073807.png",
        description:"Available on digital version, fast-paced card game with regional appeal called Andar Bahar."
      },
      { 
        title: "Sic Bo",
        image: "https://cdn-icons-png.flaticon.com/512/7400/7400798.png",
        description:"Sic Bo is a real-time outcome based dice game enabled by RNG with safe betting."
      },
      { 
        title: "Dragon Tiger",
        image: "https://www.kpis.in/newassets/img/dragon-tiger/dragon-tiger.png",
        description:" Dragon Tiger is a quick RNG outcome simple but interesting game."
      },
      { 
        title: "Hi-Lo",
        image: "https://cdn-icons-png.flaticon.com/512/10553/10553465.png",
        description:"Hi-Lo is a simple game with real-time outcome based on RNG."
      }
    ]
  }
]

const hireTitle = [
  {
    title: "Our RNG Games' Characteristics",
    description: " Our RNG table games are built to give a flawless, interesting, and safe player experience.  Among the main features are:"
  }
]

const touchItems = [
  {
    featuresText: [
      {
        title: "Get in Touch - Ask Us Anything",
      }
    ],
    description: " Need a bespoke quote or have a question?  Our staff is ready to assist you, regardless of whether you run a startup introducing your first table game or an established operator growing your suite.  We are technically strong, friendly, and adaptable in our approach to problems.",
    hrefText: "CONTACT US",
  }
]

const platformItems = [
  {
    featuresText:[
      {
        title: " Our platforms for Live RNG Games",
        description: " We are in favour of RNG table game creation and implementation on all main platforms:"
      }
    ],
    platformGrid:[
      {
        image: "https://beta.mobzway.com/assets/images/HTML_five-broweswer.webp",
        title: " HTML5 web-based platforms",
        description: " There are no downloads required, players enjoy games right away from browsers."
      },
      {
        image: "https://img.icons8.com/?size=480&id=17836&format=png",
        title: "Mobile Devices (Android and iOS)",
        description: " Responsive UI and real-time sync native or hybrid app development."
      },
      {
        image: "https://beta.mobzway.com/assets/images/Mac_PC.webp",
        title: "Desktop Apps",
        description: "Desktop apps with simple controls cross-platform builds for Windows/macOS."
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
    title: " How We Design & Develop the Best RNG Games",
    description: "Our approach of game production is meant to produce excellence, quickness, and customising:"
  }
]

const developmentFeatures = {
  sections: [
    {
      title: "Always Here to Support You",
      points: [
        "24/7 technical support",
        "Game updates and security patches",
        "Performance monitoring and issue resolution",
        "Dedicated project manager and account executive"
      ]
    },
    {
      title: "RNG Game Development Process",
      points: [
        "Requirement Gathering",
        "Game Design & Wireframing",
        "Development & Integration",
        "Testing & QA"
      ]
    },
    {
      title: "Launch & Global Support",
      points: [
        "Deployment and hosting setup",
        "Long-term maintenance",
        "Multilingual support",
        "Multi-currency implementations for global reach"
      ]
    },
    {
      title: "Why Choose Mobzway",
      points: [
        "Years of experience in RNG game development",
        "Secure & certified RNG algorithms",
        "Turnkey and custom solutions",
        "Clients in 20+ countries"
      ]
    }
  ]
}

const faqTitle = [
  {
    title: "Live RNG Games Development – FAQs",
  }
]

const accordionData = [
  {
    title: "What is RNG in table games?",
    description: "RNG stands for Random Number Generator. It ensures the outcomes of table games are fair, unpredictable, and not manipulated."
  },
  {
    title: "Can I get a custom table game developed?",
    description: "Yes. We offer fully custom RNG table game development with branding, UI, and gameplay tailored to your needs."
  },
  {
    title: "Are RNG games legal?",
    description: "Yes, as long as they follow regional gaming laws and use certified RNG engines. We ensure compliance across all major jurisdictions."
  },
  {
    title: "What platforms do you support?",
    description: "We develop for web, mobile (Android/iOS), desktop, and white-label platforms."
  },
  {
    title: "Do you provide post-launch support?",
    description: "Absolutely. We offer full technical support, version updates, and game upgrades."
  }
]

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

const TableGames = () => {
  return (
    <div className="table-game">
      <div className="landing-table-section">
      <LandingSection landingItems={landingItems}/>
      </div>

      <AchievementsBanner />

      <div className="table-types">
        <PlatformSection platformItems={typesItems}/>
        <h3 className='table-types-desc'>Every game is designed for performance, fairness, and user involvement on many devices.</h3>
      </div>

      <div className='solutions-crash-section'>
        <div className='solutions-crash-top'>
          <FeaturesHeader featuresText={hireTitle}/>
        </div>

        <div className='solutions-crash-bottom'>
          <div className='solutions-desc-container'>
            <div className='solutions-desc'>
              <br/><br/>
              <span className='text-yellow'>Our table games are built on principles of fairness, engagement, and reliability.</span>
              <br/><br/>
              <ul>
                <li>Clearly Fair RNG Engine guarantees objective results and adherence to world standards.</li>
                <br/>
                <li> Designed for cross-platform gaming, High-Performance Game Engine Built with Unity, HTML5, or Phaser</li>
                <br/>
                <li>Chat Options and Multiplayer</li>
                <br/>
                <li>Multi-language and Multi-currency Support</li>
                <br/>
                <li>Advanced SSL Security</li>
                <br/>
                <li>Design interactive, socially interesting gaming worlds.</li>
                <br/>
                <li>  Real-Time Leaderboards & Statues</li>
                <br/>
                <li> Track live performances to keep players competitive and involved.</li>
              </ul>
            </div>
          </div>
          <div className='solutions-img'>
            <img src="https://beta.mobzway.com/assets/images/rummy-game-development/hire-rummy-game-developer.webp" alt="" />
          </div>
        </div>
      </div>

      <ContactBanner contactItems={touchItems}/>

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

      <PaymentSection />

      <ProductSection productGrid={productItems}/>

    </div>
  )
}

export default TableGames