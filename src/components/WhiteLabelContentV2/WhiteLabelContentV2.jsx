import './WhiteLabelContentV2.css'


function WhiteLabelContentV2({contentGrid}) {
    const wrapWordsInSpans = (text, disableAnimation) => {
        return text.split(' ').map((word, index) => (
            <span key={index} className={disableAnimation ? 'no-animation' : ''}>{word} </span>
        ))
    }
    return (
        <div className='whitev2-content'>
            <div className='whitev2-content-grid'>
                {contentGrid.map((item, index) => (
                    <div key={index} className="whitev2-content-grid-item">
                        <div className='whitev2-content-img animate-on-scroll' data-direction={index % 2 === 0 ? "left" : "right"} data-delay="">
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div className='whitev2-content-text'>
                            <h1 className='whitev2-content-title'>{wrapWordsInSpans(item.title, false) }</h1>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhiteLabelContentV2