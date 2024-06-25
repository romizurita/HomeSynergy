import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faLock, faCreditCard, faCalendarDays, faBullhorn, faBox} from '@fortawesome/free-solid-svg-icons';
import '../../EstilosGlobales/sidebar.css';
import { NavLink } from 'react-router-dom';

const ResidenteSidebar = ({ children, toggleSidebar }) => {
    const menuItem = [
        {
            path: "/residente/home",
            name: "Home",
            icon: <FontAwesomeIcon icon={faHouse} />
        },
        {
            path: "/residente/encomiendas",
            name: "Encomiendas",
            icon: <FontAwesomeIcon icon={faBox} />
        },
        {
            path: "/residente/acceso",
            name: "Control de Acceso",
            icon: <FontAwesomeIcon icon={faLock} />
        },
        {
            path: "/residente/pagos",
            name: "Pagos",
            icon: <FontAwesomeIcon icon={faCreditCard} />
        },
        {
            path: "/residente/reservas",
            name: "Reservas",
            icon: <FontAwesomeIcon icon={faCalendarDays} />
        },
        {
            path: "/residente/anuncios",
            name: "Anuncios",
            icon: <FontAwesomeIcon icon={faBullhorn} />
        }
        
    ];

    return (
        <div className="container">
            <div className="sidebar">
                <div className="top_section">
                    <img src="/logo.jpg" alt="Logo" />
                </div>
                {menuItem.map((item, index) => (
                    <NavLink
                        to={item.path}
                        key={index}
                        className="link"
                        activeClassName="active"
                        onClick={item.onClick}
                    >
                        <div className="icon">{item.icon}</div>
                        <div className="link_text">{item.name}</div>
                    </NavLink>
                ))}
            </div>
            <main className="main-content">{children}</main>
        </div>
    );
};

export default ResidenteSidebar;