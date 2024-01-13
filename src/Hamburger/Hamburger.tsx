import React from 'react';
import burgerImg from '../assets/hamburger.png'
const Hamburger = () => {
  const elemStyle: React.CSSProperties = {
    display: 'flex',
    cursor: 'pointer',
    border: '1px solid black',
    borderRadius: '10px',
    padding: 5
  }

  const disStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginLeft: 10
  }

  return (
    <div style={elemStyle}>
      <img src={burgerImg} alt='hamburger' style={{width: 85}}/>
      <div style={disStyle}>
        <h3 style={{marginTop: 0}}>Hamburger</h3>
        <span>Price: 80 KGS</span>
      </div>
    </div>
  );
};

export default Hamburger;