import{useState,useEffect} from 'react'
import {parseCookies} from 'nookies'
import baseURL from '../helper/baseURL'
function UserRoles(){
    const {token}=parseCookies()
    const [user,setUser]=useState([]);
    useEffect(()=>{
        fetchUser();
    },[])
    const fetchUser=async()=>{
       const res= await fetch(`${baseURL}/api/users`,{  
            headers:{
                "Authorization":token
            }
        })
        const res2=await res.json();
        console.log(res2);
        setUser(res2);
    }
    const handleRole=async(id,role)=>{
        const res=await fetch(`${baseURL}/api/users`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                "Authorization":token
            },
           
            body:JSON.stringify({
                _id:id,
                role:role
            })
        })
        const res2=await res.json();
        console.log(res2);
        //map function returns an array
        const updatedUser=user.map((person)=>{
            if(res2._id==person._id){
                return res2;
            }
            else{
                return person;
            }
        })
        setUser(updatedUser);
    }
    return(
         <div>
           
      <table>
        <thead>
          <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
          </tr>
        </thead>

        <tbody>
            {
         user.map((item)=>{
        return(
            //alt+shift+downkey is used to copy the current line to the next line
             <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.role}<button className="btn danger" style={{marginLeft:"20px"}} onClick={()=>handleRole(item._id,item.role)}>Toggle role</button></td>
            </tr>
              )})
            }
          
        </tbody>
      </table>
                 
        </div>

    )
   
  
}
export default UserRoles;