import mongoose, { models } from 'mongoose'
const ProductSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    mediaURL:{
        type:String,
        required:true
    }
})
export default  mongoose.models.product|| new mongoose.model('product',ProductSchema);
