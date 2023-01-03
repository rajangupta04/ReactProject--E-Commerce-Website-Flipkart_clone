import { useRef } from 'react';
import { useParams , useHistory} from 'react-router-dom';
import Navbar from './Navbar';
import useFetch from './useFetch';

const Update = () => {

    let {id} = useParams();

    let{data: product, pending, error} = useFetch(`http://localhost:4000/products/${id}`)
 
    let h = useHistory();

    let pic = useRef();
    let brand = useRef();
    let desc = useRef();
    let discount = useRef();
    let mrp = useRef();
    let color = useRef();
    let fabric = useRef();
    let type = useRef();
    let rate = useRef();

      let handleSubmit = (e)=>{
        e.preventDefault()

        let updatedProduct = {
          productPic: pic.current.value,
          brand: brand.current.value,
          description: desc.current.value,
          discountPrice: discount.current.value,
          mrp: mrp.current.value,
          color: color.current.value,
          fabric: fabric.current.value,
          productType: type.current.value,
          usage: "",
          rating: rate.current.value,
          size: []
        }

         let genderOptions = document.getElementsByName("gender");
         genderOptions.forEach((inp)=>{
              if(inp.checked==true)
              {
                updatedProduct.usage= inp.value;
              }
         }) 

        let sizeAvailable=[]
        let sizeOptions = document.getElementsByName("size");
        sizeOptions.forEach((inp)=>{
            if(inp.checked==true)
            {
              sizeAvailable.push(inp.value);
            }
        })
        updatedProduct.size = sizeAvailable;

        fetch("http://localhost:4000/products",{method:"PUT",
                                                 headers:{"Content-Type": "application/json", "Accept-Type" : "application/json"},
                                                 body: JSON.stringify(updatedProduct) 
                                                })

        .then(()=>{
          alert("Product has been updated");
          h.push("/admin");
        })                                        
      }

  return (
    <div className="add-product">
      <Navbar/>
        <h1>Update the  Product {id} </h1>
        <hr/>

        {product &&  <form onSubmit={handleSubmit}>   
        <label>Picture</label>         <input type="url" ref={pic} defaultValue={product.productPic} />
        <label>Brand</label>           <input type="text" ref={brand} defaultValue={product.brand} />
        <label>Description</label>     <textarea  cols="30" rows="10" ref={desc} defaultValue={product.description}></textarea>
        <label>Discount Price</label>  <input type="number" ref={discount} defaultValue={product.discountPrice} />
        <label>MRP</label>             <input type="number" ref={mrp} defaultValue={product.mrp} />
        <label>color</label>           <input type="text" ref={color} defaultValue={product.color} />
        <label>Fabric</label>          <input type="text"  ref={fabric} defaultValue={product.fabric} />
        <label>Product Type</label>    <input type="text"  ref={type} defaultValue={product.productType} />
        <label>Usage</label>           <div>
                                            <input type="radio" value="Male" name="gender" /> <label>Male</label> 
                                            <input type="radio" value="Female" name="gender" /> <label>Female</label> 
                                            <input type="radio"  value="Unisex" name="gender" /> <label>Unisex</label> 
                                        </div>
        <label>Rating</label>          <input type="number" ref={rate} defaultValue={product.rating} step="0.1" min="1" max="5"  />
        <label>Size</label>         <div> 
                                      <input type="checkbox" value="s" name="size"/> <label>S</label>
                                      <input type="checkbox" value="m"  name="size"/> <label>M</label>
                                      <input type="checkbox" value="l" name="size"/> <label>L</label>
                                      <input type="checkbox" value="xl" name="size"/> <label>XL</label>
                                    </div>

        <input type="submit" value="Update" />

        </form>} 

     </div> 
  )                             
}

export default Update



