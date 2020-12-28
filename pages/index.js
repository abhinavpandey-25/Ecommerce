//next Js is SeO friendly kyuki react me hame content nahi pta rhta so Seo friendly nahi h whi next js m server side rendering hoti h
// so seo friendly kyki insepect element me u can see the loaded content
import Link from 'next/link';
import baseURL from '../helper/baseURL';
import {useState,useEffect} from 'react';
import Navbar from '../components/NavBar'
//get static props is used when we use the page that is not user specific like website kholte hi jo items ka page show
//hoga wo user ki reqauest se pehle hi build krke rakhte h .wo tab hoga jb hm get static props ka use krenge
//if we use getserver side props toh req server p jygi phir server response krega ie cN BE used in user specific page
//toh thoda slow hoga ye.
const Home=(props)=>{
  const productlist=props.products.map(value=>{

  
            
    return (    
  <div className=" card center-align productcard " style={{margin:"15px",borderStyle:'solid'}} key={Math.random()}>
    <div className="card small " >
      <div className="card-image"  >
        <img src={value.mediaURL}/>
       
      </div>
      <div className="card-content">
        <h3>{value.name}</h3>
        sg
        <p>{value.description}</p>
      </div>
      <div className="card-action">
        <Link href={'/product/[id]'} as={`/product/${value._id}`} ><a >View Product</a></Link>
      </div>
    </div>
  
</div>
    )
  })
  console.log(props);
  // const [text,setdata]=useState('..load');
  // useEffect(()=>{
  //   fetch('http://localhost:3000/api/test').then(res=>res.json()).then(data=>{
      
  //     setdata(data.message);
  //   })
  // },[])
return (
  <>
  <div className="Heading">  <i className="medium material-icons">shopping_cart</i> CartDriver</div>
  <div className="rootcard">  {productlist}</div>
  {/* <h2>{props.message}</h2> */}
  {/* <style jsx>
    {                                                                                                                                                                                                                                                                                                              
      `h2{
      color: 
      }`
    }
  </style> */}
  {/* <Link href='/product'><a>Go to Products</a></Link> */}
  </>
)
}
//ye function api se request kr rha h for the data and yhi pehle execute hoh rha h and isi k andar connection with data
//base bhi setup h
export async function getServerSideProps(context){
  const data= await fetch(`${baseURL}/api/products`).then(res=>res.json());
  return{
    props:{
       products:data
    }
  }
}  
// export async function getStaticProps(context){
//   const data= await fetch(`${baseURL}/api/products`).then(res=>res.json());
//   return{
//     props:{
//        products:data
//     }
//   }
// }  


//is below function ke maddad se server pr message already prerender hho chuka tha ans on  req reso m html diya
//get static props works at the server side only
// export async function getStaticProps(context) {
//   const data=await fetch('http://localhost:3000/api/test').then(res=>res.json());
//   console.log(data);
//   return {
//     props: {message:data.message}, // will be passed to the page component as props
//   }
// }
export default Home;