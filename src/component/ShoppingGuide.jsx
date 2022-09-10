import React from 'react';
import Collapsbtn from './collapsbutton';



const Guide = () => {
    const purchaseSteps=
{
    انتخاب:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum, odio fuga quam magni consectetur earum vitae quaerat quae dignissimos dolorem beatae numquam rem! Consequatur odio officia maiores esse reiciendis?',
    اضافه:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nisi unde iusto repellat cum asperiores repellendus totam neque, atque, voluptatum ad, libero odit fuga maiores. Vero sunt accusantium incidunt voluptas!',
    سبدخرید:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nisi unde iusto repellat cum asperiores repellendus totam neque, atque, voluptatum ad, libero odit fuga maiores. Vero sunt accusantium incidunt voluptas!',
    ثبت:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nisi unde iusto repellat cum asperiores repellendus totam neque, atque, voluptatum ad, libero odit fuga maiores. Vero sunt accusantium incidunt voluptas!'

}

    return ( 
        <>
        <div className='border border-5 border-dark m-3 p-3' >
        <div className='border border-warning m-5 p-3  ' >
            <div className='border  border-danger m-5 p-3 d-grid'>
                <div>
                    <h1 className=' d-flex justify-content-center p-1 text-danger'>فروشگاه خانواده هلن</h1>
                </div>
                   <Collapsbtn name='انتخاب جنس' subject={purchaseSteps.انتخاب} id='guide1-collapse-text'/>
                   <Collapsbtn name='افزودن به سبد خرید' subject={purchaseSteps.اضافه} id='guide2-collapse-text'/>
                   <Collapsbtn name='کنترل سبد خرید' subject={purchaseSteps.سبدخرید} id='guide3-collapse-text'/>
                   <Collapsbtn name='ثبت و پرداخت' subject={purchaseSteps.ثبت} id='guide4-collapse-text'/>
              </div>  
            </div>
        </div>
      
       
        </>
     );
}
 
export default Guide;
