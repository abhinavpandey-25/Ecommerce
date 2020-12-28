import { model } from 'mongoose';
import {useRouter} from 'next/router'
import { useRef,useEffect,useState}from 'react'
import baseURL from '../../helper/baseURL';
import {parseCookies} from 'nookies';
const product=(props)=>{
  const [quantity,setQuantity]=useState(1);
    const router=useRouter()
    const modalRef=useRef(null);
    const cookies=parseCookies();
    const user=cookies.user?JSON.parse(cookies.user):"";
    useEffect(()=>{
        M.Modal.init(modalRef.current);
        //here modal agar triiger p work krana toh initialise karna padata h uske refrence se jo tiriger k bad display hoga
    },[])
    if(router.isFallback){
        //agar use static props krte and and fallback true h then agar wo page already build nhi h toh server se fetch
        //krenge jisme time lgta h toh tb tak ham loading a option dekha sakte h.
        return(<h1>...Loading</h1>)
    }
    // console.log(props);
    const getModal=()=>{
        return(
            <div id="modal1" className="modal" ref={modalRef}> 
            <div className="modal-content">
              <h4>Modal Header</h4>
              <p>Are u sure to delete this item</p>
            </div>
            <div className="modal-footer">
            <button onClick={()=>deleteProduct()} className="btn waves-effect waves-light  #d50000 red accent-4" style={{margin:"5px"}}><b>Delete</b> <i className="material-icons">delete</i></button>
            <button  className="btn waves-effect waves-light #4a148c purple darken-4" style={{margin:"5px"}}><b>Cancel</b> <i className="material-icons">cancel</i></button>
        
            </div>
          </div>
        )
    }
    const deleteProduct=async()=>{
        console.log("del method");
        console.log(props.value._id);
        fetch(`${baseURL}/api/product/${props.value._id}`,{
            method:"DELETE"
        }).then(res=>res.json()).then(res2=>console.log(res2));
        router.push('/');
      }    
        const AddtoCart=async()=>{
          const res=await fetch(`${baseURL}/api/cart`,{
            method:"PUT",
            headers:{
              'Content-Type':"application/json",
              "Authorization":cookies.token
            },
            body:JSON.stringify({
              quantity:quantity,
              productId:props.value._id
            })
          })
          const res2=await res.json();
          console.log(res2);
          M.toast({html: res2.message ,classes:"green"})

        }
    
    return(
    <div className="container center-align " style={{marginBottom:"20px"}}>
        <h2>{props.value.name}</h2>
     <img src={props.value.mediaURL} style={{"width":"35%", "height":"400px",borderStyle:"solid",borderWidth:"6px"}}/>
   <b><p>RS {props.value.price}</p></b>
    <input type="number" style={{width:"50%",textAlign:"center"}} min="1" placeholder="Quantity" value={quantity} 
    onChange={(e)=>setQuantity(Number(e.target.value))} />
    {
      user?
      <button className=" btn waves-effect waves-light " onClick={()=>AddtoCart()}>Add <i className="material-icons">add</i></button>
      :<button className=" btn waves-effect waves-light " onClick={()=>router.push('/login')}>Login to Add</button>
    }
        <p>{props.value.description}</p>
        { user.role!="user"&& <button data-target="modal1" className=" btn modal-trigger waves-effect waves-light  #d50000 red accent-4 "><b>Delete</b> <i className="material-icons">delete</i></button>  
        //if the user is an admin then only u should give the delete button otherwise no need for delete button
        }
        {getModal()}
        
    {/* modal trigger lgana jarurui hota h also modal target btana bhi aur initalise krna bhi tbi modal work krega */}
    </div>
)
}
export async function getServerSideProps(context) {
   //since by using serverside props it can work fine but when the traffic is more it can decrease its performance
   //since the page is static one so we can use getstatic props also for better performance.
//here in getserever side props context contains the params as obj and inside it id as another object {id:...}
   const id= context.params.id;
   const data=await fetch(`${baseURL}/api/product/${id}`).then(res=>res.json());

  // console.log(data);
   return{
       props:{
           value:data
       }
   }
}       
// export async function getStaticProps(context) {
//    //since by using serverside props it can work fine but when the traffic is more it can decrease its performance
//    //since the page is static one so we can use getstatic props also for better performance.
//    const id= context.params.id;
//    const data=await fetch(`${baseURL}/api/product/${id}`).then(res=>res.json());
//    //console.log(data);
//    return{
//        props:{
//            value:data
//        }
//    }
// }       
//first getstatic paths will run during build to build the sattic page with the givven id only
//baki agar fallback false h toh other pages k liye pagenot found ayga but agar fall back true h toh jo id exist nhi krti at
//build time then network request jese hoga on getstatic props
// export async function getStaticPaths() {
//     return {
//       paths: [
//         { params: { id:"5f977b791efe90be048d25af"} } 
//         //lets say we have a largee number of products then what should we doo hame har static path ko build time par hi build 
//         //kar sakte h
//       ],
//       fallback: true 
//     };
//   }
export default product;