import './PokerLanding.css'
import { useScrollAnimations } from '../../../../Hooks/useScrollAnimations'

function PokerLanding({ landingItems}) {
    useScrollAnimations()
    return (
        <div className='pokerlanding-section'>
            <div className='overlay'></div>
            {landingItems.map((item, index) => (
                <div key={index} className='pokerlanding-container'>

                    <div className='pokerlanding-text animate-on-scroll' data-direction="left" data-delay="0.5">
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <p>{item.description2}</p>
                    </div>

                    <div className='pokerbg-container asd' data-direction="right" data-delay="0.5">
                        <div className='pokerbg-cards-container'>
                            <img src="/pokerPage/bg-cards.png" alt="" className='image-stack'/>
                        </div>
                        <div className='pokerbg-icons-container'>
                            <div className='pokerbg-icon-container pokerbg-icon0'>
                                <img src="/pokerPage/bg-icons/0.png" alt="" className='image-stack'/>
                            </div>
                            <div className='pokerbg-icon-container pokerbg-icon1'>
                                <img src="/pokerPage/bg-icons/1.png" alt="" className='image-stack' />
                            </div>
                            <div className='pokerbg-icon-container pokerbg-icon2'>
                                <img src="/pokerPage/bg-icons/2.png" alt="" className='image-stack' />
                            </div>
                            <div className='pokerbg-icon-container pokerbg-icon3'>
                                <img src="/pokerPage/bg-icons/3.png" alt="" className='image-stack' />
                            </div>
                            <div className='pokerbg-icon-container pokerbg-icon4'>
                                <img src="/pokerPage/bg-icons/4.png" alt="" className='image-stack' />
                            </div>
                            <div className='pokerbg-icon-container pokerbg-icon5'>
                                <img src="/pokerPage/bg-icons/5.png" alt="" className='image-stack' />
                            </div>
                            <div className='pokerbg-icon-container pokerbg-icon6'>
                                <img src="/pokerPage/bg-icons/6.png" alt="" className='image-stack' />
                            </div>
                            <div className='pokerbg-icon-container pokerbg-icon7'>
                                <img src="/pokerPage/bg-icons/7.png" alt="" className='image-stack' />
                            </div>
                            <div className='pokerbg-icon-container pokerbg-icon8'>
                                <img src="/pokerPage/bg-icons/8.png" alt="" className='image-stack' />
                            </div>
                            <div className='pokerbg-icon-container pokerbg-icon9'>
                                <img src="/pokerPage/bg-icons/9.png" alt="" className='image-stack' />
                            </div>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default PokerLanding