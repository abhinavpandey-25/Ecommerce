import initDb from '../../helper/initDb'
import User from '../../models/User'
import bcrypt from 'bcryptjs'
import Cart from '../../models/Cart'
//for connectivity with the database
initDb();
export default async(req,res)=>{
    console.log("aya")
    console.log(req.body);
const {name,email,password}=req.body;
try{ 
    if(!name||!email||!password){
        return res.status(422).json({error:"Please add all fields"});
    }
    const user=await User.findOne({email});
    console.log(user);
    if(user){
      return  res.status(422).json({error:"User already exists"})
    }
    const newps= await bcrypt.hash(password,12);
    console.log(newps);
    const nuser= await new User({
        name:name,
        email:email,
        password:newps
        }).save();
        await new Cart({user:nuser._id} ).save();
        //SO JAB hm naya user save kr rhe h toh usse associated ek cart bhi crreate kr rhe h jisme product will remain
        //empty
     res.status(201).json({message:"User SignedUp"});   
}
catch(e){
    console.log(e);
}
}