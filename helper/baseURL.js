//depending on the environment ki whether hamara project deployed h(production env) m h ya nhi we will decide the url
const baseURL=process.env==='production'?"https://mystoreAbhi25.vercel.app":"http://localhost:3000";
export default baseURL; 