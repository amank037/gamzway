import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './RequestModal.css'

const RequestModal = ({ isOpen, onClose }) => {
    const [contactMethod, setContactMethod] = useState('phone')
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        product: '',
        email: '',
        phone: ''
    })

    const products = [
        "Rummy",
        "Poker",
        "Ludo",
        "Live Casino & Slots",
        "Aviator & Crash",
        "Color Prediction",
        "Multi Game Platform",
        "Custom Game Development",
        "Sports Book"
    ]

    if (!isOpen) return null

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>×</button>
                <div className="modal-header">
                    <h2><span>Want</span> to discuss your idea?</h2>
                    <p>We are too! fill out the form below and we'll contact you very shortly.</p>
                </div>

                <form className="modal-form">
                    <div className="name-row">
                        <input 
                            type="text" 
                            placeholder="First name" 
                            value={formData.firstName}
                            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        />
                        <input 
                            type="text" 
                            placeholder="Last name"
                            value={formData.lastName}
                            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        />
                    </div>

                    <select 
                        value={formData.product}
                        onChange={(e) => setFormData({...formData, product: e.target.value})}
                    >
                        <option value="">Choose Product</option>
                        {products.map((product, index) => (
                            <option key={index} value={product}>{product}</option>
                        ))}
                    </select>

                    <input 
                        type="email" 
                        placeholder="Your email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />

                    <div className="contact-methods">
                        <button 
                            type="button" 
                            className={contactMethod === 'phone' ? 'active' : ''}
                            onClick={() => setContactMethod('phone')}
                        >
                            <i className="fas fa-phone"></i> Phone
                        </button>
                        <button 
                            type="button"
                            className={contactMethod === 'telegram' ? 'active' : ''}
                            onClick={() => setContactMethod('telegram')}
                        >
                            <i className="fab fa-telegram"></i> Telegram
                        </button>
                        <button 
                            type="button"
                            className={contactMethod === 'skype' ? 'active' : ''}
                            onClick={() => setContactMethod('skype')}
                        >
                            <i className="fab fa-skype"></i> Skype
                        </button>
                        <button 
                            type="button"
                            className={contactMethod === 'whatsapp' ? 'active' : ''}
                            onClick={() => setContactMethod('whatsapp')}
                        >
                            <i className="fab fa-whatsapp"></i> Whatsapp
                        </button>
                    </div>

                    {(contactMethod === 'phone' || contactMethod === 'whatsapp') ? (
                        <PhoneInput
                            country={'in'}
                            value={formData.phone}
                            onChange={phone => setFormData({...formData, phone})}
                            containerClass="phone-input-container"
                            inputClass="phone-input"
                        />
                    ) : (
                        <input 
                            type="text" 
                            placeholder={`Enter your ${contactMethod} ID`}
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                    )}

                    <button type="submit" className="submit-button">FREE CONSULTATION</button>
                </form>
            </div>
        </div>
    )
}

export default RequestModal