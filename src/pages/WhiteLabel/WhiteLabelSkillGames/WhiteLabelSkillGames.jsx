import './WhiteLabelSkillGames.css'
import LandingSection from "../../../components/LandingSection/LandingSection"
import AchievementsBanner from "../../../components/AchievementsBanner/AchievementsBanner"
import PlatformSection from '../../../components/PlatformSection/PlatformSection'
import PaymentSection from '../../../components/PaymentSection/PaymentSection'
import ProductSection from '../../../components/ProductSection/ProductSection'
import ContactBanner from '../../../components/ContactBanner/ContactBanner'

const platformItems = [
  {
    featuresText:[
      {
        title: "WE BUILD WHITE LABEL SKILL GAMES FOR ALL PLATFORMS"
      }
    ],
    platformGrid:[
      {
        image: "https://beta.mobzway.com/assets/images/HTML_five-broweswer.webp",
        title: "HTML 5 BROWSER",
        description: "Our white label software company offers gaming solutions for all the desktop devices. Be it Mac or Windows operating systems, we provide white label software for all."
      },
      {
        image: "https://beta.mobzway.com/assets/images/Native_Mobile.webp",
        title: "NATIVE MOBILE",
        description: "Mobzway offers game app development services for all mobile devices, compatible with all platforms, our best white label software for android, iOS or windows."
      },
      {
        image: "https://beta.mobzway.com/assets/images/Mac_PC.webp",
        title: "MAC/WINDOWS",
        description: "We offer game solutions for popular web browsers like Chrome, Internet Explorer, etc. Our cutting-edge technology ensures better streaming and low data consumption on web browsers."
      },
    ]
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
    image: "https://beta.mobzway.com/assets/images/poker-game-development/Product_Rummy.webp",
    title: "Rummy Game Development",
    description: "The highly talented team of rummy software developers ensures that very engaging and customized solutions of this “game of skill” are offered to the gaming clients. All the popular versions of rummy are developed as per the client’s requirements.",
    href: "/skill-games/rummy"
  },
  {
    image: "https://beta.mobzway.com/assets/images/rummy-game-development/Product_Teenpatti.webp",
    title: "Teen Patti Game Development",
    description: "Mobzway offers ready-to-use Teen Patti solutions for business ventures. We build customized solutions for all the variants like Fox,Vintage, and Teen Patti Plus. We provide solutions for all desktop & mobile devices, and web browsers at the best prices.",
    href: "/game-apis/teen-patti"
  },
  {
    image: "https://beta.mobzway.com/assets/images/rummy-game-development/Product_Casino.webp",
    title: "Casino Software",
    description: "For the online casino game entrepreneurs and businesses, Mobzway offers customized casino game solutions. All the popular casino games like Roulette, Blackjack, Slot, Baccarat, etc. are designed and developed at our gaming studio as per your business needs.",
    href: "/casino-games"
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

const landingItems = [
  {
    title: "WHITE LABEL SKILL GAMES SOFTWARE PROVIDER",
    description: "Want your business to rise to new heights? Explore our cutting-edge online white label skill games software. Our white label casino solution boasts advanced technology and a plethora of features designed to keep players engaged. To ensure your success in the online skill games industry, our developers make the necessary enhancements.",
    button: "REQUEST A QUOTE",
  }
]

const WhiteLabelSkillGames = () => {
  return (
    <div className="white-label-skill-game">
      <div className="landing-white-label-skill-section">
      <LandingSection landingItems={landingItems}/>
      </div>
      <AchievementsBanner />
      <PlatformSection platformItems={platformItems}/>
      <PaymentSection />
      <ProductSection productGrid={productItems}/>
      <ContactBanner contactItems={demoItems}/>
    </div>
  )
}

export default WhiteLabelSkillGames