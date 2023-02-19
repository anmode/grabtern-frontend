const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const mentorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true },
    mobile: { type: String, required: true },
    internAt: { type: String, required: true },
    currentStatus: { type: String, required: true },
    social: {
        linkedin: { type: String, required: true },
        twitter: { type: String, required: true },
    },
    bookSession: [{
        sessionName: {type: String, required: true},
        sessionType: {type: String, required: true},
        sessionMeetingDuration: {type: String, required: true},
        // peopleAttend: {type: String, required: true},
        priceSession: {type: String, required: true},
    }],
    description: { type: String, required: true },
    mentorImg: { type: String, required: true },
    sessionPrice: { type: String, required: true },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true },
    verified: { type: Boolean, default: false },
    token: { type: String, required: true },
    setupPWId: {type: String, required: true, default: "noSetupIdForPw"}
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
        username: Joi.string().required().label("Username"),
        mobile: Joi.string().required().label("Mobile"),
        internAt: Joi.string().required().label("Intern at"),
        currentStatus: Joi.string().required().label("Current Status"),
        social: {
            linkedin: Joi.string().required().label("Linkedin"),
            twitter: Joi.string().required().label("Twitter"),
        },
        bookSession: Joi.array().items(Joi.object().keys({
            sessionName: Joi.string().required().label("Book Session Name"),
            sessionType: Joi.string().required().label("Book Session type"),
            sessionMeetingDuration: Joi.string().required().label("Book session duration"),
            // peopleAttend: Joi.string().required().label("Book session people attend"),
            priceSession: Joi.string().required().label("Book Session price"),
        })),
        description: Joi.string().required().label("Description"),
        sessionPrice: Joi.string().required().label("30min 1-1 Session Price"),
        mentorImg: Joi.string().required().label("Mentor Image"),
        password: Joi.string().required().label("Password"),
        confirmPassword: Joi.string().required().label("Confirm Password"),
        verified: Joi.boolean().label("Is Mentor Verified"),
        token: Joi.string().label("Mentor Verify Token"),
        setupPWId: Joi.string().label("Setup PW Id"),
    });
    return schema.validate(data);
};

module.exports = { Mentor, validate };