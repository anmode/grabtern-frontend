const router = require("express").Router();
const { Mentor } = require("../../models/mentor");
const bcrypt = require("bcrypt");
const Joi = require("joi");

router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const mentor = await Mentor.findOne({ email: req.body.email });
		console.log(mentor)
		if (!mentor)
			return res.status(401).send({ message: "Invalid Email" });

		const validPassword = await bcrypt.compare(
			req.body.password,
			mentor.password
		);
		if (!validPassword)
			return res.status(401).send({ message: "Invalid Password" });
		if(mentor.verified === false) return res.status(201).send({message: "Mentor not yet verified"})

		res.status(200).send({ loginToken: mentor.loginToken, message: "logged in successfully", fullName: mentor.username });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

const validate = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password"),
		confirmPassword: Joi.string().required().label("Confirm Password"),
	});
	return schema.validate(data);
};

module.exports = router;