import React from 'react';
import colaImg from '../assets/cola.png';
import {ItemProps} from '../type';
import '../App.css'

const Cola: React.FC<ItemProps> = ({onClick}) => {

  return (
    <div className='elem' onClick={onClick}>
      <img src={colaImg} alt="cola" style={{width: 85}}/>
      <div className='elem-description'>
        <h3 style={{marginTop: 0}}>Cola</h3>
        <span>Price: 40 KGS</span>
      </div>
    </div>
  );
};

export default Cola;