const mongoose=require('mongoose');
const airLineSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    }
},{timeStamps:true})
const Airline=new mongoose.model('Airline',airLineSchema);
module.exports=Airline