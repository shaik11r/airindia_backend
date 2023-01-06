const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true});
//trigger pre-save that gets a function ans executes it before a user object is saved

    userSchema.pre('save',async function encryptPassword(next){
    const user=this;//here we have user 
    const hash=await bcrypt.hash(this.password,10);//salt is 10 //fetching the hash
    this.password=hash;
    next();
    })//before executing a function we use pre 
    userSchema.methods.isValidPassword=async function checkValidity(password){
    const user=this;
    const compare=await bcrypt.compare(password,user.password);//comparing both passwords and returning it 
    return compare;
        }
              
const User=mongoose.model('User',userSchema);
module.exports=User;