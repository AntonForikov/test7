import React from 'react';
import cheeseBurgerImg from '../assets/cheeseBurger.png';
import {ItemProps} from '../type';
import '../App.css';

const CheeseBurger: React.FC<ItemProps> = ({onClick}) => {

  return (
    <div className='elem' onClick={onClick}>
      <img src={cheeseBurgerImg} alt="cheesehamburger" style={{width: 85}}/>
      <div className='elem-description'>
        <h3 style={{marginTop: 0}}>Cheeseburger</h3>
        <span>Price: 90 KGS</span>
      </div>
    </div>
  );
};

export default CheeseBurger;