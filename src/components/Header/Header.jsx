import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'
import logo from '../../assets/1-03.webp'
import RequestModal from '../RequestModal/RequestModal'
import Logo from '../Logo/Logo'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)
    const [forceCloseDropdown, setForceCloseDropdown] = useState(false)
    const location = useLocation()
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
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

    useEffect(() =>{
        const handleClickOutside = (e) => {
            if (activeDropdown !== null && !e.target.closest('.dropdown')) {
                setActiveDropdown(null)
                setForceCloseDropdown(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {document.removeEventListener('mousedown', handleClickOutside)}
    }, [activeDropdown])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const toggleDropdown = (index) => {
        if (activeDropdown === index) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(index);
        }
        setForceCloseDropdown(false)
    }

    const dropdownData = [
        {
            title: "Skill Games",
            path: "/skill-games",
            items: [
                { name: "Rummy Game", path: "/skill-games/rummy" },
                { name: "Poker Game", path: "/skill-games/poker" },
                { name: "Ludo Game", path: "/skill-games/ludo" },
                { name: "Call Break Game", path: "/skill-games/call-break" },
                { name: "Tambola Game", path: "/skill-games/tambola" },
                { name: "Snake Ladder Game", path: "/skill-games/snake-ladder" }
            ]
        },
        {
            title: "Casino Games",
            path: "/casino-games",
            items: [
                { name: "Live Casino", path: "/casino-games/live-casino" },
                { name: "Slots", path: "/casino-games/slots" },
                { name: "RNG Games", path: "/casino-games/rng-games" }, 
                { name: "Crash Games", path: "/casino-games/crash-games" },
                { name: "Table Games", path: "/casino-games/table-games" },
                { name: "Fishing Games", path: "/casino-games/fishing-games" }
            ]
        },
        {
            title: "Game APIs",
            path: "/game-apis",
            items: [
                { name: "Skill Games API", path: "/game-apis/skill-games-api" },
                { name: "Casino API", path: "/game-apis/casino" },
                { name: "Rummy Game API", path: "/game-apis/rummy" },
                { name: "Teen Patti Game API", path: "/game-apis/teen-patti" },
                { name: "Poker Game API", path: "/game-apis/poker" },
                { name: "Ludo Game API", path: "/game-apis/ludo" },
                { name: "Andar Bahar API", path: "/game-apis/andar-bahar" }
            ]
        },
        {
            title: "White Label Platform",
            path: "/white-label",
            items: [
                { name: "White Label Skill Games", path: "/white-label/skill-games" },
                { name: "White Label Casino", path: "/white-label/casino" }
            ]
        },
    ]

    const isActive = (path) => {
        if (path === '/') {
            return location.pathname === '/'
        }
        return location.pathname === path || location.pathname.startsWith(path + '/')
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
        setActiveDropdown(null)
    }

    const handleDropdownItemClick = (e) => {
        e.stopPropagation()
        // Force close dropdown on desktop by adding a class
        setForceCloseDropdown(true)
        setActiveDropdown(null)
        
        // Reset after a short delay to allow for navigation
        setTimeout(() => {
            setForceCloseDropdown(false)
        }, 100)
        
        closeMenu()
    }

    const handleDropdownMouseEnter = (index) => {
        if (window.innerWidth > 991) {
            setActiveDropdown(index)
            setForceCloseDropdown(false)
        }
    }

    const handleDropdownMouseLeave = () => {
        // Only on desktop and if not force closing
        if (window.innerWidth > 991 && !forceCloseDropdown) {
            setActiveDropdown(null)
        }
        // If we're in force close mode, reset it
        if (forceCloseDropdown) {
            setActiveDropdown(null)
            setForceCloseDropdown(false)
        }
    }

    return (
        <div className={`header-div ${isSticky ? 'sticky' : ''}`}>
            <div className='header-container'>
                <Link to="/" onClick={closeMenu}>
                    {/* <img src={logo} alt="" /> */}
                    <Logo />
                </Link>
                <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <ul className='nav-menu-ul'>
                        {dropdownData.map((dropdown, index) => (
                            <li 
                                className={`dropdown ${activeDropdown === index ? 'active' : ''} ${isActive(dropdown.path) ? 'current' : ''} ${forceCloseDropdown === true ? 'force-close' : ''}`}
                                key={index}
                                onClick={() => toggleDropdown(index)}
                                onMouseEnter={() => handleDropdownMouseEnter(index)}
                                onMouseLeave={handleDropdownMouseLeave}
                            >
                                <span>{dropdown.title}</span>
                                <ul className='dropdown-menu'>
                                    {dropdown.items.map((item, i) => (
                                        <li 
                                            key={i}
                                            className={isActive(item.path) ? 'active' : ''}
                                        >
                                            <Link 
                                                to={item.path}
                                                onClick={handleDropdownItemClick}
                                            >{item.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                    <Link 
                        to="/contacts" 
                        className='contact-link'
                        // className={isActive('/contacts') ? 'active' : ''}
                        // onClick={(e) => {
                            
                        //     setIsModalOpen(true);
                        //     closeMenu();
                        // }}
                    >
                        Contact Us
                    </Link>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <RequestModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    )
}

export default Header