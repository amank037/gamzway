import './AchievementsBanner.css'

const AchievementsBanner = () => {
  return (
    <div className='ach-banner'>
        <div className='ach-container'>
            <div className='ach-card'>
                <img className='ach-img' src="https://beta.mobzway.com/assets/images/game-launched1.png" alt="" />
                <div className='ach-text'>
                    <h1>500+</h1>
                    <h3>GAMES LAUNCHED</h3>
                </div>
            </div>

            <div className='ach-card'>
                <img className='ach-img' src="https://beta.mobzway.com/assets/images/satisfied-customers1.png" alt="" />
                <div className='ach-text'>
                    <h1>300+</h1>
                    <h3>SATISFIED CUSTOMERS</h3>
                </div>
            </div>

            <div className='ach-card'>
                <img className='ach-img' src="https://beta.mobzway.com/assets/images/rummy-game-development/client-retension1.webp" alt="" />
                <div className='ach-text'>
                    <h1>97%</h1>
                    <h3>CLIENT RETENTION</h3>
                </div>
            </div>

            <div className='ach-card'>
                <img className='ach-img' src="https://beta.mobzway.com/assets/images/players1.png" alt="" />
                <div className='ach-text'>
                    <h1>100K+</h1>
                    <h3>PLAYERS</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AchievementsBanner