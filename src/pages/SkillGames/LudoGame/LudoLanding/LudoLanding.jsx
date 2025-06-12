import './LudoLanding.css'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"


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

                    <div className='ludo-about-card'>
                        <div className='ludo-about-card-img-section'>
                            <img src={item.image} alt="" className='ludo-about-card-logo'/>
                            <img src="https://spribe.co/pf.6ace4e8705f279ee.svg" alt="" className='ludo-about-card-fair'/>
                        </div>
                        <div className='ludo-about-card-info'>
                            <div className='ludo-about-card-info-item'>
                                <p>Game Type</p>
                                <h3>Mini Game</h3>
                            </div>
                            <div className='ludo-about-card-info-item'>
                                <p>Return To Player (RTP)</p>
                                <h3>97%</h3>
                            </div>
                            <div className='ludo-about-card-info-item'>
                                <p>Devices</p>
                                <h3>Desktop, Tablet, Mobile</h3>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {/* <Swiper
            modules={[Autoplay]}
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
                    <img src="/ludoPage/devices/ludo-lap2-slider.png" alt=""/>
                </SwiperSlide>
            </Swiper> */}
        </div>
    )
}

export default LudoLanding