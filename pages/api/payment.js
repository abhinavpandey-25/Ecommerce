import Stripe from 'stripe';
import {v4 as uuidv4} from 'uuid';
import Cart from '../../models/Cart'
import jwt from 'jsonwebtoken'
import initDb from '../../helper/initDb'
import Order from '../../models/Order'
initDb();
const stripe=Stripe(process.env.STRIPE_SECRET);
export default async(req,res)=>{
    const {paymentInfo}=req.body
    const {authorization}=req.headers;
        if(!authorization){
            return res.status(401).json({error:"you must logged in"})
        }
       try {
                const {userid}=jwt.verify(authorization,process.env.JWT_SECRET);
                const cart=await Cart.findOne({user:userid}).populate("products.product")
                let price=0;
                cart.products.forEach(items=>{
                    price=price+items.quantity*items.product.price;
                })
                //check kki customer pehle payment kar chuka ki a ni
                let newCustomer;
                const prevCustomer =await stripe.customers.list({email:paymentInfo.email})
                const ExistingCustomer=prevCustomer.data.length>0
                if(!ExistingCustomer){
                    newCustomer=await stripe.customers.create({
                        email:paymentInfo.email,
                        source:paymentInfo.id
                    })
                }
                await stripe.charges.create({
                    currency:"INR",
                    amount:price*100,
                    receipt_email:paymentInfo.email,
                    customer:ExistingCustomer?prevCustomer.data[0].id:newCustomer.id,
                    description:`Your payment succesfull |${paymentInfo.email}`
                },{
                    idempotencyKey:uuidv4()
                })
                await new Order({
                    user:userid,
                    email:paymentInfo.email,
                    total:price*100,
                    products:cart.products
                }).save();
                await Cart.findOneAndUpdate({_id:cart._id},
                    {$set:{products:[]}})
                res.status(200).json({message:"payment was successful"})

            }
       catch (error) {
           console.log(error)
                return  res.status(401).json({error:"login please"})
            }
    }