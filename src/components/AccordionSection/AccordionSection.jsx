import{ useState } from 'react'
import './AccordionSection.css'

const AccordionSection = ({ data, className = '' }) => {
  const [activeAccordion, setActiveAccordion] = useState(null)

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  return (
    <div className={`accordion ${className}`}>
      {data.map((item, index) => (
        <div className="accordion-item" key={index}>
          <div 
            className="accordion-header" 
            onClick={() => toggleAccordion(index)}
          >
            <h2>{item.title}</h2>
            <i className={`fas fa-plus ${activeAccordion === index ? 'active' : ''}`}></i>
          </div>
          <div className={`accordion-content ${activeAccordion === index ? 'active' : ''}`}>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AccordionSection