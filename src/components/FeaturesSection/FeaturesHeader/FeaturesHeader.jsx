import './FeaturesHeader.css'

function FeaturesHeader({featuresText, titleStyle}) {
  const wrapWordsInSpans = (text, disableAnimation) => {
    return text.split(' ').map((word, index) => (
      <span key={index} className={disableAnimation ? 'no-animation' : ''}>{word} </span>
    ))
  }

  const disableAnimation = titleStyle && titleStyle.color;

  return (
    <div className="features-text">
        {featuresText.map((item, index) => (
          <div key={index} className="features-text-container">
              <h2 className='features-title' style={titleStyle}>{wrapWordsInSpans(item.title, disableAnimation)}</h2>
              <p className='features-desc'>{item.description}</p>
          </div>
        ))}
    </div>
  )
}

export default FeaturesHeader