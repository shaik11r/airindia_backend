const express = require("express"); //this package returns a funtion
const mongoose=require('mongoose');
mongoose.set('strictQuery',true);
const User=require('./src/models/user')
//executing the function returened a express application
const app = express();
const {connect}=require("./src/config/database")
const apiRouter=require("./src/routes/index");//any request comes to /api we can map to /api router
const bodyParser = require("body-parser");
const passport = require("passport");
require('./src/util/auth');
const authRouter=require('./src/routes/authRoutes')
app.use(bodyParser.urlencoded({extended:false}));
app.use("/",authRouter);
app.use("/api",passport.authenticate('jwt',{session:false}),apiRouter);
app.get("/", (req, res) => {
  
  res.send({
    "sucess":true,
    "message":"sucessfully jaru mitaya"
  })
});
app.use(function(err,req,res,next){
  res.status(500);
})
app.listen(3000, async() => {
  console.log("Server Started");
  await connect();
  console.log("mongodb connected")
});
