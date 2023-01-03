
import DisplayProducts from "./DisplayProducts";
import Navbar from "./Navbar";
import useFetch from "./useFetch";
import load from "../load.png"
import { useEffect } from "react";


const Home = ()=> {

   let{data:products,pending,error} = useFetch("http://localhost:4000/products")

   useEffect(()=>{
    if(localStorage.getItem("cart")==null)
    {
      localStorage.setItem("cart","[]")
    }

   },[])
   
    return (
        <div className="home">
          <Navbar/>

          {error && <h1>{error}</h1> }
          {pending===true && <img src={load} className="loader"/>}
          {products && <DisplayProducts products={products} title="ALL PRODUCTS"/>}

        </div>
     );
}
export default Home;

