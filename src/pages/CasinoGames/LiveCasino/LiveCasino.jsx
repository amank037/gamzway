import './LiveCasino.css'
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
import FeaturesGridV4 from '../../../components/FeaturesGridV4/FeaturesGridV4'
import ChooseGrid from '../../../components/ChooseGrid/ChooseGrid'
import PlatformImg from '../../../components/LudoPlatformImg/LudoPlatformImg'
import ProvidersSection from '../../../components/ProvidersSection/ProvidersSection'


// const typesItems = [
//   {
//     featuresText:[
//       {
//         title: "Live Casino Types: "
//       }
//     ],
//     platformGrid:[
//       {
//         image: "https://cdn-icons-png.flaticon.com/512/10646/10646478.png",
//         title: " Live Dealer",
//         description: " Professional studios sent real-time gameplay including trained human dealers."
//       },
//       {
//         image: "https://cdn-icons-png.flaticon.com/512/2991/2991463.png",
//         title: "Live Mobile Casino",
//         description: " Perfected for tablets and smartphones, guarantees seamless, low-latency gameplay. Custom-branded apps with real-time gaming interactions accessible for Android and iOS Live Casino App."
//       },
//       {
//         image: "https://cdn-icons-png.flaticon.com/512/4695/4695995.png",
//         title: " Live Casino Based on VR",
//         description: "Enter a virtual gambling hall supported by virtual reality to have an unmatched immersive experience."
//       },
//     ]
//   }
// ] 
const featuresTitle = [
  {
    title: "Live Casino types: "
  }
]
const featuresGridV2 = [
  {
    image: "https://cdn-icons-png.flaticon.com/512/10646/10646478.png",
    title: " Live Dealer",
    description: " Professional studios sent real-time gameplay including trained human dealers."
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/2991/2991463.png",
    title: "Live Mobile Casino",
    description: " Perfected for tablets and smartphones, guarantees seamless, low-latency gameplay. Custom-branded apps with real-time gaming interactions accessible for Android and iOS Live Casino App."
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/4695/4695995.png",
    title: " Live Casino Based on VR",
    description: "Enter a virtual gambling hall supported by virtual reality to have an unmatched immersive experience."
  },
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

const demoItems = [
  {
    featuresText: [
      {
        title: "Start your path in casino business with Gamzway"
      }
    ],
    description: "Join hundreds of happy customers that decided on Mobzway to start their live casino operations.  Whether your company is startup, entrepreneur, or enterprise, we provide premium live casino solutions fit for your company objectives.",
    hrefText: "TRY DEMO"
  }
]

const landingItems = [
  {
    title: "LIVE CASINO SOFTWARE PROVIDER",
    description: " Players can join actual dealers and enjoy vintage games including blackjack, roulette, and baccarat from anywhere in the world by means of high-definition streaming and interactive interfaces.",
    description2:" Our speciality at Gamzway is creating scalable live casino solutions from right from a user's desktop or mobile device that mimic the glitz of Las Vegas, Macau, and Monte Carlo.",
    button: "REQUEST A DEMO",
  }
]


const featuresItems = [
  {
    title: "Games we Offer",
    description: "Gamzway presents a large selection of live casino games catered to worldwide users:"
  } 
]

const hireTitle = [
  {
    title: "Our Live Casino's Characteristics",
  }
]

const contactItems = [
  {
    featuresText: [
      {
        title: "Get in Contact, Ask Us Anything",
      }
    ],
    description: "Ask enquiries regarding the growth of live casinos or want for a personalised quote.  Get in touch to us! From game design to complete release, our professionals are here to help you.",
    hrefText: "REQUEST A DEMO",
  }
]

const platformItems = [
  {
    featuresText:[
      {
        title: "WE BUILD THE LUDO GAME FOR ALL PLATFORMS",
        description: "We create Ludo games for several platforms so that users of any device may enjoy the same experience:"
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
        title: "SUPPORT FOR SMART TVs",
        description: ""
      }
    ]
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
    description: "We offer the best BackOffice and CRM tools with our tambola software solutions, making game management easy. You can enjoy a user-friendly dashboard and all the essential & valuable features to manage the game rooms." 
  }
]

const developmentFeatures = {
  sections: [
    {
      title: "Requirement Gathering",
      points: [
        "We know your vision, target market, and industry.",
        "Detailed analysis of business requirements and goals.",

      ]
    },
    {
      title: "Prototyping & Wireframing",
      points: [
        "Interactive mock-ups made by our designers are for comments.",
        "User interface design and user experience planning.",

      ]
    },
    {
      title: "Dealer Studio & Game Development",
      points: [
        "Setup backend systems, UI, and streaming technology integration.",
        "High-quality video streaming infrastructure setup.",

      ]
    },
    {
      title: "Compliance and Quality Monitoring",
      points: [
        "We test performance, fairness, and cross-device capability strictly.",
        "Regular security audits and vulnerability testing.",
      ]
    },
    {
      title: "Implementation and Start-up",
      points: [
        "Your platform turns on, completely operational, ready for the market.",
        "Seamless deployment and integration process.",
      ]
    },
    {
      title: "Post-launch Assistance",
      points: [
        "Constant improvement, changes, and marketing direction.",
        "24/7 technical support and maintenance.",

      ]
    },
    {
      title: "10+ Years of Gaming Knowledge",
      points: [
        "Excellent portfolio in real money, skill, and casino games.",
        "Expertise in multiple gaming technologies and platforms.",
      ]
    },
    {
      title: "Custom Game Creation",
      points: [
        "Custom game interfaces, branding, dealer configuration.",
        "Unique game variants and special features.",
      ]
    }
  ]
}

const developmentTitle = [
  {
    title: "How We Create Greatest Live Casino Games?",
    description: "At Gamzway, we use a methodical approach guaranteed by great quality and fast delivery."
  }
]

const faqTitle = [
  {
    title: "Live Casino Games Development Questions Answered Here"
  }
]
const accordionData = [
  {
    title: "Development of a live casino game costs what?",
    description: "It relies on region, game genre, and features. While full-fledged multi-game casinos may reach $100,000, basic ones start from $20,000."
  },
  {
    title: "Legal in all countries is live casino?",
    description: "Not exactly. Countries have different licencing and regulations. We assist in your following relevant legislation."
  },
  {
    title: "Development of a live casino game takes what length of time?",
    description: "Based on complexity and integrations, it can take anywhere from six to fourteen weeks."
  },
  {
    title: "Are the dealer studio appearance and feel customisable?",
    description: "For your studio, we do provide custom themes, uniforms, and branding choices."
  },
  {
    title: "Do you offer assistance following launch?",
    description: "Yes! We provide specific help, upkeep, and feature updates."
  }
]
const deviceImages = [
  {
    image1:"/ludoPage/devices/ludo-mob.png",
    image2:"/ludoPage/devices/ludo-lap2.webp"
  }
]


const LiveCasino = () => {

  const featuresGrid = [
    { title: "Live Roulette",
      image: "/liveCasino/features/multi table.png" },
    { title: "Active Blackjack",
      image:"/teenapiPage/hukum.png" },
    { title: "Live Banking",
      image:"/liveCasino/features/casino war.png" },
    { title: "Live Andar Bahar",
      image:"/liveCasino/features/andar bahar.png" },
    { title: "Live Teen Patti",
      image:"/liveCasino/features/teen patti.png" },
    { title: "Live Casino Poker",
      image:"/liveCasino/features/three card poker.png" },
    { title: "Dragon Tiger Live",
      image:"/liveCasino/features/dragon tiger.png" },
    { title: "Live Baccarat",
      image:"/liveCasino/features/baccart.png" }
  ]
  
  
  return (
    <div className="livecasino-game">
      <div className="landing-livecasino-section">
        <LandingSection landingItems={landingItems}/>
      </div>
      <AchievementsBanner />

      <ProvidersSection />

      {/* <div className="livecasino-types">
        <PlatformSection platformItems={typesItems}/>
      </div> */}



      <FeaturesGridV4 featuresGrid={featuresGrid} featuresTitle={featuresItems} />

      <div className='solutions-rummy-section'>
        <div className='solutions-rummy-top'>
          <FeaturesHeader featuresText={hireTitle}/>
        </div>

        <div className='solutions-rummy-bottom'>
        <div className='solutions-desc-container'>
            <div className='solutions-desc'>
              <br />
              <div className='solutions-ludo-grid'>
                <div className='solutions-ludo-grid-item'>
                  <img src="/real-time.png" alt="" />
                  <div className='solutions-banner-line'></div>
                  <p>Live interaction</p>
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
          </div>
          <div className='solutions-img'>
            <img src="https://beta.mobzway.com/assets/images/rummy-game-development/hire-rummy-game-developer.webp" alt="" />
          </div>
        </div>
      </div>

      <ContactBanner contactItems={contactItems}/>

      <PlatformSection platformItems={platformItems}/>
      {/* <PlatformImg deviceImages={deviceImages}/> */}

      <CustomGrid customTitle={crmTitle} customgridItems={crmItems}/>

      {/* <div className="development-process-section">
        <FeaturesGrid 
          features={developmentFeatures}
          featuresTitle={developmentTitle}
        />
      </div> */}

      <ChooseGrid />

      <div className="faq-section">
        <FeaturesHeader featuresText={faqTitle}/>
        <AccordionSection data={accordionData} className="live-casino-faq" />
      </div>
      <PaymentSection />
      <ProductSection productGrid={productItems}/>
      <ContactBanner contactItems={demoItems}/>
      
      
    </div>
  )
}

export default LiveCasino