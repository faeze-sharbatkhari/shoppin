import React from 'react';
import ProductNav from './productNav';
import products from './products';
import Product from './product';

const Prductoffer = ({onClick,onChange,onChangesiz}) => {
    return ( 
        <>
        <ProductNav/>
        <div className='row mt-1' style={{'backgroundColor':' cornflowerblue'}}>
        {
            products.filter((item)=>{
                 return  item.id<50&&item.id>35
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
 
export default Prductoffer;