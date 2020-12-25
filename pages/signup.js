import { useState } from "react";
import Link from 'next/link'
import baseURL from '../helper/baseURL' 
import {useRouter} from 'next/router'
const signup=()=>{
  const router=useRouter();
  const [name,setname]=useState("");
  const [email,setemail]=useState("");
  const[password,setpassword]=useState("");
  const UserSignup=async(e)=>{
    e.preventDefault();
   const res= await fetch(`${baseURL}/api/signup`,{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      }      ,
      body:JSON.stringify({
        name:name,
        email:email,
        password:password
      })
    })
    const res2=await res.json();
    if(res2.error){
      M.toast({html: res2.error,classes:"red"})
    }
    else{
      M.toast({html: res2.message,classes:"green"})
       router.push('/login'); 
    }
  }
return <>
   
    <div className=" container center-align card authcard">
    <h1>Signup</h1>
    <form   onSubmit={(e)=>UserSignup(e)}>
      <input type="text" placeholder="Name" value={name} onChange={(e)=>{
        setname(e.target.value);
      }}/>
      <input type="text" placeholder="Email" value={email} onChange={(e)=>{
        setemail(e.target.value);
      }}/><input type="text" placeholder="password" value={password} onChange={(e)=>{
        setpassword(e.target.value);
      }}/>
         <button  style={ {margin:"10px"}} type="submit" className="waves-effect waves-light btn " ><i className="material-icons left ">forward</i>Signup</button>
      <div>
      <button style={{margin:"8px" }} className="waves-effect waves-light btn" onClick={()=>router.push('/login')}>
        Already Have Account
      </button>
      </div>
      </form>
    </div>
    
    </>
}
export default signup;