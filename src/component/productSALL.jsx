import React,{useState,useEffect} from 'react';
import './style/timer.css'
import Timer from './timer';
import productsTOP from './products';
import Product from './product';

const ProductSALL = (onClick,onChange,onChangesiz) => {
 
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const handlclick=()=>{
    setDays('00')
    setHours('00')
    setMinutes('00')
    setSeconds('00')
  }

  const deadline ="June, 22, 2023";
// "June, 22, 2023"
  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
  
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

    return ( 
      <>

      {
        minutes=='00'&& seconds=='00'&& hours=='00'&& days=='00' ? 
        <div className='row mt-1' style={{'background':'linear-gradient(-70deg, #00EAD3,#FFF5B7,#FF449F,#005F99)'}}>
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
         :

           <div style={{
          backgroundImage:`url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3WWveLHkGrONHGC5rh8iqBmq8IpWpmih1A&usqp=CAU)`,
           height:'44rem'
        }}>
         <div className='col-md-6 ' id='timer' style={{
          width: '70%',
          margin: 'auto',
       border:'3px solid pink',
       boxShadow:' 10px 10px 12px black',
       backgroundColor: 'darkturquoise'
         }}>
         <Timer/>
                 </div>
        <button onClick={handlclick} className='m-3 d-none'>test</button>         
                </div>
     
    } 
    </> 
       
     );
}
 
export default ProductSALL;