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
                <main>
                    <header className="text-center">
                        <h1><i>Appointments</i></h1>
                    </header>
                    <div className="card appt-form">
                        <form>
                            <div className="form-group">
                                <label for="firstName"><b>First name:</b></label>
                                <input type="text" className="form-control" id="firstName" placeholder="Enter your first name"></input>
                            </div>
                            <div className="form-group">
                                <label for="lastName"><b>Last name:</b></label>
                                <input type="text" className="form-control" id="lastName" placeholder="Enter your last name"></input>
                            </div>
                            <div className="form-group">
                                <label for="firstName"><b>Phone number:</b></label>
                                <input type="text" className="form-control" id="firstName" placeholder="1234567890"></input>
                                <small>
                                    <i>Enter 10 digit phone number (numbers only)</i>
                                </small>
                            </div>
                            <div className="form-group">
                                <label for="userEmail"><b>Email:</b></label>
                                <input type="emai" className="form-control" id="userEmail" placeholder="user@email.com"></input>
                            </div>
                            <div className="form-group">
                                <label for="serviceDescription"><b>Haircut / service description:</b></label>
                                <textarea className="form-control" id="serviceDescription" rows="3"></textarea>
                            </div>
                            <div className="form-group text-center">
                                <button type="submit" class="btn btn-default">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="text-center">
                        <p><b>Site under construction.</b></p>
                    </div>
                </main>
                <Footer />
            </div>
        );
    };

};

export default Appointments;