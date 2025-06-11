import './FeaturesBannerV2.css'

function FeaturesBannerV2() {
  return (
    <div className='features-bannerv2'>
        <div className='features-bannerv2-container'>
            <div className='features-bannerv2-item'>
                <div className='features-bannerv2-icon'>
                    <img src="/chat.png" alt="" />
                </div>
                <h3>In-game Chat</h3>
                <div className='features-bannerv2-line'></div>
                <img src="https://spribe.co/av-chat.e155820587b7a64a.png" alt="" />
                <p className='bold-text'>In-game chat is a great tool for making a gaming community with loyal players.</p>
            </div>
            <div className='features-bannerv2-item'>
                <div className='features-bannerv2-icon'>
                    <img src="/live.png" alt="" />
                </div>
                <h3>Live Bets</h3>
                <div className='features-bannerv2-line'></div>
                <img src="https://spribe.co/av-bets.6d1f08053a7d7f02.png" alt="" />
                <p>Everyone can see how much other players are betting and winning, creating a live leaderboard.</p>
            </div>
            <div className='features-bannerv2-item'>
                <div className='features-bannerv2-icon'>
                    <img src="/graph.png" alt="" />
                </div>
                <h3>Live Statistics</h3>
                <div className='features-bannerv2-line'></div>
                <img src="https://spribe.co/av-stats.5b22040474fd456a.png" alt="" />
                <p>In-game statistics module with biggest and hugest wins presented as daily, monthy or all time leaderboard.</p>
            </div>
        </div>
    </div>
  )
}

export default FeaturesBannerV2