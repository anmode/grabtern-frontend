const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const mentorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    internAt: { type: String, required: true },
    currentStatus: { type: String, required: true },
    social: {
        linkedin: { type: String, required: true },
        twitter: { type: String, required: true },
    },
    description: { type: String, required: true },
    sessionPrice: { type: String, required: true },
    // resume: { type: String, required: true },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true },
    verified: { type: Boolean, default: false }
});

mentorSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
        expiresIn: "7d",
    });
    return token;
};

const Mentor = mongoose.model("mentor", mentorSchema);

const validate = (data) => {
    const schema = Joi.object({
        name: Joi.string().required().label("Name"),
        email: Joi.string().email().required().label("Email"),
        mobile: Joi.string().required().label("Mobile"),
        internAt: Joi.string().required().label("Intern at"),
        currentStatus: Joi.string().required().label("Current Status"),
        social: {
            linkedin: Joi.string().required().label("Linkedin"),
            twitter: Joi.string().required().label("Twitter"),
        },
        description: Joi.string().required().label("Description"),
        sessionPrice: Joi.string().required().label("Session Price"),
        // resume: Joi.string().required().label("Resume"),
        password: passwordComplexity().required().label("Password"),
        confirmPassword: passwordComplexity().required().label("Confirm Password"),
    });
    return schema.validate(data);
};

module.exports = { Mentor, validate };