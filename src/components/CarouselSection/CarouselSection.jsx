import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { useScrollAnimations } from "../../Hooks/useScrollAnimations"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "./CarouselSection.css"
import 'react-phone-input-2/lib/style.css'

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
    image: "https://beta.mobzway.com/assets/images/ludo-game-development/banner_img.avif"
  },
  {
    title: "Rummy",
    description: "Are you in search of the top rummy game development company? Gamzway specializes in rummy game development, offering comprehensive solutions for creating the best online rummy game app and website.",
    image: "https://beta.mobzway.com/assets/images/rummy-software/Rummy-11.webp"
  },
  {
    title: "Snake & Ladder",
    description: "Want to build the game similar to Ludo Sikandar app? Contact us today for the ludo game app development services provided by us, with 9+ years of experience developers featuring customizable settings for diverse player preference.",
    image: "https://beta.mobzway.com/assets/images/ludo-game-development/snake-ladder.webp"
  },
  {
    title: "Call Break",
    description: "Serving gaming startups, businesses, and entrepreneurs develop unique Call Break games across Android, iOS, and Web, we are a reputable Call Break Card Game Development Company.",
    image: "https://beta.mobzway.com/assets/images/rummy-software/Rummy-04.webp"
  },
  {
    title: "Poker",
    description: "Experience the thrill and strategy of a classic Poker Game designed for all skill levels. Whether you're a casual player or a seasoned card shark, our immersive poker experience brings realistic gameplay, smooth interface, and competitive features right to your fingertips.",
    image: "https://beta.mobzway.com/assets/images/poker-game-development-company.webp"
  },
  {
    title: "White Label Casino",
    description: "Want your casino business to rise to new heights? Explore our cutting-edge online white label casino software. Our white label casino solution boasts advanced technology and a plethora of features designed to keep players engaged.",
    image: "https://beta.mobzway.com/assets/images/pokerSlide1.webp"
  }
]

function CarouselSection() {

  useScrollAnimations()

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
            delay: 6000,
            disableOnInteraction: false 
          }}
          loop={true}
          className="main-swiper"
        >
          <SwiperSlide>
          <div className="slide-content"  data-swiper-autoplay="10000">
            <div className="text-content animate-on-scroll" data-direction="left">
              <h2 className="slide-title">
                WELCOME TO GAMZWAY
              </h2>
              <p className="slide-description">Leading name in real-money and skill-based gaming solutions, we specialise in pre-ready games to enable you to get off right away.  Whether your company is established operator, gaming startup, or entrepreneurial, our plug-and-play gaming solutions guarantee a quick, effective, scalable launch.</p>
            </div>
            <div className="image-content animate-on-scroll" data-direction="right">
              <img src="/heroImg.png" alt="" />
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
      
      <div className="carousel-controls">
        <div className="custom-pagination"></div>
      </div>
    </div>
  )
}

export default CarouselSection