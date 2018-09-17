import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "./AppointmentForm.css";
import 'react-datepicker/dist/react-datepicker.css';


class AppointmentForm extends Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(event) {
        this.setState({ value: event.target.value });
    };

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    };

    render() {
        return (
            <div className="card appt-form">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName"><b>First name:</b></label>
                        <input type="text" className="form-control" id="firstName" placeholder="Enter your first name" value={this.state.value} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName"><b>Last name:</b></label>
                        <input type="text" className="form-control" id="lastName" placeholder="Enter your last name" value={this.state.value} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber"><b>Phone number:</b></label>
                        <input type="text" className="form-control" id="firstName" placeholder="1234567890"></input>
                        <small>
                            <i>Enter 10 digit phone number (numbers only)</i>
                        </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="userEmail"><b>Email:</b></label>
                        <input type="emai" className="form-control" id="userEmail" placeholder="user@email.com"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="serviceDescription"><b>Haircut / service description:</b></label>
                        <textarea className="form-control" id="serviceDescription" rows="3" value={this.state.value} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <b>Choose a date: </b>
                        <DatePicker
                            className="date-picker"
                            selected={this.state.startDate}
                        />
                    </div>
                    <div className="form-group text-center">
                        <button type="submit" className="btn btn-default">Submit</button>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    };

};

export default AppointmentForm;