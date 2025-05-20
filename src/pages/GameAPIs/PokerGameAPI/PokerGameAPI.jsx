import './PokerGameAPI.css'
import LandingSection from "../../../components/LandingSection/LandingSection"
import AchievementsBanner from "../../../components/AchievementsBanner/AchievementsBanner"

const landingItems = [
  {
    title: "POKER GAME API DEVELOPMENT",
    description: "Want to hire best Poker API provider company, that lets you start your online poker business with top notch technology? Mobzway's Poker API solution is the best fit for you.",
    button: "REQUEST A QUOTE",
  }
]

const PokerGameAPI = () => {
  return (
    <div className="poker-api-game">
      <div className="landing-poker-api-section">
      <LandingSection landingItems={landingItems}/>
      </div>
      <AchievementsBanner />
    </div>
  )
}

export default PokerGameAPI