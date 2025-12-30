import React from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import '../styles/floating-buttons.css';

const FloatingButtons = () => {
  // Phone number from contact page
  const phoneNumber = '+918140243880';
  const whatsappNumber = '918140243880';
  
  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <div className="floating-buttons">
      <button 
        className="floating-button whatsapp" 
        onClick={handleWhatsAppClick}
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="icon" />
      </button>
      <button 
        className="floating-button call" 
        onClick={handleCallClick}
        aria-label="Make a phone call"
      >
        <FaPhone className="icon" />
      </button>
    </div>
  );
};

export default FloatingButtons;
