import './LudoLanding.css'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"


function LudoLanding({ landingItems}) {
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
            className='ludolandingImg'
            loop={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            speed={500}
            slidesPerView={1}
            lazy={true}
            watchSlidesProgress={true} 
            >
                <SwiperSlide>
                    <img src="https://beta.mobzway.com/assets/images/ludo-game-development/banner_img.avif" alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/ludoPage/devices/ludo-mob.png" alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/ludoPage/devices/ludo-lap2.png" alt=""/>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default LudoLanding