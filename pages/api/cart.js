import jwt from 'jsonwebtoken'
import Cart from '../../models/Cart'
import Authenticated from '../../helper/Authenticated'
import initDb from '../../helper/initDb'
initDb()
export default async(req,res)=>{
    switch(req.method){
        case "GET":
            await fetchUserCart(req,res)
            break
        case "PUT":
            await addProduct(req,res)
            break 
        case "DELETE":
            await DeleteProduct(req,res)
            break
    }
}
    const DeleteProduct=Authenticated(async(req,res)=>{
        const id=req.body.productId;
        const cart=await Cart.findOneAndUpdate(
            {user:req.userid},
            {$pull:{products:{product:id}}},
            {new:true}   
        ).populate("products.product")
        res.status(200).json(cart.products)

    })
    const fetchUserCart=Authenticated(async(req,res)=>{
       
            const cart=await Cart.findOne({user:req.userid}).populate("products.product")
            res.status(200).json(cart.products)
    })
    
    const addProduct=Authenticated(async(req,res)=>{
        const {quantity,productId}=req.body
        const cart=await Cart.findOne({user:req.userid})
        const pExist=cart.products.some(pdoc=>productId===pdoc.product.toString())
        if(pExist){
            await Cart.findOneAndUpdate({_id:cart._id,"products.product":productId},{$inc:{"products.$.quantity":quantity}})
        }
        else{
            const newProduct={quantity:quantity,product:productId}
        await Cart.findOneAndUpdate({_id:cart._id},
            {$push:{products:newProduct}})
        }
        res.status(200).json({message:"product added to cart"})
    } )

