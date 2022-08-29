import React from 'react';
import Product from './product';
import ProductNav from './productNav';
import productsTOP from './products';

const Productstop = ({onClick}) => {
  
    return ( 
        <>
        <ProductNav/>
        <div className='row'>
        {
            productsTOP.filter((item)=>{
                 return item.id<8
            }).map((item)=>{
                return <Product 
                key={item.id}
                item={item}
                onClick={onClick}
                
                />
              
               })
              
        }
        </div>
       </>
     );
}
 
export default Productstop;