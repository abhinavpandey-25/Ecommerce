import Navbar from './NavBar'
import Head from 'next/head'
//inside the layout individul component is receeived as children

const layout=({children})=>{
    return (
        <div>
            {/* Head ke andar ham jo bhi link dalenge woh htnl ke head m add ho jyga */}
            <Head>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            <link rel="stylesheet" href="/style.css"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
</link>
            </Head>

            <Navbar/>
{/* as we request for the product page noe this page is wrapped inside the layout in app so layout will have this component as 
a children */}
            {children}
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        </div>
    )
}
export default layout;