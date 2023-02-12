require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRegisterRoutes = require("./routes/user/users");
const userAuthRoutes = require("./routes/user/auth");
const mentorRegisterRoutes = require("./routes/mentor/mentor");
const mentorAuthRoutes = require("./routes/mentor/auth");
const mentorList = require("./routes/mentor/mentorCardList")
const mentorVerify = require("./routes/mentor/mentorVerify")
const mentorSetupPW = require("./routes/mentor/setupPW");
const mentorCheckPW = require("./routes/mentor/checkPW");
const getMentorDetail = require("./routes/mentor/getMentorDetail");
const bodyParser = require("body-parser");
// database connection
connection();
// middlewares
app.use(express.json());
app.use(cors());


// app.use(bodyParser.json({ limit: '10mb' }));
// app.use(express.json({limit: '50mb'}));
// app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000})) not work we need more like line 26
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb' }));
app.use("/api/users/userRegister", userRegisterRoutes);
app.use("/api/users/auth", userAuthRoutes);
app.use("/api/mentors/mentorRegister", mentorRegisterRoutes);
app.use("/api/mentors/auth", mentorAuthRoutes);
app.use("/api/mentors/mentorLists", mentorList)
app.use("/api/mentors/verifyWithToken", mentorVerify)
app.use("/api/mentors/verify/setupPW", mentorSetupPW)
app.use("/api/mentors/verify/checkPW", mentorCheckPW)
app.use("/api/mentors/mentorDetail", getMentorDetail)

app.get("/", (req, res) => {
    res.send("Welcome to GrabTern API")
})
const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));