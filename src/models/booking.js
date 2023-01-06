const mongoose=require('mongoose')
const bookingSchema=new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    flight:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'flight'
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    status:{//"booked","cancelled","in_process"
        type:String,
        required:true,
        default:"In_Process",
        enum:["booked","cancelled","In_Process"]
    }
})

const bookingModel=new mongoose.model('booking',bookingSchema)
module.exports=bookingModel;