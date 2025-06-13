import './WhiteLabelCasino.css'
import LandingSection from "../../../components/LandingSection/LandingSection"
import AchievementsBanner from "../../../components/AchievementsBanner/AchievementsBanner"
import PlatformSection from '../../../components/PlatformSection/PlatformSection'
import PaymentSection from '../../../components/PaymentSection/PaymentSection'
import ProductSection from '../../../components/ProductSection/ProductSection'
import ContactBanner from '../../../components/ContactBanner/ContactBanner'

import LandingPageV2 from '../../../components/LandingPageV2/LandingPageV2'
import FeaturesBanner from '../../../components/FeaturesBanner/FeaturesBanner'
import ChooseGrid from '../../../components/ChooseGrid/ChooseGrid'
import CustomGrid from '../../../components/CustomGrid/CustomGrid'
import PlatformImg from '../../../components/LudoPlatformImg/LudoPlatformImg'
import AboutSection from '../../../components/AboutSection/AboutSection'
import FeaturesGrid from '../../../components/FeaturesSection/FeaturesGrid/FeaturesGrid'
import PromoTools from '../../../components/PromoTools/PromoTools'

const platformTitle = [
  {
    title: "WHITE LABEL SERVICES AT GAMZWAY"
  }
]
const platformFeatures = {
  sections: [
    {
      title: "END-TO-END SUPPORT",
      points: [
        "Game hosting and regular maintenance",
        "Backend and analytics integration",
        "On-demand customer support",
        "Continuous updates and bug fixes"
      ]
    },
    {
      title: "WHITE LABEL PROCESS",
      points: [
        "Choose from a library of our  browser games",
        "Add your brand’s logo, colors, and messaging",
        "Optional integration with LMS, CRM, etc",
        "Testing, QA, and live in 5-15 business days"
      ]
    },
    {
      title: "GAMEPLAY OPTIONS",
      points: [
        "Single-player or multiplayer mode",
        "Multilingual support for global reach",
        "Cross-platform real-time play",
        "Private or public tables"
      ]
    },
    {
      title: "GAME MANAGEMENT",
      points: [
        "Dedicated dashboard for content updates",
        "Upload and manage branded assets",
        "Access gameplay reports and analytics",
        "Control user roles and access permissions"
      ]
    }
  ]
}
const platformItems = [
  {
    featuresText: [
      {
        title: "WE BUILD THE WHITE LABEL CASINO FOR ALL PLATFORMS"
      }
    ],
    platformGrid: [
      {
        image: "https://beta.mobzway.com/assets/images/HTML_five-broweswer.webp",
        title: "HTML 5 BROWSER",
        description: "Our white label software company offers gaming solutions for all the desktop devices. Be it Mac or Windows operating systems, we provide white label software for all."
      },
      {
        image: "https://beta.mobzway.com/assets/images/Native_Mobile.webp",
        title: "NATIVE MOBILE",
        description: "Gamzway offers game app development services for all mobile devices, compatible with all platforms, our best white label software for android, iOS or windows."
      },
      {
        image: "https://beta.mobzway.com/assets/images/Mac_PC.webp",
        title: "MAC/WINDOWS",
        description: "We offer game solutions for popular web browsers like Chrome, Internet Explorer, etc. Our cutting-edge technology ensures better streaming and low data consumption on web browsers."
      },
    ]
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

const demoItems = [
  {
    featuresText: [
      {
        title: "Start your business journey with Gamzway"
      }
    ],
    description: "Try Our Games, and explore all the features and solutions you need to start, run, and grow your business.",
    hrefText: "TRY DEMO"
  }
]

const landingItems = [
  {
    title: "WHITE LABEL CASINO SOFTWARE PROVIDER",
    description: "Our white label browser games are a whole solution for businesses, teachers, marketers, and event planners that want to develop fun games without having to start from scratch.",
    description2: "We offer scalable browser-based games for everything from team-building apps to branded entertainment and corporate engagement. Our software is reliable. our service is easy, and we have years of experience in the sector.",
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
    description: "We offer the best BackOffice and CRM tools with our poker software solutions, making game management easy. You can enjoy a user-friendly dashboard and all the essential & valuable features to manage the game rooms."
  }
]

const aboutItems = [
  {
    description: "Our white label solutions come with software that is good for businesses and assistance for the whole life cycle. Our games work well on all major browsers and devices and don't need to be downloaded.",
    description3: "They were made with safe and flexible web technologies like HTML5, WebGL, Node.js, and others.",
    image: "https://beta.mobzway.com/assets/images/ludo-game-development/banner_img.avif"
  }
]

// const platformTitle = [
//   {
//     title: "WHITE LABEL CASINO SERVICES AT GAMZWAY"
//   }
// ]
// const platformFeatures = {
//   sections: [
//     {
//       title: "CROSS-PLATFORM TECHNOLOGY",
//       points: [
//       ]
//     },
//     {
//       title: "END-TO-END SUPPORT",
//       points: [
//       ]
//     },
//     {
//       title: "WHITE LABEL PROCESS",
//       points: [
//       ]
//     },
//     {
//       title: "INCLUDED IN EVERY PACKAGE",
//       points: [
//       ]
//     },
//     {
//       title: "GAMEPLAY OPTIONS",
//       points: [
//       ]
//     },
//     {
//       title: "CUSTOM GAME CREATION",
//       points: [
//       ]
//     },
//     {
//       title: "GAME & CONTENT MANAGEMENT",
//       points: [
//       ]
//     },
//     {
//       title: "BUSINESS FLEXIBILITY",
//       points: [
//       ]
//     }
//   ]
// }

const WhiteLabelCasino = () => {
  return (
    <div className="white-label-casino-game">

      <div className="landing-white-label-casino-section">
        <LandingPageV2 landingItems={landingItems} landingImages={landingImages} />
      </div>

      <AchievementsBanner />

      {/* <AboutSection aboutItems={aboutItems} /> */}

      <FeaturesBanner />

      <FeaturesGrid features={platformFeatures} featuresTitle={platformTitle} />
      <PromoTools />
      <PlatformSection />
      {/* <PlatformImg /> */}
      <CustomGrid/>
      <ChooseGrid/>
      <CustomGrid/>

      <PaymentSection />

      <ProductSection productGrid={productItems} />

      <ContactBanner contactItems={demoItems} />
    </div>
  )
}

export default WhiteLabelCasino