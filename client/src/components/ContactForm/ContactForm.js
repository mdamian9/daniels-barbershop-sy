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

    handleSubmit(event) {

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
                        <label htmlFor="userEmail"><b>Email:</b></label>
                        <input type="emai" className="form-control" name="userEmail" placeholder="user@email.com" value={this.state.value} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message"><b>Message:</b></label>
                        <textarea className="form-control" name="serviceDescription" rows="4" value={this.state.value} onChange={this.handleChange} />
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
