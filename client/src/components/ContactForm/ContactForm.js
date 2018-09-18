import React, { Component } from "react";
import "./ContactForm.css";

class ContactForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            userEmail: '',
            message: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    // function that handles form submission event: will send data to database with new contact / message
    handleSubmit(event) {
        console.log(`First name: ${this.state.firstName}
        Last name: ${this.state.lastName}
        User email: ${this.state.userEmail}
        Message: ${this.state.message}`.replace(/^(\s{2})+/gm, ''));
        event.preventDefault();
    };

    render() {
        return (
            <div className="card contact-form">
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
                        <label htmlFor="userEmail"><b>Email:</b></label>
                        <input type="emai" className="form-control" name="userEmail" placeholder="user@email.com" value={this.state.value} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message"><b>Message:</b></label>
                        <textarea className="form-control" name="message" rows="4" value={this.state.value} onChange={this.handleChange} />
                    </div>
                    <div className="form-group text-center">
                        <input type="submit" className="btn" value="Submit" />
                    </div>
                </form>
            </div>
        );
    };

};

export default ContactForm;

// To do:
// 1. Send form data to database
// 2. Twilio API: send text message to owner when new message is sent / new contact made
// 3. Email sender API: send email to owner when new message is sent
