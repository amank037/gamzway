// import FeaturesHeader from "../FeaturesSection/FeaturesHeader/FeaturesHeader"
// import "./PlatformSection.css"
// import { useEffect, useRef } from 'react'

// function PlatformSection({ platformItems }) {
//   const gridRef = useRef(null)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('animate-in')
//           }
//         })
//       },
//       { threshold: 0.2 }
//     )

//     const gridItems = gridRef.current?.querySelectorAll('.platform-grid-item')
//     gridItems?.forEach((item) => observer.observe(item))

//     return () => observer.disconnect()
//   }, [])

//   return (
//     <div className="platform-section">
//       <div className="platform-background"></div>
//       {platformItems.map((section, sectionIndex) => (
//         <div className="platform-container" key={sectionIndex}>
//           <div className="platform-header">
//             <FeaturesHeader featuresText={section.featuresText} />
//           </div>
//           <p className="platform-desc">{section.description}</p>
//           <div className="platform-grid" ref={gridRef}>
//             {section.platformGrid.map((item, index) => (
//               <div className="platform-grid-item" key={index}>
//                 <div className="platform-item-content">
//                   <div className="image-container">
//                     <img src={item.image} alt={item.title} />
//                     <div className="image-glow"></div>
//                   </div>
//                   <h3>{item.title}</h3>
//                   <p>{item.description}</p>
//                 </div>
//                 <div className="grid-item-border"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default PlatformSection


import './PlatformSection.css'
import FeaturesHeader from '../FeaturesSection/FeaturesHeader/FeaturesHeader'
function PlatformSection() {
    return (
        <div className='platform-section'>
            <FeaturesHeader featuresText={[{title: "WE BUILD GAMES FOR ALL PLATFORMS", description: ""}]}/>
            <div className='platform-section-container'>
                <div className='platform-section-item'>
                    <div className='platform-section-icon'>
                        <i className="fa-brands fa-html5 fa-8x" style={{color: "var(--primary-yellow)"}}></i>
                    </div>
                    <h3>Mobile Browser</h3>
                    <div className='platform-section-line'></div>
                    <p>Our games support all modern mobile browsers. </p>
                </div>
                <div className='platform-section-item'>
                    <div className='platform-section-icon'>
                        <i className="fa-solid fa-mobile-screen-button fa-8x" style={{color: "var(--primary-yellow)"}}></i>
                    </div>
                    <h3>Native Mobile App</h3>
                    <div className='platform-section-line'></div>
                    <p>Build to work with budget devices in low bandwidth environment</p>
                </div>
                <div className='platform-section-item'>
                    <div className='platform-section-icon'>
                        <i className="fa-solid fa-laptop fa-8x" style={{color: "var(--primary-yellow)"}}></i>
                    </div>
                    <h3>PC & Mac Browser</h3>
                    <div className='platform-section-line'></div>
                    <p>We build games for Windows and macOS browsers.</p>
                </div>
            </div>
        </div>
    )
}

export default PlatformSection
