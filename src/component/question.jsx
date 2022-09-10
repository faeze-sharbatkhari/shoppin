import React from 'react';
import Collapsbtn from './collapsbutton';



const Question = () => {
    const answer=
{
    qsn1:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum, odio fuga quam magni consectetur earum vitae quaerat quae dignissimos dolorem beatae numquam rem! Consequatur odio officia maiores esse reiciendis?',
    qsn2:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nisi unde iusto repellat cum asperiores repellendus totam neque, atque, voluptatum ad, libero odit fuga maiores. Vero sunt accusantium incidunt voluptas!',
    qsn3:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nisi unde iusto repellat cum asperiores repellendus totam neque, atque, voluptatum ad, libero odit fuga maiores. Vero sunt accusantium incidunt voluptas!',
    qsn4:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nisi unde iusto repellat cum asperiores repellendus totam neque, atque, voluptatum ad, libero odit fuga maiores. Vero sunt accusantium incidunt voluptas!'

}

    return ( 
        <>
        <div className='border border-5 border-dark m-3 p-3' >
        <div className='border border-warning m-5 p-3  ' >
            <div className='border  border-danger m-5 p-3 d-grid'>
                <div>
                    <h1 className=' d-flex justify-content-center p-1 text-danger'>فروشگاه خانواده هلن</h1>
                </div>
                   <Collapsbtn name='qsn1' subject={answer.qsn1} id='qsn1-collapse-text'/>
                   <Collapsbtn name='qsn2' subject={answer.qsn2} id='qsn2-collapse-text'/>
                   <Collapsbtn name='qsn3 ' subject={answer.qsn3} id='qsn3-collapse-text'/>
                   <Collapsbtn name='qsn4 ' subject={answer.qsn4} id='qsn4-collapse-text'/>
              </div>  
            </div>
        </div>
      
       
        </>
     );
}
 
export default Question;

