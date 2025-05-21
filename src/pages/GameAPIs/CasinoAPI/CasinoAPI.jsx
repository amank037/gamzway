import './CasinoAPI.css'
import LandingSection from "../../../components/LandingSection/LandingSection"
import AchievementsBanner from "../../../components/AchievementsBanner/AchievementsBanner"

const landingItems = [
  {
    title: "CASINO API DEVELOPMENT COMPANY",
    description: "Gamzway’s Casino API offers a powerful solution to integrate a wide range of casino games, including slots, table games, and live dealer experiences. Designed for seamless integration, high performance, and secure transactions, our API enables operators to launch and manage engaging casino platforms with ease and efficiency.",
    button: "REQUEST A QUOTE",
  }
]

const RNGGames = () => {
  return (
    <div className="casino-api-game">
      <div className="landing-casino-api-section">
      <LandingSection landingItems={landingItems}/>
      </div>
      <AchievementsBanner />
    </div>
  )
}

export default RNGGames