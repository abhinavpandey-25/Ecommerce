import Link from 'next/link' 
import {useRouter} from 'next/router'
import {parseCookies} from 'nookies'
import cookie from 'js-cookie'

const Navbar=()=>{
  const router=useRouter();
  const cookies=parseCookies();
  //simple one is that ccokie m user ka role user nhi h to admin dikhau aur admin nhi h and wo create ki req kre to home 
  //p aa jy
  const user=cookies.user?JSON.parse(cookies.user):"";
  console.log("user show")
  console.log(user);
    //use router is used to get the route
    // we are having differnt links for the person who is logged in and also for the person who is not logged in ie
    //if a person is having cookie then he is logged in els not

    function isActive(route){
        if(route==router.pathname){
            return "active"
        }
        else ""
    }
    return (
        <nav>
        <div className="nav-wrapper #ff1744 red accent-3" >
          <Link href="/" className="brand-logo left">Mystore</Link>
          <ul id="nav-mobile" className="right ">
          <li className={isActive('/cart')}>    <Link href="/cart" >Cart</Link></li>
         { (user.role=='admin'|| user.role=='root')&&
           <li className={isActive('/create')}> <Link href="/create">Create</Link></li>
         }
          {user ?
         <>
           <li className={isActive('/account')}> <Link href="/account"> Account</Link></li>
           <li className={isActive('/logout')}>
             <button className="waves-effect waves-light btn" onClick={()=>{
             cookie.remove('token')
             cookie.remove('user')
             router.push('/login')
           }}>Logout</button></li>
         </>
         :<>
         <li className={isActive('/login')}> <Link href="/login"> Login</Link></li>
          <li className={isActive('/signup')}> <Link href="/signup">Signup</Link></li>
         </>   
        }
          </ul>
        </div>
      </nav>
    )
}
export default Navbar;