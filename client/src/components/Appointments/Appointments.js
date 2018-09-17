import React, { Component } from "react";
import Navbar from "../Navbar"
import SideDrawer from "../SideDrawer";
import Backdrop from "../Backdrop";
import AppointmentForm from "../AppointmentForm";
// import DatePicker from "react-datepicker";
import Footer from "../Footer";
import "./Appointments.css";
// import 'react-datepicker/dist/react-datepicker.css';

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

    formSubmitHandler = (event) => {
        event.preventDefault();
        console.log("Form submitted");
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
                    <AppointmentForm />
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