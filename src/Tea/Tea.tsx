import React from 'react';
import teaImg from '../assets/tea.png';
import {ItemProps} from '../type';
import '../App.css';

const Tea: React.FC<ItemProps> = ({onClick}) => {
  return (
    <div className='elem' onClick={onClick}>
      <img src={teaImg} alt="tea" style={{width: 85}}/>
      <div className='elem-description'>
        <h3 style={{marginTop: 0}}>Tea</h3>
        <span>Price: 50 KGS</span>
      </div>
    </div>
  );
};

export default Tea;