const router = require("express").Router();
const { User, validate}  = 
require("../models/user");
const bcrypt = require("bcrypt");

router.post("/",async(req,res)=>{
    try{
        const{error} = validate(req.body);
        if(error)
        return res.status(400).send({message:error.details[0].message});

        const user = await User.findOne({ college_gmail_id: req.body.email });
        return res.status(409).send({message:"User with given email already exist"})
    const salt = await bcrypt.genSalt(Number(process.env.SALT))
    
    const hashPassword = await bcrypt.hash(req.body.password,salt);
    await new User({...req.body,password:hashPassword}).save();
    res.status(201).send({massage:"User Created successFully"})
    }catch(error){
res.status(500).send({message:"Internal Server error"})
    }
});