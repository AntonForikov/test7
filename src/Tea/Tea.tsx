import React from 'react';
import teaImg from '../assets/tea.png';

const Tea = () => {
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
      <img src={teaImg} alt='tea' style={{width: 85}}/>
      <div style={disStyle}>
        <h3 style={{marginTop: 0}}>Tea</h3>
        <span>Price: 50 KGS</span>
      </div>
    </div>
  );
};

export default Tea;