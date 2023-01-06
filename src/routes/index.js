const express=require('express');
const router=express.Router();//this gives up express router

const v1Routes=require("./v1");//creating api/v1
router.use("/v1",v1Routes);//now /v1 looks in "./v1"
module.exports=router;