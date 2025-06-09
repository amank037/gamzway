import './AboutSection.css'

function AboutSection({aboutItems}) {
  return (
    <div className='about-section'>
        {aboutItems.map((aboutItems, index) => (
            <div className='about-section-container' key={index}>

                <div className='about-section-desc'>
                    <p>{aboutItems.description}</p>
                    <br/>
                    <p>{aboutItems.description3}</p>
                </div>

                <div className='about-card'>
                    <div className='about-card-img-section'>
                        <img src={aboutItems.image} alt="" className='about-card-logo'/>
                        <img src="https://spribe.co/pf.6ace4e8705f279ee.svg" alt="" className='about-card-fair'/>
                    </div>
                    <div className='about-card-info'>
                        <div className='about-card-info-item'>
                            <p>Game Type</p>
                            <h3>Mini Game</h3>
                        </div>
                        <div className='about-card-info-item'>
                            <p>Return To Player (RTP)</p>
                            <h3>97%</h3>
                        </div>
                        <div className='about-card-info-item'>
                            <p>Devices</p>
                            <h3>Desktop, Tablet, Mobile</h3>
                        </div>
                    </div>
                </div>

            </div>
        ))}
    </div>
  )
}

export default AboutSection