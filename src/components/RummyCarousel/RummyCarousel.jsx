import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "./RummyCarousel.css"

function RummyCarousel() {
  return (
    <div className="rummy-carousel-wrapper">
      <div className="rummy-carousel-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]} 
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev'
          }}
          pagination={{
            el: '.custom-pagination',
            clickable: true
          }}
          speed={800}
          autoplay={{ 
            delay: 7000,
            disableOnInteraction: false 
          }}
          loop={true}
          className="main-swiper"
        >
          <SwiperSlide>
            <div className="slide-content">
              <div className="text-content">

                <h2 className="slide-title">Rummy Game Development Company</h2>
                <p className="slide-description">Are you in search of the top rummy game development company? Gamzway specializes in rummy game development, offering comprehensive solutions for creating the best online rummy game app and website.</p>
              </div>

                <div className="first-slide-cards-container">              
                  <div className="first-slide-card-container first-slide-card1">
                    <img src="/rummyPage/slides/1st slide/01-01.png" alt="" className="stack-img"/>
                  </div>
                  
                  <div className="first-slide-card-container first-slide-card2">
                    <img src="/rummyPage/slides/1st slide/01-02.png" alt="" className="stack-img"/>
                  </div>
                  
                  <div className="first-slide-card-container first-slide-card3">
                    <img src="/rummyPage/slides/1st slide/01-03.png" alt="" className="stack-img"/>
                  </div>
                  
                  <div className="first-slide-card-container first-slide-card4">
                    <img src="/rummyPage/slides/1st slide/01-13.png" alt="" className="stack-img"/>
                  </div>

                  <div className="first-slide-icon-container first-slide-icon1">
                    <img src="/rummyPage/slides/1st slide/1.png" alt=""  className="stack-img"/>
                  </div>
                  <div className="first-slide-icon-container first-slide-icon2">
                    <img src="/rummyPage/slides/1st slide/2.png" alt=""  className="stack-img"/>
                  </div>
                  <div className="first-slide-icon-container first-slide-icon3">
                    <img src="/rummyPage/slides/1st slide/3.png" alt=""  className="stack-img"/>
                  </div>
                  <div className="first-slide-icon-container first-slide-icon4">
                    <img src="/rummyPage/slides/1st slide/4.png" alt=""  className="stack-img"/>
                  </div>
                  <div className="first-slide-title-container first-slide-title1">
                    <img src="/rummyPage/slides/1st slide/rummy.png" alt=""  className="stack-img"/>
                  </div>
                  <div className="first-slide-title-container first-slide-title2">
                    <img src="/rummyPage/slides/1st slide/Untitled-4.png" alt="" className="stack-img" />
                  </div>
                </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-content">
              <div className="text-content">
                <h3>APP SIMILAR TO</h3>
                <h2 className="slide-title">A23 Rummy</h2>
                <p className="slide-description">Want to build app like A23 Rummy game? Gamzway specializes in rummy game development, offering a comprehensive range of solutions for creating the best online rummy game app and website.</p>
              </div>
              <div className="image-content">
                <div className="rummy-cards-container">
                  <img src="https://beta.mobzway.com/assets/images/rummy-software/Rummy-03.webp" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-content">
              <div className="text-content">
                <h3>APP SIMILAR TO</h3>
                <h2 className="slide-title">Junglee Rummy</h2>
                <p className="slide-description">Build the app similar to Junglee Rummy for user friendliness and unique features just like Junglee Rummy for kick starting your journey. Elevate your online game business with our expert assistance.</p>
              </div>
              <div className="image-content">
                <div className="rummy-cards-container">
                  <img src="https://beta.mobzway.com/assets/images/rummy-software/Rummy-02.webp" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-content">
              <div className="text-content">
                <h3>APP SIMILAR TO</h3>
                <h2 className="slide-title">Rummy Circle</h2>
                <p className="slide-description">Want to experience exciting games and tournaments for your Rummy gaming business? We are providing rummy platform similar to Rummy Circle and meet your expectations while getting the best app developed by Rummy game developers.</p>
              </div>
              <div className="image-content">
                <div className="rummy-cards-container">
                  <img src="https://beta.mobzway.com/assets/images/rummy-software/Rummy-11.webp" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-content">
              <div className="text-content">
                <h3>APP SIMILAR TO</h3>
                <h2 className="slide-title">Rummy Time</h2>
                <p className="slide-description">Developing the classic card games for the gaming business with the years of experience. Build the classic enjoyable gaming interface with user-friendly features for your gaming business. Best Rummy game development company.</p>
              </div>
              <div className="image-content">
                <div className="rummy-cards-container">
                  <img src="https://beta.mobzway.com/assets/images/rummy-software/Rummy-04.webp" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-content">
              <div className="text-content">
                <h3>APP SIMILAR TO</h3>
                <h2 className="slide-title">Rummy Culture</h2>
                <p className="slide-description">Hire the Rummy game app developers for your gaming business requirements, with over 9+ years of experience we are specialized in the rummy gaming industry and proeficient in building game similar to Rummy Culture.</p>
              </div>
                <div className="sixth-slide-cards-container">
                  <div className="sixth-slide-card-container sixth-slide-card1">
                    <img src="/rummyPage/slides/6th slide/01-01.png" alt="" className="stack-img"/>
                  </div>
                  
                  <div className="sixth-slide-card-container sixth-slide-card2">
                    <img src="/rummyPage/slides/6th slide/01-02.png" alt="" className="stack-img"/>
                  </div>
                  
                  <div className="sixth-slide-card-container sixth-slide-card3">
                    <img src="/rummyPage/slides/6th slide/01-03.png" alt="" className="stack-img"/>
                  </div>
                  
                  <div className="sixth-slide-card-container sixth-slide-card4">
                    <img src="/rummyPage/slides/6th slide/01-04.png" alt="" className="stack-img"/>
                  </div>

                  <div className="sixth-slide-card-container sixth-slide-card5">
                    <img src="/rummyPage/slides/6th slide/01-13.png" alt=""  className="stack-img"/>
                  </div>

                  <div className="sixth-slide-chip-container sixth-slide-chip1">
                    <img src="/rummyPage/slides/6th slide/Untitled-7.png" alt="" className="stack-img"/>
                  </div>

                  <div className="sixth-slide-chip-container sixth-slide-chip2">
                    <img src="/rummyPage/slides/6th slide/one-01.png" alt="" className="stack-img"/>
                  </div>

                </div>
              </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="carousel-controls">
        <div className="navigation-buttons">
          <button className="custom-prev">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="custom-next">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        <div className="custom-pagination"></div>
      </div>
    </div>
  )
}

export default RummyCarousel