
import Product from './product';
import ProductNav from './productNav';
import products from './products';

const ProductsPRH = ({onClick,onChange,onChangesiz}) => {
  
    return ( 
        <>
        <ProductNav/>
        <div className='row'>
        {
            products.filter((item)=>{
                 return  item.id<29&&item.id>21
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
 
export default ProductsPRH;