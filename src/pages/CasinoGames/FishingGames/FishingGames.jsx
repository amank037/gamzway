import './FishingGames.css'
import LandingSection from "../../../components/LandingSection/LandingSection"
import AchievementsBanner from "../../../components/AchievementsBanner/AchievementsBanner"

const landingItems = [
  {
    title: "FISHING GAMES DEVELOPMENT COMPANY",
    description: "Mobzway brings the excitement of arcade-style casino fishing games to life with stunning visuals and smooth gameplay. Our fishing games combine skill and luck, offering players immersive experiences and rewarding payouts. Designed for engagement and monetization, they add a fun, action-packed dimension to any online gaming platform.",
    button: "REQUEST A QUOTE",
  }
]

const FishingGames = () => {
  return (
    <div className="fishing-game">
      <div className="landing-fishing-section">
      <LandingSection landingItems={landingItems}/>
      </div>
      <AchievementsBanner />
    </div>
  )
}

export default FishingGames