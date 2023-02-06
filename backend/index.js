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
const multer = require("multer");
// database connection
connection();
// middlewares
app.use(express.json());
app.use(cors());

let storage = multer.diskStorage({
    destination:'./database/mentors/images', //directory (folder) setting
    filename:(req, file, cb)=>{
        cb(null, file.originalname) // file name setting
    }
})

//Upload Setting
let upload = multer({
   storage: storage,
   fileFilter:(req, file, cb)=>{
    if(
        file.mimetype == 'image/jpeg' ||
        file.mimetype == 'image/jpg' ||
        file.mimetype == 'image/png' ||
        file.mimetype == 'image/gif'

    ){
        cb(null, true)
    }
    else{
        cb(null, false);
        cb(new Error('Only jpeg,  jpg , png, and gif Image allow'))
    }
   }
})

app.use(express.static('database'))

app.post('/api/uploadfile', upload.single('single_input'), (req, res)=>{
    req.file
    res.send("Image succesfully uploaded!!")
})

app.use("/api/users/userRegister", userRegisterRoutes);
app.use("/api/users/auth", userAuthRoutes);
app.use("/api/mentors/mentorRegister", mentorRegisterRoutes);
app.use("/api/mentors/auth", mentorAuthRoutes);
app.use("/api/mentors/mentorLists", mentorList)
app.use("/api/mentors/verifyWithToken", mentorVerify)
app.use("/api/mentors/verify/setupPW", mentorSetupPW)
app.use("/api/mentors/verify/checkPW", mentorCheckPW)

app.get("/", (req, res) => {
    res.send("Welcome to GrabTern API")
})

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));