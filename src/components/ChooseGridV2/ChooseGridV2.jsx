import './ChooseGrid.css'
import FeaturesHeader from '../../components/FeaturesSection/FeaturesHeader/FeaturesHeader'


const chooseTitle = [
    {
        title: "Why Choose Gamzway as Your Game Development Company?"
    }
]

function ChooseGrid() {
  return (
    <div className='choose-section'>
            <FeaturesHeader featuresText={chooseTitle}/>
            <div className='choosev2-container'>
                <div className='choosev2-grid'>
                    <div className='choose-card'>
                        <div className='card-icon'>
                            <i className="fas fa-gauge-high"></i>
                        </div>
                        <h3>Rapid Launch</h3>

                    </div>
                    <div className='choose-card'>
                        <div className='card-icon'>
                            <i className="fas fa-microchip"></i>
                        </div>
                        <h3>Completely Manage Solutions</h3>

                    </div>
                    <div className='choose-card'>
                        <div className='card-icon'>
                            <i className="fa-solid fa-shield"></i>
                        </div>
                        <h3>End to End Security</h3>


                    </div>
                    <div className='choose-card'>
                        <div className='card-icon'>
                            <i className="fas fa-code"></i>
                        </div>
                        <h3>Cross Platform Compatibility</h3>
        
                    </div>
                    <div className='choose-card'>
                        <div className='card-icon'>
                            <i className="fas fa-shopping-cart"></i>
                        </div>
                        <h3>Bug Free Product</h3>
                       
                    </div>
                    <div className='choose-card'>
                        <div className='card-icon'>
                            <i className="fas fa-headset"></i>
                        </div>
                        <h3>24x7 Support</h3>

                    </div>
                </div>
            </div>
      </div>
  )
}

export default ChooseGrid