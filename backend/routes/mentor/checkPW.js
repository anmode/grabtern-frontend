const router = require("express").Router();
const { Mentor } = require("../../models/mentor");

router.get('/:mentorCheckPWId', async (req, res) => {
    try {
        let mentorCheckPWId = req.params.mentorCheckPWId;
        const mentor = await Mentor.find({ setupPWId: mentorCheckPWId });
        if(mentor.length === 0) return res.status(200).send({ message: "Invalid link" });
        return res.status(200).send({message: "Valid!"})
    } catch (err) {
        console.error(err)
    }
})

module.exports = router