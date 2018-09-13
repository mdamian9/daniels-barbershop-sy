import React from "react";
import "./Navbar.css"
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const navbar = (props) => {
    return (
        <header className="nav-component">
            <nav className="nav-navigation">
                <div className="navbar-toggle-button">
                    <DrawerToggleButton
                        click={props.drawerClickHandler}
                    />
                </div>
                <div id="spacer-one" className="nav-spacer" />
                <div className="nav-logo">
                    <a href="/"><i class="fas fa-angle-double-right"></i>&nbsp;HOME</a>
                </div>
                <div id="spacer-two" className="nav-spacer" />
                <div className="nav-links">
                    <ul>
                        <li><a href="/gallery">Gallery <i className="fas fa-camera"></i></a></li>
                        <li><a href="/appointments">Appointments <i className="fas fa-clipboard-list"></i></a></li>
                        <li>
                            <a href="https://www.instagram.com/danielsbarbershop_/" target="_blank">
                                Instagram <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.yelp.com/biz/daniels-barbershop-san-diego" target="_blank">
                                Yelp <i className="fab fa-yelp"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default navbar;