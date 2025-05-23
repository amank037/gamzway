import './LandingSection.css'

function LandingSection({ landingItems }) {
  return (
    <div className='landing-section'>
        <div className='overlay'></div>
        {landingItems.map((item, index) => (
            <div key={index} className='landing-text'>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <p>{item.description2}</p>
                <button className='landing-btn'><span>{item.button}</span></button>
            </div>
        ))}
    </div>
  )
}

export default LandingSection