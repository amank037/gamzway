import './SnakeLadderGame.css'
import LandingSection from "../../../components/LandingSection/LandingSection"
import AchievementsBanner from "../../../components/AchievementsBanner/AchievementsBanner"
import FeaturesHeader from '../../../components/FeaturesSection/FeaturesHeader/FeaturesHeader'
import FeaturesGrid from '../../../components/FeaturesSection/FeaturesGrid/FeaturesGrid'
import CustomGrid from '../../../components/CustomGrid/CustomGrid'
import ContactBanner from '../../../components/ContactBanner/ContactBanner'
import AccordionSection from '../../../components/AccordionSection/AccordionSection'
import PaymentSection from '../../../components/PaymentSection/PaymentSection'
import ProductSection from '../../../components/ProductSection/ProductSection'
import FeaturesGridV5 from '../../../components/FeaturesGridV5/FeaturesGridV5'
import FeaturesBanner from '../../../components/FeaturesBanner/FeaturesBanner'
import ChooseGrid from '../../../components/ChooseGrid/ChooseGrid'
import PromoTools from '../../../components/PromoTools/PromoTools'
import PlatformSection from '../../../components/PlatformSection/PlatformSection'
import LandingPageV2 from '../../../components/LandingPageV2/LandingPageV2'
import SnakeLadderLanding from './SnakeLadderLanding/SnakeLadderLanding'
import PlatformImg from '../../../components/LudoPlatformImg/LudoPlatformImg'
import SolutionsSection from '../../../components/SolutionsSection/SolutionsSection'

const landingItems = [
  {
    title: "SNAKE LADDER GAME",
    description: "Over decades, this venerable board game has developed from a physical game to an exciting digital experience accessible on desktop computers, tablets, and smartphones.",
    description2: "Our area of expertise at Gamzway is developing outstanding Snake Ladder Game applications combining contemporary tech components with retro gameplay. ",
    button: "REQUEST A QUOTE",
  }
]

// const landingImages = [
//   {
//     image: "https://beta.mobzway.com/assets/images/pokerSlide1.webp"
//   },
//   {
//     image: "https://beta.mobzway.com/assets/images/pokerSlide1.webp"
//   },
//   {
//     image: "https://beta.mobzway.com/assets/images/pokerSlide1.webp"
//   },
//   {
//     image: "https://beta.mobzway.com/assets/images/pokerSlide1.webp"
//   },
//   {
//     image: "https://beta.mobzway.com/assets/images/pokerSlide1.webp"
//   },
// ]

const variationTitle = [{
  title: "Variations in Snake Ladder Game"
}]

const variationGrid = [
  {
    title: "2 Player",
    image:"/snakePage/types/2 player.png",
  },
  {
    title: "4 Player",
    image:"/snakePage/types/4 player-01-01.png",
  },
  {
    title: "Private Room",
    image:"/snakePage/types/private room.png",
  },
  {
    title: "Pass/Play",
    image:"/snakePage/types/pass nd play-01.png",
  },
  {
    title: "Private Room For Other Players",
    image:"/snakePage/types/private room for player-01.png",
  }
]

const featuresTitle = [{
  title: "Online Solutions for Snake Ladder Games"
}]

const featuresContent = {
  sections: [{
    title: "COMPREHENSIVE SOLUTIONS",
    points: [
      "Gamzway offers whole Snake Ladder Game development solutions targeted for B2B clients: totally branded and ready-to-release white-label solutions using your company logo and theme.",
      "Features especially suited for your business goals, gaming dynamics, and designs define custom game development."
    ]
  }, {
    title: "DEVELOPMENT FEATURES",
    points: [
      "iOS, Android, and web browsers get perfect cross-platform support.",
      "Advanced algorithms and low-latency servers enable to produce smooth multiplayer interaction.",
      "Track via analytics integration player retention, interaction, and in-app purchases."
    ]
  }, {
    title: "BUSINESS SOLUTIONS",
    points: [
      "Fully scalable game design",
      "Backends featuring rich elements",
      "Instruments for marketing and income generating"
    ]
  }, {
    title: "SUPPORT & SECURITY",
    points: [
      "Regular revisions and technical support",
      "Security systems compliant for industries",
      "From concept to execution and upkeep, our team ensures a flawless road from growth to testing"
    ]
  }]
}

// const solutionsTitle = [{
//   title: "Looking for ideal Snake Ladder Game Solution for Your Company?"
// }]

// const solutionsContent = {
//   sections: [{
//     title: "PLATFORM SUPPORT",
//     icon: "fa-mobile-alt",
//     points: ["Android (Tablets & Phones)", "iOS, or iPhone and iPad", "Web browsers including Chrome, Firefox, Safari, etc."]
//   }, {
//     title: "DESKTOP & HYBRID",
//     icon: "fa-desktop",
//     points: ["Desktop applications (Windows and macOS)", "Hybrid platforms and smart TVs"]
//   }, {
//     title: "GAME FEATURES",
//     icon: "fa-gamepad",
//     points: [
//       "Real-time matching for multiplayer games",
//       "Solo gaming alternative driven by artificial intelligence",
//       "Rankings and leaderboards"
//     ]
//   }, {
//     title: "USER FEATURES",
//     icon: "fa-users",
//     points: [
//       "Text messaging and voice chat",
//       "User profile and avatars",
//       "In-app purchases and incentives"
//     ]
//   }]
// }

const solutionsTitle = [{
  title: "Looking for ideal Snake & Ladder Game Solution for Your Company?",
  description:" At Gamzway, we provide whole Snake & Ladder game development solutions with modern technology and safe backend support.  Our solutions are catered to your particular objectives regardless of your business organisation, community platform, or gaming company."
}]

const solutionsContent = [
  {
    image:"/snakePage/bg-over-mini.png",
    gametype: "Skill Game",
    rtp: "90%",
    devices: "Android, iOS, Web, Desktop",
    background:"/snakePage/emptyBg.png"
  }
]

const hireTitle = [{
  title: "Why did your Snake Ladder Game originate from Gamzway?"
}]

const crmItems = [
  {
    title: "Dashboard",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/dashboard.png"
  },
  {
    title: "Game Rooms",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/game-management.png"
  },
  {
    title: "Tournaments",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/tournament-management.png"
  },
  {
    title: "Hand History",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/game-history.png"
  },
  {
    title: "Player Management",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/player-management.png"
  },
  {
    title: "Users & Sub Admins",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/user-management.png"
  },
  {
    title: "Affiliates",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/affiliate-management.png"
  },
  {
    title: "Finance",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/finance-management.png"
  },
  {
    title: "Notifications",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/notificstion-management.png"
  },
  {
    title: "Promotions",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/promotion-management.png"
  },
  {
    title: "Analytics",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/analytics.png"
  },
  {
    title: "Reports",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/reports.png"
  }
]

const crmTitle = [
  {
    title: "backoffice & CRM",
    description: "We offer the best BackOffice and CRM tools with our tambola software solutions, making game management easy. You can enjoy a user-friendly dashboard and all the essential & valuable features to manage the game rooms."
  }
]

const faqTitle = [{
  title: "Frequently Asked Questions"
}]

const faqItems = [
  {
    title: "What platforms does your Snake Ladder Game support?",
    description: "Our Snake Ladder Game enables several platforms including Android, iOS, web browsers, desktop applications, and hybrid platforms, with consistent user experience across all versions."
  },
  {
    title: "What are the key features of your Snake Ladder Game?",
    description: "Our game includes real-time multiplayer, AI-driven solo mode, leaderboards, chat features, customizable profiles, in-app purchases, push notifications, referral programs, and ad monetization modules."
  },
  {
    title: "Why choose Gamzway for Snake Ladder Game development?",
    description: "We offer experienced development teams, agile methodology, custom features, scalable architecture, and continuous post-launch support with regular updates and improvements."
  },
  {
    title: "What makes your BackOffice & CRM system special?",
    description: "Our comprehensive admin panel offers player management, game room control, tournament organization, financial monitoring, advertising management, and role-based security configurations."
  },
  {
    title: "What sets Gamzway apart from others?",
    description: "We stand out with our track record of 100+ successful projects, 24/7 support, GDPR compliance, robust security measures, competitive pricing, and quick delivery timelines."
  }
]

const startItems = [
  {
    featuresText: [
      {
        title: " Eager to start?",
      }
    ],
    description: "About ready to release your own Snake Ladder Game app?   Your consistent development friend from beginning to scale is Gamzway.   We will carefully work with you to create a customised solution with actual return on investment.   For a free consultation or live demonstration, get in touch right now.",
    hrefText: "CONTACT US"
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
    image: "https://beta.mobzway.com/assets/images/rummy-game-development/Product_Casino.webp",
    title: "Casino Games",
    description: "For the online casino game entrepreneurs and businesses, Gamzway offers customized casino game solutions. All the popular casino games like Roulette, Blackjack, Slot, Baccarat, etc. are designed and developed at our gaming studio as per your business needs.",
    href: "/casino-games"
  },
  {
    image: "https://beta.mobzway.com/assets/images/rummy-game-development/Product_Teenpatti.webp",
    title: "Teen Patti Game",
    description: "Gamzway offers ready-to-use Teen Patti solutions for business ventures. We build customized solutions for all the variants like Fox,Vintage, and Teen Patti Plus. We provide solutions for all desktop & mobile devices, and web browsers at the best prices.",
    href: "/game-apis/teen-patti"
  },
  {
    image: "https://beta.mobzway.com/assets/images/rummy-game-development/product_ludo.webp",
    title: "LUDO Game",
    description: "If you are looking forward to acquiring online ludo game solutions, Gamzway Technologies is among the most famous ludo app development companies. We offer both ready-to-live and customized gaming solutions for Android, iOS, Web, and Desktop using HTML 5.",
    href: "/skill-games/ludo"
  },
]

const launchItems = [
  {
    featuresText: [
      {
        title: "Launch Your Business Trip with Gamzway.",
        description: ""
      }
    ],
    description: "Starting your Snake Ladder game creation process with Gamzway—where your vision aligns with creativity—today. To arrange a free demo or quotation, get in touch now.",
    hrefText: "TRY DEMO"
  }
]

const deviceImages = [
  {
    image1:"/snakePage/devices/mob.png",
    image2:"/snakePage/devices/lap.png"
  }
]

const SnakeLadderGame = () => {
  return (
    <div className="snakeladder-game">
      <div className="landing-snakeladder-section">
        <SnakeLadderLanding landingItems={landingItems} />
      </div>
      {/* <AchievementsBanner /> */}
      <FeaturesBanner />
      {/* <div>
        <FeaturesHeader featuresText={variationTitle}/>
        <div className="variations-grid">
          {variationGrid.map((item, index) => (
            <div className="variation-item" key={index}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div> */}
      <FeaturesGridV5 featuresGrid={variationGrid} featuresTitle={variationTitle} />
      <SolutionsSection solutionsItems={solutionsContent} solutionsTitle={solutionsTitle} />

      <PlatformSection />
      <PlatformImg  deviceImages={deviceImages}/>
      <CustomGrid/>
      <ChooseGrid />

      {/* <FeaturesGrid features={featuresContent} featuresTitle={featuresTitle} /> */}

      {/* <div>
        <FeaturesHeader featuresText={solutionsTitle}/>
        <p className="solutions-intro">Whether your business is gaming startup, casino operator, or entrepreneur, we will assist you to create a game platform unique in the cutthroat online gaming scene.</p>
        <div className="solutions-grid">
          {solutionsContent.sections.map((section, index) => (
            <div className="solution-item" key={index}>
              <div className="solution-icon">
                <i className={`fas ${section.icon}`}></i>
              </div>
              <h3>{section.title}</h3>
              <ul>
                {section.points.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div> */}

{/* 
      <div className='solutions-rummy-section'>
        <div className='solutions-rummy-top'>
          <FeaturesHeader featuresText={hireTitle} />
        </div>

        <div className='solutions-rummy-bottom'>
          <div className='solutions-desc-container'>
            <div className='solutions-desc'>
              <br /><br />

              <br /><br />
              <div className='solutions-rummy-grid'>
                <div className='solutions-rummy-grid-item'>
                  <img src="/real-time.png" alt="" />
                  <div className='solutions-banner-line'></div>
                  <p>Live Interaction</p>
                </div>
                <div className='solutions-rummy-grid-item'>
                  <img src="/bot.png" alt="" />
                  <div className='solutions-banner-line'></div>
                  <p>Smart AI Bots</p>
                </div>
                <div className='solutions-rummy-grid-item'>
                  <img src="/chat.png" alt="" />
                  <div className='solutions-banner-line'></div>
                  <p>In-Game Chats</p>
                </div>
                <div className='solutions-rummy-grid-item'>
                  <img src="/security.png" alt="" />
                  <div className='solutions-banner-line'></div>
                  <p>Anti-Fraud Algorithms</p>
                </div>
                <div className='solutions-rummy-grid-item'>
                  <img src="/platform.png" alt="" />
                  <div className='solutions-banner-line'></div>
                  <p>Cross-Platform Compatibility</p>
                </div>
                <div className='solutions-rummy-grid-item'>
                  <img src="/social-media.png" alt="" />
                  <div className='solutions-banner-line'></div>
                  <p>Social-Media Integration</p>
                </div>
              </div>
            </div>
          </div>
          <div className='solutions-img sol-snake-img slide-cards-container'>
            <div className='sol-snake-board-container'>
              <img src="/snakePage/solutions/board.png" alt="" className="image-stack" />
            </div>
            <div className='sol-snake-dice-container sol-snake-dice-1'>
              <img src="/snakePage/solutions/dice-1.png" alt="" className="image-stack" />
            </div>
            <div className='sol-snake-dice-container sol-snake-dice-2'>
              <img src="/snakePage/solutions/dice-2.png" alt="" className="image-stack" />
            </div>
            <div className='sol-snake-container'>
              <img src="/snakePage/solutions/snake.png" alt="" className="image-stack" />
            </div>
          </div>
        </div>
      </div> */}



      <ContactBanner contactItems={startItems} />

      <div className='faq-section'>
        <FeaturesHeader featuresText={faqTitle} />

        <div className='faq-accordion-container'>
          <AccordionSection data={faqItems} />
        </div>
        <a className="faq-btn" href="">
          <span className="btn-text">ASK A QUESTION</span>
          <span className="btn-border"></span>
        </a>
      </div>

      <ProductSection productGrid={productItems} />

      <ContactBanner contactItems={launchItems} />
    </div>
  )
}

export default SnakeLadderGame