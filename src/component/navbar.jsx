import React,{useState} from "react";
import {NavLink,Outlet} from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Login from "./login";


const Navbar =({cont})=>{
  const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return( 
        <>
              <nav className="navbar navbar-expand-md bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand text-danger " to="/"><h1>HELEN</h1></NavLink>
    <button  onClick={handleShow} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse mt-3 " id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/abouthelen">درباره هلن</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/question">سوال های متدوال</NavLink>
     </li>
     
     <li className="nav-item">
        <NavDropdown id="nav-dropdown-dark-example" title="دسته بندی ها">
            <NavLink className="nav-link active" to='/productTOP'>تاپ</NavLink> 
            <NavLink className="nav-link active" to='/productsTSHW'> تیشرت زنانه</NavLink>
            <NavLink className="nav-link active" to='/productsTONIK'>تونیک</NavLink>
            <NavLink className="nav-link active" to='/productsPRH'>پیراهن زنانه</NavLink>
            <NavLink className="nav-link active" to='/productsSHLVR'>شلوار زنانه</NavLink>
            {/* <NavLink className="nav-link active" to='/abouthelen'>شلوار مردانه</NavLink>
            <NavLink className="nav-link active" to='/abouthelen'> تیشرت مردانه</NavLink>
            <NavLink className="nav-link active" to='/abouthelen'>پیراهن مردانه</NavLink>
            <NavLink className="nav-link active" to='/abouthelen'>هودی</NavLink>
            <NavLink className="nav-link active" to='/abouthelen'>کاپشن</NavLink> */}
            </NavDropdown>
        </li>

   <li className="nav-item">
         <Login/>
     </li>
     <li className="nav-item" style={{'marginTop':'-0.5rem'}}>
<button className="btn btn-light d-flex">
  <NavLink className='nav-link active text-dark' to="/cart">
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
      </svg>
      <span className="text-white bg-danger  rounded-circle p-1 mt-1">{cont}</span>
      </NavLink>
</button>
     </li>
      </ul>
    </div>
  </div>
</nav>

{/* //menu  */}
<div>
<Offcanvas show={show} onHide={handleClose} Placement='end' >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-danger">DRESS HELEN</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <nav class="nav  flex-column">
        <button className="btn btn-light d-flex" style={{'alignItems':'center'}}>
<NavLink to="/cart" 
style={{
  'textDecoration': 'none',
    'color':'black',
    'margin':'auto'
}}
>
سبد خرید
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
      </svg>
      <span className="text-white bg-danger  rounded-circle p-1 mt-1">{cont}</span>
</NavLink>
</button>
  <Login/>
  <NavLink className="nav-link text-dark" to="/question">سوال های متدوال</NavLink>
  <NavLink className="nav-link text-dark" to="/abouthelen">درباره هلن</NavLink>
  <li className="nav-item text-dark">
        <NavDropdown className="text-dark" id="nav-dropdown-dark-example" title="دسته بندی ها">
      
            <NavLink className="nav-link active text-dark" to='/productTOP'>تاپ</NavLink> 
            <NavLink className="nav-link active text-dark" to='/productsTSHW'> تیشرت زنانه</NavLink>
            <NavLink className="nav-link active text-dark" to='/productsTONIK'>تونیک</NavLink>
            <NavLink className="nav-link active text-dark" to='/productsPRH'>پیراهن زنانه</NavLink>
            <NavLink className="nav-link active text-dark" to='/productsSHLVR'>شلوار زنانه</NavLink>
            {/* <NavLink className="nav-link active text-dark" to='/abouthelen'>شلوار مردانه</NavLink>
            <NavLink className="nav-link active text-dark" to='/abouthelen'> تیشرت مردانه</NavLink>
            <NavLink className="nav-link active text-dark" to='/abouthelen'>پیراهن مردانه</NavLink>
            <NavLink className="nav-link active text-dark" to='/abouthelen'>هودی</NavLink>
            <NavLink className="nav-link active text-dark" to='/abouthelen'>کاپشن</NavLink> */}
            </NavDropdown>
        </li>
</nav>
        </Offcanvas.Body>
      </Offcanvas>
</div>
<Outlet />
        </>
    );
}

export default Navbar;