import '../styles/globals.css'
import Layout from '../components/Layout'
//har ek  page wrapped hora h layout se
//inside this we can custommize the component individually
function MyApp({ Component, pageProps }) {
  return( <Layout>
  <Component {...pageProps} />
  </Layout>
    )}

export default MyApp
