
import "./Slots.css"
import LandingSection from "../../../components/LandingSection/LandingSection"
import AchievementsBanner from "../../../components/AchievementsBanner/AchievementsBanner"
import FeaturesHeader from "../../../components/FeaturesSection/FeaturesHeader/FeaturesHeader"
import PaymentSection from "../../../components/PaymentSection/PaymentSection"
import ProductSection from "../../../components/ProductSection/ProductSection"
import ContactBanner from "../../../components/ContactBanner/ContactBanner"
import AboutGrid from "../../../components/AboutGrid/AboutGrid"
import AccordionSection from "../../../components/AccordionSection/AccordionSection"

import FeaturesGridV5 from "../../../components/FeaturesGridV5/FeaturesGridV5"
import FeaturesGridV3 from "../../../components/FeaturesGridV3/FeaturesGridV3"
import PromoTools from "../../../components/PromoTools/PromoTools"
import FeaturesBanner from "../../../components/FeaturesBanner/FeaturesBanner"
import PlatformSection from "../../../components/PlatformSection/PlatformSection"
import ChooseGrid from "../../../components/ChooseGrid/ChooseGrid"
import PlatformImg from "../../../components/LudoPlatformImg/LudoPlatformImg"
import CustomGrid from "../../../components/CustomGrid/CustomGrid"
import AboutSection from "../../../components/AboutSection/AboutSection"
import ProvidersGrid from "../../../components/ProvidersGrid/ProvidersGrid"

const landingItems = [
  {
    title: "SLOT GAMES",
    description: "Top choice for both sincere and casual players, the slot games are famous for their convenient use, pleasing look, and exciting perks.",
    description2:"Our slot games has creation services center on providing real time money experiences, with innovation, excellent graphics keeping interest of the users.",
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
    image: "/teenapiPage/no-limit.webp"
  },
  {
    title: "Progressive slots",
    image: "/teenapiPage/pot-teen.webp"
  },
  {
    title: "Multiple reel games",
    image: "/teenapiPage/vip-teen-patti.webp"
  },
  {
    title: "3-D slot games",
    image: "/teenapiPage/ak7.webp"
  },
  {
    title: "Slots with brand names",
    image: "/teenapiPage/highest-joker.webp"
  }
]

const featuresItems = [
  {
    title: "FEATURES OF SLOT GAME DEVELOPED BY US",
  }
]

const featuresGrid = [
  {
    image: "/slotsPage/1.webp",
    title: "Single Player",
    
  },
  {
    image: "/slotsPage/2.webp",
    title: "Multiplayer Slots",

  },
  {
    image: "/slotsPage/3.webp",
    title: "Big Jackpots",

  },
  {
    image: "/slotsPage/4.webp",
    title: "Free Spin",

  },
  {
    image: "/slotsPage/5.webp",
    title: "RNG Certified Games",

  },
  {
    image: "/slotsPage/6.webp",
    title: "Risk Management",

  },
  {
    image: "/slotsPage/7.webp",
    title: "Multi-Language",

  },
  {
    image: "/slotsPage/8.webp",
    title: "Back Office & CRM",

  },
  {
    image: "/slotsPage/9.webp",
    title: "Rewards & Loyalty",

  },
  {
    image: "/slotsPage/10.webp",
    title: "Anti Fraud System",

  },
  {
    image: "/slotsPage/11.webp",
    title: "Responsible Gaming",

  },
  {
    image: "/slotsPage/12.webp",
    title: "World Class Security",

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
    description: "If you need a unique or got to solution for your brand of casino. Our employees are here to assist you with their technical knowledge,fast replies. Our Aim is to walk with you through every stage to innovate things from the start or ready to develop slot solution. ",
    hrefText: "LET'S TALK"
  }
]

const solutionsTitle = [
  {
    title: "ONLINE SLOT GAME DEVELOPMENT SOLUTIONS"
  }
]
const faqTitle = [
  {
    title: "SLOTS FAQS"
  }
]

const faqAccordionData = [
  {
    title: "Are real money supported by your slot games?",
    description: "True.  With integration of payment and wallet systems, we present both real-money and demo modes."
  },
  {
    title: "Usually, how does a slot game develop?",
    description: "A whole development cycle takes four to twelve weeks depending on complexity."
  },
  {
    title: "Are RNG and fairness certifications something you provide?",
    description: "Definitely.  Our games follow jurisdictional rules and employ certified RNGs."
  },
  {
    title: "On app stores may your games be available?",
    description: " Indeed, we provide web-based platforms and create slot games compliant for App Store and Google Play."
  }
]

const aboutItems = [
  {
    description:"Slot games are one of the most competent, successful, recognizable kinds of casino entertainment all the world. Top choice for both sincere and casual players, the slot games are famous for their convenient use, pleasing look, and exciting perks. Our strengths in the company is launching exciting slot games which mixes graphics, imagination & science to provide fabulous outcomes for casino users.",
    image:"/slotsPage/bg-over.png"
  }
]

const deviceImages = [
  {
    image1:"/ludoPage/devices/ludo-mob.png",
    image2:"/ludoPage/devices/ludo-lap2.webp"
  }
]

const providersImages =[
  {
  src:"/logo-black.png",
  alt:"Gamzway",
  title:"Gamzway"
  },
  {
  src: "/providers/7mojos.webp",
  alt: "7Mojos",
  title: "7Mojos"
  },
  {
  src: "/providers/betgames.webp",
  alt: "BetGames",
  title: "BetGames"
  },
  {
  src: "/providers/evolution.webp",
  alt: "Evolution Gaming Casinos",
  title: "Evolution Gaming Casinos"
  },
  {
  src: "/providers/ezugi.webp",
  alt: "Ezugi",
  title: "Ezugi"
  },
  {
  src:"/providers/hogaming.webp",
  alt:"Ho gaming",
  title:"Ho gaming"
  },
  {
  src:"/providers/iconic21.webp",
  alt:"Iconic21",
  title:"Iconic21"
  },
  {
  src:"/providers/live88.webp",
  alt:"Live88",
  title:"Live88"
  },
  {
  src:"/providers/playtech.webp",
  alt:"Playtech Live",
  title:"Playtech Live"
  },
  {
  src: "/providers/pragmatic.webp",
  alt: "Pragmatic Play Games",
  title: "Pragmatic Play Games"
  },
  {
  src:"/providers/sagaming.webp",
  alt:"SA Gaming",
  title:"SA Gaming"
  },
  {
  src: "/providers/skywind.webp",
  alt: "Skywind",
  title: "Skywind"
  },
  {
  src: "/providers/vivo.webp",
  alt: "Vivo Gaming",
  title: "Vivo Gaming"
  }
]

const Slots = () => {

  return (
    <div className="slots-game">
      <div className="landing-slots-section">
        <LandingSection landingItems={landingItems}/>
        <div className="slots-overlay-images-div">
          <img src="/slotsPage/coins/coin-02.png" alt="" className="slots-overlay-images slots-over1"/>
        </div>
        <div className="slots-overlay-images-div">
          <img src="/slotsPage/coins/coin-03.png" alt="" className="slots-overlay-images slots-over2"/>
        </div>
        <div className="slots-overlay-images-div">
          <img src="/slotsPage/coins/coin-04.png" alt="" className="slots-overlay-images slots-over3"/>
        </div>
        <div className="slots-overlay-images-div">
          <img src="/slotsPage/coins/coin-05.png" alt="" className="slots-overlay-images slots-over4"/>
        </div>
        <div className="slots-overlay-images-div">
          <img src="/slotsPage/coins/coin-06.png" alt="" className="slots-overlay-images slots-over5"/>
        </div>
        <div className="slots-overlay-images-div">
          <img src="/slotsPage/coins/coin-07.png" alt="" className="slots-overlay-images slots-over6"/>
        </div>
      </div>



      <AchievementsBanner />
      <ProvidersGrid providersImages={providersImages} providersImagesLength={7}/>

      <AboutSection aboutItems={aboutItems} />

      <div>
        <FeaturesGridV5 featuresGrid={typesGrid} featuresTitle={typesTitle}/>
      </div>

      {/* <FeaturesBanner />
      <PromoTools /> */}


      <PlatformSection />
      {/* <PlatformImg deviceImages={deviceImages}/> */}
      <CustomGrid/>

      
      {/* <div className='solutions-slot-section'>
        <div className='solutions-slot-top'>
          <FeaturesHeader featuresText={solutionsTitle}/>
        </div>

        <div className='solutions-slot-bottom'>
          <div className='solutions-img'>
            <img src="/slotsPage/bg-over.png" alt="" />
          </div>
          <div className='solutions-desc-container'>
          <div className='solutions-ludo-grid'>
                <div className='solutions-ludo-grid-item'>
                  <img src="/real-time.png" alt="" />
                  <div className='solutions-banner-line'></div>
                  <p>Live Interaction</p>
                </div>
                <div className='solutions-ludo-grid-item'>
                  <img src="/bot.png" alt="" />
                  <div className='solutions-banner-line'></div>
                  <p>Smart AI Bots</p>
                </div>
                <div className='solutions-ludo-grid-item'>
                  <img src="/chat.png" alt="" />
                  <div className='solutions-banner-line'></div>
                  <p>In-Game Chats</p>
                </div>
                <div className='solutions-ludo-grid-item'>
                  <img src="/security.png" alt="" />
                  <div className='solutions-banner-line'></div>
                  <p>Anti-Fraud Algorithms</p>
                </div>
                <div className='solutions-ludo-grid-item'>
                  <img src="/platform.png" alt="" />
                  <div className='solutions-banner-line'></div>
                  <p>Cross-Platform Compatibility</p>
                </div>
                <div className='solutions-ludo-grid-item'>
                  <img src="/social-media.png" alt="" />
                  <div className='solutions-banner-line'></div>
                  <p>Social-Media Integration</p>
                </div>

              </div>
          </div>
        </div>
      </div> */}



      <ChooseGrid />


      {/* <div className='features-slot-section'>
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
      </div> */}

      {/* <FeaturesGridV3 featuresGridV3={featuresGrid} featuresTitleV3={featuresItems} /> */}

      <div className='faq-section'>
        <FeaturesHeader featuresText={faqTitle} />

        <div className='faq-accordion-container'>
          <AccordionSection data={faqAccordionData} />
        </div>
        
      </div>
      <ContactBanner contactItems={demoItems}/>
      {/* <PaymentSection /> */}
      <ProductSection productGrid={productItems} />


    </div>
  )
}

export default Slots