
import './RummyGame.css'
import CarouselSection from '../../../components/CarouselSection/CarouselSection'
import AchievementsBanner from '../../../components/AchievementsBanner/AchievementsBanner'
import FeaturesHeader from '../../../components/FeaturesSection/FeaturesHeader/FeaturesHeader'
import ContactBanner from '../../../components/ContactBanner/ContactBanner'
import PlatformSection from '../../../components/PlatformSection/PlatformSection'
import PaymentSection from '../../../components/PaymentSection/PaymentSection'
import ProductSection from '../../../components/ProductSection/ProductSection'
import AccordionSection from '../../../components/AccordionSection/AccordionSection'
import AboutGrid from '../../../components/AboutGrid/AboutGrid'
import FeaturesGrid from '../../../components/FeaturesSection/FeaturesGrid/FeaturesGrid'
import CustomGrid from '../../../components/CustomGrid/CustomGrid'
import RummyCarousel from '../../../components/RummyCarousel/RummyCarousel'

// const rummyCarouselData = [
//   {
//     title: "Rummy Game Development Company",
//     description:
//       "Are you in search of the top rummy game development company? Gamzway specializes in rummy game development, offering comprehensive solutions for creating the best online rummy game app and website.",
//     image: "https://beta.mobzway.com/assets/images/rummy-software/Rummy-07.webp",
//     isMainTitle: true,
//   },
//   {
//     title: "A23 Rummy",
//     description:
//       "Want to build app like A23 Rummy game? Gamzway specializes in rummy game development, offering a comprehensive range of solutions for creating the best online rummy game app and website.",
//     image: "https://beta.mobzway.com/assets/images/rummy-software/Rummy-03.webp",
//   },
//   {
//     title: "Junglee Rummy",
//     description:
//       "Build the app similar to Junglee Rummy for user friendliness and unique features just like Junglee Rummy for kick starting your journey. Elevate your online game business with our expert assistance.",
//     image: "https://beta.mobzway.com/assets/images/rummy-software/Rummy-02.webp",
//   },
//   {
//     title: "Rummy Circle",
//     description:
//       "Want to experience exciting games and tournaments for your Rummy gaming business? We are providing rummy platform similar to Rummy Circle and meet your expectations while getting the best app developed by Rummy game developers.",
//     image: "https://beta.mobzway.com/assets/images/rummy-software/Rummy-11.webp",
//   },
//   {
//     title: "Rummy Time",
//     description:
//       "Developing the classic card games for the gaming business with the years of experience. Build the classic enjoyable gaming interface with user-friendly features for your gaming business. Best Rummy game development company.",
//     image: "https://beta.mobzway.com/assets/images/rummy-software/Rummy-04.webp",
//   },
//   {
//     title: "Rummy Culture",
//     description:
//       "Hire the Rummy game app developers for your gaming business requirements, with over 9+ years of experience we are specialized in the rummy gaming industry and proeficient in building game similar to Rummy Culture.",
//     image: "https://beta.mobzway.com/assets/images/rummy-software/Rummy-01.webp",
//   },
// ]

const aboutText = [
  {
    title: "RUMMY - A MULTIPLAYER GAME",
    description: "Rummy  known for its strategic gaming, intense competition, and real-money possibilities, rummy is among the most often played card games in India and worldwide.  Played by millions, rummy has successfully migrated to the digital realm via sophisticated smartphones and online apps. At Gamzway, we assist gaming companies in creating strong, safe, aesthetically pleasing rummy game apps catered to both casual and competitive players.  Our rummy game creation services are built to grow with your ambition, whether your project is starting a business or broadening your gaming portfolio."
  }
]

const variationsText = [
  {
    title: "Variations of Rummy Mobile Game",
    description: " We create all main forms of rummy games to guarantee that one platform will let your users enjoy a range of experiences:"
  }
]

const solutionsTitle = [
  {
    title: "ONLINE RUMMY GAME SOLUTIONS"
  }
]

const contactData = [
  {
    featuresText: [
      {
        title: " Looking for the ideal rummy game application for your company?"
      }
    ],
    description: "You found the correct location. Using simple design, seamless gameplay, and loyalty-building elements, Gamzway creates rummy game apps that not only draw players but also keep them involved.\n\nOur solutions fit your monetising plan, whether your goals are adverts, real-money games, or in-app purchases.",
    href: "",
    hrefText: "Contact Us"
  }
]

const requestItems = [
  {
    featuresText: [
      {
        title: "Ready to get going?"
      }
    ],
    description: " It gives us great pleasure to realise your rummy game concept.  Let us go over your project and get you a customised demo.",
    href: "",
    hrefText: "Request Demo"
  }
]

const platformItems = [
  {
    featuresText: [
      {
        title: "HOW MANY PLATFORMS DOES OUR RUMMY GAME SUPPORT?"
      }
    ],
    description: "Gamzway program for rummy games supports all top platforms, so allowing maximum reach and user involvement.",
    platformGrid: [
      {
        image: "https://beta.mobzway.com/assets/images/rummy-game-development/1-01.webp",
        title: "Desktop Version",
        description: "Get a rummy game compatible with Mac and Windows devices and give your desktop players to download and bet on their favorite games quickly. rummy website for sale"
      },
      {
        image: "https://beta.mobzway.com/assets/images/rummy-game-development/3-01.webp",
        title: "Web Version",
        description: "Take your rummy business on the web with our cross-browser and cross-platform compatible games. Connect with the web-savvy rummy lovers right away! best rummy game for android"
      },
      {
        image: "https://beta.mobzway.com/assets/images/rummy-game-development/02-01.webp",
        title: "Mobile Version",
        description: "Get a customized and flexible game solution that can run seamlessly on any mobile device, be it Android, iOS. Our mobile game apps can adapt to varied mobile and tablet screen sizes."
      },
    ]
  }
]

const featuresTitle =[
  {
    title: "What features define our Rummy Game App?",
    description: "We provide a comprehensive gaming experience with features focused on gameplay, user engagement, administration, and security:",
  }
]
const featuresItems = [
  {
    sections: [
      {
        title: "Fundamental Gameplay",
        points: [
          "Seamless drag-and-drop controls",
          "AI-based auto-play when a disconnection occurs",
          "Playable tables in real time",
          "Chat and emojis inside the game"
        ]
      },
      {
        title: "User Engagement Features",
        points: [
          "Daily login prizes",
          "Leader boards and success stories",
          "Contests and competitions",
          "Refer and earn schemes"
        ]
      },
      {
        title: "Admin Panel Features",
        points: [
          "User and game table handling",
          "Dashboard for revenue and analytics",
          "Anti-cheat systems and fraud detection",
          "Control for push notifications"
        ]
      },
      {
        title: "Technical & Security",
        points: [
          "RNG-certified gaming",
          "Complete encryption from end to end",
          "KYC and age confirming",
          "Support for several languages and currencies"
        ]
      }
    ]
  }
]

const hireTitle = [
  {
    title: "WHY HAVE YOUR RUMMY GAME FROM GAMZWAY?"
  }
]

const standoutTitle = [
  {
    title: "What Makes Us Stand-out?",
    description: "Our business-centric approach lets us match game elements to your monetising objectives. Get your game app ready in weeks, not months to accelerate time-to- market."
  }
]

const faqTitle = [
  {
    title: "Rummy GAME FAQS"
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

const faqAccordionData = [
  {
    title: "Can one host an online rummy game in India legally?",
    description: "Under Indian law, rummy is indeed acknowledged as a game of skill and legal in most states.  We guarantee our site follows legal systems."
  },
  {
    title: "Custom rummy app development takes what length of time?",
    description: "The complexity determines development time; still, our white-label solution can be started in 15 to 30 days.  Custom apps require 6–10 weeks."
  },
  {
    title: "Can I combine wallets and payment gateways in Q3?",
    description: "We support UPI, Paytm, Razorpay, and other main payment methods."
  },
  {
    title: "Exist source code ownership?",
    description: " Indeed, we provide per agreement flexible licensing options, including source code ownership."
  },
  {
    title: "Following launch, what type of assistance do you provide?",
    description: "We provide 24-hour technical assistance, feature updates, server management, bug fixes, and total maintenance."
  },
  {
    title: "What is an Online Rummy Game?",
    description: "An online rummy game is a card game that allows you to play the rummy game with real players from all over the globe. It is an exciting and fun game that helps you to improve your strategic skills. Online rummy games are thrilling, easy, and refreshing at the same time. This game is for adults only and not for children. You can play this game of cards with your family and friends."
  },
  {
    title: "Why do we need online rummy game development services?",
    description: "If you want the best rummy software and want to launch it as soon as possible, then our rummy game development services can be the greatest option for you. We have experienced game developers and we provide attractive offers on a daily basis. We are a leading and worldwide trusted rummy game development company that helps you take your online rummy game to the next level."
  },
  {
    title: "How much cost do I require to invest in rummy website development?",
    description: "If you want an attractive and fully featured rummy website, then you have to invest around 6 lakh in rummy website development. However, the amount may differ depending on your requirements and features. The love for rummy game in India is increasing day by day as it is an interesting and skill-based game. Rummy games are completely legal in India and so most people want to have their own rummy website. If you are one of them, do contact us for rummy website development."
  },
  {
    title: "What is your USP in Rummy Game Development?",
    description: "We built a rummy game for all platforms; either you want a desktop version (Windows or Mac), mobile version (Android or iOS) or a web version. We have a team of best, highly skilled and professional rummy game developers who can help you expand your online game business."
  },
  {
    title: "How Do You Make a Rummy Game?",
    description: "Here are some points:\nPre-Production: Business Requirement ⇢ Branding Details ⇢ Payment gateway ⇢ Target Audience\n\nProduction: Art Production ⇢ Graphics Integration ⇢ Website & Payment gateway ⇢ Quality Control\n\nPost-Production: Patches & Updates ⇢ Server Maintenance ⇢ Technical Support"
  },
  {
    title: "How many online rummy game development solutions are provided by Gamzway?",
    description: "Being the most reputable online rummy game development company, we have provided the solutions at our best. We offer both web and mobile rummy games, payment gateway integration, a user-friendly back end so that the admin can manage the rummy business efficiently, and many more."
  }
]

const aboutGrid = [
  {
    image: "https://beta.mobzway.com/assets/images/rummy-game-development/point-rummy.webp",
    title: "Rummy Points",
    description: " a variation fast-paced in which every point has a predefined value.  The first declaring player gains by using appropriate sets and sequences."
  },
  {
    image: "https://beta.mobzway.com/assets/images/rummy-game-development/pool-rummy.webp",
    title: " Rummy in Pools",
    description: " Individuals add chips to a pool.  Being the last person standing after removing others depending on points is the aim."
  },
  {
    image: "https://beta.mobzway.com/assets/images/rummy-game-development/deal-rummy.webp",
    title: "Rummy Dealings",
    description: " Players battle throughout a set deal count.  The one with the most chips in the end takes home.  "
  },
  {
    image: "https://ahoygamesdotcom.b-cdn.net/wp-content/uploads/2022/05/Icon_GinRummy_1024_rounded.png",
    title: "Rummy of Gin",
    description: " Popular in Western markets, Gin Rummy concentrates on creating melds and a low deadwood point count."
  },
  {
    image: "https://play-lh.googleusercontent.com/YuPVFdbx2oc0dz0m8tEHWT1aPqkccJ4qZHIu4iH5fVsXnKbUJ-DyuUA1flhAuhI5TA",
    title: "Indian Rummy (13-Card Game)",
    description: "Often favoured in the Indian gaming scene, the traditional form of rummy was with 13 cards."
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

const crmTitle =[
  { 
    title: "backoffice & CRM",
    description: "We offer the best BackOffice and CRM tools with our rummy software solutions, making game management easy. You can enjoy a user-friendly dashboard and all the essential & valuable features to manage the game rooms." 
  }
]


const RummyGame = () => {

  return (
    <div className='rummy-game'>
      <div className='rummy-carousel-swiper'>
        {/* <CarouselSection carouselData={rummyCarouselData} /> */}
        <RummyCarousel />
      </div>

      <AchievementsBanner />

      <div className='about-rummy-section'>
        <div className='about-rummy'>
          <FeaturesHeader featuresText={aboutText} />
        </div>

        <div className='about-rummy'>
          <FeaturesHeader featuresText={variationsText} />
        </div>

        <AboutGrid aboutGrid={aboutGrid} />
    
        <p className='about-rummy-desc'>Designed with user experience, fairness, and engagement in mind, every version fits mobile and web platforms.</p>
      </div>

      <div className='solutions-rummy-section'>
        <div className='solutions-rummy-top'>
          <FeaturesHeader featuresText={solutionsTitle}/>
        </div>

        <div className='solutions-rummy-bottom'>
          <div className='solutions-img'>
            <img src="https://beta.mobzway.com/assets/images/rummy-game-development/rummy-game-development-solutions%201.webp" alt="" />
          </div>
          <div className='solutions-desc-container'>
            <div className='solutions-desc'>
                  <span>We provide complete online rummy game solutions covering:</span>
                  <br/><br/>
                  <ul>
                    <li>Custom game development based on your company's specifications for UI/UX, game mechanics, and branding.</li>
                    <br/>
                    <li>White Label Solutions: Rapid go-to-market, capable, ready-to-launch rummy platforms.</li>
                    <br/>
                    <li>KYC modules, wallets, and safe payment gates all integrate real money.</li>
                    <br/>
                    <li>Android, iOS, and web single code bases are compatible across platforms.</li>
                    <br/>
                    <li>Compliance with international guidelines for random number generation and game fairness guarantees RNG Certification & Fair Play.</li>
                    <br/>
                    <li> Strong backend for user management, game tracking, income, and security tracking in Admin & Analytics Panel.</li>
                  </ul>
                  <br/><br/>
            </div>
          </div>
        </div>
      </div>

      <ContactBanner contactItems={contactData} />

      <PlatformSection platformItems={platformItems}/>

      <CustomGrid customgridItems={crmItems} customTitle={crmTitle} />

      {/* <div className="features-section">
        <div className="features-container">
          <div className="features-header">
            <FeaturesHeader featuresText={[{ title: featuresItems[0].title }]} />
            <p className="features-description">{featuresItems[0].description}</p>
          </div>
          
          <div className="features-grid">
            {featuresItems[0].sections.map((section, index) => (
              <div key={index} className="feature-category">
                <div className="feature-category-header">
                  <h3>{section.title}</h3>
                  <div className="category-line"></div>
                </div>
                <div className="feature-points">
                  {section.points.map((point, pointIndex) => (
                    <div key={pointIndex} className="feature-point">
                      <span className="point-bullet"></span>
                      <p>{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      <FeaturesGrid features={featuresItems[0]} featuresTitle={featuresTitle} />


      <div className='solutions-rummy-section'>
        <div className='solutions-rummy-top'>
          <FeaturesHeader featuresText={hireTitle}/>
        </div>

        <div className='solutions-rummy-bottom'>
          <div className='solutions-desc-container'>
            <div className='solutions-desc'>
            <br/><br/>
            <span className='text-yellow'>Focussing on real-money and casual card games, Gamzway is among the top game developers in India.  This is the reason our customers chose us: </span>
            <br/><br/>
            <ul>
              <li>More than one hundred successful game introductions</li>
              <br/>
              <li>Specialized team of game designers, developers, and QA professionals</li>
              <br/>
              <li>Integration of wallets and safe payments</li>
              <br/>
              <li>Customized participation strategies</li>
              <br/>
              <li>Reasonably priced, scalable remedies</li>
              <br/>
              <li>24/7 technical maintenance and support</li>
              <br/>
              <li> We work with you to ensure that your game is successful, transcending mere coding.</li>
            </ul>
            </div>
            <button>
              REQUEST A QUOTE
            </button>
          </div>
          <div className='solutions-img'>
            <img src="https://beta.mobzway.com/assets/images/rummy-game-development/hire-rummy-game-developer.webp" alt="" />
          </div>
        </div>
      </div>
        
      {/* <div className='solutions-rummy-section bg-1'>
        <div className='solutions-rummy-top'>
          <FeaturesHeader featuresText={chooseTitle}/>
        </div>

        <div className='solutions-rummy-bottom'>
          <div className='solutions-desc-container'>
            <br/>
            <br/>
            <h3>Benefits of Choosing Gamzway for Rummy Game Development Solutions</h3>
            <br/>
            <ul >
                <li>Licensed software with comprehensive legal documentation.</li>
                <li>Round-the-clock technical support for any gaming-related issues.</li>
                <li>Cross-functionality in gaming solutions, compatible with Desktop, Android, and iOS.</li>
                <li>Globally recognized gaming products with optimal performance.</li>
                <li>Extensive support both pre-production and post-production.</li>
                <li>Utilization of highly secure coding and programming languages for building gaming platforms.</li>
                <li>Future updates and customizations available for provided gaming products.</li>
                <li>Timely delivery of iGaming products with fruitful consultations.</li>
                <li>Development of gaming products by a skilled and experienced team of developers. </li>
                <li>Integration of interactive social media features into the iGaming solutions.</li>
                <li>Adoption of cutting-edge technology stacks like augmented and virtual reality, blockchain, and engaging user graphics and content in the iGaming solutions</li>
            </ul>
          </div>
          <div className='solutions-img'>
            <img src="https://beta.mobzway.com/assets/images/rummy-game-development/why_choose_us_rummy.webp" alt="" style={{ width: '500px', paddingTop: '30px'}}/>
          </div>
        </div>
      </div> */}
      
      <div className="standout-section">
        <div className="standout-container">
          <div className="standout-header">
            <FeaturesHeader featuresText={[{ title: standoutTitle[0].title }]} />
            <p className="standout-description">{standoutTitle[0].description}</p>
          </div>
          
          <div className="standout-grid">
            <div className="standout-card">
              <div className="card-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>Fast Development</h3>
              <p>Get your game to market quickly with our rapid development process</p>
            </div>
            
            <div className="standout-card">
              <div className="card-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Secure Platform</h3>
              <p>Built with advanced security measures and fraud prevention systems</p>
            </div>
            
            <div className="standout-card">
              <div className="card-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>User-Centric</h3>
              <p>Designed with player experience and engagement in mind</p>
            </div>
            
            <div className="standout-card">
              <div className="card-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <h3>Customizable</h3>
              <p>Flexible solutions that adapt to your business needs</p>
            </div>
          </div>
        </div>
      </div>

      <ContactBanner contactItems={requestItems} />

      {/* <div className='questions-section'>
        {questionsData.map((question, index) => (
          <div key={index} className='question-container'>
            <FeaturesHeader 
              featuresText={[question]} 
              titleStyle={{ fontSize: '32px'}}
            />
          </div>
        ))}
      </div> */}

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

      <ContactBanner contactItems={demoItems}/>

    </div>
  )
}

export default RummyGame
