import mongoose from 'mongoose'
function initDb(){
    console.log("here")
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true},(error)=>{
    if(!error){
        console.log("connected");
    }
    else{
        console.log(error);
    }

})
}
export default initDb; 
