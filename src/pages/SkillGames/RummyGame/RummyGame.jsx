import {useState} from 'react'
import './RummyGame.css'
import CarouselSection from '../../../components/CarouselSection/CarouselSection'
import AchievementsBanner from '../../../components/AchievementsBanner/AchievementsBanner'
import FeaturesHeader from '../../../components/FeaturesSection/FeaturesHeader/FeaturesHeader'
import ContactBanner from '../../../components/ContactBanner/ContactBanner'
import PlatformSection from '../../../components/PlatformSection/PlatformSection'
import ClientSection from '../../../components/ClientSection/ClientSection'
import PaymentSection from '../../../components/PaymentSection/PaymentSection'
import ProductSection from '../../../components/ProductSection/ProductSection'

const rummyCarouselData = [
  {
    title: "Rummy Game Development Company",
    description:
      "Are you in search of the top rummy game development company? Mobzway specializes in rummy game development, offering comprehensive solutions for creating the best online rummy game app and website.",
    image: "https://beta.mobzway.com/assets/images/rummy-software/Rummy-07.webp",
    isMainTitle: true,
  },
  {
    title: "A23 Rummy",
    description:
      "Want to build app like A23 Rummy game? Mobzway specializes in rummy game development, offering a comprehensive range of solutions for creating the best online rummy game app and website.",
    image: "https://beta.mobzway.com/assets/images/rummy-software/Rummy-03.webp",
  },
  {
    title: "Junglee Rummy",
    description:
      "Build the app similar to Junglee Rummy for user friendliness and unique features just like Junglee Rummy for kick starting your journey. Elevate your online game business with our expert assistance.",
    image: "https://beta.mobzway.com/assets/images/rummy-software/Rummy-02.webp",
  },
  {
    title: "Rummy Circle",
    description:
      "Want to experience exciting games and tournaments for your Rummy gaming business? We are providing rummy platform similar to Rummy Circle and meet your expectations while getting the best app developed by Rummy game developers.",
    image: "https://beta.mobzway.com/assets/images/rummy-software/Rummy-11.webp",
  },
  {
    title: "Rummy Time",
    description:
      "Developing the classic card games for the gaming business with the years of experience. Build the classic enjoyable gaming interface with user-friendly features for your gaming business. Best Rummy game development company.",
    image: "https://beta.mobzway.com/assets/images/rummy-software/Rummy-04.webp",
  },
  {
    title: "Rummy Culture",
    description:
      "Hire the Rummy game app developers for your gaming business requirements, with over 9+ years of experience we are specialized in the rummy gaming industry and proeficient in building game similar to Rummy Culture.",
    image: "https://beta.mobzway.com/assets/images/rummy-software/Rummy-01.webp",
  },
]

const aboutText = [
  {
    title: "About Rummy Game Development Company",
    description: "Mobzway is a popular Rummy Game Development Company in India. It is the right place to find the best rummy game. We have proven experienced rummy game developers at providing rich appearance and advanced features for rummy. We strive to take your online rummy game business to the next level. Mobzway has come across with ready-to-use rummy game app for iOS, Android, and other platforms. With 5+ years of quality perception and teamwork experience, we have developed great customized and smart UI interfaces for a rummy game application. We hold a dominant place in the online game development industry. Our skilled unit will assist you throughout the rummy app development journey."
  }
]

const variationsText = [
  {
    title: "Variations of Rummy Mobile Game",
    description: "Dive into the world of online rummy with various game variations available on our platform. Whether it's Point Rummy, Pool Rummy, or Deal Rummy, we offer the flexibility to customize your rummy game app or website according to your preferences."
  }
]

const solutionsTitle = [
  {
    title: "ONLINE RUMMY GAME DEVELOPMENT SOLUTIONS"
  }
]

const contactData = [
  {
    featuresText: [
      {
        title: "Looking For The Best Rummy Game Application For Your Business"
      }
    ],
    description: "Need expert advice on online rummy game development business? Get in touch with us now and let our dedicated rummy game experts answer all your questions.",
    href: "",
    hrefText: "Contact Us"
  }
]

const requestItems = [
  {
    featuresText: [
      {
        title: "Ready To Get Started?"
      }
    ],
    description: "Experience the #1 Rummy Platform for you business to know how best we are at what we do?",
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
    description: "Our Online Rummy Game is compatible with all android, web, desktop, mobile, iOS platforms. We provide rummy games suitable for both Android and iOS operating systems. You can play without any hassle on any platform.",
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

const featuresItems = [
    {
      title: "What features of rummy game app are developed by us?",
      description: "We provide all types of features of Rummy Game. The features developed by us are rewards, tournaments, a loyalty program, and an easy money withdrawal process. Besides the attractive interface, attractive design, 24hours back office support, certified games, anti-fraud system, multilingual, these are also provided by us."
    }
]

const chooseTitle = [
  {
    title: "Why Choose Mobzway As Your Rummy Game Development Company",
    description: "Clients choose Mobzway for Rummy Game Development for several reasons, primarily due to our exceptional software offerings. Our unique software stands out due to its robust architecture, heightened security measures, compatibility across various platforms, and cutting-edge technology. Mobzway Technologies has emerged as a trailblazer in rummy game development, surpassing standard game products by providing advanced rummy development solutions. We prioritize delivering top-notch services to meet our clients' strategic goals and service plans. Our gaming products feature top-tier attributes and functionality, offering users a lifelike experience. With a substantial base of satisfied clients who consistently praise our applications for their outstanding quality and seamless performance, Mobzway has established itself as a prominent player in the game development industry. Our team includes a pool of gaming experts and specialists, including software developers, graphic designers, animators, and quality analysts. Thanks to their expertise, we deliver flawless rummy mobile applications and development services, complemented by post-development technical support."
  }
]

const hireTitle = [
  {
    title: "How to Hire Rummy Game App Developers?"
  }
]

const standoutTitle = [
  {
    title: "What Makes Us Stand-out?",
    description: "If you are looking for the best rummy game developers, Mobzway’s developers make your iGaming products completely different from others. You look out which technical aspects make your gaming solutions unique."
  }
]

const questionsData = [
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
    title: "How many online rummy game development solutions are provided by Mobzway?",
    description: "Being the most reputable online rummy game development company, we have provided the solutions at our best. We offer both web and mobile rummy games, payment gateway integration, a user-friendly back end so that the admin can manage the rummy business efficiently, and many more."
  }
]

const faqTitle = [
  {
    title: "Rummy GAME DEVELOPMENT FAQS"
  }
]

const productItems = [
  {
    image: "https://beta.mobzway.com/assets/images/rummy-game-development/Product_Poker.webp",
    title: "Poker Game Development",
    description: "Mobzway provides poker game development for all the popular poker games like Texas Hold’em, Omaha, Seven Stud, OFC Poker, and more. Our seasoned game developers utilize cutting-edge gaming technology to offer the player's best poker gaming experience.",
    href: "/skill-games/poker"
  },
  {
    image: "https://beta.mobzway.com/assets/images/rummy-game-development/Product_Casino.webp",
    title: "Casino Software",
    description: "For the online casino game entrepreneurs and businesses, Mobzway offers customized casino game solutions. All the popular casino games like Roulette, Blackjack, Slot, Baccarat, etc. are designed and developed at our gaming studio as per your business needs.",
    href: "/casino-games"
  },
  {
    image: "https://beta.mobzway.com/assets/images/rummy-game-development/Product_Teenpatti.webp",
    title: "Teen Patti Game Development",
    description: "Mobzway offers ready-to-use Teen Patti solutions for business ventures. We build customized solutions for all the variants like Fox,Vintage, and Teen Patti Plus. We provide solutions for all desktop & mobile devices, and web browsers at the best prices.",
    href: "/game-apis/teen-patti"
  },
  {
    image: "https://beta.mobzway.com/assets/images/rummy-game-development/product_ludo.webp",
    title: "LUDO Game Development",
    description: "If you are looking forward to acquiring online ludo game solutions, Mobzway Technologies is among the most famous ludo app development companies. We offer both ready-to-live and customized gaming solutions for Android, iOS, Web, and Desktop using HTML 5.",
    href: "/skill-games/ludo"
  },
]

const demoItems = [
  {
    featuresText: [
      {
        title: "Start your business journey with Mobzway"
      }
    ],
    description: "Try Our Games, and explore all the features and solutions you need to start, run, and grow your business.",
    hrefText: "TRY DEMO"
  }
]


const RummyGame = () => {
  const [showMore, setShowMore] = useState(false)
  const [activeAccordion, setActiveAccordion] = useState(null)

  const toggleReadMore = () => {
    setShowMore(!showMore);
  }

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  }

  const aboutGrid = [
    {
      image: "https://beta.mobzway.com/assets/images/rummy-game-development/point-rummy.webp",
      title: "Point Rummy",
      description: "13 cards point rummy played between 2-6 players with single or double deck."
    },
    {
      image: "https://beta.mobzway.com/assets/images/rummy-game-development/pool-rummy.webp",
      title: "Pool Rummy",
      description: "For the lovers of pool rummy, our game software offers 101 & 201 pool games."
    },
    {
      image: "https://beta.mobzway.com/assets/images/rummy-game-development/deal-rummy.webp",
      title: "Deal Rummy",
      description: "The deal rummy game offered by us, can be configured for multiple deals with different entry fees."
    }
  ]

  const featuresGrid = [
    {
      image: "https://beta.mobzway.com/assets/images/rummy-game-development/r04.webp",
      title: "Tournaments",
      description: "Game tournaments offer better competitiveness among players which helps to get & retain players."
    },
    {
      image: "https://beta.mobzway.com/assets/images/rummy-game-development/r05.webp",
      title: "Private Table",
      description: "To let your players enjoy their favorite rummy game with friends or family, we offer private tables."
    },
    {
      image: "https://beta.mobzway.com/assets/images/rummy-game-development/r06.webp",
      title: "Multi-Language",
      description: "We also develop an online rummy website and app that support multiple regional languages for offering a better game playing experience."
    },
    {
      image: "https://beta.mobzway.com/assets/images/rummy-game-development/r07.webp",
      title: "Rewards & Loyalty",
      description: "Rummy games that we develop come with rewards & loyalty features so that you have an option to incentivize the players and increase engagement."
    },
    {
      image: "https://beta.mobzway.com/assets/images/rummy-game-development/r08.webp",
      title: "Back Office & CRM",
      description: "For easy business management, we provide a feature-rich back office along with CRM."
    },
    {
      image: "https://beta.mobzway.com/assets/images/rummy-game-development/r09.webp",
      title: "RNG Certified Games",
      description: "To offer a fair gaming experience to the player, our developed rummy game uses the best RNG algorithm which can be certified."
    },
    {
      image: "https://beta.mobzway.com/assets/images/rummy-game-development/r10.webp",
      title: "Anti Fraud System",
      description: "Our rummy game app and website feature robust security systems to keep gaming and business activities free from fraud."
    },
    {
      image: "https://beta.mobzway.com/assets/images/rummy-game-development/r11.webp",
      title: "Responsible Gaming",
      description: "We at Mobzway promote responsible gaming by implementing different checkpoints on player's daily deposit & spending."
    },
    {
      image: "https://beta.mobzway.com/assets/images/rummy-game-development/r12.webp",
      title: "Payment Security",
      description: "Our rummy software supports most of the payment gateways, which can facilitate deposit & withdraw through different wallets & cards."
    }
  ]

  const faqAccordionData = [
    {
      title: "Is Rummy an Indian Game?",
      description: "Yes, it is an Indian game. It has been played for many decades now and it is also known as 'Paplu' in India."
    },
    {
      title: "How many users can your rummy game accommodate?",
      description: "There is no limitation in the number of users as it is a cloud-based auto-scalable solution. As per our tested data, it can accommodate 1 lakh or more concurrent players"
    },
    {
      title: "Is Rummy Legal in India?",
      description: "Yes, rummy is legal in India, and the Supreme Court of India declared that it is a game of skill."
    },
    {
      title: "Do you provide a Rummy website as well as a rummy app?",
      description: "Yes, we provide a rummy website also. We offer cross-browser and cross-platform supportable games for the web and application."
    },
    {
      title: "Is your rummy game app accessible on all mobile devices?",
      description: "Our rummy game app is accessible on all mobile devices like iOS, Android."
    },
    {
      title: "What is the estimated time to develop a rummy game app & website?",
      description: "Mobzway's Rummy game development experts take approximately six months to 1 year to develop a rummy game app and website."
    }
  ]
  
  const technicalAccordionData = [
    {
      title: "How many rummy game variations are provided by Mobzway?",
      description: "We are offering Point Rummy, 101 and 201 Pool Rummy, Deals Rummy with 2 and 6 players table along with different kinds of tournaments."
    },
    {
      title: "What are the requirements to get started on a rummy website?",
      description: "As Rummy is a Game of Skill, there is no need for any license or legal approval or any other Govt approval. You can just set up your business and start running the game."
    },
    {
      title: "Which Country has the most Rummy Game Players?",
      description: "When it comes to rummy games, India serves around 76% of its total traffic and every 4 out of 10 card game players prefer playing this game of cards."
    },
    {
      title: "How Many Jokers are there in Rummy?",
      description: "There are 5 Joker cards in the game, with players being able to use four of them. One Joker is turned up crosswise under the closed deck, visible to all players. In the following way, this card determines an additional set of jokers for that hand: Regardless of color, the rank is the same."
    },
    {
      title: "Which Technology is Best for Rummy Game Development?",
      description: "It depends on the usability. For the browser-based game, HTML5 is best. For Mobile apps, Unity is the best. The best options will be a fast & secure game engine and back-office Java, PHP, Nodejs, and NoSQL."
    },
    {
      title: "How can you help me with Rummy website Development?",
      description: "You just have to contact us and tell us your requirements and features you want and leave rest on us. Our customized dedicated team will contact you and therefore will work on the requirements."
    },
    {
      title: "Will you manage payment gateway integration, or do I have to take care of it?",
      description: "We will take care of the payment gateway integration, which includes instant deposit & withdrawal through UPI, Paytm, Other Wallets, Debit Card, Credit card, Net banking, etc."
    }
  ]

  return (
    <div className='rummy-game'>
      <div className='carousel-swiper'>
        <CarouselSection carouselData={rummyCarouselData} />
      </div>

      <AchievementsBanner />

      <div className='about-rummy-section'>
        <div className='about-rummy'>
          <FeaturesHeader featuresText={aboutText} />
        </div>

        <div className='about-rummy'>
          <FeaturesHeader featuresText={variationsText} />
        </div>

        <div className='about-grid'>
        {aboutGrid.map((item, index) => (
          <div className='about-grid-item' key={index}>
            <div className='about-grid-image-title-wrap'>
              <img src={item.image} alt="" />
              <h3>{item.title}</h3>
            </div>
            <p>{item.description}</p>
          </div>
          ))}
        </div>
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
            <p className='solutions-desc'>
                  Mobzway stands as a leading Rummy Game Development Company in India, known for delivering
                  exceptional rummy game solutions. Our experienced rummy game developers excel at creating visually
                  stunning and feature-rich rummy games. We're dedicated to propelling your online rummy game business
                  to new heights. With ready-to-use rummy game apps for iOS, Android, and more, we bring over 5 years
                  of expertise and collaborative experience to the table. Mobzway holds a prominent position in the
                  online game development industry, and our adept team is with you every step of the way in your rummy
                  app development journey.
                  <br/><br/>
                  Mobzway, a prominent Rummy Game Development Company in India, caters to both web and mobile
                  platforms. We blend user experience principles with user-centered design, seamlessly integrating
                  strategy, design, and development. With a strong focus on quality and collaboration, we've built a
                  vast base of satisfied clients worldwide. Our primary aim is to provide all the essential modules
                  required to run the game efficiently and securely for a large player base. We ensure your gaming
                  platform stands out in a competitive landscape. As our customer, you receive nothing short of the
                  best rummy game application and website.
                  <br/><br/>
                  <span className={`solutions-desc-more ${showMore ? 'show' : ''}`}>
                      Our skilled rummy game developers specialize in creating intuitive UI for
                      multiplayer rummy game apps and websites. They design game engines to facilitate UI development
                      and actively craft protocols for games. We deliver web and mobile games with enticing features
                      like a highly rewarding loyalty program, daily free tournaments with points, seamless
                      withdrawals, and much more.<br/><br/>
                      Mobzway's Rummy Game Development team prioritizes user experience, offering a range of features
                      such as player and game management, virtual money practice for less-experienced players, and the
                      thrill of real-money play for seasoned gamers. In-app deposits provide support for players
                      seeking to boost their levels of experience. We also ensure player confidentiality through the
                      option of private tables. Our games are accessible via mobile applications, websites, and
                      desktop software. Security is a paramount concern at Mobzway, and we prioritize the safety of
                      the rummy game application and its users.<br/><br/>
                      Should you encounter any hiccups or need assistance with understanding the game or any
                      back-office features, the Mobzway team is just one click away. We're here to help!
                  </span>
            </p>
            <button onClick={toggleReadMore}>
              {showMore ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </div>
      </div>

      <ContactBanner contactItems={contactData} />

      <PlatformSection platformItems={platformItems}/>
      
      <div className='features-section'>
        <FeaturesHeader featuresText={featuresItems} />
        <div className='features-grid'>
        {featuresGrid.map((item, index) => (
          <div className='features-grid-item' key={index}>
            <div className='features-grid-image-title-wrap'>
              <img src={item.image} alt="" />
              <h3>{item.title}</h3>
            </div>
            <p>{item.description}</p>
          </div>
          ))}
        </div>
      </div>

      <div className='solutions-rummy-section'>
        <div className='solutions-rummy-top'>
          <FeaturesHeader featuresText={hireTitle}/>
        </div>

        <div className='solutions-rummy-bottom'>
          <div className='solutions-desc-container'>
            <p className='solutions-desc'>
            <br/><br/>
            Your quest for top-tier rummy game development ends here! Hire a skilled rummy game developer who will oversee end-to-end rummy game app development, propelling your online game business forward. Our highly qualified and dedicated rummy card game app developers work in tandem with designers, artists, programmers, and other teammates to create a highly engaging rummy game application or website, incorporating state-of-the-art gaming technology. 
            <br/> <br/> With extensive experience in developing online rummy games, our gaming veterans deliver innovative and visually appealing games that provide sheer joy and entertainment to players, bridging the gap between virtual and real gameplay. Our dedicated rummy game developers create games that entice online players to wager more, resulting in higher investment returns. 
            <br/> <br/> As a proven leader in the rummy game development industry in India, USA, and UK, our game developers have successfully served clients, aiding in the expansion of their online game business. Our talented mobile game developers specialize in crafting native mobile app solutions for platforms like Android and iOS. Additionally, they can develop easily downloadable game software for Windows and Mac desktop devices. For those aiming to launch their rummy game website, our developers create HTML5-based websites, ensuring responsiveness across multiple devices and seamless operation on all major browsers.  
            <br/> <br/>Don't hesitate. Connect with us now to hire the best rummy game developer!
            </p>
            <button>
              REQUEST A QUOTE
            </button>
          </div>
          <div className='solutions-img'>
            <img src="https://beta.mobzway.com/assets/images/rummy-game-development/hire-rummy-game-developer.webp" alt="" />
          </div>
        </div>
      </div>
        
      <div className='solutions-rummy-section bg-1'>
        <div className='solutions-rummy-top'>
          <FeaturesHeader featuresText={chooseTitle}/>
        </div>

        <div className='solutions-rummy-bottom'>
          <div className='solutions-desc-container'>
            <br/>
            <br/>
            <h3>Benefits of Choosing Mobzway for Rummy Game Development Solutions</h3>
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
      </div>
      
      <div className='standout-section'>
          <FeaturesHeader featuresText={standoutTitle} />
          
          <div className='standout-bottom'>
              <div className='standout-accordion'>
                  <div className='accordion-item'>
                      <div className='accordion-header' onClick={() => toggleAccordion(0)}>
                          <h2>Architecture</h2>
                          <i className={`fas fa-plus ${activeAccordion === 0 ? 'active' : ''}`}></i>
                      </div>
                      <div className={`accordion-content ${activeAccordion === 0 ? 'active' : ''}`}>
                          <p>Our game designers work for hours to give a perfect look to the rummy game. So we provide you with high-quality architecture which hypnotizes you at first glance.</p>
                      </div>
                  </div>
          
                  <div className='accordion-item'>
                      <div className='accordion-header' onClick={() => toggleAccordion(1)}>
                          <h2>Security</h2>
                          <i className={`fas fa-plus ${activeAccordion === 1 ? 'active' : ''}`}></i>
                      </div>
                      <div className={`accordion-content ${activeAccordion === 1 ? 'active' : ''}`}>
                          <p>If you are thinking of it, is it safe to invest in the rummy game? Don't worry! We provide you with the ultimate security and loyalty program. We have an anti-fraud system, so nothing can be harmful if you play in our rummy game software.</p>
                      </div>
                  </div>
          
                  <div className='accordion-item'>
                      <div className='accordion-header' onClick={() => toggleAccordion(2)}>
                          <h2>Platforms</h2>
                          <i className={`fas fa-plus ${activeAccordion === 2 ? 'active' : ''}`}></i>
                      </div>
                      <div className={`accordion-content ${activeAccordion === 2 ? 'active' : ''}`}>
                          <p>You can play rummy on any device through our rummy game software. This is one of the key points to choose us. Our rummy game is suitable for cross-browser and cross-platform. You can customize your rummy game according to the platform.</p>
                      </div>
                  </div>
          
                  <div className='accordion-item'>
                      <div className='accordion-header' onClick={() => toggleAccordion(3)}>
                          <h2>Technology</h2>
                          <i className={`fas fa-plus ${activeAccordion === 3 ? 'active' : ''}`}></i>
                      </div>
                      <div className={`accordion-content ${activeAccordion === 3 ? 'active' : ''}`}>
                          <p>We use advanced and cutting-edge technology to develop the rummy game software. We add UI technology to allow playing multiplayer games. We develop a protocol as well for rummy games.</p>
                      </div>
                  </div>
              </div>
              <img src="https://beta.mobzway.com/assets/images/rummy-game-development/Architecture.webp" alt="" />
          </div>
      </div>

      <ContactBanner contactItems={requestItems} />

      <div className='questions-section'>
        {questionsData.map((question, index) => (
          <div key={index} className='question-container'>
            <FeaturesHeader 
              featuresText={[question]} 
              titleStyle={{ fontSize: '20px' }}
            />
          </div>
        ))}
      </div>

      <div className='faq-section'>
        <FeaturesHeader featuresText={faqTitle} />

        <div className='faq-accordion-container'>
          <div className='standout-accordion'>
          {faqAccordionData.map((item, index) => (
            <div className='accordion-item' key={index}>
              <div className='accordion-header' onClick={() => toggleAccordion(index + 10)}>
                <h2 className='faq-accordion-title'>{item.title}</h2>
                <i className={`fas fa-plus ${activeAccordion === index + 10 ? 'active' : ''}`}></i>
              </div>
              <div className={`accordion-content ${activeAccordion === index + 10 ? 'active' : ''}`}>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
          </div>

          <div className='standout-accordion'>
          {technicalAccordionData.map((item, index) => (
            <div className='accordion-item' key={index}>
              <div className='accordion-header' onClick={() => toggleAccordion(index + 20)}>
                <h2 className='faq-accordion-title'>{item.title}</h2>
                <i className={`fas fa-plus ${activeAccordion === index + 20 ? 'active' : ''}`}></i>
              </div>
              <div className={`accordion-content ${activeAccordion === index + 20 ? 'active' : ''}`}>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
          </div>
        </div>
        <button className='faq-btn'><span>ASK A QUESTION</span></button>
      </div>

      <ClientSection />

      <PaymentSection />

      <ProductSection productGrid={productItems}/>

      <ContactBanner contactItems={demoItems}/>

    </div>
  )
}

export default RummyGame
