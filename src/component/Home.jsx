import React from 'react';
import Slideshow from './slidshow';
import SingleItems from './singleItems'
import Scrollbox from './scrollbox';
import Sallbox from './sallbox';
import Navbarhome from './navbarhome';


const Home = ({onClick,onChange,onChangesiz}) => {
    return ( 
<>
<Navbarhome/>
<Slideshow/>

<SingleItems onClick={onClick} onChangesiz={onChangesiz} onChange={onChange}/>
<Scrollbox onChange={onChange} onChangesiz={onChangesiz} onClick={onClick}/>
<Sallbox/>

</>

     );
}
 
export default Home;