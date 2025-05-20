import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'
import logo from '../../assets/1-03.png'
import RequestModal from '../RequestModal/RequestModal';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)
    const location = useLocation()
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                { name: "Skill Games API", path: "/game-apis/skill-games" },
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
        return location.pathname.includes(path)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
        setActiveDropdown(null)
    }

    return (
        <div className={`header-div ${isSticky ? 'sticky' : ''}`}>
            <div className='header-container'>
                <Link to="/" onClick={closeMenu}><img src={logo} alt="" /></Link>
                <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <ul className='nav-menu-ul'>
                        {dropdownData.map((dropdown, index) => (
                            <li 
                                className={`dropdown ${activeDropdown === index ? 'active' : ''} ${isActive(dropdown.path) ? 'current' : ''}`}
                                key={index}
                                onClick={() => toggleDropdown(index)}
                            >
                                <span>{dropdown.title}</span>
                                <ul className='dropdown-menu'>
                                    {dropdown.items.map((item, i) => (
                                        <li 
                                            key={i}
                                            className={isActive(item.path) ? 'active' : ''}
                                        >
                                            <Link to={item.path} onClick={closeMenu}>{item.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                        <li className={`header-contacts ${isActive('/contacts') ? 'active' : ''}`}>
                            <Link to="/contacts" onClick={closeMenu}>Contacts</Link>
                        </li>
                    </ul>
                    <Link 
                        to="#" 
                        className={isActive('/request') ? 'active' : ''}
                        onClick={(e) => {
                            e.preventDefault();
                            setIsModalOpen(true);
                            closeMenu();
                        }}
                    >
                        Submit a request
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