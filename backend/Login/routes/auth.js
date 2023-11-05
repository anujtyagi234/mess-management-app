//Login route

const router = require("express").Router();
const {User} = require("../models/user");
const bcrypt = require("bcrypt")
const Joi = require("joi");


router.post("/",async(req,res)=>{
    try{
const{error} = validate(req.body)
if(error)
return res.status(400).send({message:error.details[0].message});
const  user  = await User.findOne({email:req.body.email});
if(!user)
return res.status.status(401).send({message:"Invalid Password"});
const validPassword = await bcrypt.comparecompare(
 req.body.password,user.password   
);
if(!validPassword)
return res.status(401).send({message:"Invalid Email or password"});
const token = user.generateAutoToken();
res.status(200).send({data:token,message:"Logged in Succesfully"})

    } 
    catch(error){
res.status(500).send({message:"Internaal server Error"})
    }
})

const validate = (data)=>{
    const schema = Joi.object({
        college_gmail_id:Joi.string().email().required().label("Email"),  
        password:joi.string().require().label("Password")
    })
    return schema.validate(data);
}