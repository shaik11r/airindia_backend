const helpDetails=(req,res)=>{
return res.status(200).send({
    message:"sucessfully hitting the help api",
    sucess:true,
    data:{
    contact:"+919182320462"
    }
})
}
module.exports={
    helpDetails
}