import { useState } from "react"
import "./Slots.css"
import LandingSection from "../../../components/LandingSection/LandingSection"
import AchievementsBanner from "../../../components/AchievementsBanner/AchievementsBanner"
import FeaturesHeader from "../../../components/FeaturesSection/FeaturesHeader/FeaturesHeader"
import PaymentSection from "../../../components/PaymentSection/PaymentSection"
import ProductSection from "../../../components/ProductSection/ProductSection"
import ContactBanner from "../../../components/ContactBanner/ContactBanner"
import AboutGrid from "../../../components/AboutGrid/AboutGrid"


const landingItems = [
  {
    title: "SLOT GAME DEVELOPMENT COMPANY",
    description: "Slot games are one of the most competent, successful, recognizable kinds of casino entertainment all the world. Top choice for both sincere and casual players, the slot games are famous for their convenient use, pleasing look, and exciting perks.",
    description2:"Our strengths in the company is launching exciting slot games which mixes graphics, imagination & science to provide fabulous outcomes for casino users. Our slot games has creation services center on providing real time money experiences, with innovation, excellent graphics keeping interest of the users.",
    button: "REQUEST A QUOTE",
  }
]

const typesTitle = [
  {
    title: "Types of Slot Games"
  }
]
const typesGrid = [
  {
    title: "Classic slot games",
    description: "3-reel classic games with fruit symbols.",
    image: "/teenapiPage/no-limit.png"
  },
  {
    title: "Progressive slots",
    description: "slot games jack based wherein users participation results in increase rewards.",
    image: "/teenapiPage/pot-teen.png"
  },
  {
    title: "Multiple reel games",
    description: "The exciting winning competition increases the excitement of the users.",
    image: "/teenapiPage/vip-teen-patti.png"
  },
  {
    title: "3-D slot games",
    description: "The 3-Dimensional slot games are the most popular slot games in the market.",
    image: "/teenapiPage/ak7.png"
  },
  {
    title: "Slots with the brand names",
    description: "We include graphics, logos from hit game series",
    image: "/teenapiPage/highest-joker.png"
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

      <div>
        <FeaturesHeader featuresText={typesTitle}/>
        <AboutGrid aboutGrid={typesGrid}/>
      </div>

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
            Our high performance downloaded slot games encourages traditional methods mechanics.
                  <br/><br/>
                  A video slot games with fantasy themed feature with cascading reels in dragon flame.A slotgame with multiple level mystery boxes1&in jungle spin quest.
                  <br/><br/>
                  Our 3-D designed slot games with multiple playlines candy blast mania. The games are designed to be responsive on all the main platforms android,iOS, desktop and so on.
                  <br/><br/>
                  Gamzway slot game developers are well-versed in developing a wide range of slot games for all the platforms. Our slot game developers have a unique skill set that enables them to develop slot games for all the platforms.
            </p>
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