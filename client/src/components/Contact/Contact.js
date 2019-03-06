import React, { Component } from "react";
import Navbar from "../Navbar"
import SideDrawer from "../SideDrawer";
import Backdrop from "../Backdrop";
import ContactForm from "../ContactForm";
import Footer from "../Footer";
import "./Contact.css";

class Contact extends Component {

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

                    <h1 className="text-center"><b><i>Contact Information</i></b></h1>
                    <div className="card contact-card text-center">
                        <div className="contact-card-content">
                            <h2><b>Phone number:</b></h2>
                            <p>
                                (619) 371-8571
                            </p>
                            <hr />
                            <h2><b>Email:</b></h2>
                            <p>
                                danielsbarbershopSY@gmail.com
                            </p>
                            <hr />
                            <h2><i className="fab fa-instagram" />&nbsp;<b>Instagram:</b></h2>
                            <p>
                                <a href="https://www.instagram.com/danielsbarbershop_/" rel="noopener noreferrer" target="_blank">
                                    https://www.instagram.com/danielsbarbershop_/
                                </a>
                            </p>
                            <hr />
                            <h2><i className="fab fa-yelp" />&nbsp;<b>Yelp:</b></h2>
                            <p>
                                <a href="https://www.yelp.com/biz/daniels-barbershop-san-diego" rel="noopener noreferrer" target="_blank">
                                    https://www.yelp.com/biz/daniels-barbershop-san-diego
                                </a>
                            </p>
                        </div>
                    </div>
                    <br />
                    <hr style={{ width: "50%"}} />
                    <br />

                    <h4 className="text-center"><b><i>Get in touch with us!</i></b></h4>
                    <ContactForm />

                    <div className="text-center">
                        <p><b>Site under construction.</b></p>
                    </div>

                </main>
                <Footer />
            </div>
        );
    };

};

export default Contact;