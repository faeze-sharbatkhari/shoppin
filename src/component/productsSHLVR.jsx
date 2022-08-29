
import Product from './product';
import ProductNav from './productNav';
import productsTOP from './products';

const ProductsSHLVR = ({onClick}) => {
  
    return ( 
        <>
        <ProductNav/>
        <div className='row'>
        {
            productsTOP.filter((item)=>{
                 return  item.id<36&&item.id>28
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
 
export default ProductsSHLVR;