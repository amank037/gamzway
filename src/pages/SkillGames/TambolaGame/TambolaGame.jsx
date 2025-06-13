import './TambolaGame.css'
import LandingSection from "../../../components/LandingSection/LandingSection"
import AchievementsBanner from "../../../components/AchievementsBanner/AchievementsBanner"
import FeaturesHeader from '../../../components/FeaturesSection/FeaturesHeader/FeaturesHeader'
import FeaturesGrid from '../../../components/FeaturesSection/FeaturesGrid/FeaturesGrid'
import CustomGrid from '../../../components/CustomGrid/CustomGrid'
import ContactBanner from '../../../components/ContactBanner/ContactBanner'
import AccordionSection from '../../../components/AccordionSection/AccordionSection'
import PaymentSection from '../../../components/PaymentSection/PaymentSection'
import ProductSection from '../../../components/ProductSection/ProductSection'
import FeaturesGridV4 from '../../../components/FeaturesGridV4/FeaturesGridV4'
import FeaturesGridV3 from '../../../components/FeaturesGridV3/FeaturesGridV3'
import FeaturesGridV2 from '../../../components/FeaturesGridV2/FeaturesGridV2'
import ChooseGrid from '../../../components/ChooseGrid/ChooseGrid'
import FeaturesBanner from '../../../components/FeaturesBanner/FeaturesBanner'
import PlatformSection from '../../../components/PlatformSection/PlatformSection'
import PromoTools from '../../../components/PromoTools/PromoTools'
import LandingPageV2 from '../../../components/LandingPageV2/LandingPageV2'
import PlatformImg from '../../../components/LudoPlatformImg/LudoPlatformImg'
import SolutionsSection from '../../../components/SolutionsSection/SolutionsSection'
import TambolaLanding from './TambolaLanding/TambolaLanding'

const landingItems = [
  {
    title: "TAMBOLA GAME DEVELOPMENT",
    description: "Originally enjoyed at community events and meetings, it has become a well-liked online game with creative themes, customising, and real-time multiplayer support.",
    description2: " Our area of expertise at Gamzway is developing desktop, web, and mobile high-performance Tambola game applications.",
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

const variationTitle = [{
  title: "Tambola Game Features"
}]

const variationGrid = [
  {
    title: "Private Tambola Game",
    image:"/secure-data.png",
  },
  {
    title: "Multi Game Platform",
    image:"/platform-100.png"
  },
  {
    title: "In-Game Chat",
    image:"/chat.png"
  },
  {
    title: "Customised Solutions",
    image:"/browser-customization-100.png"
  }
]

const featuresTitle = [{
  title: "Internet Tambola Game Solutions"
}]

const featuresContent = {
  sections: [{
    title: "COMPREHENSIVE SOLUTIONS",
    points: [
      "At Gamzway, we provide whole Tambola game development solutions with modern technology and safe backend support.",
      "Our solutions are catered to your particular objectives regardless of your business organisation, community platform, or gaming company."
    ]
  }, {
    title: "DEVELOPMENT FEATURES",
    points: [
      "Our Tambola Game Solutions consist in tailored game development.",
      "Android, iOS, Web cross-platform support",
      "System for Creating Tickets"
    ]
  }, {
    title: "GAMEPLAY FEATURES",
    points: [
      "Integration for Real-Time Multiple Player",
      "Option for Live Calls",
      "AI-Based Auto Caller"
    ]
  }, {
    title: "BUSINESS FEATURES",
    points: [
      "Programs for Referral & Loyalty",
      "Features of Monetising Ads, Coins, In-App Purchase Notes",
      "Multilingual & Thematic Alternatives"
    ]
  }]
}

const solutionsTitle = [{
  title: "Searching for the Perfect Tambola Game Solution for Your Business?",
  description:" At Gamzway, we provide whole Tambola game development solutions with modern technology and safe backend support.  Our solutions are catered to your particular objectives regardless of your business organisation, community platform, or gaming company."
}]

const solutionsContent = [
  {
    image:"/tambolaPage/bg-over-mini.png",
    gametype: "Skill Game",
    rtp: "90%",
    devices: "Android, iOS, Web, Desktop",
    background:"/tambolaPage/bg.png"
  }
]

const hireTitle = [{
  title: "Why have your Tambola Game at Gamzway?"
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

const startItems = [
  {
    featuresText: [
      {
        title: " Eager to start?",
        description: "Gamzway is ready to provide if you're ready to start a unique, entertaining, and profitably Tambola game.  From idea to implementation, our knowledgeable game developers, designers, and strategists work with you."
      }
    ],
    description: "Your company will profit from and your users will enjoy a Tambola app you co-created.  Contact to arrange a free consultation right now!.",
    hrefText: "CONTACT US"
  }
]

const faqTitle = [{
  title: "Frequently Asked Questions"
}]

const faqItems = [
  {
    title: "App development for a Tambola game takes what length of time?",
    description: "Depending on customising, full development and deployment can take two to six weeks."
  },
  {
    title: "Could I put game own colours and branding?",
    description: "Yes! Gamzway provides completely branded control white-label solutions."
  },
  {
    title: "Is real money gameplay something the game could support?",
    description: "Yes. Real-money Tambola apps where legally permitted can be developed using secure payment integration and compliance checks."
  },
  {
    title: "Exists an administrative panel?",
    description: "A strong administrative dashboard and CRM system are indeed incorporated for total control over game operations."
  },
  {
    title: "Are you always maintaining?",
    description: "We do post-launch maintenance programs, updates, and support."
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
        description: " Tambola is a community experience not only a game.  Gamzway provides strong, scalable, and beautiful gaming apps that help you bring that experience to life whether your business is a startup, event agency, or entertainment brand."
      }
    ],
    description: "Starting your Tambola game creation process with Gamzway—where your vision aligns with creativity—today. To arrange a free demo or quotation, get in touch now.",
    hrefText: "TRY DEMO"
  }
]

const deviceImages = [
  {
    image1:"/tambolaPage/devices/mob.png",
    image2:"/tambolaPage/devices/lap.png"
  }
]

const TambolaGame = () => {
  return (
    <div className="tambola-game">

      <div className="landing-tambola-section">
        <TambolaLanding landingItems={landingItems}/>
      </div>

      <FeaturesBanner />

      {/* <div>
        <FeaturesGridV4 featuresGrid={variationGrid} featuresTitle={variationTitle} />
      </div> */}

      <SolutionsSection solutionsItems={solutionsContent} solutionsTitle={solutionsTitle} />

      {/* <FeaturesGrid features={featuresContent} featuresTitle={featuresTitle} /> */}

      {/* <div>
        <FeaturesHeader featuresText={solutionsTitle}/>
        <p className="solutions-intro">Gamzway is your first-choice partner if you're looking for a Tambola gaming app combining fun, scalability, and return on investment. Our services for application development are meant to serve:</p>
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
      {/* <FeaturesGridV2 featuresGrid={solutionsContent} featuresTitle={solutionsTitle}/> */}



{/* 
      <div className='solutions-rummy-section'>
        <div className='solutions-rummy-top'>
          <FeaturesHeader featuresText={hireTitle} />
        </div>

        <div className='solutions-rummy-bottom'>
          <div className='solutions-desc-container'>
            <div className='solutions-desc'>
              <br /><br />
              <div className='solutions-rummy-grid'>
                <div className='solutions-rummy-grid-item'>
                  <img src="/real-time.png" alt="" />
                  <div className='solutions-banner-line'></div>
                  <p>Real-time interaction</p>
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
          <div className='solutions-img'>
            <img src="/tambolaPage/solutions/2.png" alt="" />
          </div>
        </div>
      </div> */}


      <PlatformSection />
      <PlatformImg deviceImages={deviceImages}/>

      <CustomGrid customTitle={crmTitle} customgridItems={crmItems} />

      <ChooseGrid />

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

      {/* <PaymentSection /> */}

      <ProductSection productGrid={productItems} />

      <ContactBanner contactItems={launchItems} />

    </div>
  )
}

export default TambolaGame