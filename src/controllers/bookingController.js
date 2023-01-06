const BookingService=require('../service/bookingService')
const createBooking=async(req,res)=>{
    try{
        const booking=await BookingService.createbooking(req.body);
        console.log(booking);
        res.status(201).json({
            success:true,
            message:'booking created sucessfully',
            data:booking
        })

    }
    catch(err){
        console.log(err);
        res.status(500).json({message:err.message})

    }
}

const getBordingPass=async(req,res)=>{
    try{
        const booking=await BookingService.boardingPass(req.params.id);
        res.status(200).json({
            success:true,
            message:"Sucessfully created booking",
            data:booking
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message:"something went wrong"
        })
    }
}
const cancelBooking=async(req,res)=>{
    try{
    const booking=await BookingService.cancelbooking(req.query.id);
    res.status(200).json({
        success:true,
        message:"yeah deleted booking bro",
        data:booking
    })
}
catch(err){
    console.log(err)
    res.status(500)
}
    
}
module.exports={
    getBordingPass,
    createBooking,
    cancelBooking
}
