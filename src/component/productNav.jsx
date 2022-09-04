import React from 'react';
import { NavLink } from 'react-router-dom';

const ProductNav = () => {
    return (  
        <>
        <nav class="nav nav-pills nav-fill">
  <NavLink className="nav-link active bg-danger text-light" to="/productTOP">تاپ</NavLink>
  <NavLink className="nav-link bg-danger text-light" to="/productsTSHW">تیشرت زنانه</NavLink>
  <NavLink className="nav-link bg-danger text-light" to="/productsTONIK">تونیک</NavLink>
  <NavLink className="nav-link bg-danger text-light" to="/productsPRH">پیراهن زنانه</NavLink>
  <NavLink className="nav-link bg-danger text-light" to="/productsSHLVR">شلوار زنانه</NavLink>
  <NavLink className="nav-link bg-danger text-light" to="/productTAK">تک های هلن</NavLink>
  
</nav>
        </>
    );
}
 
export default ProductNav;