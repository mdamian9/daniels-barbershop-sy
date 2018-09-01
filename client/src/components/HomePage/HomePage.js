import React from "react";
import Navbar from "../Navbar"
import "./HomePage.css";

const homePage = (props) => {
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

export default homePage;