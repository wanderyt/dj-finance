import React from 'react';
import spinner from './Spinner.svg'

const Spinner = (props) => {
  return (
    <div>
      <img src={spinner} alt="Spinner" style={{width: '100%'}}/>
    </div>
  )
};

export default Spinner;
