import './AndarBaharAPI.css'
import LandingSection from "../../../components/LandingSection/LandingSection"
import AchievementsBanner from "../../../components/AchievementsBanner/AchievementsBanner"

const landingItems = [
  {
    title: "ANDAR BAHAR API DEVELOPMENT COMPANY",
    description: "Looking for the development of andar bahar game software? Mobzway offers you with a complete andar bahar software solution for all gaming devices, including mobiles, desktops. Also get the best online andar bharat game solution to start your own website for this unique card game. Request for attractive quotes now!",
    button: "REQUEST A QUOTE",
  }
]

const AndarBaharAPI = () => {
  return (
    <div className="andar-bahar-api-game">
      <div className="landing-andar-bahar-api-section">
      <LandingSection landingItems={landingItems}/>
      </div>
      <AchievementsBanner />
    </div>
  )
}

export default AndarBaharAPI