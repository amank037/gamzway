import './CallBreakLanding.css'

function CallBreakLanding({ landingItems}) {
    return (
        <div className='callbreaklanding-section'>
            <div className='overlay'></div>
            {landingItems.map((item, index) => (
                <div key={index} className='callbreaklanding-container'>

                    <div className='callbreaklanding-text'>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <p>{item.description2}</p>
                    </div>

                    <div className='callbreakbg-container'>
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