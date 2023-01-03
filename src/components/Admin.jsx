import React from 'react'
import useFetch from './useFetch'
import { Link } from 'react-router-dom'
import load from "../load.png"
import Navbar from './Navbar'


const Admin = () =>{

    let {data:products,pending, error}=useFetch("http://localhost:4000/products")

let handleDelete = (id)=>{
    fetch(`http://localhost:4000/products/${id}` , {method:"DELETE"})

    .then(()=>{
        alert("item has been delete");
        window.location.reload();
    })

}

  return (
    <div className="Admin">
        <Navbar />
        <h1>ADMIN PAGE</h1>
        <hr/>
        {error && <h1>{error}</h1>}
        {pending==true && <img src={load} className="loader"/> }

        <Link to="/addnewproduct">  <button className="add-pro-btn">Add New Product</button>  </Link> 
        

        { products && <table border="4px" >
            <thead>
                <th>Sl no.</th>
                <th>Product</th>
                <th>Ptoduct Type</th>
                <th colSpan="2">Action</th>
            </thead>
            <tbody>
                {
                    products.map((item,i)=>{
                        return (
                            <tr>
                                <td>{i+1}</td>
                                <td><img src={item.productPic} width="50px" height="50px" /></td>
                                <td>{item.productType}</td>
                                <td> 
                                     <Link to={`/updateproduct${item.id}`}> <button>Edit</button> </Link> </td>
                                <td> <button onClick={()=>{handleDelete(item.id)}}>Delete</button> </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>}
    </div>
  );
}

export default Admin;
