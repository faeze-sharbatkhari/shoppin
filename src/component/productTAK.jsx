import React from 'react';
import ProductNav from './productNav';
import productsTOP from './products';
import Product from './product';

const PrductTAK = ({onClick,onChange,onChangesiz}) => {
    return ( 
        <>
        <ProductNav/>
        <div className='row mt-1' style={{'backgroundColor':'pink'}}>
        {
            productsTOP.filter((item)=>{
                 return  item.id<64&&item.id>49
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
 
export default PrductTAK;
