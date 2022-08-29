
import Product from './product';
import ProductNav from './productNav';
import productsTOP from './products';

const ProductsPRH = ({onClick}) => {
  
    return ( 
        <>
        <ProductNav/>
        <div className='row'>
        {
            productsTOP.filter((item)=>{
                 return  item.id<29&&item.id>21
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
 
export default ProductsPRH;