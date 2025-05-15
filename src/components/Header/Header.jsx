import React, { useState, useEffect } from 'react'
import './Header.css'
import logo from '../../assets/1-03.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className={`header-div ${isSticky ? 'sticky' : ''}`}>
        <div className='header-container'>
            <img src={logo} alt="" />
            <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                <ul>
                    <li>Skill Games</li>
                    <li>Casino Games</li>
                    <li>Game APIs</li>
                    <li>White Label Platform</li>
                    <li>Contacts</li>
                </ul>
                <a href="">Submit a request</a>
            </div>

            <div className="hamburger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
  )
}

export default Header