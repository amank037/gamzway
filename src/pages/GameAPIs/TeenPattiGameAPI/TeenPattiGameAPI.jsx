import './TeenPattiGameAPI.css'
import LandingSection from "../../../components/LandingSection/LandingSection"
import AchievementsBanner from "../../../components/AchievementsBanner/AchievementsBanner"

const landingItems = [
  {
    title: "TEEN PATTI GAME API DEVELOPMENT",
    description: "Mobzway’s TEEN PATTI Game API delivers a robust and scalable solution for integrating real-money TEEN PATTI games into your platform. With seamless multiplayer support, secure gameplay, real-time updates, and engaging UI, our API ensures a smooth user experience while helping operators boost player engagement and maximize revenue.",
    button: "REQUEST A QUOTE",
  }
]

const TeenPattiGameAPI = () => {
  return (
    <div className="teen-patti-api-game">
      <div className="landing-teen-patti-api-section">
      <LandingSection landingItems={landingItems}/>
      </div>
      <AchievementsBanner />
    </div>
  )
}

export default TeenPattiGameAPI