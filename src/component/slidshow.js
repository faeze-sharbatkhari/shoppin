import React from 'react';
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImagesMd =[
    { url: 'https://tarahilogo.com/wp-content/uploads/2020/12/shop-banner-design-3_1-1536x801.jpg',caption:'o'},
    { url: 'https://mobi-soft.ir/wp-content/uploads/2020/08/%D8%AA%D8%A7%D8%B1%DB%8C%D8%AE%DA%86%D9%87-%D9%81%D8%B1%D9%88%D8%B4%DA%AF%D8%A7%D9%87-%D8%A7%DB%8C%D9%86%D8%AA%D8%B1%D9%86%D8%AA%DB%8C.jpg',caption:'oo'},
    { url: 'https://cdn.isna.ir/d/2018/10/14/3/57763049.jpg',caption:'ooo'},
    { url: 'https://tebanner.ir/wp-content/themes/tebanner%20final%2099/images/img/banner-sabet-sit-2.jpg',caption:'oooo'}
]
const slideImageXs=[
    {url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbdPuel-ztSGKkuYw3oWn6WLZ4FBYSgHzZyQ&usqp=CAU',caption:'oo',titel:'پشتیبانی 24 ساعته'},
    {url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgDX4rvwfXXjPeXuLGjKACuF_PL0BjvzheuQ&usqp=CAU',caption:'ooo',titel:'ارسال به همه جا'},
    {url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX3Qj_eGcJgHU9lD-S1sGVefEbKSfEiEAdHw&usqp=CAU',caption:'oooo',titel:'تخفیف های متعدد'},
    {url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG1t2Vra9i9zkqpjHAMBrDF7jbFWbHpMYzzA&usqp=CAU',caption:'oooo',titel:'ارسال فوری'}
]


const Slideshow = () => {
    return ( 
        <>
      <div className='slide-container d-none d-md-block'>
        <Slide>
            {
                slideImagesMd.map((slideImagesMd,index)=>(
                    <div className='each-slide'  key={index}>
                        <div style={{'backgroundImage':`url(${slideImagesMd.url})`,'height':'30rem'}}>
                            
                            <span>{slideImagesMd.caption}</span>
                         </div>
                    </div>
                ))
            }
        </Slide>

      </div>
      <div className='slide-container d-md-none'>
        <Slide>
            {
                slideImageXs.map((slideImageXs,index)=>(
                    <div className='each-slide'  key={index}>
                        <div style={{
                            'backgroundImage':`url(${slideImageXs.url})`,
                            'height':'30rem',
                            backgroundRepeat:'no-repeat',
                            backgroundSize:'cover'
                            }}>
                                
                            <span>{slideImageXs.caption}</span>
                            <p style={{
                                    display: 'flex',
                                    justifyContent:'center',
                                    fontSize:'xxx-large',
                                     color:'deeppink',
                                     textShadow: '2px 2px 0px black'
                             }}>{slideImageXs.titel}</p>
                         </div>
                         
                    </div>
                ))
            }
        </Slide>

      </div>
      
      </>
     );
}
 
export default Slideshow;