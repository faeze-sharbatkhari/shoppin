
import Product from './product';
import ProductNav from './productNav';
import productsTOP from './products';

const ProductsTONIK = ({onClick}) => {
  
    return ( 
        <>
        <ProductNav/>
        <div className='row'>
        {
            productsTOP.filter((item)=>{
                 return  item.id<22&&item.id>14
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
 
export default ProductsTONIK;