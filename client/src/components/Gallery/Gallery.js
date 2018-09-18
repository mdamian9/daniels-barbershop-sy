import React, { Component } from "react";
import Navbar from "../Navbar"
import SideDrawer from "../SideDrawer";
import Backdrop from "../Backdrop";
import Footer from "../Footer";
import "./Gallery.css";

class Gallery extends Component {

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
                <main>

                    <h1 className="text-center"><b><i>Gallery</i></b></h1>

                    <div className="text-center">
                        <p><b>Site under construction.</b></p>
                    </div>

                </main>
                <Footer />
            </div>
        );
    };

};

export default Gallery;