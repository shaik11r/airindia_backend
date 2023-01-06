const Review=require('../models/review')

const createReview=async(data)=>{
    try{
        const newReview={
            comment:data.comment,
            user:data.user,
            flight:data.flight
        }
        const response=await new Review(newReview).save();
        return response;
    }
    catch(err){
        console.log(err)
    }
}
const destroyReview=async(id)=>{
    try{
        const response=await Review.findByIdAndDelete(id);
        console.log(response);
        return response;
    }catch(err){
        console.log(err);
    }
}
const getReview=async(user,flight)=>{
    try{
        const response=await Review.findOne({
            user:user,
            flight:flight
        })
    }catch(err){

    }
}
const getAllReview=async()=>{
    try{
        const response=await Review.find();
        return response;
    }
    catch(err){
        console.log(err);
    }
}
module.exports={
    createReview,
    destroyReview,
    getAllReview,
    getReview
}