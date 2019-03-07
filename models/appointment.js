// Require mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new AppointmentSchema object
const appointmentSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: "First name is required"
    },
    lastName: {
        type: String,
        trim: true,
        required: "Last name is required"
    },
    phoneNumber: {
        type: String,
        trim: true,
        required: "Phone number is required",
        validate: [(input) => {
            let flag = true;
            // if phone number input is less than 10 digits or if input contains anything other than numbers
            if (input.length !== 10 || !/^\d+$/.test(input)) {
                flag = false;
            };
            return flag;
        }, "Phone number input has error(s)"]
    },
    email: {
        type: String,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"], // must match regex
        trim: true
    },
    serviceDescription: {
        type: String,
        trim: true,
        required: "Service description is required"
    },
    date: {
        type: Date,
        default: Date.now,
        required: "Appointment date is required"
    }
});

// This creates our model from the above schema, using mongoose's model method, and exports that model
module.exports = mongoose.model("Appointment", appointmentSchema);
