import './LudoLanding.css'

function LudoLanding({ landingItems}) {
    return (
        <div className='ludolandingv2-section'>
            <div className='overlay'></div>
            {landingItems.map((item, index) => (
                <div key={index} className='ludolandingv2-container'>

                    <div className='ludolandingv2-text'>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <p>{item.description2}</p>
                    </div>

                    <div className='ludo-solutions-img-1'>
                            <div className='sol-ludo-board-container'>
                            <img src="/ludoPage/solutions/1-01.webp" alt="" className="image-stack" />
                            </div>
                            <div className='sol-ludo-pieces-container sol-ludo-piece1'>
                            <img src="/ludoPage/solutions/2-01.webp" alt="" className="image-stack" />
                            </div>
                            <div className='sol-ludo-pieces-container sol-ludo-piece2'>
                            <img src="/ludoPage/solutions/3-01.webp" alt="" className="image-stack" />
                            </div>
                            <div className='sol-ludo-pieces-container sol-ludo-piece3'>
                            <img src="/ludoPage/solutions/4-01.webp" alt="" className="image-stack" />
                            </div>
                            <div className='sol-ludo-pieces-container sol-ludo-piece4'>
                            <img src="/ludoPage/solutions/5-01.webp" alt="" className="image-stack" />
                            </div>
                            <div className='sol-ludo-dice-container sol-ludo-dice1'>
                            <img src="/ludoPage/solutions/6-01.webp" alt="" className="image-stack" />
                            </div>
                            <div className='sol-ludo-dice-container sol-ludo-dice2'>
                            <img src="/ludoPage/solutions/7-01.webp" alt="" className="image-stack" />
                            </div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default LudoLanding