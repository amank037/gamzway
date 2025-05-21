import './LudoGameAPI.css'
import LandingSection from "../../../components/LandingSection/LandingSection"
import AchievementsBanner from "../../../components/AchievementsBanner/AchievementsBanner"

const landingItems = [
  {
    title: "LUDO GAME API DEVELOPMENT",
    description: "Looking for the right Ludo game solution for your business, don't hesitate to connect with Gamzway for professional Ludo game development company. Experience with engaging gameplay and vibrant graphics.",
    button: "REQUEST A QUOTE",
  }
]

const LudoGameAPI = () => {
  return (
    <div className="ludo-api-game">
      <div className="landing-ludo-api-section">
      <LandingSection landingItems={landingItems}/>
      </div>
      <AchievementsBanner />
    </div>
  )
}

export default LudoGameAPI