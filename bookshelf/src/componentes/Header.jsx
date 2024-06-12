import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/Header.css';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <NavLink exact to="/" className="logo-link">
          <img src="https://cdn.discordapp.com/attachments/765658882453536768/1235661508529094656/Bookshelf.png?ex=666a93b5&is=66694235&hm=73d79fd42b6a915d76b96f55ea91a58c0fe7d176ed65b0b2250a6685f9e718ea&" alt="Logo de la pagina" className="logo" />
        </NavLink>
      </div>
      <button className="nav-toggle" onClick={toggleMenu}>
        {showMenu ? 'Cerrar' : 'Menú'}
      </button>
      <nav className={`nav ${showMenu ? 'active' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link" activeClassName="active">Inicio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Authors" className="nav-link" activeClassName="active">Autores populares</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Books" className="nav-link" activeClassName="active">Libros</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Foro" className="nav-link" activeClassName="active">Foro</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
