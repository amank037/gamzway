import React from 'react'
import './Footer.css'
import logo from '../../assets/1-03.png'

const Footer = () => {
  return (
    <div className='footer-div'>
        <div className='footer-container'>
            <div className='footer-left'>
                <img className='footer-left-logo' src={logo} alt="" />
                
                <div className='footer-left-copyright'>
                    <p>© 2001-2025 <span>Evenbet Gaming Limited</span></p>
                    <p>All rights reserved</p>
                </div>

                <div className='footer-left-privacy'>
                    <a href=""><img src="https://enterra-poker.com/wp-content/themes/enterra-poker-2024/img/footer/mail.png" alt="" /></a>
                    <a href=""><img src="https://enterra-poker.com/wp-content/themes/enterra-poker-2024/img/footer/Skype.png" alt="" /></a>
                    <p>Privacy Policy</p>
                </div>
            </div>

            <div className='footer-middle'>
                <ul className='footer-middle-left'>
                    <li>Products</li>
                    <li>Buy</li>
                    <li>Screenshots</li>
                    <li>Customers</li>
                    <li>News</li>
                </ul>

                <ul className='footer-middle-right'>
                    <li>FAQ</li>
                    <li>Contacts</li>
                    <li>Partnership</li>
                    <li>About</li>
                </ul>
            </div>

            
        </div>
    </div>
  )
}

export default Footer