const router = require("express").Router();
const Joi = require("joi");
const { Mentor } = require("../../models/mentor");
router.post('/:mentorLoginToken', async (req, res) => {
    try {
        const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });
        let mentorLoginToken = req.params.mentorLoginToken;
        const mentor = await Mentor.findOne({ loginToken: mentorLoginToken });
        if (!mentor) return res.status(401).send({ message: "Invalid link" });
        await Mentor.updateOne({ loginToken: mentorLoginToken }, { ...req.body })
        console.log(mentor);
        return res.status(200).send("Mentor successfully updated!")
    } catch (err) {
        console.error(err)
    }
})
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
            sessionDescription: Joi.string().required().label("Book Session Description"),
            sessionType: Joi.string().required().label("Book Session type"),
            sessionMeetingDuration: Joi.string().required().label("Book session duration"),
            // peopleAttend: Joi.string().required().label("Book session people attend"),
            priceSession: Joi.string().required().label("Book Session price"),
        })),
        description: Joi.string().required().label("Description"),
        sessionPrice: Joi.string().required().label("Session Price"),
        mentorImg: Joi.string().required().label("Mentor Image"),
	});
	return schema.validate(data);
};

module.exports = router