import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "./AppointmentForm.css";
import 'react-datepicker/dist/react-datepicker.css';


class AppointmentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: ''
            // lastName: '',
            // phoneNumber: '',
            // userEmail: '',
            // description: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(event) {
        this.setState({
            firstName: event.target.firstName
            // lastName: event.target.lastName,
            // phoneNumber: event.target.phoneNumber,
            // userEmail: event.target.userEmail,
            // description: event.target.description
        });
    };

    handleSubmit(event) {
        alert('First name:' + this.state.firstName);
        event.preventDefault();
    };

    render() {
        return (
            <div className="card appt-form">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName"><b>First name:</b></label>
                        <input type="text" className="form-control" id="firstName" placeholder="Enter your first name" value={this.state.firstName} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName"><b>Last name:</b></label>
                        <input type="text" className="form-control" id="lastName" placeholder="Enter your last name" value={this.state.lastName} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber"><b>Phone number:</b></label>
                        <input type="text" className="form-control" id="firstName" placeholder="1234567890" value={this.state.phoneNumber} onChange={this.handleChange} />
                        <small>
                            <i>Enter 10 digit phone number (numbers only)</i>
                        </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="userEmail"><b>Email:</b></label>
                        <input type="emai" className="form-control" id="userEmail" placeholder="user@email.com" value={this.state.userEmail} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="serviceDescription"><b>Haircut / service description:</b></label>
                        <textarea className="form-control" id="serviceDescription" rows="3" value={this.state.description} onChange={this.handleChange} />
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