import './LudoGameAPI.css'
import LandingSection from "../../../components/LandingSection/LandingSection"
import AchievementsBanner from "../../../components/AchievementsBanner/AchievementsBanner"
import FeaturesHeader from '../../../components/FeaturesSection/FeaturesHeader/FeaturesHeader'
import FeaturesGrid from '../../../components/FeaturesSection/FeaturesGrid/FeaturesGrid'
import PlatformSection from '../../../components/PlatformSection/PlatformSection'
import ContactBanner from '../../../components/ContactBanner/ContactBanner'
import CustomGrid from '../../../components/CustomGrid/CustomGrid'
import AccordionSection from '../../../components/AccordionSection/AccordionSection'
import PaymentSection from '../../../components/PaymentSection/PaymentSection'
import ProductSection from '../../../components/ProductSection/ProductSection'

import FeaturesGridV5 from '../../../components/FeaturesGridV5/FeaturesGridV5'
import PlatformImg from '../../../components/LudoPlatformImg/LudoPlatformImg'
import PromoTools from '../../../components/PromoTools/PromoTools'
import ChooseGrid from '../../../components/ChooseGrid/ChooseGrid'
import FeaturesBanner from '../../../components/FeaturesBanner/FeaturesBanner'

const landingItems = [
  {
    title: "LUDO GAME API DEVELOPMENT",
    description: "Gamzway provides a strong and scalable Ludo Game API designed to satisfy high-performance needs while maintaining games fair, fluid, and interesting therefore enabling gaming companies with this potential.",
    description2:"Entrepreneurs and businesses wishing to enter or grow in the online board game market will find our Ludo Game API a plug-and-play solution.  Our API provides a technical and creative edge whether you are expanding an existing product line or starting your platform.",
    button: "REQUEST A QUOTE",
  }
]

const platformFeatures = {
  sections: [
    {
      title: "CORE PLATFORM FEATURES",
      points: [
        "Scalable architecture ",
        "Smooth, lag-free gameplay across devices",
        "Seamlessly handle player economy",
        "Safe, anti-cheat systems"
      ]
    },
    {
      title: "GAME MODES & CUSTOMIZATION",
      points: [
        "Classic, quick, private rooms, and tournaments.",
        "Real Money Gaming's (RMG) support",
        "Provide games in regional languages",
        "Multiple theme options and UI elements"
      ]
    },
    {
      title: "GAMEPLAY MECHANICS",
      points: [
        "Table layouts for two- and four-players",
        "Based on RNG fairness, dice roll engine",
        "Safety zones, auto mobility, and more in game flow mechanics",
        "Advanced matchmaking systems for balanced gameplay"
      ]
    },
    {
      title: "FEATURES FOR PLAYERS",
      points: [
        "Emojis and in-game chats",
        "Comprehensive leaderboard system",
        "Regular tournaments and special events",
        "Friend lists and player profiles"
      ]
    }
  ]
}

const platformTitle = [
  {
    title: "LUDO GAME API FEATURES"
  }
]

const platformItems = [
  {
    featuresText:[
      {
        title: "LUDO GAME API PLATFORMS",
        description: "Perfect across all main platforms, Gamzway's Ludo API lets you reach players anywhere"
      }
    ],
    platformGrid:[
      {
        image: "https://beta.mobzway.com/assets/images/HTML_five-broweswer.webp",
        title: "HTML5 Web Platform",
        description: "HTML5-based responsive game interface on Web, ensuring cross-browser compatibility and seamless gameplay experience."
      },
      {
        image: "https://beta.mobzway.com/assets/images/Native_Mobile.webp",
        title: "Mobile Platform (Android & iOS)",
        description: "Supported are both native and hybrid Android apps, along with perfect fit for iPhone and iPad devices."
      },
      {
        image: "https://beta.mobzway.com/assets/images/Mac_PC.webp",
        title: "Desktop Platform",
        description: "Desktop: macOS and Windows compatible builds. Tablets and smart TVs have a layout designed for better viewing of bigger screens."
      },
    ]
  }
]

const findItems = [
  {
    featuresText:[
      {
        title:"FIND OUT HOW WE MIGHT BE USEFUL"
      }
    ],
    description: "From concept to post-launch optimisation, Gamzway is always there to support strategic development and technical excellence. Let us take care of the tech so you may concentrate on user acquisition, retention, and monetising.",
    hrefText: "GET IN TOUCH"
  }
]

const chooseTitle = [
  {
    title: "LOBBY, BACK OFFICE, MULTIPLE THEMES",
    description: " Our backend system is meant to give you complete control and comprehensive analytics, so enabling strategic growth."
  }
]

// const crmItems = [
//   {
//     title: "Dashboard",
//     image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/dashboard.png"
//   },
//   {
//     title: "Game Rooms",
//     image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/game-management.png"
//   },
//   {
//     title: "Tournaments",
//     image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/tournament-management.png"
//   },
//   {
//     title: "Hand History",
//     image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/game-history.png"
//   },
//   {
//     title: "Player Management",
//     image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/player-management.png"
//   },
//   {
//     title: "Users & Sub Admins",
//     image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/user-management.png"
//   },
//   {
//     title: "Affiliates",
//     image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/affiliate-management.png"
//   },
//   {
//     title: "Finance",
//     image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/finance-management.png"
//   },
//   {
//     title: "Notifications",
//     image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/notificstion-management.png"
//   },
//   {
//     title: "Promotions",
//     image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/promotion-management.png"
//   },
//   {
//     title: "Analytics",
//     image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/analytics.png"
//   },
//   {
//     title: "Reports",
//     image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/reports.png"
//   }
// ]

const servicesTitle = [
  {
    title: "WHY CHOOSE GAMZWAY'S LUDO GAME API?",
    description: "Companies aiming at sustainable success in online gaming choose Gamzway as their first choice. We create alliances rather than only products."
  }
]

const faqTitle = [
  {
    title: "LUDO GAME API FAQ",

  }
]
const faqData = [
  {
    title: "Often asked questions regarding the Ludo Game API: Integration of your Ludo API takes what length of time?",
    description: "Depending on your platform readiness, basic integration can take three to seven working days."
  },
  {
    title: "Is the game RNG-certified?",
    description: "It is indeed RNG. Ideas provide the foundation of our dice-roll reasoning, therefore guaranteeing fairness and unpredictability."
  },
  {
    title: "Is it possible to incorporate later on real-money gaming capabilities?",
    description: "Certainly. Our API is created in modular fashion. Start with free play and scale to RMG when ready."
  },
  {
    title: "Does Ludo have a white-label solution available?",
    description: "Surely. With your logo, UI themes, and administrative controls, we provide totally branded white-label Ludo games."
  },
  {
    title: "Exist any pricing strategies?",
    description: "We provide one-time purchase choices, monthly licensing, and revenue-sharing. Another option is custom pricing."
  }
]

const beginItems = [
  {
    featuresText:[
      {
        title:"Begin Your Business Travel with Gamzway"
      }
    ],
    description: " Ludo is an opportunity to engage, entertain, and expand your company rather than only a game.  Using Gamzway's Ludo Game API, you are launching a brand, an experience, and a scalable revenue stream rather than only a game.",
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

const LudoGameAPI = () => {
  return (
    <div className="ludo-api-game">

      <div className="landing-ludo-api-section">
        <LandingSection landingItems={landingItems}/>
      </div>

      <AchievementsBanner />

      <FeaturesBanner />

      <FeaturesGrid features={platformFeatures} featuresTitle={platformTitle} />

      <PromoTools />
      <PlatformSection />
      <PlatformImg />
      <CustomGrid/>
      <ChooseGrid />

      <ContactBanner contactItems={findItems}/>

      {/* <div className='solutions-ludo-section'>
        <div className='solutions-ludo-top'>
          <FeaturesHeader featuresText={servicesTitle}/>
        </div>
        <div className='solutions-ludo-bottom'>
          <div className='solutions-img-1'>
            <div className='sol-ludo-board-container'>
              <img src="/ludoPage/solutions/1-01.webp" alt="" className="image-stack"/>
            </div>
            <div className='sol-ludo-pieces-container sol-ludo-piece1'>
              <img src="/ludoPage/solutions/2-01.webp" alt="" className="image-stack"/>
            </div>
            <div className='sol-ludo-pieces-container sol-ludo-piece2'>
              <img src="/ludoPage/solutions/3-01.webp" alt="" className="image-stack"/>
            </div>
            <div className='sol-ludo-pieces-container sol-ludo-piece3'>
              <img src="/ludoPage/solutions/4-01.webp" alt="" className="image-stack"/>
            </div>
            <div className='sol-ludo-pieces-container sol-ludo-piece4'>
              <img src="/ludoPage/solutions/5-01.webp" alt="" className="image-stack"/>
            </div>
            <div className='sol-ludo-dice-container sol-ludo-dice1'>
              <img src="/ludoPage/solutions/6-01.webp" alt="" className="image-stack"/>
            </div>
            <div className='sol-ludo-dice-container sol-ludo-dice2'>
              <img src="/ludoPage/solutions/7-01.webp" alt="" className="image-stack"/>
            </div>
          </div>

          <div className='solutions-desc-container'>
            <p className='solutions-desc'>
                  <br/>
                  <ul>
                    <li>Battle-Tested API: Live on many real-money platforms with tested performance and uptime.</li>
                    <br/>
                    <li>Fast Go-To-Market: Install your platform not in months but in days.</li>
                    <br/>
                    <li>With logos, themes, and regulations, make the game really yours.</li>
                    <br/>
                    <li>Choose white-label, licencing, or specialised development among flexible engagement models.</li>
                    <br/>
                    <li>Expert Support: 24/7 technical support under committed project managers.</li>
                    <br/>
                    <li>Open Pricing: Just plain, fair, scalable pricing without any hidden expenses.</li>
                    <br/>
                    <li>We create alliances rather than only products.                    </li>
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

      <PaymentSection />

      <ProductSection productGrid={productItems}/>

      <ContactBanner contactItems={beginItems}/>

    </div>
  )
}

export default LudoGameAPI