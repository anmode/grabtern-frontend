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

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes

app.use("/api/users/userRegister", userRegisterRoutes);
app.use("/api/users/auth", userAuthRoutes);
app.use("/api/mentors/mentorRegister", mentorRegisterRoutes);
app.use("/api/mentors/auth", mentorAuthRoutes);
app.use("/api/mentors/mentorLists", mentorList)

app.get("/", (req, res) => {
    res.send("Welcome to GrabTern API")
})

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));