import './LudoGameAPI.css'
import LandingSection from "../../../components/LandingSection/LandingSection"
import AchievementsBanner from "../../../components/AchievementsBanner/AchievementsBanner"

const landingItems = [
  {
    title: "LUDO GAME API DEVELOPMENT",
    description: "Ludo is a cultural phenomenon embraced by millions of people throughout millennia and across countries, not only a board game.  Ludo has resurfaced as a major component in informal multiplayer entertainment as mobile gaming stretches its digital sphere.  Gamzway provides a strong and scalable Ludo Game API designed to satisfy high-performance needs while maintaining games fair, fluid, and interesting therefore enabling gaming companies with this potential.",
    description2:"Entrepreneurs and businesses wishing to enter or grow in the online board game market will find our Ludo Game API a plug-and-play solution.  Our API provides a technical and creative edge whether you are expanding an existing product line or starting your platform.",
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