import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import FeaturesHeader from "../FeaturesSection/FeaturesHeader/FeaturesHeader"
import 'swiper/css'
import 'swiper/css/navigation'
import './ClientSection.css'

const clientTitle = [
    {
        title: "What Comments Clients Made About Us?",
        description:" We create enduring relationships rather than only provide goods.  Some of our customers have to say here:"
    }
]

const testimonials = [
    {
        text: "\"Thanks to Gamzway's staff, our Teen Patti platform launched in just ten days! Not bad are the UI, stability, and backend dashboard.\"",
        name: "Ravi Malhotra",
        country: "Has a Gaming Startup"
    },
    {
        text: "\"The support staff is really excellent. They even tailored several important elements after launch and assisted with local compliance. Extremely advised.\"",
        name: "Fatima A.",
        country: "Dream App Entrepreneur"
    },
    {
        text: "\"The first three months following introduction show really remarkable return on investment. The white label model saved several hours of work.\"",
        name: "Jonathan K.",
        country: "Operator in Online Gaming"
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

            {/* <div className="stars-row">
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
            </div> */}
            </div>
        </div>
    )
}

export default ClientSection