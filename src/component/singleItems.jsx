import React from 'react';
import './style/favarit.css'
import products from './products';
import Product from './product';
import { NavLink } from 'react-router-dom';

const SingleItems = ({onClick,onChange,onChangesiz}) => {
    return ( 
        <>
       <h1 className='p-3 shadow-lg m-5' id='takhelen'>تک های هلن</h1>

       <div className="row d-md-none" style={{'backgroundColor':'pink'}}>
    {
            products.filter((item)=>{
                 return item.id<53 && item.id>49;
            }).map((item)=>{
                return <Product 
                key={item.id}
                item={item}
                onClick={onClick}
                onChange={onChange}
                onChangesiz={onChangesiz}
                />
              
               })
             
        }

  <div className=' d-flex align-items-center p-5 border rounded-circle border-5'>
  <NavLink to='/Productoffer' className='text-light fs-1 ' style={{
                  textDecoration: 'none',
                  margin: 'auto',
                 
            }}>
      بیشتر ببینید
  </NavLink>
</div>
</div>

        <div className="scrollmenu d-none d-md-flex" id='takscroll'>
        
       {
            products.filter((item)=>{
                 return item.id<57 && item.id>49;
            }).map((item)=>{
                return <Product 
                key={item.id}
                item={item}
                onClick={onClick}
                onChange={onChange}
                onChangesiz={onChangesiz}
                />
              
               })
             
        }
        <div className=' d-flex align-items-center p-5 border rounded-circle'>
            <NavLink className='text-light fs-1' to='/productTAK'>بیشتر ببینید
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
  <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
  <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
            </NavLink>
        </div>
        </div>
        </>
     );
}

 
export default SingleItems;