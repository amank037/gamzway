import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules"
// import { useState } from 'react'
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade"
import "./CarouselSection.css"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function CarouselSection({ carouselData }) {
//   const [textSwiper, setTextSwiper] = useState(null)
//   const [imageSwiper, setImageSwiper] = useState(null)
//   const [contactType, setContactType] = useState('phone')
//   const [contactValue, setContactValue] = useState('')
//   const [name, setName] = useState('')

//   const renderContactInput = () => {
//       switch(contactType) {
//           case 'phone':
//           case 'whatsapp':
//               return (
//                   <PhoneInput
//                       country={'in'}
//                       value={contactValue}
//                       onChange={phone => setContactValue(phone)}
//                       containerClass="phone-input-container"
//                       inputClass="contact-input"
//                   />
//               )
//           default:
//               return (
//                   <input 
//                       type={contactType === 'email' ? 'email' : 'text'}
//                       placeholder={`Enter your ${contactType}`}
//                       value={contactValue}
//                       onChange={(e) => setContactValue(e.target.value)}
//                       className="contact-input"
//                   />
//               )
//       }
//   }

  return (
    <div className="carousel-wrapper">
      <div className="carousel-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{
            crossFade: true
          }}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev'
          }}
          pagination={{
            el: '.custom-pagination',
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '"></span>';
            },
          }}
          speed={1000}
          autoplay={{ 
            delay: 4000,
            disableOnInteraction: false 
          }}
          loop={true}
          className="main-swiper"
        >
          {carouselData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="slide-content">
                <div className="text-content">
                  <h2 className="slide-title">
                    {!item.isMainTitle && (
                      <span className="highlight">app similar to </span>
                    )}
                    {item.title}
                  </h2>
                  <p className="slide-description">{item.description}</p>
                </div>
                <div className="image-content">
                  <img src={item.image} alt={item.title} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* <div className="carousel-form">
        <p className="form-heading">Fill in the form to contact us and expand your product offering.</p>
        <div className="form-container">
          <div className="form-group">
            <input 
              type="text" 
              placeholder="Your Name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="name-input"
            />
          </div>
          <div className="contact-group">
            <select 
              className="contact-type"
              value={contactType}
              onChange={(e) => {
                setContactType(e.target.value);
                setContactValue('');
              }}
            >
              <option value="phone">Phone</option>
              <option value="whatsapp">WhatsApp</option>
              <option value="email">Email</option>
              <option value="telegram">Telegram</option>
              <option value="skype">Skype</option>
            </select>
            {renderContactInput()}
          </div>
          <button className="consultation-btn">Free Consultation</button>
        </div>
      </div> */}
      
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

export default CarouselSection