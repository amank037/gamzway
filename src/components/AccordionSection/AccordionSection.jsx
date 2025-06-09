import { useState, useRef, useEffect } from 'react'
import './AccordionSection.css'

const AccordionSection = ({ data, className = '' }) => {
  const [activeAccordion, setActiveAccordion] = useState(null)
  const contentRefs = useRef([])

  useEffect(() => {
    contentRefs.current = contentRefs.current.slice(0, data.length)
  }, [data])

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  return (
    <div className={`accordion ${className}`}>
      {data.map((item, index) => (
        <div className={`accordion-item ${activeAccordion === index ? 'active' : ''}`} key={index}>
          <div className="accordion-header" onClick={() => toggleAccordion(index)}>
            <div className="header-content">
              <div className="icon-wrapper">
                <i className="fas fa-diamond"></i>
              </div>
              <h2>{item.title}</h2>
            </div>
            <div className="toggle-icon">
              <i className={`fas fa-plus ${activeAccordion === index ? 'active' : ''}`}></i>
            </div>
          </div>
          <div 
            className={`accordion-content ${activeAccordion === index ? 'active' : ''}`}
            ref={el => contentRefs.current[index] = el}
            style={
              activeAccordion === index 
                ? { maxHeight: contentRefs.current[index]?.scrollHeight + 'px' } 
                : { maxHeight: '0px' }
            }
          >
            <div className="content-wrapper">
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AccordionSection