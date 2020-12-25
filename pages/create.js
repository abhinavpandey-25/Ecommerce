import {useState} from 'react';
import baseUrl from '../helper/baseURL'
import {parseCookies} from 'nookies'
import {useRouter} from 'next/router'
const create=()=>{
  const router=useRouter()
  //this create page should be accesed by onlly the admin as user cannnort add the items in the website
    const [name,setName]=useState("")
    const [price,setPrice]=useState("")
    const[media,setMedia]=useState("")
    const [description,setDescription]=useState("")
    const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log("submit")
    const location=await fileUpload();
    const res=  await fetch(`${baseUrl}/api/products`,{
        method:"POST"
        //hame header bhi specify krna padega ki frontend se kis type ka data bheja jyga from the frontend\
        ,headers:{
          'Content-Type':'application/json'
          //server apne aap isko dekh k toh sari incoming request ko json m parse kr dega
        },
        //when sending the data to the server the data has to be a string
        //whne receving data from a wev server the data is always a string then parse the data to become a js obj
        body:JSON.stringify({
          name:name,
          price:price,
          media:location,
          //for storing image ham image phele upload krenge on cloudinary and then woh url save krenge and use access krenge
          description:description
        })
      })
    const res2=await res.json();
    if(res2.error){
      M.toast({html: res2.error,classes:"red"})
    }    
    else{
      M.toast({html: "Info saved successfully",classes:"green"})
    }
    router.push('/')

 }
  const fileUpload=async()=>{
    const formData=new FormData();
    formData.append('file',media);
    formData.append('upload_preset','mystore2');
    formData.append('cloud_name','storagearea');
    const res=await fetch('https://api.cloudinary.com/v1_1/storagearea/image/upload',{
      method:"POST",
      body:formData
    })
    const res2=await res.json();
    return res2.url
  }
    return(
    <form className="container" onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" placeholder="Enter Name"   value={name} onChange={(e)=>{
           // console.log(e.target.value);    
         setName(()=>e.target.value);
        }}/>
        <input type="text" value={price} placeholder="Enter Price" onChange={(e)=>{
            setPrice(()=>e.target.value)
        }}/>
        <div className="file-field input-field">
      <div className="btn">
        <span>File</span>
        <input type="file" placeholder="Choose" onChange={(e)=>{setMedia(()=>e.target.files[0])}}/>
      </div>
      <img className="responsive-img "  src={media?URL.createObjectURL(media):""}/>

    </div>
    {/* to get the image after upload */}
    <textarea  value={description} placeholder={"add some description"} className="materialize-textarea" onChange={(e)=>setDescription(()=>e.target.value)}></textarea>
    <button type="submit" className="waves-effect waves-light btn"><i className="material-icons left">send</i>Submit</button>
    </form>
    )
}

//ctx me server se jo bhi a rha tha jese ham ne server se token and user in which i passed user role user email and user
//user password  and ye data server p stringify m tha so we nned to parse the object to json
export async function getServerSideProps(ctx){
      const cookie=parseCookies(ctx);
      const user=cookie.user?JSON.parse(cookie.user):"";
      if(user.role!="root"&&user.role!="admin"){
          const {res}=ctx;
          //the status code for redirect is 302
          res.writeHead(302,{Location:"/"});
          res.end(); 
      }

      //parsecookies sari cookies return krta 
      //status code for redirecting 302
  
  return{
      props:{}
  }

}
export default create;