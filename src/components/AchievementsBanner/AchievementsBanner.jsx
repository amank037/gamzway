import './AchievementsBanner.css'
import { useEffect, useRef } from 'react'

const AchievementsBanner = () => {
  const countersRef = useRef([])

  useEffect(() => {
    const options = {
      threshold: 0.5
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target
          const target = parseInt(counter.getAttribute('data-target'))
          let count = 0

          const updateCount = () => {
            const increment = target / (2000 / 16)
            count += increment
            
            if (count < target) {
              counter.textContent = Math.ceil(count) + (counter.getAttribute('data-suffix') || '')
              requestAnimationFrame(updateCount)
            } else {
              counter.textContent = target + (counter.getAttribute('data-suffix') || '')
            }
          }

          updateCount()
          observer.unobserve(counter)
        }
      })
    }, options)

    countersRef.current.forEach(counter => {
      if (counter) observer.observe(counter)
    })

    return () => observer.disconnect()
  }, [])

  const achievements = [
    { number: 6000, suffix: '+', title: 'GAMES AVAILABLE', image: 'https://beta.mobzway.com/assets/images/game-launched1.png' },
    { number: 1250, suffix: '+', title: 'SATISFIED BRANDS', image: 'https://beta.mobzway.com/assets/images/players1.png' },

    { number: 100, suffix: '+', title: 'GAME PROVIDERS', image: 'https://beta.mobzway.com/assets/images/rummy-game-development/client-retension1.webp' },
    { number: 6, suffix: '+', title: 'LANGUAGE & CURRENCY', image: 'https://beta.mobzway.com/assets/images/satisfied-customers1.png' },
  ]

  return (
    <div className='ach-banner'>
      <div className='ach-container'>
        {achievements.map((achievement, index) => (
          <div className='ach-card' key={index}>
            <div className='ach-icon'>
              <img className='ach-img' src={achievement.image} alt={achievement.title} />
            </div>
            <div className='ach-text'>
              <h1 
                ref={el => countersRef.current[index] = el}
                data-target={achievement.number}
                data-suffix={achievement.suffix}
              >
                0
              </h1>
              <h3>{achievement.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AchievementsBanner