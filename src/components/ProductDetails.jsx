import { useParams } from "react-router-dom"
import Navbar from "./Navbar";
import useFetch from "./useFetch";
import load from "../load.png"


const ProductDetails = ()=> {

    let {id} = useParams();

    let {data:product,pending,error}= useFetch(`http://localhost:4000/products/${id}`)

    let handleCart = ()=>{

      let cartArray = localStorage.getItem("cart");
      cartArray = JSON.parse(cartArray);

      let present = cartArray.some((item)=>{return item.id == product.id})

      if(present == false)
      {
       cartArray.push(product);
       cartArray = JSON.stringify(cartArray);
       localStorage.setItem("cart" , cartArray)
       alert("item has been added to the cart");
      }
      else
      {
       alert("item already been added")
      }
   }



  return (
    <div className="Product-Detail ">
      <Navbar/>
        <h2>Product Detail Page</h2>
        <hr />
        
        {error && <h1>{error}</h1>}
        {pending==true && <img src={load} className="loader"/> }
        {product && <div className="product-detail">
                        <img src={product.productPic} alt="image not found" />
                        <h3>Brand : {product.brand}</h3>
                        <p>{product.description}</p>
                        <p>DiscountPrice : {product.discountPrice}</p> 
                        <small>MRP : {product.mrp}</small>

                        <button className="cart-btn"  onClick={handleCart} >Add to cart</button>
                    </div>}
    </div>
  )
}

export default ProductDetails
