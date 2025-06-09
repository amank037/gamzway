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

const landingItems = [
  {
    title: "CALL BREAK GAME DEVELOPMENT",
    description: "Call Break has become a hot item in the digital gaming market as millions of fans across South Asia and growing taste for skill-based real-money card games drive demand.  At Gamzway Technologies, we bring this venerable card game to life with engaging gaming, real-time multiplayer sync, sophisticated CRM tools, and monetising strategies maximising involvement and income.",
    description2: "Serving gaming startups, businesses, and entrepreneurs develop unique Call Break games across Android, iOS, and Web, we are a reputable Call Break Card Game Development Company.",
    button: "REQUEST A QUOTE",
  }
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
        title:" Hire Developers of Call Break Cards Games"
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
    title: "",
    description: "View, block or unblock users in user management."
  },
  
  {
    image: "https://beta.mobzway.com/assets/images/backoffice-crm-icon/dashboard.png",
    title: "",
    description: "Track games performed, player performance, and real-time statistics in gaming analytics."
  },
  {
    image: "https://beta.mobzway.com/assets/images/backoffice-crm-icon/finance-management.png",
    title: "",
    description: "Revenue Reports: Control commissions and obtain clear income results"
  },
  {
    image: "https://beta.mobzway.com/assets/images/backoffice-crm-icon/game-management.png",
    title: "",
    description: "Change rules, token colours, and dice features in your custom game."
  },
  {
    image: "https://beta.mobzway.com/assets/images/backoffice-crm-icon/affiliate-management.png",
    title: "",
    description: "Set up referral networks, welcome bonuses, and prizes in promotions and offers."
  },
  {
    image: "https://beta.mobzway.com/assets/images/backoffice-crm-icon/notificstion-management.png",
    title: "",
    description: "Push Notifications: Send gamers quick alerts or advertising messages."
  },
  {
    image: "https://beta.mobzway.com/assets/images/backoffice-crm-icon/user-management.png",
    title: "",
    description: "Multi-Admin Access: Assign roles with varying degrees of authorization (e.g., Moderator, Super Admin.)."
  },
  {
    image: "https://beta.mobzway.com/assets/images/backoffice-crm-icon/analytics.png",
    title: "",
    description: "Enable IP blocking, fraud detection, and suspicious activity alerts in security management."
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


const CallBreakGame = () => {
  return (
    <div className="callbreak-game">

      <div className="landing-callbreak-section">
      <LandingSection landingItems={landingItems}/>
      </div>

      <AchievementsBanner />
      
      <div className='break-services-section'>
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
      </div>

      <div className='admin-features-section'>
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
      </div>

      <div className="regarding-section">
        <FeaturesHeader featuresText={regardingcallBreak}/>
        <p>Played conventionally by four players from a normal 52-card deck, Call Break is a strategic trick-taking card game.  Every participant has to "call," or bid the total tricks they intend to win.  The basis of scoring is players' declared bid accuracy over several rounds.</p>
        <p> Highly interesting is the game because of its strategic depth, tense gameplay, and competitive character.  Digital callbreak-features like leaderboards, fantasy leagues, and wallet connection help to make a product monetizable.</p>
      </div>

      <ContactBanner contactItems={hireItems}/>

      <PlatformSection platformItems={platformItems}/>

      <div className='solutions-ludo2-section bg-1'>
        <div className='solutions-ludo2-top'>
          <FeaturesHeader featuresText={chooseTitle}/>
        </div>

        <div className='solutions-ludo2-bottom'>
          <div className='solutions-img'>
            <img src="https://beta.mobzway.com/assets/images/why-choose.png" alt="" style={{ width: '400px', paddingTop: '30px'}}/>
          </div>
          <div className='solutions-desc-container'>
            <br/>
            <br/>
            <ul >
                <li>Over eight years of gaming development expertise, industry experience.</li>
                <br/>
                <li>Customisable Solutions with branding and feature control: white-label choices Pre-built solutions lower time-to----market and help to speed deployment.</li>
                <br/>
                <li> Perfect team including project managers, QA experts, UI/UX designers, game developers.</li>
                <br/>
                <li>Perfect data security compliance with GDPR and encrypted with techniques.</li>
                <br/>
                <li>Competitive packages for businesses and startups offer reasonably priced costs.</li>
                <br/>
                <li>Dedicated Support: Constant updates, bug corrections, and help following launch.</li>
                <br/> <br/>
                <p>Our first priorities are creating things that entertain, interact, and convert.  Using Gamzway lets you create a profitable digital business rather than only a game.</p>  
            </ul>
          </div>
        </div>
      </div>
      

      <CustomGrid customgridItems={crmItems} customTitle={crmTitle} />

      <ContactBanner contactItems={waitItems}/>

      <PaymentSection />

      <div className='faq-section'>
        <FeaturesHeader featuresText={faqTitle} />

        <div className='call-break-faq-accordion-container'>
          <AccordionSection data={faqAccordionData} />
        </div>
        <a className="faq-btn" href="">
            <span className="btn-text">ASK A QUESTION</span>
            <span className="btn-border"></span>
        </a>
      </div>
      
      <ProductSection productGrid={productItems}/>

      <ContactBanner contactItems={demoItems}/>
      
    </div>
  )
}

export default CallBreakGame
