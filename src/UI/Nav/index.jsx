import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from"../../assets/Icons/logo-header.svg";
import './Nav.scss';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [size, setSize] = useState(window.innerWidth);
  const navigate = useNavigate();
  
  //Change the size of the window
  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  //Handle the navigation in products
  const handleNavigation = (slug) => {
    navigate(`/productos/${slug}`);
    setIsMenuOpen(false);
  };

  //Toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  
  return (
    <>
      <header className="header">
        <Link className="logo-container" to="/"><img src={logo} alt="NPS DIESEL" /></Link>

        {
          size > 768 ? 
          (
            <nav className="nav--desktop">
              <ul className="nav-list">
                <li><NavLink className={({ isActive }) => `link ${isActive ? "active" : ""}`} to="/" >INICIO</NavLink></li>
                <li>
                  <NavLink 
                  className={({ isActive }) => `link ${isActive ? "active" : ""}`} 
                  onMouseEnter={() => setIsMenuOpen(true)}
                  onMouseLeave={() => setTimeout(() => setIsMenuOpen(false), 100)}
                  to="/Products">
                    PRODUCTOS 
                    <div className="products-icon"></div>

                      <div 
                      className={`submenu-container ${isMenuOpen ? 'open' : ''}`} 
                      onMouseEnter={() => setIsMenuOpen(true)}
                      onMouseLeave={() => setTimeout(() => setIsMenuOpen(false), 50)}>
                        <button onClick={() => handleNavigation("motor")} className="submenu-button">
                          MOTOR
                        </button>
                        <div className="line"></div>
                        <button onClick={() => handleNavigation("caja-transmision")} className="submenu-button">
                          TRANSMISIÓN
                        </button>
                        <div className="line"></div>
                        <button onClick={() => handleNavigation("suspencion")} className="submenu-button">
                          SUSPENSIÓN
                        </button>
                      </div>
                      
                      </NavLink>
                    </li>
                    <li><NavLink className={({ isActive }) => `link ${isActive ? "active" : ""}`} to="/Us">NOSOTROS</NavLink></li>
                  </ul>
                </nav>
          ) 
          : 
          (
            <nav className="nav--mobile">
              <button  className={`hamburger-button ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
              </button>
              
                  <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
                    <li><NavLink onClick={toggleMenu} className={({ isActive }) => `link ${isActive ? "active" : ""}`} to="/" >INICIO</NavLink></li>
                    <div className="line"></div>
                    <li><NavLink onClick={toggleMenu} className={({ isActive }) => `link ${isActive ? "active" : ""}`} to="/Products">PRODUCTOS</NavLink></li>
                    <div className="line sub-line"></div>
                    <li><NavLink onClick={toggleMenu} className={({ isActive }) => `link sub-link ${isActive ? "active" : ""}`} to="/Products/motor">MOTOR</NavLink></li>
                    <div className="line sub-line"></div>
                    <li><NavLink onClick={toggleMenu} className={({ isActive }) => `link sub-link ${isActive ? "active" : ""}`} to="/Products/transmision">TRANSMISIÓN</NavLink></li>
                    <div className="line sub-line"></div>
                    <li><NavLink onClick={toggleMenu} className={({ isActive }) => `link sub-link ${isActive ? "active" : ""}`} to="/Products/suspension">SUSPENSIÓN</NavLink></li>
                    <div className="line"></div>
                    <li><NavLink onClick={toggleMenu} className={({ isActive }) => `link ${isActive ? "active" : ""}`} to="/Us">NOSOTROS</NavLink></li>
                  </ul>
                
            </nav>
          )}
        
      </header>
    </>
  )
}

export {Nav}