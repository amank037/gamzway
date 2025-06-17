import './AndarBaharAPI.css'
import LandingSection from "../../../components/LandingSection/LandingSection"
import AchievementsBanner from "../../../components/AchievementsBanner/AchievementsBanner"
import FeaturesGrid from '../../../components/FeaturesSection/FeaturesGrid/FeaturesGrid'
import ContactBanner from '../../../components/ContactBanner/ContactBanner'
import FeaturesHeader from '../../../components/FeaturesSection/FeaturesHeader/FeaturesHeader'
import AccordionSection from '../../../components/AccordionSection/AccordionSection'
import PaymentSection from '../../../components/PaymentSection/PaymentSection'
import ProductSection from '../../../components/ProductSection/ProductSection'
import PlatformSection from '../../../components/PlatformSection/PlatformSection'

import FeaturesGridV5 from '../../../components/FeaturesGridV5/FeaturesGridV5'
import PlatformImg from '../../../components/LudoPlatformImg/LudoPlatformImg'
import PromoTools from '../../../components/PromoTools/PromoTools'
import ChooseGrid from '../../../components/ChooseGrid/ChooseGrid'
import FeaturesBanner from '../../../components/FeaturesBanner/FeaturesBanner'
import CustomGrid from '../../../components/CustomGrid/CustomGrid'
import SolutionsAPI from '../../../components/SolutionsAPI/SolutionsAPI'
import CrmAPI from '../../../components/CrmAPI/CrmAPI'

const landingItems = [
  {
    title: "ANDAR BAHAR API",
    description: "Andar Bahar is more than just a card game; it's a cultural event that comes from India's heritage of gaming. We have given this classic a new data on life by making it a part of a digital experience that combines old and new.   We will explain what makes our Andar Bahar game different, go over the client's needs, point out the most significant features, speak a outcome in this overview.",
    button: "REQUEST A QUOTE",
  }
]

const platformTitle = [
  {
    title: "ANDAR BAHAR API FEATURES"
  }
]

const platformFeatures = {
  sections: [
    {
      title: "GAMEPLAY OVERVIEW",
      points: [
        "Classic Andar Bahar with fast-paced gameplay",
        "Real-time multiplayer across all devices",
        "High-quality visuals and animations",
        "Smooth, cross-platform play."
      ]
    },
    {
      title: "CLIENT REQUIREMENTS",
      points: [
        "Live multiplayer support",
        "Interactive UI/UX design",
        "Secure payment gateway integration",
        "Scalable and long-lasting architecture"
      ]
    },
    {
      title: "PLATFORM DIFFERENTIATORS",
      points: [
        "Instant skill-based matchmaking",
        "Cross-platform support with uniform controls",
        "Realistic audio and haptic feedback",
        "Player customization for tables and cards"
      ]
    },
    {
      title: "SECURE TRANSACTIONS",
      points: [
        "End-to-end encrypted payment APIs",
        "Integration with Stripe, Paytm, Razorpay",
        "Multi-factor authentication",
        "Secure session handling"
      ]
    }
  ]
}

const chooseTitle = [
  {
    title: "LOBBY, BACK OFFICE, MULTIPLE THEMES",
    description: " Our backend system is meant to give you complete control and comprehensive analytics, so enabling strategic growth."
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

const faqTitle = [
  {
    title: "FAQ",

  }
]
const faqData = [
  {
    title: "How secure are the payment methods integrated?",
    description: "We use PCI-DSS Level 1 certified gateways with full encryption, tokenisation, and multi-factor authentication for all transactions."
  },
  {
    title: "How are user sessions and data handled securely?",
    description: "Sessions are safely managed with advanced encryption standards, ensuring complete protection and privacy of user data."
  },
  {
    title: "What makes the final Andar Bahar platform unique?",
    description: "It’s a polished multiplayer game with real-time features, advanced UI, cross-platform support, and strong user engagement mechanisms."
  },
  {
    title: "What was the user response post-launch?",
    description: "The app received 4.5+ star ratings in the first month across both iOS and Android platforms, with positive reviews on ease of use and visuals."
  },
  {
    title: "How does the platform handle scalability?",
    description: "It manages peak traffic efficiently, maintains performance, and supports backend scalability without service disruptions."
  }
]

const beginItems = [
  {
    featuresText:[
      {
        title:"Begin Your Business Travel with Gamzway"
      }
    ],
    description: "Do you want to bring your Andar Bahar idea to life?   Contact us today so we can turn your idea into an entertaining game that gamers all over the world will love.",
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
const AndarBaharAPI = () => {
  return (
    <div className="andar-bahar-api-game">
      <div className="landing-andar-bahar-api-section">
      <LandingSection landingItems={landingItems}/>
      </div>
      <AchievementsBanner />

      <FeaturesBanner />
      <SolutionsAPI />
      {/* <FeaturesGrid features={platformFeatures} featuresTitle={platformTitle} /> */}
      <PlatformSection />
      {/* <PlatformImg /> */}
      <CrmAPI />
      <ChooseGrid />

      <ContactBanner contactItems={findItems}/>

      <div className="ludo-faq-section">
        <FeaturesHeader featuresText={faqTitle}/>
        <div className="ludo-faq-container">
          <div className="ludo-faq-left">
            <AccordionSection data={faqData}/>
          </div>
        </div>
        <button className='faq-btn'><span>ASK A QUESTION</span></button>
      </div>


      <ProductSection productGrid={productItems}/>

      <ContactBanner contactItems={beginItems}/>

    </div>
  )
}

export default AndarBaharAPI