const router = require("express").Router();
const { Mentor } = require("../../models/mentor");

router.get('/:mentorName', async (req, res) => {
    try {
        let mentorName = req.params.mentorName;
        const mentor = await Mentor.find({ name: mentorName });
        if(mentor.length === 0) return res.status(200).send({message: "Invalid link"});
        return res.status(200).send({mentorDetail: mentor[0]})
    } catch (err) {
        console.error(err)
    }
})

module.exports = router