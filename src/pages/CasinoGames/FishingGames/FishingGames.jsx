import './FishingGames.css'
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

const landingItems = [
  {
    title: "FISHING GAMES DEVELOPMENT COMPANY",
    description: "From basic arcade fun, fishing games have developed into highly engaging, reward-driven, multiplayer experiences. With their amazing underwater graphics, genuine fish motions, and real-time multiplayer tools, these games attract both casual and competitive gamers all around.",
    description2: "From catching a rare species to participating in tournaments to unleashing power-ups, fishing games offer thrill, leisure, and strategy—all blended together. Gamzway enables us to mix enjoyment, skill, and technology such that your fishing game stands out.",
    button: "REQUEST A DEMO",
  }
]

const typesItems = [
  {
    featuresText:[
      {
        title: "Variations of Fishing Games",
        description: "We develop a wide spectrum of fishing games to fit every taste and demographic:"
      }
    ],
    platformGrid:[
      {
        image: "/fishingPage/arcade fishing.png",
        title: "Arcade Fishing Games",
        description: "Fast-paced and packed of action, arcade fishing games are ideal for individuals who desire quick gameplay and instant rewards."
      },
      {
        image: "/fishingPage/skilled based games.png",
        title: "Skill-Based Games",
        description: "Perfect for competitive players, these games capture fish by calling accuracy, timing, and experience."
      },
      {
        image: "/fishingPage/multiplaying fishing game.png",
        title: "Multiplayer Fishing Games",
        description: "Players might enter rooms, compete in real-time, and climb leaderboards for incentives and bragging rights."
      }
    ]
  }
]

// const featuresItems = [
//   {
//     title: "We have fishing games",
//     description: "At Gamzway, we provide a range of tailored fishing games appropriate for many business types and target groups:"
//   } 
// ]

// const featuresGrid = [
//   { 
//     title: "3D Multiplayer Fishing",
//     image: "https://beta.mobzway.com/assets/images/roulette-bg.jpg"
//   },
//   { 
//     title: "Skill-Based Tournament Fishing",
//     image:"https://beta.mobzway.com/assets/images/casino-war-bg.jpg"
//   },
//   { 
//     title: "Real-Money Fishing Competition",
//     image:"https://beta.mobzway.com/assets/images/multi-table-bg.jpg" 
//   },
//   { 
//     title: "Hybrid Fishing-Slot Game",
//     image:"https://beta.mobzway.com/assets/images/andar-bahar-bg.jpg" 
//   },
//   { 
//     title: "Fantasy Fish League",
//     image:"https://beta.mobzway.com/assets/images/teenpatti-20-bg.jpg" 
//   }
// ]

const hireTitle = [
  {
    title: "Features of Our Fishing Games",
  }
]

const platformItems = [
  {
    featuresText:[
      {
        title: "Sites for our Games of Fishing",
        description: "We design fishing games suitable for every key platform:"
      }
    ],
    platformGrid:[
      {
        image: "https://beta.mobzway.com/assets/images/HTML_five-broweswer.webp",
        title: "Web Browsers",
        description: "HTML5-based instant play fishing games"
      },
      {
        image: "https://img.icons8.com/?size=480&id=17836&format=png",
        title: "Mobile Platforms",
        description: "Mobile first, all-screen size compatible iOS and Android"
      },
      {
        image: "https://beta.mobzway.com/assets/images/Mac_PC.webp",
        title: "Windows PC",
        description: "High-definition, huge-screen experiences"
      },
      {
        image: "https://img.icons8.com/?size=200&id=MKRHZpOBBZqD&format=png",
        title: "Smart TVs",
        description: "Create a more immersive living room scene"
      },
      {
        image: "https://img.icons8.com/?size=480&id=IPzemd2v4Ubj&format=png",
        title: "AR/VR Devices",
        description: "Modern platforms for next-generation fishing game players"
      }
    ]
  }
]

const crmItems = [
  {
    title: "Player Control",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/player-management.png"
  },
  {
    title: "Promotion Engine",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/promotion-management.png"
  },
  {
    title: "Analytics Dashboard",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/analytics.png"
  },
  {
    title: "KYC & AML Tools",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/user-management.png"
  },
  {
    title: "Game Management",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/game-management.png"
  },
  {
    title: "Affiliate System",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/affiliate-management.png"
  },
  {
    title: "CRM Integration",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/notificstion-management.png"
  },
  {
    title: "User Segmentation",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/user-management.png"
  }
]

const crmTitle = [
  { 
    title: "Back Office and CRM",
    description: "Our strong Backoffice and CRM solutions help you to easily manage your gaming operations." 
  }
]

const developmentFeatures = {
  sections: [
    {
      title: "Requirements Gathering",
      points: [
        "Understanding your target audience",
        "Objectives and monetising strategy",
        "Market analysis and planning"
      ]
    },
    {
      title: "Game Flow Planning",
      points: [
        "Planning user paths and levels",
        "Game logic development",
        "Wireframing and prototyping"
      ]
    },
    {
      title: "UI/UX Design",
      points: [
        "Developing aesthetically pleasing interfaces",
        "User-friendly navigation",
        "Responsive design implementation"
      ]
    },
    {
      title: "Development & Integration",
      points: [
        "Using strong engines like Unity, Unreal",
        "Feature integration and coding",
        "Animation and graphics implementation"
      ]
    },
    {
      title: "Testing & QA",
      points: [
        "Thorough quality assurance",
        "Performance optimization",
        "Bug removal and testing"
      ]
    },
    {
      title: "Deployment",
      points: [
        "Platform-specific deployment",
        "Version control and release",
        "Launch preparation"
      ]
    },
    {
      title: "Post-Launch Support",
      points: [
        "Regular monitoring and maintenance",
        "Updates and improvements",
        "24/7 technical support"
      ]
    },
    {
      title: "Why Choose Gamzway",
      points: [
        "Seasoned Fishing Game Developers",
        "Custom Game Solutions",
        "Cross-Platform Compatibility",
        "ROI-Driven Game Designs"
      ]
    }
  ]
}

const developmentTitle = [
  {
    title: "How We Create Superior Fishing Games",
    description: "Our approach is open, methodical, and team player"
  }
]

const contactItems = [
  {
    featuresText: [
      {
        title: "Make Contact and Ask Us Anything",
      }
    ],
    description: "Ask enquiries or find yourself wanting to look at prospects. Always on hand to assist you right now is our support crew. Whether your demands call for a product demo, pricing quote, or just ideas generation, Gamzway is one message away.",
    hrefText: "Contact now for a free consultation",
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

const faqTitle = [
  {
    title: "Development FAQs on Fishing Games"
  }
]

const accordionData = [
  {
    title: "Development of a fishing game takes what length of time?",
    description: "Depending on complexity and features, a standard fishing game runs 4 to 8 weeks."
  },
  {
    title: "Could I create a real-money fishing game?",
    description: "Indeed, we favour real-money systems that follow rules set by your country."
  },
  {
    title: "Do you help with game marketing?",
    description: "Absolutely. We help with ASO, game release plans, and influencer relationships."
  },
  {
    title: "Will my game follow a blueprint or be original?",
    description: "Your game will be totally custom-built to fit your market needs and brand identity."
  },
  {
    title: "Could I ask for changes or updates following launch?",
    description: "Yes. We provide post-launch support plans covering scalability, upgrading, and game optimisation."
  }
]

const FishingGames = () => {
  return (
    <div className="fishing-game">
      <div className="landing-fishing-section">
        <LandingSection landingItems={landingItems}/>
      </div>
      <AchievementsBanner />
      
      <div className="fishing-types">
        <PlatformSection platformItems={typesItems}/>
      </div>

      <div className='solutions-fishing-section'>
        <div className='solutions-fishing-top'>
          <FeaturesHeader featuresText={hireTitle}/>
        </div>

        <div className='solutions-fishing-bottom'>
          <div className='solutions-desc-container'>
            <div className='solutions-desc'>
              <br/><br/>
              <span className='text-yellow'>Our fishing games abound with strong, user-attracting elements:</span>
              <br/><br/>
              <ul>
                <li>Realistic fishing mechanics - simulated bait control, hook physics, fish artificial intelligence</li>
                <br/>
                <li>Beautiful animations and images showing life-like underwater landscape</li>
                <br/>
                <li>Events & Leaderboards for maintaining player engagement</li>
                <br/>
                <li>Real-time multiplayer chat support</li>
                <br/>
                <li>AI and bot integration for guaranteed opponent presence</li>
                <br/>
                <li>Custom Skins & Avatars for better customization</li>
                <br/>
                <li>Power-ups and bonuses for completing challenges</li>
                <br/>
                <li>Real Reward Mechanism for in-game or real-world rewards</li>
                <br/>
                <li>Cross-platform access across PC, web, and mobile</li>
              </ul>
            </div>
          </div>
          <div className='solutions-img'>
            <img src="/fishingPage/lap.png" alt="" />
          </div>
        </div>
      </div>

      <ContactBanner contactItems={contactItems}/>

      <PlatformSection platformItems={platformItems}/>

      <CustomGrid customTitle={crmTitle} customgridItems={crmItems}/>

      <div className="development-process-section">
        <FeaturesGrid 
          features={developmentFeatures}
          featuresTitle={developmentTitle}
        />
      </div>

      <div className="faq-section">
        <FeaturesHeader featuresText={faqTitle}/>
        <AccordionSection data={accordionData} className="fishing-faq" />
      </div>

      <PaymentSection />
      <ProductSection productGrid={productItems}/>
    </div>
  )
}

export default FishingGames