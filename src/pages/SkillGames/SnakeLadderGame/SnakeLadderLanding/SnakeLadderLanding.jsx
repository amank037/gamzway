import './SnakeLadderLanding.css'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import { useScrollAnimations } from '../../../../Hooks/useScrollAnimations'



function SnakeLadderLanding({ landingItems}) {
    useScrollAnimations()
    return (
        <div className='snakelanding-section'>
            <div className='overlay'></div>
            {landingItems.map((item, index) => (
                <div key={index} className='snakelanding-text animate-on-scroll' data-direction="left" data-delay="0.5">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <p>{item.description2}</p>
                </div>
            ))}
                    <div className='snakebg-container animate-on-scroll' data-direction="right" data-delay="0.5">
                        <div className='snakelanding-title-container'>
                            <img src="/snakePage/landing/title.png" alt="" className='stack-img'/>
                        </div>
                        <div className='snakelanding-ladder-container'>
                            <img src="/snakePage/landing/ladder.png" alt="" className='stack-img'/>
                        </div>
                        <div className='snakelanding-snake1-container'>
                            <img src="/snakePage/landing/snake1.png" alt="" className='stack-img'/>
                        </div>
                        <div className='snakelanding-snake2-container'>
                            <img src="/snakePage/landing/snake2.png" alt="" className='stack-img'/>
                        </div>
                        <div className='snakelanding-dice1-container'>
                            <img src="/snakePage/landing/dice1.png" alt="" className='stack-img'/>
                        </div>
                        <div className='snakelanding-dice2-container'>
                            <img src="/snakePage/landing/dice2.png" alt="" className='stack-img'/>
                        </div>
                    </div>

        </div>
    )
}

export default SnakeLadderLanding