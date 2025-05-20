import './TambolaGame.css'
import LandingSection from "../../../components/LandingSection/LandingSection"
import AchievementsBanner from "../../../components/AchievementsBanner/AchievementsBanner"

const landingItems = [
  {
    title: "TAMBOLA GAME DEVELOPMENT",
    description: "We develop appealing kids' games targeted towards various age ranges. Our experts possess a thorough understanding of the nuances of the genre and create quality output in line with the best in the industry.",
    button: "REQUEST A QUOTE",
  }
]

const TambolaGame = () => {
  return (
    <div className="tambola-game">
      <div className="landing-tambola-section">
      <LandingSection landingItems={landingItems}/>
      </div>
      <AchievementsBanner />
    </div>
  )
}

export default TambolaGame