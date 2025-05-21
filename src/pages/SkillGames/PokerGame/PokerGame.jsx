import { useState } from "react"
import "./PokerGame.css"
import CarouselSection from '../../../components/CarouselSection/CarouselSection'
import AchievementsBanner from '../../../components/AchievementsBanner/AchievementsBanner'
import FeaturesHeader from "../../../components/FeaturesSection/FeaturesHeader/FeaturesHeader"
import ContactBanner from "../../../components/ContactBanner/ContactBanner"
import PlatformSection from "../../../components/PlatformSection/PlatformSection"
import ClientSection from "../../../components/ClientSection/ClientSection"
import PaymentSection from "../../../components/PaymentSection/PaymentSection"
import ProductSection from "../../../components/ProductSection/ProductSection"
import AccordionSection from "../../../components/AccordionSection/AccordionSection"

const pokercarouselData = [
  {
    title: "Hire #1 Poker Game Developers",
    description: "With the trust of over 300+ clients worldwide. We offer a choice for gaming businesses to hire #1 Poker Game Developers in industry, and help them to build an engaging game from scratch or upgrade their existing games.",
    image: "https://beta.mobzway.com/assets/images/pokerSlide1.webp",
    isMainTitle: true,
  },
  {
    title: "Poker game development Company",
    description: "Get the best Online Poker Game App & website solution developed by Gamzway! With the leading Poker Game Development Company we ensure the top-end delivery of our Poker products in the gaming industry.",
    image: "https://beta.mobzway.com/assets/images/pokerSlide.webp",
  }
]

const featuresItems = [
  {
    title: "FEATURES OF POKER GAME DEVELOPED BY US"
  }
]

const solutionsTitle = [
  {
    title:"ONLINE POKER GAME DEVELOPMENT SOLUTIONS"
  }
]

const touchItems = [
  {
    featuresText:[
      {
        title:"GET IN TOUCH, ASK US ANYTHING"
      }
    ],
    description: "Are you looking for an expert consultation on starting your online gaming business? Or want advice on getting the best game to engage poker players? Connect with us now, and let’s make things happen for you.",
    hrefText: "LET'S TALK"
  }
]

const platformItems = [
  {
    featuresText:[
      {
        title: "WE BUILD THE POKER GAME FOR ALL PLATFORMS"
      }
    ],
    platformGrid:[
      {
        image: "https://beta.mobzway.com/assets/images/HTML_five-broweswer.webp",
        title: "HTML 5 BROWSER",
        description: "Our poker game development company offers gaming solutions for all desktop devices. Be it Mac or Windows operating systems. We provide poker games for all."
      },
      {
        image: "https://beta.mobzway.com/assets/images/Native_Mobile.webp",
        title: "NATIVE MOBILE",
        description: "Gamzway offers game app development services for all mobile devices, compatible with all platforms, our best poker game for android, iOS, or windows."
      },
      {
        image: "https://beta.mobzway.com/assets/images/Mac_PC.webp",
        title: "MAC/WINDOWS",
        description: "We offer game solutions for popular web browsers like Chrome, Internet Explorer, etc. Our cutting-edge technology ensures better streaming and low data consumption on web browsers."
      },
    ]
  }
]

const hireTitle = [
  {
    title:"HIRE POKER GAME DEVELOPERS"
  }
]

// const designTitle = [
//   {
//     title: "HOW WE DESIGN & DEVELOP BEST POKER GAMES?"
//   }
// ]

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
    image: "https://beta.mobzway.com/assets/images/rummy-game-development/product_ludo.webp",
    title: "LUDO Game",
    description: "If you are looking forward to acquiring online ludo game solutions, Gamzway Technologies is among the most famous ludo app development companies. We offer both ready-to-live and customized gaming solutions for Android, iOS, Web, and Desktop using HTML 5.",
    href: "/skill-games/ludo"
  },
]

const faqTitle = [
  {
    title: "FAQ's"
  }
]

const faqData1 = [
  {
    title: "Can you integrate multiplayer function into my poker game?",
    description: "Yes, Gamzway specializes in multiplayer integration to enhance your poker game's interactive features and engagement.",
  },
  {
    title: "Is poker game illegal in India",
    description: "The legal status of poker varies in India by state. Gamzway can help ensure compliance with local gaming regulations and laws."
  },
  {
    title: "How much does it cost to build a solid Poker Software?",
    description: "The cost of developing poker software depends on your specific requirements and features. Gamzway offers customized solutions to fit your budget."
  }
]

const faqData2 = [
  {
    title:"How to ensure security in a Poker Game App?",
    description: "Gamzway ensures security through encryption, secure payment gateways, and regular audits, safeguarding user data and transactions."
  },
  {
    title: "How long will it take to build a Poker Game",
    description: "The development time for a poker game varies based on complexity and features, but Gamzway provides efficient and timely development services."
  },
  {
    title: "Which is the best online poker game software development company?",
    description: "Gamzway is a leading online poker software development company, offering high-quality, customizable solutions to meet your gaming business needs."
  }
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

const PokerGame = () => {
  const [showMore, setShowMore] = useState(false)

  const toggleReadMore = () => {
    setShowMore(!showMore);
  }

  const featuresGrid = [
    {
      image: "https://beta.mobzway.com/assets/images/poker-game-development/01-11.webp",
      title: "Holdem Poker",
      description: "Our online game solution features the Texas Hold’em poker variation to help you engage with those who love to play Hold’em poker."
    },
    {
      image: "https://beta.mobzway.com/assets/images/poker-game-development/02.webp",
      title: "5 Card Omaha",
      description: "We also provide dedicated solutions for 5 Card Omaha players compatible with all kinds of virtual devices."
    },
    {
      image: "https://beta.mobzway.com/assets/images/poker-game-development/omaha02.webp",
      title: "PLO",
      description: "Customized and flexible Pot-Limit Omaha solutions are also developed by our gaming experts at Gamzway to let you earn PLO lovers."
    },
    {
      image: "https://beta.mobzway.com/assets/images/poker-game-development/04.webp",
      title: "Sit & Go",
      description: "Gamzway also provides the most advanced-tech solutions for the Sit & Go variation of poker games for all virtual gaming devices."
    },
    {
      image: "https://beta.mobzway.com/assets/images/poker-game-development/05.webp",
      title: "Poker Tournaments",
      description: "Online poker game app solutions offered by Gamzway come with tournaments feature to let the operators organize their dedicated tournaments."
    },
    {
      image: "https://beta.mobzway.com/assets/images/poker-game-development/06.webp",
      title: "OFC",
      description: "At Gamzway, we also offer OFC, aka Open Face Chinese Poker solution for mobile, web, and desktop devices."
    },
    {
      image: "https://beta.mobzway.com/assets/images/poker-game-development/07.webp",
      title: "Payment Security",
      description: "Poker game app solutions provided by us are built using the best payment security technologies so that the players never have to worry about their wager money."
    },
    {
      image: "https://beta.mobzway.com/assets/images/poker-game-development/08.webp",
      title: "Anti Fraud System",
      description: "To restrict any frauds in the games, our game comes with the best anti-fraud systems to ensure peace to both the players and operators."
    },
    {
      image: "https://beta.mobzway.com/assets/images/poker-game-development/09.webp",
      title: "Rewards & Loyalty",
      description: "Our rewards and loyalty feature allows game businesses to launch their dedicated rewards and loyalty campaigns and increase engagement."
    },
    {
      image: "https://beta.mobzway.com/assets/images/poker-game-development/r111.webp",
      title: "RNG Certified Games",
      description: "The games developed by our gaming experts are RNG certified and promote random number generation for transparent gaming."
    },
    {
      image: "https://beta.mobzway.com/assets/images/poker-game-development/11.webp",
      title: "Responsible Gaming",
      description: "Our poker solutions strictly ensure user privacy and data safety so that customers can enjoy the games worry-free."
    },
    {
      image: "https://beta.mobzway.com/assets/images/poker-game-development/12.webp",
      title: "Back Office & CRM",
      description: "Gamzway’s poker solutions offer distinct and most user-friendly backend management systems and CRM access so that managing the gaming business becomes easy for operators."
    }
  ]
  

  return (
    <div className='poker-game'>
      <div className='carousel-swiper'>
        <CarouselSection carouselData={pokercarouselData}/>
      </div>

      <AchievementsBanner />

      <div className='features-section'>
        <FeaturesHeader featuresText={featuresItems} />
        <div className='features-grid'>
        {featuresGrid.map((item, index) => (
          <div className='features-grid-item' key={index}>
              <img src={item.image} alt="" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
          </div>
          ))}
        </div>
      </div>

      <div className='solutions-poker-section'>
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
      </div>

      <ContactBanner contactItems={touchItems}/>

      <PlatformSection platformItems={platformItems}/>

      <div className='solutions-poker-section'>
        <div className='solutions-poker-top'>
          <FeaturesHeader featuresText={hireTitle}/>
        </div>

        <div className='solutions-poker-bottom'>
          <div className='solutions-desc-container'>
            <p className='solutions-desc'>
            <br/><br/>
            Pave the way to a successful journey in the gaming business. Let our qualified team of game developers take the burden of developing an exceptional poker game app for you.
            <br/> <br/> Our poker game programmers ensure that your needs are efficiently transformed into an entertaining game, which can attract game fanatics and provide you with more business.
            <br/> <br/> As we understand and value our fellow clients' needs, we provide them with an open and transparent discussion with our gaming experts, which allows them to discuss their requirements in detail and get personalized Solutions.
            <br/> <br/>Our core lies in poker game development, which features striking visual effects, artificial intelligence, multi-currency support, peer-to-peer gaming experience, elite technology, and compatibility with multiple operating systems and devices.
            <br/> <br/>We aim to benefit our clients. Therefore, while creating games, we make sure that maximum audience retention is achieved and fabulous entertainment is delivered. Our gaming connoisseurs also ensure that our game offers a very realistic and seamless gaming experience.
            <br/> <br/> We serve as a dedicated poker game developer to our clients to better insight into gaming solutions to suit the best as per their development needs. Gamzway gives the superior class of poker game development services, which delight the game lovers. Our company understands the requirement of game admirers and, according to their requirement, provides reliable, secure, precise, and realistic game service. Our proficient team of developers will help you get the best live poker game apps ever as per your requirement.
            </p>
            <button>
              REQUEST A QUOTE
            </button>
          </div>
          <div className='solutions-img'>
            <img src="https://beta.mobzway.com/assets/images/poker-game-development/poker-game-developer.webp" alt="" />
          </div>
        </div>
      </div>

      

      <ClientSection />

      <PaymentSection />

      <ProductSection productGrid={productItems} />

      <div className="faq-section">
        <FeaturesHeader featuresText={faqTitle}/>
        <div className="faq-container">
          <div className="faq-left">
            <AccordionSection data={faqData1}/>
          </div>
          <div className="faq-right">
            <AccordionSection data={faqData2}/>
          </div>
        </div>
      </div>

      <ContactBanner contactItems={demoItems}/>

    </div>
  )
}

export default PokerGame