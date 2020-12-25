import baseURL from '../helper/baseURL';
import {parseCookies} from 'nookies';
import cookie from 'js-cookie'
import { useRouter } from 'next/router';
import Link from 'next/link' ;
import {useState} from 'react';
import StripeCheckout from 'react-stripe-checkout';
const cart=({error,products})=>{
   const router=useRouter();
    const {token}=parseCookies()
    const [newCart,setCart]=useState(products)
    let price=0;
    if(!token){
        return( <div className="center-align">
            <h3>Please Login to view your cart</h3>
            <Link href='/login'><button className="btn">Login</button></Link>
        </div>)
    }
    const handleRemove=async(pid)=>{
       const res= await fetch(`${baseURL}/api/cart`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json",
                "Authorization":token
            },
            body:JSON.stringify({
                productId:pid
            })
        })
        const res2=await res.json();
        console.log("deleted"); 
        console.log(res2);
        setCart(res2)
        router.push('/');
    }
   
    
const CartItems=()=>{
    return(
    <div>
        {newCart.map(items=>{
            price=price+items.quantity*items.product.price;
            return(
             <div className="CartImages " key={items._id}>
            <img src={items.product.mediaURL}/>
            <div style={{margin:"10px"}}>
                <h3>{items.product.name} </h3>
                <h4>Quantity : {items.quantity} </h4>
                <h4>Price : {items.product.price} </h4>
                <button className="btn #ff6f00 amber darken-4" onClick={()=>{handleRemove(items.product._id)}}>REMOVE</button>
            </div>
            </div>
            )
            })
        }
    </div>
    )}
   
    if(error){
        M.toast({html:error,classes:"red"})
        cookie.remove("user");
        cookie.remove("token");
        router.push('/login')
    }
    const handleCheckout=async(paymentInfo)=>{
        //console.log("hsei")
       // console.log(paymentInfo);
     const res=   await fetch(`${baseURL}/api/payment`,{
            method:"POST",
            headers:{
                "Content-Type":'application/json',
                "Authorization":token
            },
            body:JSON.stringify({
                paymentInfo:paymentInfo
            })
        });
        const res2=await res.json();
        M.toast({html:res2.message,classes:"green"})
        router.push("/")
       // console.log(res2);
        
    }
    const TotalPrice=()=>{
        return(
        <div className="container" style={{display:"flex",justifyContent:"space-around"}} >
            <h5> Total Price : ₹ {price}</h5>
            <StripeCheckout  name="MyStore"
            amount={price*100}
            image={products.length>0?products[0].product.mediaURL:""}
            currency="INR"
            shippingAddress={true}
            zipCode={true}
            billingAddress={true}
            stripeKey="pk_test_51Hy0XdFCPaJSpKjHAlxmpDRUSYSVFLDBaNdbr75P4HH7ZGxfMT1swPb183nadzpZvZsGi5qj3j71MsjvWVwCIZjx00R8zBNaWq"
            token={(paymentInfo)=>handleCheckout(paymentInfo)}>
            <button className="btn">Checkout</button>
            </StripeCheckout>
        </div>
        )
    }
    if(products.length===0){
        return <div className="center-align"> <h2>Your Cart Is Empty</h2>
            <button className="btn" onClick={()=>{
                  router.push("/");
            }}>Add Items in your cart </button>
        </div>
    }
    return (
        <div className="container">
            <CartItems/>
            <TotalPrice/> 
            </div>
    )       
}   
export async function getServerSideProps(ctx){
    const{token}=parseCookies(ctx);
    if(!token){
        return {
            props:{products:[]}
        }
    }
const res=await fetch(`${baseURL}/api/cart`,{
headers:{
    "Authorization":token
}
})
const products=await res.json();
console.log("carts")
console.log(products)
if(products.error){
    return {
        props:{error:products.error}
    }
}
return{
    props:{products}
}
}
export default cart;