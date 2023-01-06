const airlineService=require('../service/airlineService')
const cairline =async(req,res)=>{
    try{
        const airline=await airlineService.createAirline(req.body);
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
const getAirline=async(req,res)=>{
    try{
        const airlines=await airlineService.getAirline(req.params.name);
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
const getAllAirline=async(req,res)=>{
    try{
        const airline=await airlineService.getAllAirline();
        res.status(200).json({
            success:true,
            message:"Sucessfully created airline",
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
const destoryAirline=async(req,res)=>{
    try{
    const airline=await airlineService.destoryAirline(req.body.params);

    res.status(200).json({
        success:true,
        message:"yeah deleted airline bro",
    
    })
}
catch(err){
    console.log(err)
    res.status(500)
}
    
}
module.exports={
    cairline,
    getAllAirline,
    getAirline,
    destoryAirline
}
