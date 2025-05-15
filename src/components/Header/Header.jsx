import React, { useState, useEffect } from 'react'
import './Header.css'
import logo from '../../assets/1-03.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

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

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index)
  }

  const dropdownData = [
    {
      title: "Skill Games",
      items: ["Rummy Game", "Poker Game", "Ludo Game", "Call Break Game", "Tambola Game", "Snake Ladder Game"]
    },
    {
      title: "Casino Games",
      items: ["Live Casino", "Casino Games", "Slots", "Crash Games", "Table Games", "Fishing Games"]
    },
    {
      title: "Game APIs",
      items: ["Skill Games API", "Casino API", "Rummy Game API", "Teen Patti Game API", "Poker Game API", "Ludo Game API", "Andar Bahar API"]
    },
    {
      title: "White Label Platform",
      items: ["White Label Skill Games", "White Label Casino"]
    },
  ]

  return (
    <div className={`header-div ${isSticky ? 'sticky' : ''}`}>
        <div className='header-container'>
            <img src={logo} alt="" />
            <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                <ul className='nav-menu-ul'>
                    {dropdownData.map((dropdown, index) => (
                        <li 
                            className={`dropdown ${activeDropdown === index ? 'active' : ''}`}
                            key={index}
                            onClick={() => toggleDropdown(index)}
                        >
                            <span>{dropdown.title}</span>
                            <ul className='dropdown-menu'>
                                {dropdown.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                    <li className='header-contacts'>Contacts</li>
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