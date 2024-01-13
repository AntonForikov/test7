import React from 'react';
import colaImg from '../assets/cola.png';
import {ItemProps} from '../type';

const Cola: React.FC<ItemProps> = ({onClick}) => {
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
      <img src={colaImg} alt="cola" style={{width: 85}}/>
      <div style={disStyle}>
        <h3 style={{marginTop: 0}}>Cola</h3>
        <span>Price: 40 KGS</span>
      </div>
    </div>
  );
};

export default Cola;