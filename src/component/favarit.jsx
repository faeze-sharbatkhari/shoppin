import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Favarit = ({onClick}) => {
  const [favaritdress,setdress]=useState(
    [
    {id:'1',name:'پیراهن زنانه',price:300000,amount:1,url:require('./img/زن1.jpg'),colors:['مشکی','سفید','قرمز','ابی','صورتی']},
    {id:'2',name:'شلوار',price:300000,amount:1,url:require('./img/زن2.jpg'),colors:['مشکی','سفید','قرمز','ابی','صورتی']},
    {id:'3',name:'مانتو',price:300000,amount:1,url:require('./img/زن3.jpg'),colors:['مشکی','سفید','قرمز','ابی','صورتی']},
    {id:'4',name:'پیراهن مردانه',price:300000,amount:1,url:require('./img/مرد1.jpg'),colors:['مشکی','سفید','قرمز','ابی','صورتی']},
    {id:'5',name:'تیشرت',price:300000,amount:1,url:require('./img/مرد2.jpg'),colors:['مشکی','سفید','قرمز','ابی','صورتی']},
    {id:'6',name:' تیشرت',price:300000,amount:1,url:require('./img/مرد2.jpg'),colors:['مشکی','سفید','قرمز','ابی','صورتی']}
]
  )
 
    return ( 
        <>
        <div className='row '>
         {
            favaritdress.map((item)=>{
                return(
                    
                    <div className="col-xl-3 col-md-4 col-sm-5  text-center p-2 border border-dark rounded ">
                       <img  src={item.url} style={{'borderRadius': '30%','width':'200px','height':'200px' }} alt="" />
                       <h4>{item.name}</h4>
                       <h5>{item.price}تومان</h5>
                       <div className="row">
                        <div className="col-6">
                          
                        </div>
                        <div className="col-6">
                            <button className="btn btn-info btn-sm" onClick={()=>onClick(item)}>
                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                            <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0
                             0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5
                              0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                             </svg>
                            </button>
                        </div>
                       </div>
                    </div>
                    
               )
            })
        }
        </div>
      <NavLink to='/productsSHLVR' style={{'textDecoration':'none'}}><h4 className="m-3 p-3 border  border-top-0 border-danger Regular shadow" style={{'textAlign':'center','textDecoration':'none'}}>  مشاهده ی همه کارها</h4></NavLink>
        </>
     );
}
 
export default Favarit;