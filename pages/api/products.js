// if i want this content to be r3endered at index .js
//this product is an api  
import initDb from '../../helper/initDb'
import Product from '../../models/Product'
initDb();
export default (req,res)=>{
 
switch(req.method){
    case "GET":  getProducts(req,res);
    break;
    case "POST": SaveProducts(req,res);
    break;
}


}
const SaveProducts=async(req,res)=>{
  const{name,price,media,description}=req.body;
  try {
    if(!name||!price||!media||!description){
        res.status(422).json({error:"Please Add all fields"})
    }
   const product=await new Product({
        name:name,
        price:price,
        mediaURL:media,
        description:description
    }).save();
    //201 matlab kuch naya create hua h
  res.status(201).json(product)    
  } catch (error) {
   res.status(500).json({error:"Internal Server error"});
   console.log(error)   
  }
  
}



const getProducts=async(req,res)=>{
   Product.find({}).then(products=>{
       res.status(200).json(products)
   })
}
//in nodejs may agar hamko koi dynamic route se get req krni toh url me app.get(api/products/:id,(req,res)=>{}) krke now in next js

// we write this in the case of node js
// app.get('/',(erq,resp)=>{
//   resp.json({message:'Hi dude '});
// })