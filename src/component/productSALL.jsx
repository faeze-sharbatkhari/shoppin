import React,{useState} from 'react';
import './style/timer.css'
import Timer from './timer';

const ProductSALL = () => {
 
    return ( 
        
      <div style={{'backgroundImage':`url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3WWveLHkGrONHGC5rh8iqBmq8IpWpmih1A&usqp=CAU)`,
       }}>
        <div className='col-md-6 ' id='timer' style={{
            marginLeft: '25%',
      marginBottom: '25%',
      marginTop:'9%',
      border:'3px solid pink',
      boxShadow:' 10px 10px 12px black',
      backgroundColor: 'darkturquoise'
        }}>
        <Timer/>
        </div>
    </div>
        
     );
}
 
export default ProductSALL;