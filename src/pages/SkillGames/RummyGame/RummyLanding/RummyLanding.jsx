import './RummyLanding.css'
import { useScrollAnimations } from '../../../../Hooks/useScrollAnimations'

function RummyLanding({ landingItems}) {
    useScrollAnimations()
    return (
        <div className='rummylanding-section'>
            <div className='overlay'></div>
            {landingItems.map((item, index) => (
                <div key={index} className='rummylanding-container'>

                    <div className='rummylanding-text animate-on-scroll' data-direction="left" data-delay="0.5">
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <p>{item.description2}</p>
                    </div>

                    <div className='rummybg-container animate-on-scroll' data-direction="right" data-delay="0.5">
                        <div className="rummy-slide-cards-container">              
                            <div className="first-rummy-slide-card-container first-rummy-slide-card1">
                                <img src="/rummyPage/slides/1st slide/1(1).png" alt="" className="stacks-img"/>
                            </div>
                            
                            <div className="first-rummy-slide-card-container first-rummy-slide-card2">
                                <img src="/rummyPage/slides/1st slide/2(1).png" alt="" className="stacks-img"/>
                            </div>
                            
                            <div className="first-rummy-slide-card-container first-rummy-slide-card3">
                                <img src="/rummyPage/slides/1st slide/3(1).png" alt="" className="stacks-img"/>
                            </div>
                            
                            <div className="first-rummy-slide-card-container first-rummy-slide-card4">
                                <img src="/rummyPage/slides/1st slide/4(1).png" alt="" className="stacks-img"/>
                            </div>

                            <div className="first-rummy-slide-icon-container first-rummy-slide-icon1">
                                <img src="/rummyPage/slides/1st slide/1.webp" alt=""  className="stacks-img"/>
                            </div>
                            <div className="first-rummy-slide-icon-container first-rummy-slide-icon2">
                                <img src="/rummyPage/slides/1st slide/2.webp" alt=""  className="stacks-img"/>
                            </div>
                            <div className="first-rummy-slide-icon-container first-rummy-slide-icon3">
                                <img src="/rummyPage/slides/1st slide/3.webp" alt=""  className="stacks-img"/>
                            </div>
                            <div className="first-rummy-slide-icon-container first-rummy-slide-icon4">
                                <img src="/rummyPage/slides/1st slide/4.webp" alt=""  className="stacks-img"/>
                            </div>
                            <div className="first-rummy-slide-title-container first-rummy-slide-title1">
                                <img src="/rummyPage/slides/1st slide/rummy.webp" alt=""  className="stacks-img"/>
                            </div>
                            {/* <div className="first-rummy-slide-title-container first-rummy-slide-title2">
                                <img src="/rummyPage/slides/1st slide/Untitled-4.webp" alt="" className="stacks-img" />
                            </div> */}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RummyLanding