import React from "react";
import "./Navbar.css"
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const navbar = (props) => {
    return (
        <header className="nav-component">
            <nav className="nav-navigation">
                <div className="nav-logo">
                    <a href="/home">
                        <i className="fas fa-angle-double-right"></i>
                        &nbsp;HOME
                    </a>
                </div>
                <div className="nav-spacer" />
                <div className="nav-links">
                    <ul>
                        <li><a href="/gallery"><i className="fas fa-camera"></i>&nbsp;Gallery</a></li>
                        <li><a href="/appointments"><i className="fas fa-clipboard-list"></i>&nbsp;Appointments</a></li>
                        <li><a href="/location"><i className="fas fa-map-marker-alt"></i>&nbsp;Location</a></li>
                        <li><a href="/contact"><i className="fas fa-envelope-square"></i>&nbsp;Contact</a></li>
                        <li>
                            <a href="https://www.instagram.com/danielsbarbershop_/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>&nbsp;Instagram
                            </a>
                        </li>
                        <li>
                            <a href="https://www.yelp.com/biz/daniels-barbershop-san-diego" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-yelp"></i>&nbsp;Yelp
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-toggle-button">
                    <DrawerToggleButton
                        click={props.drawerClickHandler}
                    />
                </div>
            </nav>
        </header>
    );
};

export default navbar;