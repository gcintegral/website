import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="header_container">
      <div className="header_content">
        {/* Logo */}
        <Link to="/" className="header_logo">
          <img src="https://res.cloudinary.com/dkcdgfm0b/image/upload/v1745420874/logo_cbolh3.png" alt="Logo" className="logo" />
        </Link>

        {/* Botón hamburguesa (solo en móvil) */}
        <button className="menu_toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {/* Menú de navegación */}
        <div className={`menu ${menuOpen ? 'open' : ''}`}>
          <ul className="menu_list">
            <li><Link to="/Proyectos" className="menu_item">Proyectos</Link></li>
            <li><Link to="/Servicios" className="menu_item">Servicios</Link></li>
            <li><Link to="/Clientes" className="menu_item">Clientes</Link></li>
            <li><Link to="/QuienesSomos" className="menu_item">Quiénes somos</Link></li>
            <li><Link to="/Contacto" className="menu_item">Contacto</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
