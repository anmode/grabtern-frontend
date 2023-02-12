const router = require("express").Router();
const { Mentor } = require("../../models/mentor");
const crypto = require("crypto")

router.get('/:token', async (req, res) => {
    try {
        let mentorVerifyToken = req.params.token;
        const mentor = await Mentor.find({ token: mentorVerifyToken });
        console.log(mentor[0])
        if (mentor.length === 0) return res.status(400).send({ message: "Invalid link" });
        if (mentor[0].verified === true) return res.status(200).send({ message: "This mentor is already verified!" })
        const mentorSetupPWCode = crypto.randomBytes(16).toString('hex');
        await Mentor.updateOne({ token: mentorVerifyToken }, { setupPWId: mentorSetupPWCode })
        await Mentor.updateOne({ token: mentorVerifyToken }, { verified: true });
        await Mentor.updateOne({ token: mentorVerifyToken }, { token: "mentorIsVerified" });
        console.log(mentor[0]);
        return res.status(200).send(`Mentor with email ${mentor[0].email} successfully verified! and please send this message to mentor to setup there password \nSetup for your password click this link: ${process.env.FRONTEND_URL}/mentorPWSetup/${mentorSetupPWCode}`)
    } catch (err) {
        console.error(err)
    }
})

module.exports = router