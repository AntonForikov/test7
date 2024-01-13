import React from 'react';
import burgerImg from '../assets/hamburger.png';
import {ItemProps} from '../type';

const Hamburger: React.FC<ItemProps> = ({onClick}) => {
  const elemStyle: React.CSSProperties = {
    width: '46%',
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
      <img src={burgerImg} alt="hamburger" style={{width: 85}}/>
      <div style={disStyle}>
        <h3 style={{marginTop: 0}}>Hamburger</h3>
        <span>Price: 80 KGS</span>
      </div>
    </div>
  );
};

export default Hamburger;