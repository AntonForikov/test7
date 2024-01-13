import React from 'react';
import friesImg from '../assets/fries.png';
import {ItemProps} from '../type';

const Fries: React.FC<ItemProps> = ({onClick}) => {
  const elemStyle: React.CSSProperties = {
    width: '48%',
    display: 'flex',
    cursor: 'pointer',
    border: '1px solid black',
    borderRadius: '10px',
    padding: 5
  };

  const disStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginLeft: 10
  };

  return (
    <div style={elemStyle} onClick={onClick}>
      <img src={friesImg} alt="fries" style={{width: 85}}/>
      <div style={disStyle}>
        <h3 style={{marginTop: 0}}>Fries</h3>
        <span>Price: 45 KGS</span>
      </div>
    </div>
  );
};

export default Fries;