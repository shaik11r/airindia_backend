const Flight=require('../models/flight');

const createFlight=async(data)=>{
    try{
        const newFlight={
            depatureAirport:data.depatureAirport,
            arrivalAirport:data.arrivalAirport,
            duration:data.duration,
            flightDate:data.flightDate,
            depatureTime:data.depatureTime,
            arrivalTime:data.arrivalTime,
            flightNumber:data.flightNumber,
            price:data.price,
            airline:data.airlineId
        }
        const response=await new Flight(newFlight).save();
        return response;
    }
    catch(err){
        console.log(err);
    }
}
const updateFlight=async(data)=>{
    try{
        const response=await new Flight.updateOne({flightNumber:data.flightNumber})
        return response;
    }
    catch(err){
    console.log(err);    
    }
}
const destoryFlight=async(flightNumber)=>{
    try{
        const response=await Flight.findOneAndDelete({flightNumber:flightNumber})
        return response; 
      }
    catch(err){
        console.log(err);
    }
}
const getFlight=async(flightNumber)=>{
try{
    const response=await Flight.findOne({flightNumber:flightNumber})
    return response;
}
catch(err){console.log(err)
}
}
const getAllFlights=async(data)=>{
try{
    let response;
    if(data.sort){
        if(data.price){
            if(data.sort=='inc'){
                response=await Flight.find().sort('price');
            }
            else response=await Flight.find().sort('-price');
        }
        else if(data.duration){
            if(data.sort=='inc'){
                response=await Flight.find().sort('duration');
            }
            else response=await Flight.find().sort('-duration');
        }
    }
    else if(data.filter){
        if(data.price){
            if(data.filter=='lt'){
                response=await Flight.find({price:{
                    $lt:data.price
                }});
            }
            else response=await Flight.find({
                price:{$gt:data.price}
            });
        }
        else if(data.duration){
            if(data.filter=='lt'){
                response=await Flight.find({
                    duration:{$lt:data.duration}
                });
            }
            else response=await Flight.find({
                duration:{$gt:data.duration}
            });
        }
    }
    else{
     response=await Flight.find()
    }
    return response;
}
catch(err){
   console.log(err); 
}
}
module.exports={
    createFlight,
    updateFlight,
    destoryFlight,
    getFlight,
    getAllFlights,
}