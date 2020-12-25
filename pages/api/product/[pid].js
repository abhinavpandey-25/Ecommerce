import Product from '../../../models/Product'

export default (req,res)=>{
   
 console.log(req.method)
 const {pid}=req.query;
    switch(req.method){
        case "GET": 
          console.log(req.method);
        Product.findOne({_id:pid},(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.status(200).json(result);
        }
        });
    break;
        case "DELETE":
            console.log("delete");
        Product.findByIdAndRemove({_id:pid},(error)=>{
            if(!error){
                console.log("deleted");
                res.status(200).json({done:"delete hogya "});

            }
            else{
                console.log(error);
            }
        })
        break;    
    }
    // const pid=req.query.pid;another way for doing this can be 
}