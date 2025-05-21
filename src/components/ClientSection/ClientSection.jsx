import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import FeaturesHeader from "../FeaturesSection/FeaturesHeader/FeaturesHeader"
import 'swiper/css'
import 'swiper/css/navigation'
import './ClientSection.css'

const clientTitle = [
    {
        title: "WHAT DO CLIENTS SAY ABOUT US"
    }
]

const testimonials = [
    {
        text: "Their professional designers were friendly, and really helpful. They worked with utmost dedication and that impressed me. Although I was doubtful at the beginning, they finished and handed over my project within the stipulated time.",
        name: "PITER",
        country: "AUSTRALIA"
    },
    {
        text: "One of the best online gaming solution providers. One can choose from their range of products and their products are customizable as well. I would like to recommend Mobzway without any reservations.",
        name: "SAUL SMIKET",
        country: "USA"
    },
    {
        text: "Right from the level of conceptualisation to the ending of my work, they have always coordinated and communicated everything with me. This has enabled me to guide them towards an infallible product.",
        name: "BERNARD JONES",
        country: "GERMANY"
    }
]

function ClientSection() {
    return (
        <div className="client-section">
            <div className="client-background"></div>
            <div className="client-content">
                <FeaturesHeader featuresText={clientTitle}/>
                
                <div className="carousel-container">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="carousel-item">
                                    <div className="quote-icon">
                                        <i className="fas fa-quote-right"></i>
                                    </div>
                                    <p>{testimonial.text}</p>
                                    <div className="testimonial-author">
                                        <h2>{testimonial.name}</h2>
                                        <h3>{testimonial.country}</h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            <div className="stars-row">
                <img src="https://i.ibb.co/Zzg4JDXz/01a-01.png" alt="Rating Star" />
                <img src="https://i.ibb.co/xtnt8pQf/01a-01-1.png" alt="Rating Star" />
                <img src="https://i.ibb.co/nNFRk3Fm/01a-01-2.png" alt="Rating Star" />
                <img src="https://i.ibb.co/5xxxCQhD/01a-01-3.png" alt="Rating Star" />
            </div>

                <div className="badges-grid">
                    <div className="badge-wrapper">
                        <img src="https://beta.mobzway.com/assets/images/rummy-game-development/softwaresuggest.webp" alt="Software Suggest Badge" />
                    </div>
                    <div className="badge-wrapper">
                        <img src="https://beta.mobzway.com/assets/images/rummy-game-development/topmobileappdevelopers.webp" alt="Top Mobile App Developers Badge" />
                    </div>
                    <div className="badge-wrapper">
                        <img src="https://beta.mobzway.com/assets/images/rummy-game-development/capterra.webp" alt="Capterra Badge" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientSection