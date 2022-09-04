import React from 'react';
import './style/navhom.css'
import {NavLink} from 'react-router-dom'

const Navbarhome = () => {
    return ( 
        <>
        <ul className="nav justify-content-around m-3 bg-dark p-3 fs-5 rounded">
  <li className="nav-item navhom">
    <NavLink className="nav-link active " aria-current="page" to="/ProductSALL">* فروش ویژه تابستانه *</NavLink>
  </li>
  <li className="nav-item navhom">
    <NavLink className="nav-link" to="/Productoffer">پیشنهاد های شگفت انگیز</NavLink>
  </li>
  <li className="nav-item navhom">
    <NavLink className="nav-link" to="/productTAK">تک های هلن</NavLink>
  </li>

<form className="d-flex " role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-warning" type="submit">Search</button>
      </form>
   </ul>   
        </>
     );
}
 
export default Navbarhome;
