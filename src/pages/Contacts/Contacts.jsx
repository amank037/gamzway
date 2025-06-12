import "./Contacts.css"
import FeaturesHeader from "../../components/FeaturesSection/FeaturesHeader/FeaturesHeader"

const supportTitle = [
    {
        title: "Bring Your Vision to Life – Contact Us",
        description: "Still have doubts. Here to assist are our professionals."
    }
]

function Contacts() {
  return (

        <div className='contacts-section'>
            <FeaturesHeader featuresText={supportTitle}/>
            <div className='contacts-container'>
                <div className='contacts-cards'>
                    <a className='contacts-card' href="">
                        <div className='contacts-icon'>
                            <i className="fas fa-headset"></i>
                        </div>
                        <h3>24/7 Live Support</h3>
                        <p>Available round the clock to assist you</p>
                    </a>
                    
                    <a className='contacts-card' href="">
                        <div className='contacts-icon'>
                            <i className="fas fa-envelope"></i>
                        </div>
                        <h3>Email Support</h3>
                        <p>Reach us at support@gamzway.com</p>
                    </a>
                    
                    <a className='contacts-card' href="">
                        <div className='contacts-icon'>
                            <i className="fas fa-comments"></i>
                        </div>
                        <h3>Live Chat</h3>
                        <p>Talk to us right now on our website</p>
                    </a>
                </div>
                
                <p className='contacts-footer'>From technical enquiries to revenue models, our consultative approach guarantees you never be left wondering. We explain everything.</p>
            </div>
        </div>
  )
}

export default Contacts