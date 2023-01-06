const flightService=require('../service/flightService')
const createFlight =async(req,res)=>{
    try{
        const airline=await flightService.createFlight(req.body);
        console.log(airline);
        res.status(201).json({
            success:true,
            message:'airline created sucessfully',
            data:airline
        })

    }
    catch(err){
        console.log(err);
        res.status(500).json({message:err.message})

    }
}
const getFlight=async(req,res)=>{
    try{
        const airlines=await flightService.getFlight(req.params.name);
        res.status(200).json({
            success:true,
            message:"Sucessfully fetched airline",
            data:airlines
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
const getAllFlights=async(req,res)=>{
    try{
        const airline=await flightService.getAllFlights(req.body);
        res.status(200).json({
            success:true,
            message:"Sucessfully fetchd flights",
            data:airline
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
const destoryFlight=async(req,res)=>{
    try{
    const airline=await flightService.destoryFlight(req.query.flightNumber);

    res.status(200).json({
        success:true,
        message:"yeah deleted flight bro",
    
    })
}
catch(err){
    console.log(err)
    res.status(500)
}
    
}
module.exports={
    createFlight,
    getAllFlights,
    getFlight,
    destoryFlight
}
