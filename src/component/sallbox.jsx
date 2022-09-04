import React from 'react';
import { NavLink } from 'react-router-dom';
import Timer from './timer';

const Sallbox = () => {
    return ( 
        <div className='contanre  mt-3' style={{
            'position':'relative'
        }}>
            <NavLink to='/ProductSALL' className='col-md-4 m-3' >
                <img className='shadow-lg rounded'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3WWveLHkGrONHGC5rh8iqBmq8IpWpmih1A&usqp=CAU" alt="" width='100%'/>
            </NavLink>
            <div className='col-md-6 ' id='timer' style={{'position':'relative','left': '25%'}}>
            <Timer/>
            </div>
        </div>
     );
}
 
export default Sallbox;
