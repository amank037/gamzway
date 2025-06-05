import './AndarBaharAPI.css'
import LandingSection from "../../../components/LandingSection/LandingSection"
import AchievementsBanner from "../../../components/AchievementsBanner/AchievementsBanner"
import FeaturesGrid from '../../../components/FeaturesSection/FeaturesGrid/FeaturesGrid'
import ContactBanner from '../../../components/ContactBanner/ContactBanner'
import FeaturesHeader from '../../../components/FeaturesSection/FeaturesHeader/FeaturesHeader'
import AccordionSection from '../../../components/AccordionSection/AccordionSection'
import PaymentSection from '../../../components/PaymentSection/PaymentSection'
import ProductSection from '../../../components/ProductSection/ProductSection'

const landingItems = [
  {
    title: "ANDAR BAHAR API DEVELOPMENT",
    description: "Andar Bahar is more than just a card game; it's a cultural event that comes from India's heritage of gaming.   We have given this classic a new data on life by making it a part of a digital experience that combines old and new.   We will explain what makes our Andar Bahar game different, go over the client's needs, point out the most significant features, speak about the challenges we handled, and show you the final outcome in this overview.   We want you to feel the love and care we put into every line of code and every pixel on the screen.",
    button: "REQUEST A QUOTE",
  }
]

const platformTitle = [
  {
    title: "LUDO GAME API FEATURES"
  }
]

const platformFeatures = {
  sections: [
    {
      title: "GAME OVERVIEW",
      points: [
        "Classic Andar Bahar with fast-paced digital gameplay",
        "Real-time multiplayer across mobile and desktop",
        "High-quality visuals and responsive animations",
        "Smooth, cross-platform play on Android, iOS, and browsers"
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
        "Player customization for tables and card backs"
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
    },
    {
      title: "ADMIN DASHBOARD",
      points: [
        "Ban, warn, or flag suspicious accounts",
        "Real-time analytics for player activity",
        "Transaction monitoring for fraud detection",
        "Easily update banners, events, and skins"
      ]
    },
    {
      title: "BRANDING AND CUSTOMIZATION",
      points: [
        "White-label platform for partners",
        "Theming support for festivals and events",
        "Personalized experiences for better retention",
        "No code changes needed for branding"
      ]
    },
    {
      title: "DESIGN CHALLENGES SOLVED",
      points: [
        "Responsive layout that adapts to screen sizes",
        "Progressive animation loading for performance",
        "Lightweight and smooth experience on all devices",
        "UI remains clear and uncluttered"
      ]
    },
    {
      title: "FINAL RESULTS",
      points: [
        "4.5+ star ratings on app stores",
        "High user satisfaction and retention",
        "Handles high traffic without lag",
        "Seasonal themes boosted engagement"
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

      <FeaturesGrid features={platformFeatures} featuresTitle={platformTitle} />

      <ContactBanner contactItems={findItems}/>

      <div className='choose-section'>
        <FeaturesHeader featuresText={chooseTitle}/>
        <div className='choose-container'>
          <div className='choose-grid ludo-choose-grid'>
            <div className='choose-card'>
              <div className='card-icon'>
                <i className="fas fa-gamepad"></i>
              </div>
              <h3>Dynamic Game Lobby</h3>
              <p>Dynamic and real-time game lobby featuring tournament schedules, match previews, and join statuses.</p>
            </div>
            <div className='choose-card'>
              <div className='card-icon'>
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Back Office Panel</h3>
              <p>Track player statistics, match history, wallet balances, and commissions from back-office panels.</p>
            </div>
            <div className='choose-card'>
              <div className='card-icon'>
                <i className="fas fa-palette"></i>
              </div>
              <h3>Multiple Themes</h3>
              <p>Multiple board designs—classic, fantasy, festive, modern—to suit a range of tastes.</p>
            </div>
            <div className='choose-card'>
              <div className='card-icon'>
                <i className="fas fa-users"></i>
              </div>
              <h3>CRM Integration</h3>
              <p>Segment players, automate messaging, run focused campaigns, and honour devoted users in CRM integration.</p>
            </div>
          </div>
        </div>
      </div>

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

export default AndarBaharAPI