import React, { Component } from "react";
import "./Navbar.css"

class Navbar extends Component {

    render = (props) => {
        return (
            <header className="nav-component">
                <nav className="nav-navigation">
                    <div></div>
                    <div className="nav-logo"><a href="/"></a>HOME</div>
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
};

export default Navbar;