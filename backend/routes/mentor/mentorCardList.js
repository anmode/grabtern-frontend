const router = require("express").Router();
const { Mentor } = require("../../models/mentor");

router.get("/", async (req, res) => {
	try {
		const allMentorLists = await Mentor.find({});
		res.status(201).send(allMentorLists);
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;