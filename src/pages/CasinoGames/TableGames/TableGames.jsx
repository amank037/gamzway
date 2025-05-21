import './TableGames.css'
import LandingSection from "../../../components/LandingSection/LandingSection"
import AchievementsBanner from "../../../components/AchievementsBanner/AchievementsBanner"

const landingItems = [
  {
    title: "TABLE GAMES DEVELOPMENT COMPANY",
    description: "Gamzway develops high-quality digital table games like poker, blackjack, roulette, and baccarat. Designed for realism and fairness, our table games combine smooth mechanics with secure RNG systems, providing engaging and competitive experiences that keep players entertained on both desktop and mobile platforms.",
    button: "REQUEST A QUOTE",
  }
]

const TableGames = () => {
  return (
    <div className="table-game">
      <div className="landing-table-section">
      <LandingSection landingItems={landingItems}/>
      </div>
      <AchievementsBanner />
    </div>
  )
}

export default TableGames