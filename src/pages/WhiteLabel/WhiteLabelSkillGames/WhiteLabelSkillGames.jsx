import './WhiteLabelSkillGames.css'
import LandingSection from "../../../components/LandingSection/LandingSection"
import AchievementsBanner from "../../../components/AchievementsBanner/AchievementsBanner"
import PlatformSection from '../../../components/PlatformSection/PlatformSection'
import PaymentSection from '../../../components/PaymentSection/PaymentSection'
import ProductSection from '../../../components/ProductSection/ProductSection'
import ContactBanner from '../../../components/ContactBanner/ContactBanner'
import FeaturesGrid from '../../../components/FeaturesSection/FeaturesGrid/FeaturesGrid'
import FeaturesHeader from '../../../components/FeaturesSection/FeaturesHeader/FeaturesHeader'

import LandingPageV2 from '../../../components/LandingPageV2/LandingPageV2'
import FeaturesGridV5 from '../../../components/FeaturesGridV5/FeaturesGridV5'
import PlatformImg from '../../../components/LudoPlatformImg/LudoPlatformImg'
import PromoTools from '../../../components/PromoTools/PromoTools'
import ChooseGrid from '../../../components/ChooseGrid/ChooseGrid'
import FeaturesBanner from '../../../components/FeaturesBanner/FeaturesBanner'
import CustomGrid from '../../../components/CustomGrid/CustomGrid'
import WhiteLabelContent from '../../../components/WhiteLabelContent/WhiteLabelContent'

const platformItems = [
  {
    featuresText:[
      {
        title: "WE BUILD WHITE LABEL SKILL GAMES FOR ALL PLATFORMS"
      }
    ],
    platformGrid:[
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
    description: "Our white label browser games are a quick, reliable, and fun method to fulfil your goals, whether they are to get employees more involved or promote your brand outside the company. Get in touch with us to find out about available titles, ask for a sample, or start making your own experience.",
    hrefText: "TRY DEMO"
  }
]

const landingItems = [
  {
    title: "WHITE LABEL SKILL GAMES SOFTWARE PROVIDER",
    description: "Are you looking for a games solution that is ready to use, can be used by your team, and can carry your company's message and get your audience involved right away?",
    description2:"We offer flexible browser-based games for everything from team-building apps to branded entertainment and corporate engagement.",
    button: "REQUEST A QUOTE",
  }
]

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

const chooseTitle = [
  {
    title: "GAMZWAY WHITE LABEL SKILL GAMES EXPERIENCE",
    description: "The games can be played in a web browser, but they are also designed to work well on mobile devices. Users may get the sense of a native app right from their mobile browsers. We can turn your white label game into a hybrid mobile app (for iOS and Android) with push notifications and the ability to publish to the app store if you like."
  }
]



const WhiteLabelSkillGames = () => {
  return (
    <div className="white-label-skill-game">
      <div className="landing-white-label-skill-section">
      <LandingSection landingItems={landingItems}/>
      </div>
      <AchievementsBanner />

      <FeaturesBanner />  

      <WhiteLabelContent />

      {/* <FeaturesGrid features={platformFeatures} featuresTitle={platformTitle} /> */}

      <PlatformSection />
      {/* <PlatformImg /> */}
      <CustomGrid/>
      <ChooseGrid />

      {/* <div className='choose-section'>
        <FeaturesHeader featuresText={chooseTitle}/>
        <div className='choose-container'>
        <div className='choose-grid poker-choose-grid'>
          <div className='choose-card'>
            <div className='card-icon'>
              <i className="fas fa-paint-brush"></i>
            </div>
            <h3>Extensive Customization</h3>
            <p>From seasonal themes to gamified event-driven updates, tailor every element to fit your brand vision.</p>
          </div>

          <div className='choose-card'>
            <div className='card-icon'>
              <i className="fas fa-user-astronaut"></i>
            </div>
            <h3>Brand Avatars & Mascots</h3>
            <p>Introduce unique brand characters and avatars to personalize the player experience and boost engagement.</p>
          </div>

          <div className='choose-card'>
            <div className='card-icon'>
              <i className="fas fa-music"></i>
            </div>
            <h3>Themed UI & Sound</h3>
            <p>Custom soundtracks, UI components, and effects aligned with your campaign, event, or brand theme.</p>
          </div>

          <div className='choose-card'>
            <div className='card-icon'>
              <i className="fas fa-dice"></i>
            </div>
            <h3>Custom Game Rules</h3>
            <p>Define how your game is played with personalized rules tailored to your goals and audience.</p>
          </div>

          <div className='choose-card'>
            <div className='card-icon'>
              <i className="fas fa-share-alt"></i>
            </div>
            <h3>Social Media Integration</h3>
            <p>Connect players through shareable moments, referral mechanics, and seamless social login options.</p>
          </div>

          <div className='choose-card'>
            <div className='card-icon'>
              <i className="fas fa-trophy"></i>
            </div>
            <h3>Gamified Engagement</h3>
            <p>Leaderboards, achievement badges, and prize systems to drive competition and player retention.</p>
          </div>

          <div className='choose-card'>
            <div className='card-icon'>
              <i className="fas fa-language"></i>
            </div>
            <h3>Multilingual Support</h3>
            <p>Offer games in multiple languages for distributed teams, regional audiences, or global campaigns.</p>
          </div>

          <div className='choose-card'>
            <div className='card-icon'>
              <i className="fas fa-briefcase"></i>
            </div>
            <h3>Previous White Labels</h3>
            <p>Training trivia, hiring puzzles, and learning games – custom-built for global brands, colleges, and events.</p>
          </div>
        </div>

        </div>
      </div> */}

      <PaymentSection />
      <ProductSection productGrid={productItems}/>
      <ContactBanner contactItems={demoItems}/>
    </div>
  )
}

export default WhiteLabelSkillGames