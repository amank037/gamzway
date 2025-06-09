import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "./CarouselSection.css"
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'

const carouselData = [
  // {
  //   title: "WELCOME TO GAMZWAY",
  //   description: "Leading name in real-money and skill-based gaming solutions, we specialise in pre-ready games to enable you to get off right away.  Whether your company is established operator, gaming startup, or entrepreneurial, our plug-and-play gaming solutions guarantee a quick, effective, scalable launch.",
  //   image: "https://beta.mobzway.com/assets/images/ludo-game-development/banner_img.avif",
  //   isMainTitle: true,
  // },
  {
    title: "Ludo",
    description: "Rich design, real-time multiplayer interaction, and monetising options combined in our Ludo game apps help companies increase user base and income. We provide dependable, scalable, reasonably priced development tools whether your needs call for a pre-built solution ready to use or a bespoke Ludo program.",
    image: "https://beta.mobzway.com/assets/images/ludo-game-development/ludo-king.webp"
  },
  {
    title: "Rummy",
    description: "Are you in search of the top rummy game development company? Gamzway specializes in rummy game development, offering comprehensive solutions for creating the best online rummy game app and website.",
    image: "https://beta.mobzway.com/assets/images/ludo-game-development/zupee-ludo.webp"
  },
  {
    title: "Snake & Ladder",
    description: "Want to build the game similar to Ludo Sikandar app? Contact us today for the ludo game app development services provided by us, with 9+ years of experience developers featuring customizable settings for diverse player preference.",
    image: "https://beta.mobzway.com/assets/images/ludo-game-development/ludo-Sikandar.webp"
  },
  {
    title: "Call Break",
    description: "Serving gaming startups, businesses, and entrepreneurs develop unique Call Break games across Android, iOS, and Web, we are a reputable Call Break Card Game Development Company.",
    image: "https://beta.mobzway.com/assets/images/ludo-game-development/snake-ladder.webp"
  },
  {
    title: "Poker",
    description: "Experience the thrill and strategy of a classic Poker Game designed for all skill levels. Whether you're a casual player or a seasoned card shark, our immersive poker experience brings realistic gameplay, smooth interface, and competitive features right to your fingertips.",
    image: "https://beta.mobzway.com/assets/images/ludo-game-development/ludo-king.webp"
  },
  {
    title: "White Label Casino",
    description: "Want your casino business to rise to new heights? Explore our cutting-edge online white label casino software. Our white label casino solution boasts advanced technology and a plethora of features designed to keep players engaged.",
    image: "https://beta.mobzway.com/assets/images/ludo-game-development/ludo-king.webp"
  }
]

function CarouselSection() {

  const [name, setName] = useState('')
  const [contactType, setContactType] = useState('phone')
  const [contactValue, setContactValue] = useState('')

  const renderContactInput = () => {
    switch(contactType) {
    case 'phone':
    case 'whatsapp':
        return (
        <PhoneInput
            country={'in'}
            value={contactValue}
            onChange={phone => setContactValue(phone)}
            containerClass="phone-input-container"
            inputClass="contact-input"
        />
        )
    case 'email':
        return (
        <input
            type="email"
            placeholder="Your Email"
            value={contactValue}
            onChange={(e) => setContactValue(e.target.value)}
            className="contact-input"
        />
        )
    case 'telegram':
    case 'skype':
        return (
        <input
            type="text"
            placeholder={`Your ${contactType} ID`}
            value={contactValue}
            onChange={(e) => setContactValue(e.target.value)}
            className="contact-input"
        />
        )
    default:
        return null
    }
}


  return (
    <div className="carousel-wrapper">
      <div className="carousel-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]} 
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
          speed={800}
          autoplay={{ 
            delay: 4000,
            disableOnInteraction: false 
          }}
          loop={true}
          className="main-swiper"
        >
          <SwiperSlide>
          <div className="slide-content"  data-swiper-autoplay="10000">
            <div className="text-content">
              <h2 className="slide-title">
                WELCOME TO GAMZWAY
              </h2>
              <p className="slide-description">Leading name in real-money and skill-based gaming solutions, we specialise in pre-ready games to enable you to get off right away.  Whether your company is established operator, gaming startup, or entrepreneurial, our plug-and-play gaming solutions guarantee a quick, effective, scalable launch.</p>
            </div>
            <div className="image-content">
              <img src="https://beta.mobzway.com/assets/images/ludo-game-development/banner_img.avif" alt="" />
            </div>
          </div>
          </SwiperSlide>
          {carouselData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="slide-content">
                <div className="text-content">
                  <h2 className="slide-title">
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

      <div className="carousel-form">
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

export default CarouselSection