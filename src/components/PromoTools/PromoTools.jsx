import './PromoTools.css'

function PromoTools() {
  return (
    <div className='promo-tools'>
        <div className='promo-container'>
            <h1>Promo Tools</h1>
            <div className='promo-cards-container'>
                <div className='promo-card1'>
                    <img src="https://spribe.co/assets/images/av-rain.png" alt="" />
                    <div className='promo-text-card'>
                        <h2>Rain Promo</h2>
                        <p>This special promo feature adds amount of free bets into chat, at random times. Any player can claim these free bets by taping on “claim” button.</p>
                        <p>This is promo feature with goal to increase chat interaction and player time in game.</p>
                    </div>
                </div>
                <div className='promo-card2'>
                    <img src="https://spribe.co/assets/images/av-free-bet.png" alt="" />
                    <div className='promo-text-card'>
                        <h2>Free Bets</h2>
                        <p>Free bets are the best way to introduce game to your customers or just use as a gift in random promotions and giveaways.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PromoTools