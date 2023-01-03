import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import DisplayProducts from './DisplayProducts'

const Cart = () => {

  let [cart, setCart] =useState([]);
  let [totalPrice, setTotalPrice] = useState([null]);

  useEffect(()=>{
    let cartArray = localStorage.getItem("cart");
    cartArray = JSON.parse(cartArray);
    setCart(cartArray);
    let t =cartArray.reduce((total,v)=>{return Number(v.discountPrice)+total},0)
    setTotalPrice(t+"Rupees");
  },[])

  return (
    <section className="cart-product">
      <div>
        <Navbar/>
        <h1>Cart Page</h1>

        {totalPrice && <h2>Total Price : {totalPrice}</h2>}

        <DisplayProducts products= {cart} />
        <button>Remove</button>

      </div>
    </section>
  )
}

export default Cart
