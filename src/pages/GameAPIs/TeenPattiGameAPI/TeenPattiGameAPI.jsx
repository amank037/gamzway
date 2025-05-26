import './TeenPattiGameAPI.css'
import LandingSection from "../../../components/LandingSection/LandingSection"
import AchievementsBanner from "../../../components/AchievementsBanner/AchievementsBanner"
import FeaturesHeader from '../../../components/FeaturesSection/FeaturesHeader/FeaturesHeader'
import AboutGrid from '../../../components/AboutGrid/AboutGrid'
import FeaturesGrid from '../../../components/FeaturesSection/FeaturesGrid/FeaturesGrid'
import PlatformSection from '../../../components/PlatformSection/PlatformSection'
import ContactBanner from '../../../components/ContactBanner/ContactBanner'
import CustomGrid from '../../../components/CustomGrid/CustomGrid'
import AccordionSection from '../../../components/AccordionSection/AccordionSection'
import PaymentSection from '../../../components/PaymentSection/PaymentSection'
import ProductSection from '../../../components/ProductSection/ProductSection'

const landingItems = [
  {
    title: "TEEN PATTI GAME API DEVELOPMENT",
    description: "In 2025, Teen Patti continues to dominate the online card gaming scene, captivating millions of players daily with its blend of strategy, chance, and cultural appeal. As mobile gaming evolves, one key driver behind Teen Patti’s sustained popularity is seamless real-time gameplay, powered by Live Teen Patti APIs. According to recent gaming industry reports, card-based games like Teen Patti account for over 30% of mobile gaming activity in South Asia alone, highlighting the game’s massive user base and commercial potential. But what makes these apps truly engaging? The answer lies in the power of Live Teen Patti APIs—flexible, scalable source codes that bring real-time multiplayer functionality to life. Gamzway Technologies stands out as a leading Teen Patti software provider, offering cutting-edge solutions for card gaming businesses. We provide a variety of Teen Patti game variations such as No Limit Classic, Pot Limit Classic, and VIP Teen Patti.",
    button: "REQUEST A QUOTE",
  }
]

const typesTitle = [
  {
    title: "TEEN PATTI PLATFORM - GET EVERYTHING WHAT YOU NEED"
  }
]
const typesGrid = [
  {
    title: "No Limit Classic Teen Patti",
    image: "https://www.mobzway.com/assets/images/teenpattiplatform/no-limit-classic-teen-patti.png"
  },
  {
    title: "Pot Limit Classic Teen Patti",
    image: "https://www.mobzway.com/assets/images/teenpattiplatform/pot-limit-classic-teen-patti.png"
  },
  {
    title: "VIP Teen Patti",
    image: "https://www.mobzway.com/assets/images/teenpattiplatform/vip-teen-patti.png"
  },
  {
    title: "AK47",
    image: "https://www.mobzway.com/assets/images/teenpattiplatform/ak7.png"
  },
  {
    title: "Highest Joker",
    image: "https://www.mobzway.com/assets/images/teenpattiplatform/highest-joker.png"
  },
  {
    title: "Lowest Joker",
    image: "https://www.mobzway.com/assets/images/teenpattiplatform/lowest-joker.png"
  },
  {
    title: "Joker",
    image: "https://www.mobzway.com/assets/images/teenpattiplatform/joker.png"
  },
  {
    title: "Muflis",
    image: "https://www.mobzway.com/assets/images/teenpattiplatform/muflis1.png"
  },
  {
    title: "Hukum",
    image: "https://www.mobzway.com/assets/images/teenpattiplatform/hukum.png"
  },
  {
    title: "10x Boot",
    image: "https://www.mobzway.com/assets/images/teenpattiplatform/10xboot.png"
  }
]

const gameplayFeatures = {
  sections: [
    {
      title: "GAME PLAY / TABLE CONFIGURATION",
      points: [
        "Open Table Gameplay: Open tables are where players from around the world can join and play together. These tables are public, allowing users to experience real-time multiplayer gaming.",
        "Private Table Gameplay: Want to keep the game between friends or known players? Our private table feature lets you create a secure and exclusive Teen Patti room. ",
      ]
    },
    {
      title: "Basic Rules",
      points: [
        "Each player is dealt three cards face down.",
        "The game is played in a clockwise direction.",
        "A boot amount (minimum bet) is collected from all players to form the initial pot."
      ]
    },
    {
      title: "Advanced Gameplay Rules",
      points: [
        "Players take turns choosing to play blind (without seeing cards) or play seen (after viewing cards).",
        "You can bet, raise, or fold depending on your strategy.",
        "If two players are left, either can request a show to compare cards.",
        "The player with the higher-ranking hand wins the pot."
      ]
    },
    {
      title: "Card Hand Rankings (High to Low)",
      points: [
        "Trail (Three of a kind) – Example: A-A-A",
        "Pure Sequence (Straight Flush) – Example: 4-5-6 of Hearts",
        "Sequence (Straight) – Example: 7-8-9",
        "Color (Flush) – Any three cards of the same suit",
        "Pair – Two cards of the same rank",
        "High Card – Highest single card if no other hand is formed"
      ]
    }
  ]
}

const gameplayTitle = [
  {
    title: "TEEN PATTI GAMEPLAY AND RULES"
  }
]

const platformItems = [
  {
    featuresText:[
      {
        title: "WE BUILD THE POKER GAME FOR ALL PLATFORMS",
        description: "No matter what device your audience uses, our poker game is ready to deliver a seamless gaming experience. We develop poker games that run smoothly across all popular platforms."
      }
    ],
    platformGrid:[
      {
        image: "https://beta.mobzway.com/assets/images/HTML_five-broweswer.webp",
        title: "HTML5 Browser - Based Teen Patti Game",
        description: "Reach a wider audience with our highly responsive HTML5-based Teen Patti software. Designed to adapt seamlessly to all screen sizes, this browser version runs flawlessly across all modern browsers without the need for downloads. Whether players are on desktop, tablet, or smartphone, the gaming experience remains fast, smooth, and immersive."
      },
      {
        image: "https://beta.mobzway.com/assets/images/Native_Mobile.webp",
        title: "Native Mobile Game (Android & iOS)",
        description: " Keep your players connected on the go with our fully optimized native Teen Patti apps for both Android and iOS. These mobile apps come packed with features like multiplayer modes, social logins, push notifications, secure payment gateways, and in-game chat. Designed to deliver uninterrupted entertainment, they ensure high retention and increased engagement."
      },
      {
        image: "https://beta.mobzway.com/assets/images/Mac_PC.webp",
        title: "Desktop (Mac & PC) Teen Patti Software",
        description: "Our downloadable Teen Patti software for Mac and Windows brings powerful gaming to the desktop. These applications are engineered for performance, offering rich graphics, high-quality sound, and advanced customization options. Users can enjoy a professional-grade experience with seamless functionality, robust security, and multiple payment integrations."
      },
    ]
  }
]

const findItems = [
  {
    featuresText:[
      {
        title:"FIND OUT HOW WE CAN HELP YOU "
      }
    ],
    description: "Let Mobzway Technologies  Teen Patti Software experts advise you on building & launching the online teen patti software that meets your business objectives. Connect with us now to get a free expert consultation for your teen patti business.",
    hrefText: "GET IN TOUCH"
  }
]

const chooseTitle = [
  {
    title: "MULTIPLE THEMES & LOBBY"
  }
]

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
    description: "We offer the best BackOffice and CRM tools with our Teen Patti software solutions, making game management easy. You can enjoy a user-friendly dashboard and all the essential & valuable features to manage the game rooms." 
  }
]

const faqTitle = [
  {
    title: "TEEN PATTI FAQS"
  }
]

const faqAccordionData = [
  {
    title: "What is Teen Patti software?",
    description: "Teen Patti software is a digital platform designed to simulate the traditional Indian card game of Teen Patti. It allows players to enjoy real-time multiplayer gameplay, place bets, and interact with other users using mobile apps, web browsers, or PC versions."
  },
  {
    title: "Can I get a white-label Teen Patti solution?",
    description: "Yes. We offer fully customizable white-label Teen Patti software, allowing you to launch your own brand with unique themes, features, and monetization strategies. You get complete ownership with minimal development time."
  },
  {
    title: "Is Teen Patti software legal to operate?",
    description: "The legality of operating a Teen Patti game platform depends on your local jurisdiction. We recommend consulting legal counsel based on your target region. Our software can be tailored to comply with region-specific gaming regulations."
  },
  {
    title: "Which platforms do you support for Teen Patti games?",
    description: "Our Teen Patti software is available for HTML5 web browsers, Android and iOS native mobile apps, and desktop platforms including both Mac and Windows. We ensure seamless performance and responsiveness across all devices."
  },
  {
    title: "What game modes are included in your Teen Patti software?",
    description: "We offer a wide range of Teen Patti game modes such as No Limit Classic, Pot Limit, VIP Teen Patti, AK47, Joker Variants, Muflis, Hukum, and 10x Boot. These can be customized to suit your platform’s player preferences."
  },
  {
    title: "Can I integrate secure payment gateways into the software?",
    description: "Absolutely. Our Teen Patti solutions support integration with multiple secure and widely used payment gateways, enabling smooth deposits and withdrawals. We prioritize data security and user protection."
  },
  {
    title: "How do I monetize my Teen Patti platform?",
    description: "You can monetize through in-app purchases, entry fees, ads, VIP memberships, and virtual gifts. We help you configure multiple revenue channels tailored to your business model."
  },
  {
    title: "Do you offer ongoing maintenance and support?",
    description: "Yes, we provide end-to-end support including regular updates, troubleshooting, server management, and feature upgrades to ensure your platform runs smoothly post-launch."
  },
  {
    title: "How secure is your Teen Patti software?",
    description: "Our software is built with industry-standard encryption protocols, anti-fraud systems, and advanced security frameworks to prevent data breaches, unfair play, and unauthorized access."
  },
  {
    title: "Can I customize the look and feel of the game?",
    description: "Yes. We provide complete customization options including UI/UX design, themes, game rules, table settings, and in-game elements like emojis and avatars — all aligned with your brand identity."
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



const TeenPattiGameAPI = () => {
  return (
    <div className="teen-patti-api-game">
      <div className="landing-teen-patti-api-section">
        <LandingSection landingItems={landingItems}/>
      </div>
      <AchievementsBanner />

      <div>
        <FeaturesHeader featuresText={typesTitle}/>
        <AboutGrid aboutGrid={typesGrid}/>
      </div>

      <FeaturesGrid features={gameplayFeatures} featuresTitle={gameplayTitle} />

      <PlatformSection platformItems={platformItems}/>

      <ContactBanner contactItems={findItems}/>

      <div className='choose-section'>
        <FeaturesHeader featuresText={chooseTitle}/>
        <div className='choose-container'>
          <div className='choose-grid teenpatti-choose-grid'>
            <div className='choose-card'>
              <div className='card-icon'>
                <i className="fas fa-crown"></i>
              </div>
              <h3>Pro Game Lobby</h3>
              <p>Designed for experienced players, the Pro Game Lobby offers a competitive environment with higher stakes and advanced controls. It ensures fast matchmaking, premium tables, and smooth transitions between games for serious Teen Patti enthusiasts.</p>
            </div>
            <div className='choose-card'>
              <div className='card-icon'>
                <i className="fas fa-dice"></i>
              </div>
              <h3>Classic Game Lobby</h3>
              <p>The Classic Lobby brings the authentic Teen Patti vibe to the digital world. It's easy to navigate, perfect for casual players, and replicates the traditional feel of a friendly card game setting—making it ideal for beginners and regular players alike.</p>
            </div>
            <div className='choose-card'>
              <div className='card-icon'>
                <i className="fas fa-gift"></i>
              </div>
              <h3>Gifts & Emojis</h3>
              <p>Add more fun and social interaction to the game with an exciting collection of gifts and expressive emojis. Players can send virtual presents, react with fun icons, and keep the game lively and engaging.</p>
            </div>
            <div className='choose-card'>
              <div className='card-icon'>
                <i className="fas fa-palette"></i>
              </div>
              <h3>Various Table Themes</h3>
              <p>Let users personalize their gameplay with a range of visually striking table themes. Whether it's a royal gold finish or a neon party vibe, different themes help players enjoy a more immersive and tailored gaming environment.</p>
            </div>
          </div>
        </div>
      </div>

      <CustomGrid customgridItems={crmItems} customTitle={crmTitle} />

      <div className='faq-section'>
        <FeaturesHeader featuresText={faqTitle} />

        <div className='faq-accordion-container'>
          <AccordionSection data={faqAccordionData} />
        </div>
        <a className="faq-btn" href="">
            <span className="btn-text">ASK A QUESTION</span>
            <span className="btn-border"></span>
        </a>
      </div>

      <PaymentSection />

      <ProductSection productGrid={productItems}/>


    </div>
  )
}

export default TeenPattiGameAPI