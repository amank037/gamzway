import "./CallBreakGame.css"
import LandingSection from "../../../components/LandingSection/LandingSection"
import AchievementsBanner from "../../../components/AchievementsBanner/AchievementsBanner"

const landingItems = [
  {
    title: "CALL BREAK GAME DEVELOPMENT",
    description: "We develop appealing kids' games targeted towards various age ranges. Our experts possess a thorough understanding of the nuances of the genre and create quality output in line with the best in the industry.",
    button: "REQUEST A QUOTE",
  }
]

const CallBreakGame = () => {
  return (
    <div className="callbreak-game">
      <div className="landing-callbreak-section">
      <LandingSection landingItems={landingItems}/>
      </div>
      <AchievementsBanner />
    </div>
  )
}

export default CallBreakGame