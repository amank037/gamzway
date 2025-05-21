import './RNGGames.css'
import LandingSection from "../../../components/LandingSection/LandingSection"
import AchievementsBanner from "../../../components/AchievementsBanner/AchievementsBanner"

const landingItems = [
  {
    title: "RNG GAME DEVELOPMENT",
    description: "Gamzway offers state-of-the-art RNG (Random Number Generator) games, ensuring fair and unpredictable outcomes for slots, casino, and rummy games. Our RNG-certified technology guarantees transparency and trust, delivering thrilling gameplay experiences across platforms while meeting international gaming standards for security and compliance.",
    button: "REQUEST A QUOTE",
  }
]

const RNGGames = () => {
  return (
    <div className="rng-game">
      <div className="landing-rng-section">
      <LandingSection landingItems={landingItems}/>
      </div>
      <AchievementsBanner />
    </div>
  )
}

export default RNGGames