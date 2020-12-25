import jwt from 'jsonwebtoken'
function Authenticated(icomponent){
     return (req,res)=>{
        const {authorization}=req.headers;
        if(!authorization){
            return res.status(401).json({error:"you must logged in"})
        }
       try {
                const {userid}=jwt.verify(authorization,process.env.JWT_SECRET);
                console.log(userid);
                req.userid=userid
                return icomponent(req,res)
           }
       catch (error) {
           console.log(error)
                return  res.status(401).json({error:"login please"})
            }
    }
}
export default Authenticated;
