import React from 'react';
import friesImg from '../assets/fries.png';
import {ItemProps} from '../type';
import '../App.css';

const Fries: React.FC<ItemProps> = ({onClick}) => {

  return (
    <div className='elem' onClick={onClick}>
      <img src={friesImg} alt="fries" style={{width: 85}}/>
      <div className='elem-description'>
        <h3 style={{marginTop: 0}}>Fries</h3>
        <span>Price: 45 KGS</span>
      </div>
    </div>
  );
};

export default Fries;