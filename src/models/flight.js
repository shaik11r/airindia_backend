const mongoose=require('mongoose');
const flightSchema=new mongoose.Schema({
    depatureAirport:{
        type:String,
        required:true
    },
    arrivalAirport:{
        type:String,
        required:true,
    },
    duration:{
        type:String,
        required:true,
    },
    airline:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Airline'
    },
    flightDate:{
        type:Date,
        default:Date.now
    },
    depatureTime:{
        type:String,
    },
    arrivalTime:{
        type:String,
    },
    flightNumber:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    boardingGate:{
        type:Number,
    }
},{timeStamps:true})

const flightModel=new mongoose.model('flight',flightSchema)
module.exports=flightModel;