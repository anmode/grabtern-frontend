const router = require("express").Router();
const { Mentor } = require("../../models/mentor");

router.get('/:mentorLoginToken', async (req, res) => {
    try {
        let mentorLoginToken = req.params.mentorLoginToken;
        const mentor = await Mentor.find({ loginToken: mentorLoginToken });
        if(mentor.length === 0) return res.status(200).send({message: "Invalid link"});
        return res.status(200).send({mentorDetail: mentor[0]})
    } catch (err) {
        console.error(err)
    }
})

module.exports = router