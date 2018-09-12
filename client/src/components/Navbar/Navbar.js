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
                <div className="nav-logo"><a href="/">HOME</a></div>
                <div className="nav-spacer" />
                <div className="nav-links">
                    <ul>
                        <li><a href="/">Link 1</a></li>
                        <li><a href="/">Link 2</a></li>
                        <li><a href="/">Link 3</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default navbar;