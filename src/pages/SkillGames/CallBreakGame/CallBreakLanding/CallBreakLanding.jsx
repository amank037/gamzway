import './CallBreakLanding.css'
import { useScrollAnimations } from '../../../../Hooks/useScrollAnimations'

function CallBreakLanding({ landingItems}) {
    useScrollAnimations()
    return (
        <div className='callbreaklanding-section'>
            <div className='overlay'></div>
            {landingItems.map((item, index) => (
                <div key={index} className='callbreaklanding-container'>

                    <div className='callbreaklanding-text animate-on-scroll' data-direction="left" data-delay="0.5">
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <p>{item.description2}</p>
                    </div>

                    <div className='callbreakbg-container animate-on-scroll' data-direction="right" data-delay="0.5">
                        <div className='callbreakbg-over'>
                            <img src="/callbreakPage/bg-over.png" alt="" className='image-stack'/>
                        </div>
                        <div className='callbreakbg-title'>
                            <img src="/callbreakPage/bg-title.png" alt="" className='image-stack'/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CallBreakLanding