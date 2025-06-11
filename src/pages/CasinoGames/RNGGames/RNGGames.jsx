import './RNGGames.css'
import LandingSection from "../../../components/LandingSection/LandingSection"
import AchievementsBanner from "../../../components/AchievementsBanner/AchievementsBanner"
import PlatformSection from '../../../components/PlatformSection/PlatformSection'
import PaymentSection from '../../../components/PaymentSection/PaymentSection'
import ProductSection from '../../../components/ProductSection/ProductSection'
import ContactBanner from '../../../components/ContactBanner/ContactBanner'
import FeaturesHeader from '../../../components/FeaturesSection/FeaturesHeader/FeaturesHeader'
import FeaturesGrid from '../../../components/FeaturesSection/FeaturesGrid/FeaturesGrid'
import CustomGrid from '../../../components/CustomGrid/CustomGrid'
import AccordionSection from '../../../components/AccordionSection/AccordionSection'

import LandingPageV2 from '../../../components/LandingPageV2/LandingPageV2'
import FeaturesGridV4 from '../../../components/FeaturesGridV4/FeaturesGridV4'
import PlatformImg from '../../../components/LudoPlatformImg/LudoPlatformImg'
import ChooseGrid from '../../../components/ChooseGrid/ChooseGrid'

const landingItems = [
  {
    title: "RNG GAME DEVELOPMENT",
    description: "Digital games known as random number generator (RNG) games rely on intricate algorithms to generate totally random, fair, and objective results.",
    description2: "Whether it's a card dealt, a dice rolled, or a slot spin, RNG technology guarantees that every game outcome—independently and randomly—is produced free from control or outside influence.",
    button: "REQUEST A DEMO",
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

const typesItems = [
  {
    featuresText:[
      {
        title: "RNG Game Forms",
        description: "We serve a broad range of RNG-based game types, therefore enabling our clients to create an interesting and varied portfolio. Our RNG game offers:"
      }
    ],
    platformGrid:[
      {
        image: "https://cdn-icons-png.flaticon.com/512/8336/8336949.png",
        title: "RNG Slots",
        description: "Designed for both casual and high-rolled gamers, offering a broad spectrum of themes, paylines, and extra features."
      },
      {
        image: "https://cdn-icons-png.flaticon.com/512/1624/1624736.png",
        title: "RNG Card Games",
        description: "Enjoy statistically fair outcomes in favourites including Blackjack, Baccarat, Teen Patti, poker, and Andar Bahar."
      },
      {
        image: "https://cdn-icons-png.flaticon.com/512/2656/2656505.png",
        title: "RNG Table Games",
        description: "Digital iterations of well-known casino games such Roulette, Craps, and Sic Bo."
      },
      {
        image: "https://cdn-icons-png.flaticon.com/512/2329/2329238.png",
        title: "RNG Arcade Games",
        description: "Unique games meant for quick-paced gaming like crash games, wheel of fortune, and dice-based games."
      },
      {
        image: "https://cdn-icons-png.flaticon.com/512/536/536146.png",
        title: "RNG Lottery Games",
        description: "Virtual lottery draws and number prediction games including real-time outcomes."
      },
      {
        image: "https://cdn-icons-png.flaticon.com/512/16492/16492724.png",
        title: "RNG Keno & Bingo",
        description: "Popular in informal gaming settings, provides social entertainment with random ball pulls."
      }
    ]
  }
]

const featuresItems = [
  {
    title: "The Games We Offer",
    description: "Our large range of RNG games is meant to keep your users interested and occupied. Right now, we have:"
  } 
]

const featuresGrid = [
  { 
    title: "Classical and Video Slots",
    image: "https://cdn-icons-png.flaticon.com/512/7400/7400798.png"
  },
  { 
    title: "Progressive Jackpots Games",
    image: "https://cdn-icons-png.flaticon.com/512/2460/2460454.png"
  },
  { 
    title: "RNG BlackJack",
    image: "https://cdn-icons-png.flaticon.com/512/10646/10646123.png"
  },
  { 
    title: "RNG Baccarat",
    image: "https://cdn-icons-png.flaticon.com/512/10553/10553465.png"
  },
  { 
    title: "European Roulette",
    image: "https://cdn-icons-png.flaticon.com/512/2038/2038363.png"
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
  }
]

const hireTitle = [
  {
    title: "Characteristics of our RNG Games",
  }
]

const platformItems = [
  {
    featuresText:[
      {
        title: "RNG Game Platforms: ours",
        description: "We present RNG games on strong, scalable systems supporting:"
      }
    ],
    platformGrid:[
      {
        image: "https://beta.mobzway.com/assets/images/HTML_five-broweswer.webp",
        title: "HTML 5 Web Browsers",
        description: ""
      },
      {
        image: "https://img.icons8.com/?size=480&id=17836&format=png",
        title: "Mobile (Android and iOS)",
        description: ""
      },
      {
        image: "https://beta.mobzway.com/assets/images/Mac_PC.webp",
        title: "Desktop (Windows/macOS)",
        description: ""
      },
      {
        image: "https://img.icons8.com/?size=480&id=IPzemd2v4Ubj&format=png",
        title: "White Label Casino Platforms",
        description: ""
      },
      {
        image: "https://img.icons8.com/?size=200&id=MKRHZpOBBZqD&format=png",
        title: "Aggregation Platforms",
        description: ""
      },
      {
        image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
        title: "Custom Platforms",
        description: ""
      }
    ]
  }
]

const crmTitle = [
  { 
    title: "CRM and Backoffice",
    description: "Managing a casino goes beyond providing excellent games. Our sophisticated Backoffice & CRM package guarantees that you run your company without problems:" 
  }
]

const crmItems = [
  {
    title: "Player Control",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/player-management.png"
  },
  {
    title: "Promotion Engine",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/promotion-management.png"
  },
  {
    title: "Analytics Dashboard",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/analytics.png"
  },
  {
    title: "KYC & AML Tools",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/user-management.png"
  },
  {
    title: "Game Management",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/game-management.png"
  },
  {
    title: "Affiliate System",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/affiliate-management.png"
  },
  {
    title: "CRM Integration",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/notificstion-management.png"
  },
  {
    title: "User Segmentation",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/user-management.png"
  }
]

const developmentTitle = [
  {
    title: "How We Create the Greatest RNG Games",
    description: "At Gamzway, we iteratively and strategically build our RNG games to guarantee their highest quality and interaction."
  }
]

const developmentFeatures = {
  sections: [
    {
      title: "Consultation and Game Concept",
      points: [
        "Understanding your target audience and objectives",
        "Game types, themes, and mechanics discussion",
        "Monetization strategy planning",
        "Market analysis and positioning"
      ]
    },
    {
      title: "Game Design - UI/UX",
      points: [
        "User-friendly interface design",
        "Asset library creation",
        "Detailed wireframes",
        "Player engagement optimization"
      ]
    },
    {
      title: "RNG Algorithm Development",
      points: [
        "Implementation of proven RNG methods",
        "Industry fairness standards compliance",
        "Security and verification systems",
        "Certification preparation"
      ]
    },
    {
      title: "Game Programming",
      points: [
        "Unity, Cocos2d-x, HTML5 development",
        "Cross-platform compatibility",
        "Performance optimization",
        "Code quality assurance"
      ]
    },
    {
      title: "Testing & Integration",
      points: [
        "Comprehensive QA process",
        "Compatibility testing",
        "RNG audits and certification",
        "Performance benchmarking"
      ]
    },
    {
      title: "Launch & Support",
      points: [
        "Deployment assistance",
        "Marketing tool integration",
        "Regular updates and maintenance",
        "Ongoing technical support"
      ]
    },
    {
      title: "10+ Years Experience",
      points: [
        "RNG game development expertise",
        "Certification experience",
        "Industry compliance knowledge",
        "Proven track record"
      ]
    },
    {
      title: "Why Choose Gamzway",
      points: [
        "Turn-key RNG solutions",
        "Player-centric design approach",
        "International gaming standards",
        "Flexible engagement models"
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
    title: "Describe a RNG game.",
    description: "Using algorithms, RNG (Random Number Generator) games produce random results for every play, therefore guaranteeing fair play and unpredictability."
  },
  {
    title: "Certified are your RNG games?",
    description: "Indeed, we create games employing algorithms that, upon demand, can be verified by agencies as iTech Labs, GLI, or eCOGRA."
  },
  {
    title: "Could I ask for tailored RNG game development?",
    description: "Sure. Customised RNG game design and development for your theme and business strategy is what we offer."
  },
  {
    title: "Development of a RNG game takes what length of time?",
    description: "Usually depending on complexity, design, and testing needs, 4 to 12 weeks."
  },
  {
    title: "Supported platforms are?",
    description: "Every game runs Android, iOS, PC platforms, web browsers."
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

const RNGGames = () => {
  return (
    <div className="rng-game">
      <div className="landing-rng-section">
      <LandingPageV2 landingItems={landingItems} landingImages={landingImages} />
      </div>
      <AchievementsBanner />

      <FeaturesGridV4 featuresGrid={featuresGrid} featuresTitle={featuresItems} />

      <PlatformSection />
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
        <AccordionSection data={accordionData} className="rng-faq" />
      </div>

      <ContactBanner contactItems={touchItems} />

      <PaymentSection />
      <ProductSection productGrid={productItems}/>
    </div>
  )
}

export default RNGGames