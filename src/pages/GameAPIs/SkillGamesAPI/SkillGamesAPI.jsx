import './SkillGamesAPI.css'
import LandingSection from "../../../components/LandingSection/LandingSection"
import AchievementsBanner from "../../../components/AchievementsBanner/AchievementsBanner"

const landingItems = [
  {
    title: "SKILL GAMES API DEVELOPMENT",
    description: "Mobzway’s Skill Games API empowers operators to seamlessly integrate popular skill-based games like rummy, fantasy sports, and more into their platforms. Built for scalability and security, our API ensures smooth performance, real-time updates, and fair play, delivering engaging experiences that drive user retention and revenue growth.",
    button: "REQUEST A QUOTE",
  }
]

const SkillGamesAPI = () => {
  return (
    <div className="skill-api-game">
      <div className="landing-skill-api-section">
      <LandingSection landingItems={landingItems}/>
      </div>
      <AchievementsBanner />
    </div>
  )
}

export default SkillGamesAPI