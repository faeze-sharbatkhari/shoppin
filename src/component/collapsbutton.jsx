import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Collapsbtn(props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
      className='m-2'
        onClick={() => setOpen(!open)}
        aria-controls={props.id}
        aria-expanded={open}
      >
        {props.name}
      </Button>
      <Collapse in={open}>
        <div id={props.id} className='text-center bg-warning  rounded-pill p-3' style={{}}>
         {props.subject}
          </div>
      </Collapse>
    </>
  );
}
export default Collapsbtn;