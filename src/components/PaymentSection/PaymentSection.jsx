import './PaymentSection.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'


function PaymentSection() {
  return (
    <div className="payments-section">
      <div className="payments-container">
        <h1 className="payments-title">Our Payment gateway integration</h1>
        {/* <div className="payments-icons-1">
                <img src="https://beta.mobzway.com/assets/images/rummy-game-development/CashfreePayments.webp" alt="" />
                <img src="https://beta.mobzway.com/assets/images/rummy-game-development/Razorpay.webp" alt="" />
                <img src="https://beta.mobzway.com/assets/images/rummy-game-development/Payu.webp" alt="" />
                <img src="https://beta.mobzway.com/assets/images/rummy-game-development/Paytm.webp" alt="" />
                <img src="https://beta.mobzway.com/assets/images/rummy-game-development/Neteller.webp" alt="" />
                <img src="https://beta.mobzway.com/assets/images/rummy-game-development/PayPal.webp" alt="" />
            </div>
            <div className="payments-icons-2">
                <img src="https://beta.mobzway.com/assets/images/rummy-game-development/Bitcoin.webp" alt="" />
                <img src="https://beta.mobzway.com/assets/images/rummy-game-development/Stripe.webp" alt="" />
                <img src="https://beta.mobzway.com/assets/images/rummy-game-development/Skrill.webp" alt="" />
            </div> */}
        <Swiper

          slidesPerView={5}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={1200}
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