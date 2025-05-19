import './FeaturesGrid.css'

function FeaturesGrid(features) {
  return (
    <div className="features-grid">
      {features.map((item, index) => (
        <div key={index} className="features-grid-container">
          <img src={item.image} alt={item.title} className="features-grid-img" />
          <h2 className="features-grid-title">{item.title}</h2>
          <p className="features-grid-desc">{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default FeaturesGrid