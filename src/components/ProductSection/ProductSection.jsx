import FeaturesHeader from "../FeaturesSection/FeaturesHeader/FeaturesHeader"
import './ProductSection.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/autoplay';

const productTitle = [
    {
        title: "PRODUCTS YOU MAY LIKE"
    }
]

const productGrid = [
    {
    image: "/productList/pokerLaptop.webp",
    title: "Poker Game",
    description: "Gamzway provides poker game development for all the popular poker games.",
    href: "/skill-games/poker"
    },
    {
    image: "https://beta.mobzway.com/assets/images/poker-game-development/Product_Rummy.webp",
    title: "Rummy Game",
    description: "The highly talented team of rummy software developers ensures that everything is engaging.",
    href: "/skill-games/rummy"
    },
    {
    image: "https://beta.mobzway.com/assets/images/rummy-game-development/Product_Teenpatti.webp",
    title: "Teen Patti Game",
    description: "Gamzway offers ready-to-use Teen Patti solutions for business ventures.",
    href: "/game-apis/teen-patti"
    },
    {
    image: "https://beta.mobzway.com/assets/images/rummy-game-development/Product_Casino.webp",
    title: "Casino Software",
    description: "For the online casino game entrepreneurs and businesses, we offer customized casino solutions.",
    href: "/casino-games"
    },
    {
    image: "https://beta.mobzway.com/assets/images/rummy-game-development/product_ludo.webp",
    title: "LUDO Game",
    description: " We offer both ready-to-live and customized gaming solutions for Android, iOS, Web, and Desktop using HTML 5.",
    href: "/skill-games/ludo"
    },
    {
    image: "/productList/tambolaLaptop.png",
    title: "Tambola Game",
    description: "Gamzway is your first-choice partner if you're looking for a Tambola gaming app combining fun, scalability, and return on investment",
    href: "/skill-games/tambola"
    },
    {
    image: "/productList/snakeLaptop.png",
    title: "Snake & Ladder Game",
    description: " Our area of expertise at Gamzway is developing outstanding Snake Ladder Game applications combining contemporary tech components with retro gameplay.",
    href: "/skill-games/snake-ladder"
    },
]

function ProductSection() {
  return (
    <div className="product-section">
        <FeaturesHeader featuresText={productTitle}/>
        <Swiper 
        className="product-section-grid"
        modules={[ Autoplay ]}
        loop={true}
        autoplay={{
        delay: 2000,
        disableOnInteraction: false,
        reverseDirection: true,
        }}
        speed={1000}
        slidesPerView={4}
        spaceBetween={20}
        breakpoints={{
            1200: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            993:{
                slidesPerView: 3,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            }
        }}
        >
            {productGrid.map((item, index) => (
                <SwiperSlide key={index} className="product-section-grid-item">
                    <a href={item.href} >
                        <img src={item.image} alt='' />
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </a>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default ProductSection