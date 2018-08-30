import React, { Component } from "react";
import Navbar from "../Navbar"
import "./HomePage.css";

class HomePage extends Component {
    render = () => {
        return (
            <div>
                <div className="og-logo">
                    <img src="/assets/images/logo_og.jpeg" alt="original-logo" />
                </div>
                <Navbar />
            </div>
        );
    };
};

export default HomePage;