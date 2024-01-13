// import { useState } from 'react';
import './App.css';
import Hamburger from './Hamburger/Hamburger.tsx';
import CheeseBurger from './CheeseBurger/CheeseBurger.tsx';
import Coffee from './Coffee/Coffee.tsx';
import Cola from './Cola/Cola.tsx';
import Fries from './Fries/Fries.tsx';
import Tea from './Tea/Tea.tsx';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Hamburger />
      <CheeseBurger />
      <Coffee />
      <Cola />
      <Fries />
      <Tea />
    </>
  )
}

export default App
