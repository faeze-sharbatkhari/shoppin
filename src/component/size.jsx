import React from 'react';

const Size = ({sizename}) => {
    return ( 
       
        <>
{
    sizename.map((size)=>{
       return (
        <option value={size.index}>{size}</option>
        );
    })
}
        </> 
     );
}
 
export default Size;