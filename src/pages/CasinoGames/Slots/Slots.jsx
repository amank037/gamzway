import { useState } from "react"
import "./Slots.css"
import LandingSection from "../../../components/LandingSection/LandingSection"
import AchievementsBanner from "../../../components/AchievementsBanner/AchievementsBanner"
import FeaturesHeader from "../../../components/FeaturesSection/FeaturesHeader/FeaturesHeader"
import PaymentSection from "../../../components/PaymentSection/PaymentSection"
import ProductSection from "../../../components/ProductSection/ProductSection"
import ContactBanner from "../../../components/ContactBanner/ContactBanner"


const landingItems = [
  {
    title: "SLOT GAME DEVELOPMENT COMPANY",
    description: "Hire Gamzway, the best slot game development company in India, USA & UK and take a successful leap in the online casino business. No matter if it’s the mobile, desktop or web audience you’re targeting, we offer customized and flexible solutions for all. Get in touch with us to know the most attractive quotes and offers!",
    button: "REQUEST A QUOTE",
  }
]

const featuresItems = [
  {
    title: "FEATURES OF SLOT GAME DEVELOPED BY US",
  }
]

const featuresGrid = [
  {
    image: "https://beta.mobzway.com/assets/images/baccarat01.png",
    title: "Single Player",
    description: "Our online slot game solution gives players the convenience of playing the slot games in single player mode."
  },
  {
    image: "https://beta.mobzway.com/assets/images/baccarat02.png",
    title: "Multiplayer Slots",
    description: "Developed by Gamzway, the slot game software allows the players to go for multiple slots, thus adding more excitement to the games."
  },
  {
    image: "https://beta.mobzway.com/assets/images/slot03.png",
    title: "Big Jackpots",
    description: "Slot software solution developed by Gamzway gives the players to go for bigger jackpots and earn more, thus keeping them hooked with the games."
  },
  {
    image: "https://beta.mobzway.com/assets/images/1_free_spin.png",
    title: "Free Spin",
    description: "For higher engagement and to drive more number of players on the platforms, our slot games also come with the free spin feature."
  },
  {
    image: "https://beta.mobzway.com/assets/images/baccarat05.png",
    title: "RNG Certified Games",
    description: "To ensure that the slot games come with random results and promote fair play, the games developed by us are RNG certified."
  },
  {
    image: "https://beta.mobzway.com/assets/images/baccarat06.png",
    title: "Risk Management",
    description: "For operators’ peace of mind, we build solutions that are backed by highly advanced risk management tools."
  },
  {
    image: "https://beta.mobzway.com/assets/images/baccarat07.png",
    title: "Multi-Language",
    description: "For engaging the players from specific regions, we also design slot game/apps/websites in multiple languages."
  },
  {
    image: "https://beta.mobzway.com/assets/images/baccarat08.png",
    title: "Back Office & CRM",
    description: "Gamzway’s slot game solutions offer distinct and most user-friendly backend management systems and CRM access so that managing the gaming business becomes easy for operators."
  },
  {
    image: "https://beta.mobzway.com/assets/images/baccarat09.png",
    title: "Rewards & Loyalty",
    description: "Our rewards and loyalty feature allows slot game businesses to launch their dedicated rewards and loyalty campaigns and increase engagement."
  },
  {
    image: "https://beta.mobzway.com/assets/images/baccarat10.png",
    title: "Anti Fraud System",
    description: "To restrict any kind of frauds in the games, our slot game software comes with the best anti-fraud systems to ensure peace to both the players and operators."
  },
  {
    image: "https://beta.mobzway.com/assets/images/baccarat11.png",
    title: "Responsible Gaming",
    description: "Our slot game solutions strictly ensure user privacy and data safety so that customers can enjoy the games worry-free."
  },
  {
    image: "https://beta.mobzway.com/assets/images/baccarat12.png",
    title: "World Class Security",
    description: "Our slot game solutions are hosted on the world’s most secured hosting platforms to keep the hackers away."
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
    image: "https://beta.mobzway.com/assets/images/rummy-game-development/product_ludo.webp",
    title: "LUDO Game Development",
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

const solutionsTitle = [
  {
    title: "ONLINE SLOT GAME DEVELOPMENT SOLUTIONS"
  }
]


const Slots = () => {

  const [showMore, setShowMore] = useState(false)

  const toggleReadMore = () => {
    setShowMore(!showMore);
  }

  return (
    <div className="slots-game">
      <div className="landing-slots-section">
      <LandingSection landingItems={landingItems}/>
      </div>
      <AchievementsBanner />

      <div className='solutions-slot-section'>
        <div className='solutions-slot-top'>
          <FeaturesHeader featuresText={solutionsTitle}/>
        </div>

        <div className='solutions-slot-bottom'>
          <div className='solutions-img'>
            <img src="https://beta.mobzway.com/assets/images/slot_sol_1.png" alt="" />
          </div>
          <div className='solutions-desc-container'>
            <p className='solutions-desc'>
            Gamzway Technologies is one of the leading Slot Game Development Company in India, produces most secure slot game with best graphics. Gamzway design the game module with intricate details and clubs with the intelligence of game architects. Advanced design tools, updated ideas and exponential experience act as a backbone of our brilliant game developers. Hiring has also been challenging for Gamzway, hence it ensures a proper set of qualified, talented and diligent young achievers are ready to shape their fortune with Gamzway. Our Slot Game developers have developed game for the variety of the platforms such as android, iOS, website gaming and stand-alone software application.
                  <br/><br/>
                  Slot game comes with the complete package of the secure host and client connection, ravishing gameplay, artificial intelligence, upgradable modules and gift surprises. Gamzway team withholds dynamic, innovative and talented game developers ready to convert the ideas of game entrepreneurs into business ideas. Our Slot Game are Tested and Quality Assured for load testing, efficient gameplay, multiplayer options, guest mode, etc.
                  <br/><br/>
                  Social can be connected in Slot Game like Facebook, Gmail, apple ID, etc. to get a world scenario and leader board game play. The leader board can be set to multiple duration as per game entrepreneurs attracting more Slot game lover to relish their time with the unique creation. Players in Slot game can also chat, discussing the tactics, making a slot app or slot machine software a real life scenario i.e. talking while playing hence dual enjoyment. Players in the slot game could book tables, use game lobby, buy chips to give their game a boost. Targeting a global clientele, our slot game developers have designed game into multilingual support.

                  <span className={`solutions-desc-more ${showMore ? 'show' : ''}`}>
                  <br/><br/>
                  Gamzway game developers have incorporated a feature to play the game with real or virtual money, premium in-app purchases capable of yielding handsome business returns. Each and every source of online payment has been established as Credit / Debit cards, online banking, payu, etc.
                  <br/><br/>
                  Gamzway believes into a strict bug-free Slot Game Development for the satisfactory global clientele and burns the midnight oil to give our clients a perfect on-time project delivery. Also, Gamzway seeks forward to build an eternal customer relationship with game entrepreneurs. Feel free to discuss your ideas with us. We are glad to help you!
                  </span>
            </p>
            <button onClick={toggleReadMore}>
              {showMore ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </div>
      </div>

      <ContactBanner contactItems={touchItems}/>

      <div className='features-slot-section'>
        <FeaturesHeader featuresText={featuresItems} />
        <div className='features-slot-grid'>
        {featuresGrid.map((item, index) => (
          <div className='features-slot-grid-item' key={index}>
              <img src={item.image} alt="" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
          </div>
          ))}
        </div>
      </div>

      <PaymentSection />
      <ProductSection productGrid={productItems} />
      <ContactBanner contactItems={demoItems}/>

    </div>
  )
}

export default Slots