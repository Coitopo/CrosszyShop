import React from "react";
import { Link } from "react-router-dom";

const links = [
    {
        name: "Inicio",
        href: "/Home"
    },
    {
        name: "Productos",
        href: "/Products"
    },
    {
        name: "Quienes Somos",
        href: "/Who"
    },

];

const linksi = [
    {
        name: "🛒",
        href: "/Cart"
    },
    {
        name: "👤",
        href: "/User"
    },
];

const NavBar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <h1 className="logo">Crosszy</h1>
                    <div className="links-container">
                    {linksi.map((link, index) => (
                        <Link to={link.href} key={index}>
                            <button className="nav-button">{link.name}</button>
                        </Link>
                    ))}
                </div>
                </div>
                <div className="links-container">
                    {links.map((link, index) => (
                        <Link to={link.href} key={index}>
                            <button className="nav-button">{link.name}</button>
                        </Link>
                    ))}
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
