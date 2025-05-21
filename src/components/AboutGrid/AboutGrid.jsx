import './AboutGrid.css'

function AboutGrid({aboutGrid}) {
  return (
        <div className='about-grid'>
          {aboutGrid.map((item, index) => (
            <div className='about-grid-item' key={index}>
              <div className='about-grid-image-title-wrap'>
                <img src={item.image} alt="" />
                <h3>{item.title}</h3>
              </div>
              <p>{item.description}</p>
            </div>
            ))}
        </div>
  )
}

export default AboutGrid