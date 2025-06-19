import './SkillLanding.css'

function SkillLanding() {
    return (
        <div className='landing-skill-api-overlay animate-on-scroll' data-direction="right" data-delay="0.5s">
            <div className='skill-api-chip-container'>
                <img src="/skillAPI/bg-over/bg-over.png" alt="" className='image-stack'/>
            </div>
            <div className='skill-api-card-container'>
                <img src="/skillAPI/bg-over/cards.png" alt="" className='image-stack'/>
            </div>
            <div className='skill-api-dice-container skill-api-dice1'>
                <img src="/skillAPI/bg-over/dice1.png" alt="" className='image-stack'/>
            </div>
            <div className='skill-api-dice-container skill-api-dice2'>
                <img src="/skillAPI/bg-over/dice2.png" alt="" className='image-stack'/>
            </div>
            </div>
    )
}

export default SkillLanding