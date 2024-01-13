import React from 'react';
import coffeeImg from '../assets/coffee.png';
import {ItemProps} from '../type';
import '../App.css'
const Coffee: React.FC<ItemProps> = ({onClick}) => {

  return (
    <div className='elem' onClick={onClick}>
      <img src={coffeeImg} alt="coffee" style={{width: 85}}/>
      <div className='elem-description'>
        <h3 style={{marginTop: 0}}>Coffee</h3>
        <span>Price: 70 KGS</span>
      </div>
    </div>
  );
};

export default Coffee;