import React from 'react'
import FeaturesGrid from './FeaturesGrid/FeaturesGrid'
import FeaturesHeader from './FeaturesHeader/FeaturesHeader'
import './FeaturesSection.css'


function FeaturesSection({ featuresText, features }) {
  return (
    <div>
      <FeaturesHeader featuresText={featuresText} />
      <FeaturesGrid features={features} />
    </div>
  )
}

export default FeaturesSection