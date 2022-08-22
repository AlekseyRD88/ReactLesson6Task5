import React from 'react';
import './index.scss';

const Spinner = ({ size }) => (
  <span 
    style={{
      width: size,
      height: size,
    }}
  className="spinner" 
  />
);


export default Spinner;