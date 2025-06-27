import "./CallBreakGame.css"
import LandingSection from "../../../components/LandingSection/LandingSection"
import AchievementsBanner from "../../../components/AchievementsBanner/AchievementsBanner"
import FeaturesHeader from "../../../components/FeaturesSection/FeaturesHeader/FeaturesHeader"
import ContactBanner from "../../../components/ContactBanner/ContactBanner"
import AccordionSection from "../../../components/AccordionSection/AccordionSection"
import CustomGrid from "../../../components/CustomGrid/CustomGrid"
import PaymentSection from "../../../components/PaymentSection/PaymentSection"
import PlatformSection from "../../../components/PlatformSection/PlatformSection"
import ProductSection from "../../../components/ProductSection/ProductSection"

import LandingPageV2 from "../../../components/LandingPageV2/LandingPageV2"
import FeaturesGridV2 from "../../../components/FeaturesGridV2/FeaturesGridV2"
import FeaturesBanner from "../../../components/FeaturesBanner/FeaturesBanner"
import AboutSection from "../../../components/AboutSection/AboutSection"
import ChooseGrid from "../../../components/ChooseGrid/ChooseGrid"
import PromoTools from "../../../components/PromoTools/PromoTools"
import PlatformImg from '../../../components/LudoPlatformImg/LudoPlatformImg'
import CallBreakLanding from "./CallBreakLanding/CallBreakLanding"
import SolutionsSection from "../../../components/SolutionsSection/SolutionsSection"
import FeaturesGridV5 from "../../../components/FeaturesGridV5/FeaturesGridV5"

const landingItems = [
  {
    title: "CALL BREAK GAME",
    description: "Call Break has become a hot item in the digital gaming market as millions of fans across South Asia and growing taste for skill-based real-money card games drive demand.",
    description2: "At Gamzway Technologies, we bring this venerable card game to life with engaging gaming, real-time multiplayer sync, sophisticated CRM tools, and monetising strategies maximising involvement and income.",
    button: "REQUEST A QUOTE",
  }
]
const landingImages = [
  {
    image: "/callbreakPage/banner-over.png"
  },
  {
    image: "/callbreakPage/banner-over.png"
  },
  {
    image: "/callbreakPage/banner-over.png"
  },
]
const breakservicesTitle = [
  {
    title: "Contact Development Services for Break Cards",
    description: "Our entire Real-money games, freemium apps, fantasy tournaments, or social card gaming—call Break Game Development Services are customised to fit many corporate models.  We have:"
  }
]
const regardingcallBreak = [
  {
    title: "ABOUT CALL BREAK GAME",

  }
]
const hireItems = [
  {
    featuresText:[
      {
        title:" Hire Call Break Card Game Developers"
      }
    ],
    description: "  Highly talented Call Break Card Game developers for hire from Gamzway specialise in multiplayer card game logic, real-time frameworks, and UI animation.",
    hrefText: "LET'S TALK"
  }
]

// const whyHireTitle = [
//   {
//     title: "Why Hire Gamzway's Call Break Card Game Developers?",
//     description: "We provide flexible engagement models whether your project calls for a full-time staff or developers on a contract basis."
//   }
// ]

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

const crmTitle =[
  { 
    title: "backoffice & CRM",
    description: "We offer the best BackOffice and CRM tools with our rummy software solutions, making game management easy. You can enjoy a user-friendly dashboard and all the essential & valuable features to manage the game rooms." 
  }
]

const waitItems = [
  {
    featuresText:[
      {
        title:"Why wait? Let's design your call break game right now."
      }
    ],
    description: "Leverage the always expanding card gaming market. We assist you regardless of your intended use—a fully monetised platform or a casual game.",
    hrefText: "LET'S TALK"
  }
]

const faqTitle = [
  {
    title: "Call Break Game Development FAQ's",
    description: ""
  }
]

const faqAccordionData =[
  {
    title: "Can one start a Call Break game including real-money elements legally?",
    description: " Indeed, in most areas it is allowed as long as it is considered as a skill-based game.  We aid in regulatory compliance."
  },
  {
    title: "Can rules and branding help to customise the game?",
    description: " Totally.  Customising anything from colours to card backs and game logic is possible."
  },
  {
    title: "How would participants make deposits and withdrawals?",
    description: " Based on your region using integrated wallets and gateways including UPI, PayPal, Paytm, and Stripe."
  },
  {
    title: "Can a dashboard help me to control users and earnings?",
    description: "Indeed, our CRM and administrative panel let you entirely control over users, income, and game setups."
  },
  {
    title: "Building a completely working Call Break game takes what length of time?",
    description: "One can get ready in 4–6 weeks with a simple version.  An elaborate form including CRM and wallet might take ten to twelve weeks."
  },
]

const chooseTitle = [
  {
    title: "Why choose Gamzway for Call Break Card Game Development?",
    description: "Gamzway is a leading Call Break Card Game Development Company with a team of highly skilled developers, designers, and project managers.  We offer a wide range of Call Break Card Game Development services including:"
  }
]

const adminfeaturesTitle = [
  {
    title: " Features of Administration Control",
    description: "Our Ludo game has a strong administrative panel with the following options to help you totally control over your gaming platform:"
  }
]

const adminfeaturesGrid = [
  {
    image: "https://beta.mobzway.com/assets/images/backoffice-crm-icon/player-management.png",
    title: "Manage Player Interactions",
    description: ""
  },
  
  {
    image: "https://beta.mobzway.com/assets/images/backoffice-crm-icon/dashboard.png",
    title: "Track Your Statistics",
    description: ""
  },
  {
    image: "https://beta.mobzway.com/assets/images/backoffice-crm-icon/finance-management.png",
    title: "Control Your Commissions",
    description: ""
  },
  {
    image: "https://beta.mobzway.com/assets/images/backoffice-crm-icon/game-management.png",
    title: "Manage Rules and Features",
    description: ""
  },
  {
    image: "https://beta.mobzway.com/assets/images/backoffice-crm-icon/affiliate-management.png",
    title: "Setup Referral Networks",
    description: ""
  },
  {
    image: "https://beta.mobzway.com/assets/images/backoffice-crm-icon/notificstion-management.png",
    title: "Push Notifications",
    description: ""
  },
  {
    image: "https://beta.mobzway.com/assets/images/backoffice-crm-icon/user-management.png",
    title: "Multi-Admin Access",
    description: ""
  },
  {
    image: "https://beta.mobzway.com/assets/images/backoffice-crm-icon/analytics.png",
    title: "Security Management",
    description: ""
  }
]

const platformItems = [
  {
    featuresText:[
      {
        title: "WE BUILD THE CALL BREAK GAME FOR ALL PLATFORMS",
        description: "We create CCall Break games for several platforms so that users of any device may enjoy the same experience:"
      }
    ],
    platformGrid:[
      {
        image: "https://beta.mobzway.com/assets/images/HTML_five-broweswer.webp",
        title: "HTML 5 BROWSER",
        description: ""
      },
      {
        image: "https://img.icons8.com/?size=480&id=17836&format=png",
        title: "Android Game App",
        description: ""
      },
      {
        image: "https://img.icons8.com/?size=240&id=bN2IQyaCUVk5&format=png",
        title: "IOS GAME APP",
        description: ""
      },
      {
        image: "https://beta.mobzway.com/assets/images/Mac_PC.webp",
        title: "DESKTOP VERSION",
        description: ""
      },
      {
        image: "https://img.icons8.com/?size=480&id=IPzemd2v4Ubj&format=png",
        title: "CROSS PLATFORM UNITY BUILDS",
        description: ""
      },
      {
        image: "https://img.icons8.com/?size=200&id=MKRHZpOBBZqD&format=png",
        title: "SMART TV COMPATIBILITY (ON-DEMAND)",
        description: ""
      }
    ]
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

const demoItems = [
  {
    featuresText: [
      {
        title: " Demand a free demo"
      }
    ],
    description: "Interested to observe the operation of our Call Break app?  Click here to arrange your free demo and view our Call Break game from the viewpoints of the player and administrator.  View the interface, features, and performance live action.",
    hrefText: "TRY DEMO"
  }
]

const aboutItems = [  
  {
    description: "Played conventionally by four players from a normal 52-card deck, Call Break is a strategic trick-taking card game.  Every participant has to call, or bid the total tricks they intend to win.  The basis of scoring is players' declared bid accuracy over several rounds.",
    image: "/callbreakPage/banner-over.png"
  }
]

const solutionsTitle =[
  {
    title: " Call Break Game's salient features",
    description: "Strong emphasis on performance, player retention, and monetisation drives our Call Break games' construction.  Important characteristics include:"
  }
]

const solutionsItems =[
  {
    image:"/callbreakPage/banner-over.png",
    gametype: "Skill Game",
    rtp: "90%",
    devices: "Android, iOS, Web, Desktop",
    background:"/callbreakPage/bg.png"
  }
]

const featuresGrid = [
  {
    title:"Classic 4-Player Mode",
    image:"/callbreakPage/types/4 player-01.png"
  },
  {
    title:"Private Room Mode",
    image:"/callbreakPage/types/private room play-01.png"
  },
  {
    title:"tournament Mode",
    image:"/callbreakPage/types/tournament-01.png"
  },
  {
    title:"Practice Mode",
    image:"/callbreakPage/types/practice-01.png"
  },
  {
    title:"Online Public Table Mode",
    image:"/callbreakPage/types/online public mode-01.png"
  },
]

const featuresTitle = [
  {
    title:"Modes of Call Break Game",
    description:" Give your consumers a great range of experiences using several gameplay styles:"
  }
]

const deviceImages =[
  {
    image1: "/callbreakPage/devices/mob.png",
    image2: "/callbreakPage/devices/lap.png"
  }
]

const CallBreakGame = () => {
  return (
    <div className="callbreak-game">

      <div className="landing-callbreak-section">
      {/* <LandingPageV2 landingItems={landingItems} landingImages={landingImages}/> */}
        <CallBreakLanding landingItems={landingItems}/>
      </div>

      <FeaturesBanner />

      <FeaturesGridV5 featuresGrid={featuresGrid} featuresTitle={featuresTitle}/>

      {/* <AchievementsBanner /> */}

      {/* <AboutSection aboutItems={aboutItems}/> */}
      
      {/* <div className='break-services-section'>
            <FeaturesHeader featuresText={breakservicesTitle}/>
            <div className='break-models-grid'>
                <div className='break-model-card'>
                    <div className='break-model-icon'>
                        <i className="fas fa-laptop-code"></i>
                    </div>
                    <p>Development of Games across Platforms</p>
                </div>
                <div className='break-model-card'>
                    <div className='break-model-icon'>
                        <i className="fas fa-network-wired"></i>
                    </div>
                    <p>Multiplayer & socket programming in real time</p>
                </div>
                <div className='break-model-card'>
                    <div className='break-model-icon'>
                        <i className="fas fa-trophy"></i>
                    </div>
                    <p>Development of Fantasy tournaments</p>
                </div>
                <div className='break-model-card'>
                    <div className='break-model-icon'>
                        <i className="fas fa-paint-brush"></i>
                    </div>
                    <p>Customize UI/UX and game design.</p>
                </div>
                <div className='break-model-card'>
                    <div className='break-model-icon'>
                        <i className="fas fa-wallet"></i>
                    </div>
                    <p>Integration of In-game Wallet and Safe Payment Systems.</p>
                </div>
                <div className='break-model-card'>
                    <div className='break-model-icon'>
                        <i className="fas fa-cogs"></i>
                    </div>
                    <p>Integration of Backoffice Systems and CRM</p>
                </div>
                <div className='break-model-card'>
                    <div className='break-model-icon'>
                        <i className="fas fa-headset"></i>
                    </div>
                    <p>Post-launch assistance and feature expansion</p>
                </div>
                <div className='break-model-card'>
                    <div className='break-model-icon'>
                        <i className="fas fa-cube"></i>
                    </div>
                    <p>Using Gamzway gives you a complete business ecosystem rather than only a game.</p>
                </div>
            </div>
      </div> */}

      <SolutionsSection solutionsItems={solutionsItems}  solutionsTitle={solutionsTitle}/>

      {/* <div className='admin-features-section'>
        <FeaturesHeader featuresText={adminfeaturesTitle} />
        <div className='admin-features-grid'>
        {adminfeaturesGrid.map((item, index) => (
          <div className='admin-features-grid-item' key={index}>
              <img src={item.image} alt="" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
          </div>
          ))}
        </div>
      </div> */}



      {/* <PromoTools /> */}

      {/* <FeaturesGridV2 featuresGrid={adminfeaturesGrid} featuresTitle={adminfeaturesTitle} /> */}

      <PlatformSection/>
      <PlatformImg  deviceImages={deviceImages}/>
      <CustomGrid/>
      <ChooseGrid />

      <ContactBanner contactItems={hireItems}/>

      {/* <ContactBanner contactItems={waitItems}/> */}


      <div className='faq-section'>
        <FeaturesHeader featuresText={faqTitle} />

        <div className='call-break-faq-accordion-container'>
          <AccordionSection data={faqAccordionData} />
        </div>
        
      </div>
      
      <ProductSection productGrid={productItems}/>

      <ContactBanner contactItems={demoItems}/>
      
    </div>
  )
}

export default CallBreakGame
