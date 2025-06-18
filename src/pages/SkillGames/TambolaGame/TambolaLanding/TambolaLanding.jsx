import './TambolaLanding.css'
import { useScrollAnimations } from '../../../../Hooks/useScrollAnimations'

function TambolaLanding({ landingItems}) {
    useScrollAnimations()
    return (
        <div className='tambolalanding-section'>
            <div className='overlay'></div>
            {landingItems.map((item, index) => (
                <div key={index} className='tambolalanding-container'>

                    <div className='tambolalanding-text animate-on-scroll' data-direction="left" data-delay="0.5">
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <p>{item.description2}</p>
                    </div>

                    <div className='tambolabg-container animate-on-scroll' data-direction="right" data-delay="0.5">
                        <div className='tambolabg-title-container'>
                            <img src="/tambolaPage/bg-over/title.png" alt="" className='image-stack'/>
                        </div>
                        <div className='tambolabg-ball-container tambolabg-ball1'>
                            <img src="/tambolaPage/bg-over/ball1.png" alt=""  className='image-stack'/>
                        </div>
                        <div className='tambolabg-ball-container tambolabg-ball2'>
                            <img src="/tambolaPage/bg-over/ball2.png" alt=""  className='image-stack'/>
                        </div>
                        <div className='tambolabg-board-container tambolabg-board2'>
                            <img src="/tambolaPage/bg-over/board2.png" alt=""  className='image-stack'/>
                        </div>
                        <div className='tambolabg-board-container tambolabg-board1'>
                            <img src="/tambolaPage/bg-over/board1.png" alt=""  className='image-stack'/>
                        </div>

                        <div className='tambolabg-coin-container tambolabg-coin1'>
                            <img src="/tambolaPage/bg-over/coin1.png" alt=""  className='image-stack'/>
                        </div>
                        <div className='tambolabg-coin-container tambolabg-coin2'>
                            <img src="/tambolaPage/bg-over/coin2.png" alt=""  className='image-stack'/>
                        </div>
                        <div className='tambolabg-coin-container tambolabg-coin3'>
                            <img src="/tambolaPage/bg-over/coin3.png" alt=""  className='image-stack'/>
                        </div>
                        <div className='tambolabg-coin-container tambolabg-coin4'>
                            <img src="/tambolaPage/bg-over/coin4.png" alt=""  className='image-stack'/>
                        </div>
                        <div className='tambolabg-coin-container tambolabg-coin5'>
                            <img src="/tambolaPage/bg-over/coin5.png" alt=""  className='image-stack'/>
                        </div>
                        <div className='tambolabg-coin-container tambolabg-coin6'>
                            <img src="/tambolaPage/bg-over/coin6.png" alt=""  className='image-stack'/>
                        </div>
                        <div className='tambolabg-coin-container tambolabg-coin7'>
                            <img src="/tambolaPage/bg-over/coin7.png" alt=""  className='image-stack'/>
                        </div>
                        <div className='tambolabg-coin-container tambolabg-coin8'>
                            <img src="/tambolaPage/bg-over/coin8.png" alt=""  className='image-stack'/>
                        </div>
                        <div className='tambolabg-ball-container tambolabg-ball1'>
                            <img src="/tambolaPage/bg-over/ball1.png" alt=""  className='image-stack'/>
                        </div>
                        <div className='tambolabg-ball-container tambolabg-ball2'>
                            <img src="/tambolaPage/bg-over/ball2.png" alt=""  className='image-stack'/>
                        </div>
                        <div className='tambolabg-ball-container tambolabg-ball3'>
                            <img src="/tambolaPage/bg-over/ball3.png" alt=""  className='image-stack'/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TambolaLanding