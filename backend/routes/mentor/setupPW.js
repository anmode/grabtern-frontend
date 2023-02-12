const router = require("express").Router();
const { Mentor } = require("../../models/mentor");
const bcrypt = require("bcrypt");

router.post('/:mentorSetupPWId', async (req, res) => {
    try {
        let mentorSetupPWId = req.params.mentorSetupPWId;
        const mentor = await Mentor.find({ setupPWId: mentorSetupPWId });
        if (mentor.length === 0) return res.status(400).send({ message: "Invalid link" });
        if (mentor[0].setupPWId == "noSetupIdForPw" || mentor[0].setupPWId == "passwordHasBeenVerified") return res.status(400).send({ message: "Invalid link" });
        const newPassword = req.body.newPassword;
        const newConfirmPassword = req.body.newConfirmPassword;
        if (newPassword !== newConfirmPassword) return res.status(400).send({ message: "Please write match password" });
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(newPassword, salt);
        const hashConfirmPassword = await bcrypt.hash(newConfirmPassword, salt);
        await Mentor.updateOne({ setupPWId: mentorSetupPWId }, { password: hashPassword, confirmPassword: hashConfirmPassword });
        await Mentor.updateOne({ setupPWId: mentorSetupPWId }, { setupPWId: "passwordHasBeenVerified" });
        return res.status(200).send({message: "Your mentor password has been successfully updated!", status: "OK"}); 
    } catch (err) {
        console.error(err)
    }
})

module.exports = router