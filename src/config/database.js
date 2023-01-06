const mongoose=require('mongoose');
const connect=()=>{
    console.log("mongodb connection requested");
    return mongoose.connect('mongodb://localhost:27017/projects')
}
module.exports={
   connect 
}