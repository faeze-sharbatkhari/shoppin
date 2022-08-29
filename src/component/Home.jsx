import React from 'react';
import Slideshow from './slidshow';
import Favarit from './favarit';
import Footer from './footer';

const Home = ({onClick}) => {
    return ( 
<>
<Slideshow/>
  <h2 className="m-3 p-3 border-bottom border-end border-danger Regular shadow" style={{'textAlign':'right'}}>تک های هلن</h2>
<Favarit onClick={onClick}/>

</>

     );
}
 
export default Home;