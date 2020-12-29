
import {parseCookies} from 'nookies'
import baseUrl from '../helper/baseURL'
import {useEffect,useRef} from 'react'
import UserRoles from '../components/userRoles'
const Account=(props)=>{
    console.log(props)
    const cookie =parseCookies();
    const orderCard=useRef(null);
    const user=cookie.user?JSON.parse(cookie.user):""
 
    console.log(user);
    if(props.orders.length===0){
        return (<div className=" container center-align"> 
        <h2> You have no order history</h2></div>)
    }
    useEffect(()=>{
         M.Collapsible.init(orderCard.current);
    },[])
    const OrderHistory =()=>{
        
           return(
           <ul className="collapsible" ref={orderCard} >
        {props.orders.map(item=>{
          return(
            <li>
            <div className="collapsible-header"><i className="material-icons">folder</i> {item.createdAt} </div>
            <div className="collapsible-body">
            <h4>Total ₹ {item.total}</h4>
                {item.products.map((products)=>{
                    return(<>
                        <h5>
                            {products.product.name} x {products.quantity}

                        </h5>
                    </>)
                })}
            </div>
            </li>
          )
      })}
           </ul>
)}
   return (
        <div className="container">
            <div className="center-align">
                <h4>{user.name}</h4>
                <h4>{user.email}</h4>
            </div>
            <h2>Order History</h2>
            <OrderHistory/>
            {user.role=="root"&&<UserRoles/>}
        </div>
    )
}
    //since we want that agar user k pass token nhi h mtlb wo login nhi h toh server se alg se account
    //page ki request par it show not show the account
    //jab tak m login hu tb tk m account page dekh sku agr logout kar diya ya signup nhi kiya tb tak ur not allowed to see
    //the account page
    //ab jab bhi wo account ki request krega toh woh redirect ho jyga to login page
    export async function getServerSideProps(ctx){
        console.log("ji");
        const {token}=parseCookies(ctx);
        if(!token){
            //status code for redirecting 302
            const {res}=ctx;
            res.writeHead(302,{Location:"/login"})
            res.end();

        }
       const res=await  fetch (`${baseUrl}/api/orders`,{headers:{
            "Authorization":token
        }
    })
    const res2=await res.json()
    console.log("here")
    console.log(res2);
    console.log("doneasa")
  
        return{
            props:{orders:res2}
        }

    }
export default Account;