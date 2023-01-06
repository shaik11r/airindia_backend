const passport=require('passport');
const localStrategy=require('passport-local').Strategy;
const User=require('../models/user');
const JWTStrategy=require('passport-jwt').Strategy;
const ExtractJWT=require('passport-jwt').ExtractJwt;
//signup local strategy which has username and password
passport.use('signup',
new localStrategy({
    usernameField:'email',
    passwordField:'password'
},
//done gonna expect callback
async (email,password,done)=>{
try{
    const user=await User.create({email,password});//
    return done(null,user);//error callback
}
catch(err){
    console.log(err);
    done(err);
}}))//end 
passport.use('login',new localStrategy(
    {
        usernameField:'email',
        passwordField:'password' 
    },

    async(email,password,done)=>{
    try{
            const user=await User.findOne({email});//finding the user by email 
            if(!user){
                return done(null,false,{message:'user not found'})
            }

            const validate=async function checkValidity(password){
                const compare=await bcrypt.compare(password,user.password);
            }//using isvalidpassword method to check pasword

            if(!validate){
                return done(null,false,{message:'Wrong password'})
            }
            return done(null,user,{message:"logged in successfully"})
        }
    catch(err){
            console.log(err);
            return done(err);
        }
    }
))


passport.use(new JWTStrategy({
    secretOrKey:'Top_secret',
    jwtFromRequest:ExtractJWT.fromUrlQueryParameter('secret_token')//taking token form url parameter
},
async(token,done)=>{
    try{
        console.log("hi inside passport .user")
        return done(null,token.user);
    }
    catch(err){
        console.log(err);
        done(err)
    }
}
))