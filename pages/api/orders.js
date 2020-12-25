import initDb from '../../helper/initDb'
import Order from '../../models/Order'
import Authenticated from '../../helper/Authenticated'
initDb()
export default Authenticated(async(req,res)=>{
    const orders=await Order.find({user:req.userid}).populate("products.product")
    res.status(200).json(orders)
})