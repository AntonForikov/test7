import React from 'react';
import cheeseBurgerImg from '../assets/cheeseBurger.png';
import {ItemProps} from '../type';

const CheeseBurger: React.FC<ItemProps> = ({onClick}) => {
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
    marginLeft: 10
  };

  return (
    <div style={elemStyle} onClick={onClick}>
      <img src={cheeseBurgerImg} alt="cheesehamburger" style={{width: 85}}/>
      <div style={disStyle}>
        <h3 style={{marginTop: 0}}>Cheeseburger</h3>
        <span>Price: 90 KGS</span>
      </div>
    </div>
  );
};

export default CheeseBurger;