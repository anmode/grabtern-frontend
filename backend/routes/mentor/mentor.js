const router = require("express").Router();
const { Mentor, validate } = require("../../models/mentor");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const mentor = await Mentor.findOne({ email: req.body.email });
		if (mentor)
			return res
				.status(409)
				.send({ message: "Mentor with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);
		const hashConfirmPassword = await bcrypt.hash(req.body.confirmPassword, salt);
		const token = crypto.randomBytes(64).toString('hex');
		console.log({ ...req.body, password: hashPassword, confirmPassword: hashConfirmPassword, token: token })

		await new Mentor({ ...req.body, password: hashPassword, confirmPassword: hashConfirmPassword, token: token }).save();
		console.log(process.env.BACKEND_URL)
		res.status(201).send({ message: "Mentor created successfully", mentorVerifyLink: `${process.env.BACKEND_URL}/api/mentors/verifyWithToken/${token}` });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;