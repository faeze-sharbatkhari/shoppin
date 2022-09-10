import React from 'react';
import Collapsbtn from './collapsbutton';




const Abouthelen = () => {
    const subject=
{
    تاریخ : '1395/1/1',
    تاریخچه:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nisi unde iusto repellat cum asperiores repellendus totam neque, atque, voluptatum ad, libero odit fuga maiores. Vero sunt accusantium incidunt voluptas!',
    نحوههمکاری:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nisi unde iusto repellat cum asperiores repellendus totam neque, atque, voluptatum ad, libero odit fuga maiores. Vero sunt accusantium incidunt voluptas!',
}

    return ( 
        <>
        <div className='border border-5 border-dark m-3 p-3' >
        <div className='border border-warning m-5 p-3  ' >
            <div className='border  border-danger m-5 p-3 d-grid'>
                <div>
                    <h1 className=' d-flex justify-content-center p-1 text-danger'>فروشگاه خانواده هلن</h1>
                </div>
                   <Collapsbtn name='تاریخ افتتاح' subject={subject.تاریخ} id='date-collapse-text'/>
                   <Collapsbtn name='تاریخچه هلن' subject={subject.تاریخچه} id='histori-collapse-text'/>
                   <Collapsbtn name='نحوه همکاری' subject={subject.نحوههمکاری} id='work-collapse-text'/>
              </div>  
            </div>
        </div>
     
        </>
     );
}
 
export default Abouthelen;

