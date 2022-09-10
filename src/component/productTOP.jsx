import React from 'react';
import Product from './product';
import ProductNav from './productNav';
import products from './products';

const Productstop = ({onClick,onChange,onChangesiz}) => {
  
    return ( 
        <>
        <ProductNav/>
        <div className='row'>
        {
            products.filter((item)=>{
                 return item.id<8
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
        </div>
       </>
     );
}
 
export default Productstop;