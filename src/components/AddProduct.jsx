import { useRef } from "react"
import Navbar from "./Navbar"
import { useHistory } from "react-router-dom";


const AddProduct = ()=> {

  let h=useHistory();

    let pic = useRef();
    let brand = useRef();
    let desc = useRef();
    let discount = useRef();
    let mrp = useRef();
    let color = useRef();
    let fabric = useRef();
    let type = useRef();
    let rate = useRef();

      let handleSubmit = (e)=>{     //e-->event
        e.preventDefault()

        let newProduct = {
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
                newProduct.usage= inp.value;
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
        newProduct.size = sizeAvailable;

        fetch("http://localhost:4000/products",{method:"POST",
                                                 headers:{"Content-Type": "application/json"},
                                                 body: JSON.stringify(newProduct) 
                                                })
        .then(()=>{
          alert("new product has been added");
          h.push("/user");
        })                                        
      }

  return (
    <div className="add-product">
      <Navbar/>
        <h1>Add New Product </h1>
        <hr/>

      <form onSubmit={handleSubmit}>   
        <label>Picture</label>         <input type="url" ref={pic} />
        <label>Brand</label>           <input type="text" ref={brand} />
        <label>Description</label>     <textarea  cols="30" rows="10" ref={desc}></textarea>
        <label>Discount Price</label>  <input type="number" ref={discount} />
        <label>MRP</label>             <input type="number" ref={mrp} />
        <label>color</label>           <input type="text" ref={color}/>
        <label>Fabric</label>          <input type="text"  ref={fabric}/>
        <label>Product Type</label>    <input type="text"  ref={type}/>
        <label>Usage</label>           <div>
                                            <input type="radio" value="Male" name="gender" /> <label>Male</label> 
                                            <input type="radio" value="Female" name="gender" /> <label>Female</label> 
                                            <input type="radio"  value="Unisex" name="gender" /> <label>Unisex</label> 
                                        </div>
        <label>Rating</label>          <input type="number" ref={rate} step="0.1" min="1" max="5"  />
        <label>Size</label>         <div> 
                                      <input type="checkbox" value="s" name="size"/> <label>S</label>
                                      <input type="checkbox" value="m"  name="size"/> <label>M</label>
                                      <input type="checkbox" value="l" name="size"/> <label>L</label>
                                      <input type="checkbox" value="xl" name="size"/> <label>XL</label>
                                    </div>
        <input type="submit" />                            

      </form>
    </div>
  );
}

export default AddProduct;
