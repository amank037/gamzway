import './PaymentSection.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'


function PaymentSection() {
  return (
    <div className="payments-section">
      <div className="payments-container">
        <h1 className="payments-title">Our Payment gateway integration</h1>
        <Swiper
          spaceBetween={30}
          slidesPerView={5}
          breakpoints={{
            1200: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
            993: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            0: {
              slidesPerView:2,
              spaceBetween: 20,
            },
          }}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={1000}
          loop={true}
          modules={[Autoplay]}
          className="payments-swiper"
        >
          <SwiperSlide>
            <img src="https://beta.mobzway.com/assets/images/rummy-game-development/CashfreePayments.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://beta.mobzway.com/assets/images/rummy-game-development/Razorpay.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://beta.mobzway.com/assets/images/rummy-game-development/Payu.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://beta.mobzway.com/assets/images/rummy-game-development/Paytm.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://beta.mobzway.com/assets/images/rummy-game-development/Neteller.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://beta.mobzway.com/assets/images/rummy-game-development/PayPal.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://beta.mobzway.com/assets/images/rummy-game-development/Bitcoin.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://beta.mobzway.com/assets/images/rummy-game-development/Stripe.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://beta.mobzway.com/assets/images/rummy-game-development/Skrill.webp" alt="" />
          </SwiperSlide>
        </Swiper>

      </div>
    </div>
  )
}

export default PaymentSection