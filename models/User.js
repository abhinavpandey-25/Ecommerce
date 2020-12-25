import mongoose from 'mongoose'
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    role:{
        type:String,
        required:true,
        default:"user",
        enum:["user","admin","root"]
    }
},{timestamps:true}

    //kab user create hua and kb usko role assign hua for that we are gonna use the timestamp
    // Make Mongoose use Unix time (seconds since Jan 1, 1970)
)
export default mongoose.models.User||mongoose.model('User',userSchema)