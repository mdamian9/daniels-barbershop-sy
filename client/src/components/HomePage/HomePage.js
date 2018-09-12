import React from "react";
import Navbar from "../Navbar"
import SideDrawer from "../SideDrawer";
import "./HomePage.css";

const homePage = (props) => {
    return (
        <div style={{height: "100%"}}>
            <div className="og-logo">
                <img id="og-logo" src="/assets/images/logo_og.jpg" alt="original-logo" />
            </div>
            <Navbar />
            <SideDrawer />
            <main>
                <p>This is the page content!</p>
            </main>
        </div>
    );
};

export default homePage;