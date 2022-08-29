
import Product from './product';
import ProductNav from './productNav';
import productsTOP from './products';

const ProductsTSHW = ({onClick}) => {
  
    return ( 
        <>
        <ProductNav/>
        <div className='row'>
        {
            productsTOP.filter((item)=>{
                 return  item.id<15&&item.id>7
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
 
export default ProductsTSHW;