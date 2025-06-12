import './LandingPageV2.css'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"




function LandingPageV2({ landingItems, landingImages }) {
  return (
    <div className='landingv2-section'>
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
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={500}
          slidesPerView={1}
          lazy={true}
          watchSlidesProgress={true} 
        >
          {landingImages.map((item, index) => (
            <SwiperSlide key={index}>
              <img data-swiper-lazy={item.image} src={item.image} alt="" className='swiper-lazy'/>
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  )
}

export default LandingPageV2