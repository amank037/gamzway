import "./CallBreakGame.css"
import LandingSection from "../../../components/LandingSection/LandingSection"
import AchievementsBanner from "../../../components/AchievementsBanner/AchievementsBanner"

const landingItems = [
  {
    title: "CALL BREAK GAME DEVELOPMENT",
    description: "Call Break has become a hot item in the digital gaming market as millions of fans across South Asia and growing taste for skill-based real-money card games drive demand.  At Mobzway Technologies, we bring this venerable card game to life with engaging gaming, real-time multiplayer sync, sophisticated CRM tools, and monetising strategies maximising involvement and income.",
    description2: "Serving gaming startups, businesses, and entrepreneurs develop unique Call Break games across Android, iOS, and Web, we are a reputable Call Break Card Game Development Company.",
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