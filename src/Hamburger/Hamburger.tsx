import React from 'react';
import burgerImg from '../assets/hamburger.png';
import {ItemProps} from '../type';
import '../App.css'

const Hamburger: React.FC<ItemProps> = ({onClick}) => {
  return (
    <div className='elem' onClick={onClick}>
      <img src={burgerImg} alt="hamburger" style={{width: 85}}/>
      <div className='elem-description'>
        <h3 style={{marginTop: 0}}>Hamburger</h3>
        <span>Price: 80 KGS</span>
      </div>
    </div>
  );
};

export default Hamburger;