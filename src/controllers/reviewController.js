const ReviewService=require('../service/reviewService')
const createReview=async(req,res)=>{
    try{
        const review=await ReviewService.createReview(req.body);
        console.log(review);
        res.status(201).json({
            success:true,
            message:'review created sucessfully',
            data:review
        })

    }
    catch(err){
        console.log(err);
        res.status(500).json({message:err.message})

    }
}
const getReview=async(req,res)=>{
    try{
        const review=await ReviewService.getReview(req.params.user,req.params.flight);
        res.status(200).json({
            success:true,
            message:"Sucessfully fetched review",
            data:review
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
const getAllReview=async(req,res)=>{
    try{
        const review=await ReviewService.getAllReview();
        res.status(200).json({
            success:true,
            message:"Sucessfully created review",
            data:review
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
const destroyReview=async(req,res)=>{
    try{
    const review=await ReviewService.destroyReview(req.body.params);
    res.status(200).json({
        success:true,
        message:"yeah deleted review bro",
    
    })
}
catch(err){
    console.log(err)
    res.status(500)
}
    
}
module.exports={
    createReview,
    getAllReview,
    getReview,
    destroyReview,
}
