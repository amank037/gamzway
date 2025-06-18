import './FeaturesHeader.css'
import { useScrollAnimations } from '../../../Hooks/useScrollAnimations'

function FeaturesHeader({featuresText, titleStyle}) {
  useScrollAnimations()
  const wrapWordsInSpans = (text, disableAnimation) => {
    return text.split(' ').map((word, index) => (
      <span key={index} className={disableAnimation ? 'no-animation' : ''}>{word} </span>
    ))
  }

  return (
    <div className="features-text">
        {featuresText.map((item, index) => (
          <div key={index} className="features-text-container">
              <h2 className='features-title animate-on-scroll' data-direction="up" style={titleStyle}>{wrapWordsInSpans(item.title, false) }</h2>
              <p className='features-desc animate-on-scroll' data-direction="up">{item.description}</p>
          </div>
        ))}
    </div>
  )
}

export default FeaturesHeader