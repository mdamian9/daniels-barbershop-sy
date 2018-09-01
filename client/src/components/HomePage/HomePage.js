import React, { Component } from "react";
import Navbar from "../Navbar"
import "./HomePage.css";

class HomePage extends Component {
    render = () => {
        return (
            <div>
                <div className="og-logo">
                    <img id="og-logo" src="/assets/images/logo_og.jpg" alt="original-logo" />
                </div>
                <Navbar />
                <main>
                    <p>This is the page content!</p>
                </main>
            </div>
        );
    };
};

export default HomePage;