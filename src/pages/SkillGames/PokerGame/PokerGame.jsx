// import { useState } from "react"
import "./PokerGame.css"
import CarouselSection from '../../../components/CarouselSection/CarouselSection'
import AchievementsBanner from '../../../components/AchievementsBanner/AchievementsBanner'
import FeaturesHeader from "../../../components/FeaturesSection/FeaturesHeader/FeaturesHeader"
import ContactBanner from "../../../components/ContactBanner/ContactBanner"
import PlatformSection from "../../../components/PlatformSection/PlatformSection"
import PaymentSection from "../../../components/PaymentSection/PaymentSection"
import ProductSection from "../../../components/ProductSection/ProductSection"
import AccordionSection from "../../../components/AccordionSection/AccordionSection"
import LandingSection from "../../../components/LandingSection/LandingSection"
import CustomGrid from "../../../components/CustomGrid/CustomGrid"
import LandingPageV2 from "../../../components/LandingPageV2/LandingPageV2"
import ChooseGrid from "../../../components/ChooseGrid/ChooseGrid"
import FeaturesBanner from "../../../components/FeaturesBanner/FeaturesBanner"
import PlatformImg from '../../../components/LudoPlatformImg/LudoPlatformImg'

const landingItems = [
  {
    title: "Poker Game",
    description: "Experience the thrill and strategy of a classic Poker Game designed for all skill levels. Whether you're a casual player or a seasoned card shark, our immersive poker experience brings realistic gameplay, smooth interface, and competitive features right to your fingertips.",
    description2: "Enjoy Texas Hold’em, Omaha, and other popular poker variations anytime, anywhere.",
    button: "GET STARTED"
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

// const pokercarouselData = [
//   {
//     title: "Hire #1 Poker Game Developers",
//     description: "With the trust of over 300+ clients worldwide. We offer a choice for gaming businesses to hire #1 Poker Game Developers in industry, and help them to build an engaging game from scratch or upgrade their existing games.",
//     image: "https://beta.mobzway.com/assets/images/pokerSlide1.webp",
//     isMainTitle: true,
//   },
//   {
//     title: "Poker game development Company",
//     description: "Get the best Online Poker Game App & website solution developed by Gamzway! With the leading Poker Game Development Company we ensure the top-end delivery of our Poker products in the gaming industry.",
//     image: "https://beta.mobzway.com/assets/images/pokerSlide.webp",
//   }
// ]

const featuresItems = [
  {
    title: "FEATURES OF OUR POKER GAMES"
  }
]
const variantsItems = [
  {
    title: "VARIANTS OF POKER GAME DEVELOPED BY US"
  }
]

// const solutionsTitle = [
//   {
//     title:"ONLINE POKER GAME DEVELOPMENT SOLUTIONS"
//   }
// ]

const touchItems = [
  {
    featuresText: [
      {
        title: "Get in Touch – Ask Anything About Our Poker Game"
      }
    ],
    description: "Ready to explore the world of online poker? Whether you’re just getting started or looking for the perfect poker game to attract players, we’re here to help. Reach out to us with your questions or ideas—we’ll guide you every step of the way.",
    hrefText: "Let’s Talk Poker!"
  }
]

const platformItems = [
  {
    featuresText: [
      {
        title: "WE BUILD THE POKER GAME FOR ALL PLATFORMS",
        description: "No matter what device your audience uses, our poker game is ready to deliver a seamless gaming experience. We develop poker games that run smoothly across all popular platforms."
      }
    ],
    platformGrid: [
      {
        image: "https://beta.mobzway.com/assets/images/HTML_five-broweswer.webp",
        title: "HTML5 Browser - Based Poker Game",
      },
      {
        image: "https://beta.mobzway.com/assets/images/Native_Mobile.webp",
        title: "Native Mobile Poker Game (Android & iOS)",

      },
      {
        image: "https://beta.mobzway.com/assets/images/Mac_PC.webp",
        title: "Poker Game for PC and Mac",
      },
    ]
  }
]

// const hireTitle = [
//   {
//     title:"HIRE POKER GAME DEVELOPERS"
//   }
// ]

// const designTitle = [
//   {
//     title: "HOW WE DESIGN & DEVELOP BEST POKER GAMES?"
//   }
// ]

const productItems = [
  {
    image: "https://beta.mobzway.com/assets/images/rummy-game-development/Product_Poker.webp",
    title: "Poker Game",
    description: " Explore Gamzway’s full-stack poker game development services. From Texas Hold’em and Omaha to Seven Stud and OFC Poker, our team builds immersive poker experiences using modern gaming frameworks. We deliver secure, scalable, and high-performance poker game apps for web and mobile platforms.",
    href: "/skill-games/poker"
  },
  {
    image: "https://beta.mobzway.com/assets/images/poker-game-development/Product_Rummy.webp",
    title: "Rummy Game",
    description: "Our expert team offers robust and engaging rummy game development services tailored to meet your business goals. We build all popular rummy variants while ensuring compliance, smooth gameplay, and real-time engagement across platforms.",
    href: "/skill-games/rummy"
  },
  {
    image: "https://beta.mobzway.com/assets/images/rummy-game-development/Product_Teenpatti.webp",
    title: "Teen Patti Game",
    description: "Get ready-to-deploy or customized Teen Patti game development solutions for mobile, web, and desktop. Whether it's Classic, Fox, Vintage, or Teen Patti Plus, Gamzway develops high-performance card games that attract and retain users.",
    href: "/game-apis/teen-patti"
  },
  {
    image: "https://beta.mobzway.com/assets/images/rummy-game-development/product_ludo.webp",
    title: "LUDO Game",
    description: " Looking to launch your Ludo game app? Gamzway delivers reliable and visually appealing Ludo game development for Android, iOS, and browsers using HTML5. Choose from ready-to-live or fully customized game solutions for your brand.",
    href: "/skill-games/ludo"
  },
]

const faqTitle = [
  {
    title: "Frequently Asked Questions (FAQs) – Poker Game Development"
  }
]

const faqData1 = [
  {
    title: "What types of poker games can you develop?",
    description: "We develop a wide range of poker games including Texas Hold’em, Omaha, Seven Stud, Open Face Chinese Poker (OFC), Pot-Limit Omaha (PLO), Sit & Go, and custom variants based on your requirements.",
  },
  {
    title: "Which platforms are your poker games compatible with?",
    description: "Our poker games are designed for multiple platforms including iOS, Android, Windows, macOS, and web browsers. We ensure seamless gameplay across desktop, mobile, and tablet devices."
  },
  {
    title: "How do you ensure the security of poker games?",
    description: "We implement robust security measures such as secure payment gateways, anti-fraud systems, data encryption, and RNG certification to ensure fair and safe gameplay for all users."
  },
  {
    title: "Can I customize the poker game to include my branding and unique features?",
    description: "Absolutely! We offer full customization options for UI/UX design, game rules, tournaments, rewards, loyalty programs, and backend management to match your brand and business needs."
  },
  {
    title: "Do you provide post-launch support and maintenance?",
    description: "Yes, we offer ongoing support and maintenance services including bug fixes, updates, security patches, and feature enhancements to ensure your poker game runs smoothly at all times."
  }
]

const faqData2 = [
  {
    title: "How long does it take to develop a poker game?",
    description: "The development timeline depends on the complexity and features of the poker game you require. Typically, a standard multiplayer poker game takes 3 to 6 months from design to deployment."
  },
  {
    title: "Can you integrate payment systems for in-game purchases and betting?",
    description: "Yes, we integrate secure and reliable payment gateways to enable in-app purchases, real-money betting, and secure transactions while ensuring compliance with relevant regulations."
  },
  {
    title: "What technologies do you use for poker game development?",
    description: " We use cutting-edge technologies including HTML5, Unity, Unreal Engine, and various backend frameworks to develop high-performance, scalable, and engaging poker games."
  },
  {
    title: "Is the poker game scalable to handle a large number of players?",
    description: "Yes, we design poker games with scalable architecture to support thousands of concurrent players without compromising performance or user experience."
  },
  {
    title: "How do you handle regulatory compliance in online poker games?",
    description: "We work closely with clients to ensure that the poker games meet local and international regulatory requirements related to online gaming, data privacy, and responsible gaming."
  }
]

const demoItems = [
  {
    featuresText: [
      {
        title: "Start your business journey with Gamzway"
      }
    ],
    description: "Experience our games and discover the comprehensive features and solutions designed to help you start, operate, and grow your online gaming business with confidence.",
    hrefText: "TRY DEMO"
  }
]

// const chooseTitle = [
//   {
//     title: "Why Choose Gamzway as Your Poker Game Development Company?"
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

const crmTitle = [
  {
    title: "backoffice & CRM",
    description: "We offer the best BackOffice and CRM tools with our poker software solutions, making game management easy. You can enjoy a user-friendly dashboard and all the essential & valuable features to manage the game rooms."
  }
]

const PokerGame = () => {
  // const [showMore, setShowMore] = useState(false)

  // const toggleReadMore = () => {
  //   setShowMore(!showMore);
  // }

  const featuresGrid = [
    {
      image: "https://beta.mobzway.com/assets/images/poker-game-development/01-11.webp",
      title: "Multi Table Gameplay",
    },
    {
      image: "https://beta.mobzway.com/assets/images/poker-game-development/02.webp",
      title: "Private Rooms",

    },
    {
      image: "https://beta.mobzway.com/assets/images/poker-game-development/omaha02.webp",
      title: "Mobile Response",

    },
    {
      image: "https://beta.mobzway.com/assets/images/poker-game-development/04.webp",
      title: "Multi Theme",

    },
    {
      image: "https://beta.mobzway.com/assets/images/poker-game-development/05.webp",
      title: "Multiple Themes",
    },
    {
      image: "https://beta.mobzway.com/assets/images/poker-game-development/06.webp",
      title: "Push Notifications",

    },
    {
      image: "https://beta.mobzway.com/assets/images/poker-game-development/07.webp",
      title: "Secure Payment Gateways",

    },
    {
      image: "https://beta.mobzway.com/assets/images/poker-game-development/08.webp",
      title: "Advanced Anti-Fraud System",

    },
    {
      image: "https://beta.mobzway.com/assets/images/poker-game-development/09.webp",
      title: "Rewards & Loyalty Programs",

    },
    {
      image: "https://beta.mobzway.com/assets/images/poker-game-development/r111.webp",
      title: "RNG Certified Gameplay",

    },
    {
      image: "https://beta.mobzway.com/assets/images/poker-game-development/11.webp",
      title: "Responsible Gaming Features",

    },
    {
      image: "https://beta.mobzway.com/assets/images/poker-game-development/12.webp",
      title: "Admin Panel & CRM Access",

    }
  ]

  const variantsGrid = [
    {
      image: "https://beta.mobzway.com/assets/images/poker-game-development/01-11.webp",
      title: "Hold'em Poker",
    },
    {
      image: "https://beta.mobzway.com/assets/images/poker-game-development/omaha02.webp",
      title: "PLO 4",
    },
    {
      image: "https://beta.mobzway.com/assets/images/poker-game-development/omaha02.webp",
      title: "PLO 5",
    },
    {
      image: "https://beta.mobzway.com/assets/images/poker-game-development/omaha02.webp",
      title: "PLO 6",
    },
    {
      image: "https://beta.mobzway.com/assets/images/poker-game-development/04.webp",
      title: "Sit n Go",
    },
    {
      image: "https://beta.mobzway.com/assets/images/poker-game-development/05.webp",
      title: "All in Poker",
    },
  ]


  return (
    <div className='poker-game'>
      <div className='carousel-swiper'>
        {/* <CarouselSection carouselData={pokercarouselData}/> */}
        <LandingPageV2 landingItems={landingItems} landingImages={landingImages} />
      </div>

      <AchievementsBanner />

      <FeaturesBanner />

      <div className='features-section'>
        <FeaturesHeader featuresText={variantsItems} />
        <div className='poker-features-grid'>
          {variantsGrid.map((item, index) => (
            <div className='poker-features-grid-item' key={index}>
              <img src={item.image} alt="" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>



      {/* <div className='features-section'>
        <FeaturesHeader featuresText={featuresItems} />
        <div className='poker-features-grid-2'>
          {featuresGrid.map((item, index) => (
            <div className='poker-features-grid-2-item' key={index}>
              <img src={item.image} alt="" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div> */}

      <PlatformSection platformItems={platformItems} />

      <PlatformImg />
      <CustomGrid/>

      {/* <div className='solutions-poker-section'>
        <div className='solutions-poker-top'>
          <FeaturesHeader featuresText={solutionsTitle}/>
        </div>

        <div className='solutions-poker-bottom'>
          <div className='solutions-img'>
            <img src="https://beta.mobzway.com/assets/images/poker-game-development-company.webp" alt="" />
          </div>
          <div className='solutions-desc-container'>
            <p className='solutions-desc'>
            Gamzway is a leading poker game development company in India, USA & UK, which offers a superior class of game development services. Our highly experienced poker game developers go the extra mile to give the poker lovers a different and top-notch gaming experience.
                  <br/><br/>
                  As the best poker game for android, iOS, or web platforms and our game designers, make sure that a realistic experience is delivered on all sorts of virtual platforms. We also offer customized poker software development services for the game operators who wish to run their online poker rooms.
                  <br/><br/>
                  Our games exhibit the best modern graphics that induce the players to play and utilize their gaming skills and leave them thoroughly entertained. Using artificial intelligence, eye-popping visual effects, and advanced technology, our team creates games that look very premium and run seamlessly on multiple platforms.
                  <br/><br/>
                  <span className="bold-text">To ensure that our clients gain players’ trust, we always offer reliable and secure game solutions.</span>
                  <span className={`solutions-desc-more ${showMore ? 'show' : ''}`}>
                  <br/><br/>
                  Our seasoned game developers know the art of creating the best poker game apps. They leave no stone unturned to incorporate the best visuals, sound effects, technology, and design aesthetics to deliver a world-class gaming experience. Moreover, the excellent quality HTML5 based games developed by us are adaptable to different screen resolutions, screen sizes, and aspect ratios.
                  <br/><br/>
                  <span className="bold-text">We are committed to brilliance, and that’s why we offer:</span>
                  <br/><br/>
                  1. A poker game that are secure and encrypted.
                  <br/>
                  2. Top-rated assistance to our clients.
                  <br/>
                  3. Games which are adaptable to multiple platforms.
                  <br/>
                  4. Games that have appealing graphics and easy-to-use UI.
                  </span>
            </p>
            <button onClick={toggleReadMore}>
              {showMore ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </div>
      </div> */}

      <ContactBanner contactItems={touchItems} />

      {/* <div className='choose-section'>
            <FeaturesHeader featuresText={chooseTitle}/>
            <div className='choose-container'>
                <div className='choose-grid'>
                    <div className='choose-card'>
                        <div className='card-icon'>
                            <i className="fas fa-microchip"></i>
                        </div>
                        <h3>Rapid Launch</h3>
                        <p>Our poker game development team delivers both 2D and 3D poker games with rich graphics and seamless animations for an immersive user experience.</p>
                    </div>
                    <div className='choose-card'>
                        <div className='card-icon'>
                            <i className="fas fa-shield-alt"></i>
                        </div>
                        <h3>Completely Manage Solutions</h3>
                        <p> We prioritize user trust by integrating robust data protection protocols, fraud prevention mechanisms, and secure payment gateways in every poker game app we develop.</p>
                    </div>
                    <div className='choose-card'>
                        <div className='card-icon'>
                            <i className="fas fa-sync"></i>
                        </div>
                        <h3>End to End Security</h3>
                        <p>Whether your users are on desktop, mobile, or web browsers, our poker games are optimized to run smoothly across all devices.</p>
                    </div>
                    <div className='choose-card'>
                        <div className='card-icon'>
                            <i className="fas fa-code"></i>
                        </div>
                        <h3>Cross Platform Compatibility</h3>
                        <p> We utilize the latest tech stack including real-time gaming engines, high-level programming languages, and responsive UI/UX to create dynamic and scalable poker platforms.</p>
                    </div>
                    <div className='choose-card'>
                        <div className='card-icon'>
                            <i className="fas fa-shopping-cart"></i>
                        </div>
                        <h3>Bug Free Product</h3>
                        <p>Looking to enter the market quickly? You can purchase a fully functional, customizable poker game app developed by experts at Gamzway.</p>
                    </div>
                    <div className='choose-card'>
                        <div className='card-icon'>
                            <i className="fas fa-shopping-cart"></i>
                        </div>
                        <h3>24x7 Support</h3>
                        <p>Looking to enter the market quickly? You can purchase a fully functional, customizable poker game app developed by experts at Gamzway.</p>
                    </div>
                </div>
            </div>
      </div> */}

      <ChooseGrid />


      <PaymentSection />

      <ProductSection productGrid={productItems} />

      <div className="faq-section">
        <FeaturesHeader featuresText={faqTitle} />
        <div className="faq-container">
          <div className="faq-left">
            <AccordionSection data={faqData1} />
          </div>
          <div className="faq-right">
            <AccordionSection data={faqData2} />
          </div>
        </div>
      </div>

      <ContactBanner contactItems={demoItems} />

    </div>
  )
}

export default PokerGame