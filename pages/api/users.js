import User from '../../models/User'
import Authenticated from '../../helper/Authenticated'
export default async(req,res)=>{
    switch(req.method){
        case "GET":getUser(req,res)
                    break;
        case "PUT":updateRole(req,res)
                    break;    
    }
}
const updateRole=Authenticated(async(req,res)=>{
        const id=req.body._id;
        const role=req.body.role;
        const newrole=role=="user"?"admin":"user"
    const user=await User.findOneAndUpdate(
        {_id:id},
        {role:newrole},
        {new:true}
        )
        res.status(200).json(user)
})
const getUser=Authenticated(async(req,res)=>{
    //.select("-password")
    //jo user ki details hm la rhe h usme we dont want ki password bhi aa jay so we need to prevent it
    const user=await User.find({_id:{$ne:req.userid}})
    res.status(200).json(user)
})
