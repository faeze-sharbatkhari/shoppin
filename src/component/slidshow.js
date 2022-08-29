import React from 'react';
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages =[
    { url: 'https://tarahilogo.com/wp-content/uploads/2020/12/shop-banner-design-3_1-1536x801.jpg',caption:'o'},
    { url: 'https://mobi-soft.ir/wp-content/uploads/2020/08/%D8%AA%D8%A7%D8%B1%DB%8C%D8%AE%DA%86%D9%87-%D9%81%D8%B1%D9%88%D8%B4%DA%AF%D8%A7%D9%87-%D8%A7%DB%8C%D9%86%D8%AA%D8%B1%D9%86%D8%AA%DB%8C.jpg',caption:'oo'},
    { url: 'https://cdn.isna.ir/d/2018/10/14/3/57763049.jpg',caption:'ooo'},
    { url: 'https://tebanner.ir/wp-content/themes/tebanner%20final%2099/images/img/banner-sabet-sit-2.jpg',caption:'oooo'}
]


const Slideshow = () => {
    return ( 
      <div className='slide-container'>
        <Slide>
            {
                slideImages.map((slideImages,index)=>(
                    <div className='each-slide'  key={index}>
                        <div style={{'backgroundImage':`url(${slideImages.url})`,'height':'30rem'}}>
                            <span>{slideImages.caption}</span>
                         </div>
                    </div>
                ))
            }
        </Slide>

      </div>
     );
}
 
export default Slideshow;