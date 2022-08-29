import React from 'react';

const Colors = ({Colorsname}) => {
    return ( 
       
        <>
{
    Colorsname.map((color)=>{
       return (
        <option value={color.index}>{color}</option>
        );
    })
}

        </> 
     );
}
 
export default Colors;
