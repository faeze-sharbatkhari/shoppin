import React, {useState } from 'react';

import Navbar from "./component/navbar";
import Abouthelen from "./component/abouthelen";
import {Routes,Route} from 'react-router-dom'
import Home from "./component/Home";
import Question from "./component/question";
import Guide from "./component/ShoppingGuide";
import Suport from "./component/suport";
import Productstop from "./component/productTOP";
import Cart from "./component/cart";
import ProductsTSHW from './component/productsTSHW';
import ProductsTONIK from './component/productTONIK';
import ProductsPRH from './component/productPRH';
import ProductsSHLVR from './component/productsSHLVR';
import Footer from './component/footer';


function App() {
  const[cart,setcart]=useState([])
  const [cont,setcont]=useState(0)
const[colorvalu,setcolorvalue]=useState()
const[sizevalu,setsizevalue]=useState()

  const handleclick=(item)=>{
if (cart.indexOf(item) !== -1) return;

item.color=colorvalu
item.siz=sizevalu
 setcart([...cart,item]);
      setcont(cont+1)
   
    };

   const handleChangecolor=(e)=>{
     const colorvalue=e.target.value
    // document.getElementById('testid').value
    setcolorvalue(colorvalue)
    }
    const handleChangesize=(e)=>{
      const sizevalue=e.target.value
     // document.getElementById('testid').value
     setsizevalue(sizevalue)
     }
    

    const handleChange = (item, d) => {
      const ind = cart.indexOf(item);
      const arr = cart;
      arr[ind].amount += d;
  
      if (arr[ind].amount === 0) arr[ind].amount = 1;
      setcart([...arr]);
    };


  return (
   <>
 
  <Navbar cont={cont}/>
     <Routes>
       <Route path='/' element={<Home onClick={handleclick}/>} />  
       <Route path="/abouthelen" element={<Abouthelen/>} />
       <Route path='/question' element={<Question/>} />
       <Route path='/shoppingguide' element={<Guide/>} /> 
       <Route path='/suport' element={<Suport/>} /> 
        <Route path="/productTOP" element={<Productstop onClick={handleclick} onChange={handleChangecolor} onChangesiz={handleChangesize} />} /> 
        <Route path="/productsTSHW" element={<ProductsTSHW onClick={handleclick} onChange={handleChangecolor} onChangesiz={handleChangesize} />} /> 
        <Route path="/productsTONIK" element={<ProductsTONIK onClick={handleclick}  onChange={handleChangecolor} onChangesiz={handleChangesize}/>} /> 
        <Route path="/productsPRH" element={<ProductsPRH onClick={handleclick}  onChange={handleChangecolor}onChangesiz={handleChangesize}/>} /> 
        <Route path="/productsSHLVR" element={<ProductsSHLVR onClick={handleclick}  onChange={handleChangecolor} onChangesiz={handleChangesize}/>} /> 
        <Route path="/cart" element={<Cart cart={cart} setCart={setcart} handleChange={handleChange} cont={cont} setcont={setcont}  onChange={handleChangecolor} />} /> 
</Routes>
<Footer/>
   </>
  );
}

export default App;
