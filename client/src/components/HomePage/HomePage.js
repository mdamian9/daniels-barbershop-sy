import React, { Component } from "react";
import Navbar from "../Navbar"
import SideDrawer from "../SideDrawer";
import Backdrop from "../Backdrop";
import "./HomePage.css";

class HomePage extends Component {

    state = {
        sideDrawerOpen: false
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen };
        });
    };

    render() {

        let sideDrawer, backdrop;

        if (this.state.sideDrawerOpen) {
            sideDrawer = <SideDrawer />;
            backdrop = <Backdrop />;
        };

        return (
            <div style={{ height: "100%" }}>
                <div className="og-logo">
                    <img id="og-logo" src="/assets/images/logo_og.jpg" alt="original-logo" />
                </div>
                <Navbar
                    drawerClickHandler={this.drawerToggleClickHandler}
                />
                {sideDrawer}
                {backdrop}
                <main>
                    <p>This is the page content!</p>
                </main>
            </div>
        );
    };

};

export default HomePage;