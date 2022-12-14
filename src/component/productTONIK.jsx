
import Product from './product';
import ProductNav from './productNav';
import products from './products';


const ProductsTONIK = ({onClick,onChange,onChangesiz}) => {
  
    return ( 
        <>
        <ProductNav/>
        <div className='row'>
        {
            products.filter((item)=>{
                 return  item.id<22&&item.id>14
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
 
export default ProductsTONIK;