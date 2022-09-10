
import Product from './product';
import ProductNav from './productNav';
import products from './products';

const ProductsTSHW = ({onClick,onChange,onChangesiz}) => {
  
    return ( 
        <>
        <ProductNav/>
        <div className='row'>
        {
            products.filter((item)=>{
                 return  item.id<15&&item.id>7
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
 
export default ProductsTSHW;