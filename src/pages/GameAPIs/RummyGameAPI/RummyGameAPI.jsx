import './RummyGameAPI.css'
import LandingSection from "../../../components/LandingSection/LandingSection"
import AchievementsBanner from "../../../components/AchievementsBanner/AchievementsBanner"

const landingItems = [
  {
    title: "RUMMY GAME API DEVELOPMENT",
    description: "Mobzway’s Rummy Game API delivers a robust and scalable solution for integrating real-money rummy games into your platform. With seamless multiplayer support, secure gameplay, real-time updates, and engaging UI, our API ensures a smooth user experience while helping operators boost player engagement and maximize revenue.",
    button: "REQUEST A QUOTE",
  }
]

const RummyGameAPI = () => {
  return (
    <div className="rummy-api-game">
      <div className="landing-rummy-api-section">
      <LandingSection landingItems={landingItems}/>
      </div>
      <AchievementsBanner />
    </div>
  )
}

export default RummyGameAPI