import baseURL from '../../helper/baseURL'
import jwt from 'jsonwebtoken'
import initDb from '../../helper/initDb'
import User from '../../models/User'
import bcrypt from 'bcryptjs'
initDb();
export default async(req,res)=>{
    console.log(req.body);
    const{email,password}=req.body;
    try{
    if(!email||!password){
        return res.status(422).json({error:"Please fill all details"})
    }
    const user= await  User.findOne({email});
    if(!user){
        return res.status(404).json({error:"Please signup first"})
    }
    const doMatch= await bcrypt.compare(password,user.password);
    if(doMatch){
        //create a json web token
      const token= jwt.sign({userid:user._id},process.env.JWT_SECRET,{
          expiresIn:"2 days"  
        });
        console.log("token")
        console.log(token)
      return  res.status(201).json({token:token,user:{
        
          email:email,
          password:password,
          role:user.role
      }});
        //we are generating a token on the basis of user_id and also a secrete key is also required and that could be any 
        //random string and we can also pas the expiring time of the token
    }
    else{
        //kuki agar hm ne likh diya password incorect then cracker will get the hint that email atleast is correct
       return res.status(401).json({error:"password or email don't match"})
        
        // unauthorised
    }
}
catch(e){
    console.log("exception "+e);
}
}