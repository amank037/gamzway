import './CustomGrid.css'
import FeaturesHeader from '../FeaturesSection/FeaturesHeader/FeaturesHeader'

function CustomGrid({customgridItems, customTitle}) {
  return (
    <div className='custom-grid-section'>
        <FeaturesHeader featuresText={customTitle} />
        <div className='custom-grid'>
            {customgridItems.map((item,index) => (
                <div key={index} className='custom-grid-item'>
                    <img src={item.image} alt={item.alt} />
                    <h3>{item.title}</h3>
                </div>
            ))}
        </div>
    </div>
  )
}

export default CustomGrid