import './SnakeLadderLanding.css'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"




function SnakeLadderLanding({ landingItems}) {
    return (
        <div className='landingv2-section'>
            <div className='overlay'></div>
            {landingItems.map((item, index) => (
                <div key={index} className='landingv2-text'>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <p>{item.description2}</p>
                    <button className='landingv2-btn'><span>{item.button}</span></button>
                </div>
            ))}
            <Swiper
            modules={[Autoplay]}
            centeredSlides={true}
            className='landingv2Img'
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            speed={500}
            slidesPerView={1}
            lazy={true}
            watchSlidesProgress={true} 
            >
                <SwiperSlide>
                    <div className='snakelanding-images-container'>
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
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://beta.mobzway.com/assets/images/pokerSlide1.webp" alt="" className='swiper-lazy'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://beta.mobzway.com/assets/images/pokerSlide1.webp" alt="" className='swiper-lazy'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://beta.mobzway.com/assets/images/pokerSlide1.webp" alt="" className='swiper-lazy'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://beta.mobzway.com/assets/images/pokerSlide1.webp" alt="" className='swiper-lazy'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://beta.mobzway.com/assets/images/pokerSlide1.webp" alt="" className='swiper-lazy'/>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SnakeLadderLanding