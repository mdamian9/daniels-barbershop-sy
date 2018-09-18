import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "./AppointmentForm.css";
import 'react-datepicker/dist/react-datepicker.css';


class AppointmentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            userEmail: '',
            serviceDescription: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit(event) {
        console.log(`First name: ${this.state.firstName}
        Last name: ${this.state.lastName}
        Phone number: ${this.state.phoneNumber}
        User email: ${this.state.userEmail}
        Description: ${this.state.serviceDescription}`.replace(/^(\s{2})+/gm, ''));
        event.preventDefault();
    };

    render() {
        return (
            <div className="card appt-form">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="value"><b>First name:</b></label>
                        <input type="text" className="form-control" name="firstName" placeholder="Enter your first name" value={this.state.value} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName"><b>Last name:</b></label>
                        <input type="text" className="form-control" name="lastName" placeholder="Enter your last name" value={this.state.value} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber"><b>Phone number:</b></label>
                        <input type="text" className="form-control" name="phoneNumber" placeholder="1234567890" value={this.state.value} onChange={this.handleChange} />
                        <small>
                            <i>Enter 10 digit phone number (numbers only)</i>
                        </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="userEmail"><b>Email:</b></label>
                        <input type="emai" className="form-control" name="userEmail" placeholder="user@email.com" value={this.state.value} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="serviceDescription"><b>Haircut / service description:</b></label>
                        <textarea className="form-control" name="serviceDescription" rows="3" value={this.state.value} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <b>Choose a date: </b>
                        <DatePicker
                            className="date-picker"
                            selected={this.state.startDate}
                        />
                    </div>
                    <div className="form-group text-center">
                        <input type="submit" className="btn" value="Submit" />
                    </div>
                </form>
            </div>
        );
    };

};

export default AppointmentForm;

// To do:
// 1. Fix date picker / calendar
// 2. Send form data to database
// 3. Twilio API: send text message to owner when appointment is made
// 4. Email sender API: send email to owner when appointment is made