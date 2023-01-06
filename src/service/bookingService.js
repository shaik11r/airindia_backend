const booking=require('../models/booking')

const createbooking=async(data)=>{
    try{
        const newbooking={
            id:data.id,
            flight:data.flight,
            user:data.user,
            status:data.status
        }
        const response=await new booking(newbooking).save();
        return response;
    }
    catch(err){
        console.log(err)
    }
}
const cancelbooking=async(id)=>{
    try{
        const response=await booking.findByIdAndUpdate({id:id},{status:'cancelled'});
        console.log(response);
        return response;
    }catch(err){
        console.log(err);
    }
}
const boardingPass=async(id)=>{
    try{
        const response=await booking.findOne({id:id}).populate('flight').populate('user').exec();
        return response;
    }
    catch(err){
        console.log(err);
    }
}
module.exports={
    createbooking,
    cancelbooking,
    boardingPass
}