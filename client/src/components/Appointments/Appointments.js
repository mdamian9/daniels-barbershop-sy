import React, { Component } from "react";
import Navbar from "../Navbar"
import SideDrawer from "../SideDrawer";
import Backdrop from "../Backdrop";
import Footer from "../Footer";
import "./Appointments.css";

class Appointments extends Component {

    state = {
        sideDrawerOpen: false
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen };
        });
    };

    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false });
    };

    render() {

        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />;
        };

        return (
            <div style={{ height: "100%" }}>
                <div className="og-logo">
                    <img id="og-logo" src="/assets/images/logo_og.jpg" alt="original-logo" />
                </div>
                <Navbar
                    drawerClickHandler={this.drawerToggleClickHandler}
                />
                <SideDrawer
                    show={this.state.sideDrawerOpen}
                />
                {backdrop}
                <main className="text-center">
                    <h1><i>Gallery</i></h1>
                    <p><b>Site under construction.</b></p>
                </main>
                <Footer />
            </div>
        );
    };

};

export default Appointments;