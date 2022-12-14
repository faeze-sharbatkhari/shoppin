import React, { useState, useEffect } from "react";
import './style/cart.css'


const Cart = ({ cart, setCart, handleChange,cont,setcont}) => {
  const [price, setPrice] = useState(0);
  


  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
    setcont(cont-1)
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.url} alt="" />
            <div>
            <p>{item.name}</p>
            <p>{item.color}</p>
            <p>{item.siz}</p>
       </div>

            </div>
         
        

       <div className="d-grid">
            <span className="price">{item.price}</span>
            <button className="removbtn" onClick={() => handleRemove(item.id)}>Remove</button>
            <div className="d-flex">
         <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
             </div>
       </div>   
       </div>
      ))}
      <div className="total">
        <div >
        <span className="d-grid">
         مبلغ قابل پرداخت: 
          <button style={{
                'backgroundColor': 'lightgreen',
                'padding': '5px 10px',
                'borderRadius': '5px',
                'marginRight': '10px',
                'borderColor': 'lightgreen'
          }}> پرداخت</button>
        </span>
        </div>
        <span>{price}<p>تومان</p></span>
      </div>
    </article>
  );
};

export default Cart;