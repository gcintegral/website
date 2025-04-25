import React from 'react';
import './Footer.css';
import { FaInstagram, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer_container">
      <div className="footer_content">
        {/* Sección de contacto */}
        <div className="footer_section">
          <h3>Contacto</h3>
          <p>gcintegral2012@gmail.com</p>
          <p>gerencia@gcintegral.com</p>
          <p>administracion@gcintegral.com</p>
          <p>www.gcintegral.com</p>
          <p>(606) 3300001</p>
          <p>3504222689</p>
        </div>

        {/* Sección de dirección */}
        <div className="footer_section">
          <p>Carrera 16 #9 - 17</p>
          <p>Centro Comercial La Popa</p>
          <p>Local 13</p>
        </div>

        {/* Sección de redes sociales */}
        <div className="footer_section social_icons">
        <a href="https://www.instagram.com/TU_USUARIO" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/company/gc-integral-group-s-a-s/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://www.facebook.com/TU_USUARIO" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebook />
        </a>
        <a href="https://wa.me/573504222689" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp />
        </a>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
