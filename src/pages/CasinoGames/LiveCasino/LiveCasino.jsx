import './LiveCasino.css'
import LandingSection from "../../../components/LandingSection/LandingSection"
import AchievementsBanner from "../../../components/AchievementsBanner/AchievementsBanner"
import PlatformSection from '../../../components/PlatformSection/PlatformSection'
import PaymentSection from '../../../components/PaymentSection/PaymentSection'
import ProductSection from '../../../components/ProductSection/ProductSection'
import ContactBanner from '../../../components/ContactBanner/ContactBanner'
import FeaturesHeader from '../../../components/FeaturesSection/FeaturesHeader/FeaturesHeader'


const platformItems = [
  {
    featuresText:[
      {
        title: "Live Casino Types: "
      }
    ],
    platformGrid:[
      {
        image: "https://cdn-icons-png.flaticon.com/512/10646/10646478.png",
        title: " Live Dealer",
        description: " Professional studios sent real-time gameplay including trained human dealers."
      },
      {
        image: "https://cdn-icons-png.flaticon.com/512/2991/2991463.png",
        title: "Live Mobile Casino",
        description: " Perfected for tablets and smartphones, guarantees seamless, low-latency gameplay. Custom-branded apps with real-time gaming interactions accessible for Android and iOS Live Casino App."
      },
      {
        image: "https://cdn-icons-png.flaticon.com/512/4695/4695995.png",
        title: " Live Casino Based on VR",
        description: "Enter a virtual gambling hall supported by virtual reality to have an unmatched immersive experience."
      },
    ]
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

const landingItems = [
  {
    title: "LIVE CASINO SOFTWARE PROVIDER",
    description: " True time live casino games offer the true casino experience right on to users' screens.  Players can join actual dealers and enjoy vintage games including blackjack, roulette, and baccarat from anywhere in the world by means of high-definition streaming and interactive interfaces.  Unlike RNG-based games, live casinos combine the excitement of land-based casinos with the ease of internet platforms, therefore providing a more immersive and transparent gaming experience.",
    description2:" Our speciality at Gamzway is creating scalable live casino solutions from right from a user's desktop or mobile device that mimic the glitz of Las Vegas, Macau, and Monte Carlo.",
    button: "REQUEST A DEMO",
  }
]


const featuresItems = [
  {
    title: "Games we Offer",
    description: "Gamzway presents a large selection of live casino games catered to worldwide users:"
  } 
]


const LiveCasino = () => {

  const featuresGrid = [
    { title: "Live Roulette",
      image: "https://beta.mobzway.com/assets/images/dragon-tiger-bg.jpg"
     },
    { title: "Active Blackjack",
      image:"https://beta.mobzway.com/assets/images/dragon-tiger-bg.jpg"
     },
    { title: "Live Banking Games",
      image:"https://beta.mobzway.com/assets/images/dragon-tiger-bg.jpg" },
    { title: "Live Andar Bahar",
      image:"https://beta.mobzway.com/assets/images/dragon-tiger-bg.jpg" },
    { title: "Live Teen Patti",
      image:"https://beta.mobzway.com/assets/images/dragon-tiger-bg.jpg" },
    { title: "Live Casino Poker",
      image:"https://beta.mobzway.com/assets/images/dragon-tiger-bg.jpg" },
    { title: "Dragon Tiger Live",
      image:"https://beta.mobzway.com/assets/images/dragon-tiger-bg.jpg" },
    { title: "Living Sic Bo",
      image:"https://beta.mobzway.com/assets/images/dragon-tiger-bg.jpg" },
    { title: "Live Casino Hold'em",
      image:"https://beta.mobzway.com/assets/images/dragon-tiger-bg.jpg" }
  ];
  
  
  return (
    <div className="livecasino-game">
      <div className="landing-livecasino-section">
        <LandingSection landingItems={landingItems}/>
      </div>

      <div className="livecasino-types">
        <PlatformSection platformItems={platformItems}/>
      </div>

      <div className='livecasino-features-section'>
        <FeaturesHeader featuresText={featuresItems} />
        <div className='livecasino-features-grid'>
        {featuresGrid.map((item, index) => (
          <div className='livecasino-features-grid-item' key={index}>
            <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
          </div>
          ))}
        </div>
      </div>

      <AchievementsBanner />
      <PaymentSection />
      <ProductSection productGrid={productItems}/>
      <ContactBanner contactItems={demoItems}/>
    </div>
  )
}

export default LiveCasino