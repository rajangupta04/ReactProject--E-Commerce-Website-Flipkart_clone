import { Link } from "react-router-dom";

const DisplayProducts = ( {products , title} ) => {

  return ( 
      <div className="display-prod">
      <h1> {title} </h1>
      <div className="products">
      {
        products.map( (product)=>{
            return(
            <div className="product">
                <Link to={`/productDetails${product.id}`}>
                    <img src={product.productPic} alt="image not found" />
                    <h2>Brand : {product.brand}</h2>
                    <p>{product.description}</p>
                    <p>DiscountPrice : {product.discountPrice}</p> 
                    <small>MRP : {product.mrp}</small>
                </Link>
            </div>)
        })
       }
    </div>
    </div>
   );
}

export default DisplayProducts;




