import {useState} from 'react'
import Link from 'next/link'
import baseURL from '../helper/baseURL'
import cookie from 'js-cookie'
import {useRouter} from 'next/router';
const login=()=>{
  const [email,setemail]=useState("");
  const[password,setpassword]=useState("");
  const router =useRouter("");
  const UserLogin=async(e)=>{
    e.preventDefault();
    const res=await fetch(`${baseURL}/api/Login`,{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email:email,
        password:password
      })
    })
    const res2=await res.json();
    console.log(res2);
    if(res2.error){
      M.toast({html: res2.error,classes:"red"})
    }
    else{
      //now as u get the token than it could be saved at two places that is local storage if local storage 
      //then token is accesible from client side only  and in the form of cookie and if cookie then can be accessed from
      //both client and server 
        console.log(res2);
      cookie.set('token',res2.token);
      cookie.set('user',res2.user);
      router.push('/account');
    }
  }
    return( <>
    <form onSubmit={(e)=>UserLogin(e)}>
    <div className=" container center-align card authcard">
    <h1>Login</h1>
      <input type="text" placeholder="Email" value={email} onChange={(e)=>{
        setemail(e.target.value);
      }}/><input type="text" placeholder="password" value={password} onChange={(e)=>{
        setpassword(e.target.value);
      }}/>
         <button type="submit" className="waves-effect waves-light btn "><i className="material-icons left ">forward</i>Login</button>
         <div>
      <button style={{margin:"8px" }} className="waves-effect waves-light btn" onClick={()=>router.push('/signup')}>
        Does Not Have Account
      </button>
      </div>

    </div>
    </form>
    </>
    )
}
export default login