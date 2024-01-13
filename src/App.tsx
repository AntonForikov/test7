import {useState} from 'react';
import './App.css';
import Hamburger from './Hamburger/Hamburger.tsx';
import CheeseBurger from './CheeseBurger/CheeseBurger.tsx';
import Coffee from './Coffee/Coffee.tsx';
import Cola from './Cola/Cola.tsx';
import Fries from './Fries/Fries.tsx';
import Tea from './Tea/Tea.tsx';
import Order from './Order/Order.tsx';
import {DishesCount} from './type';

const dishesPrice = [
  {name: 'Hamburger', price: 80},
  {name: 'Cheeseburger', price: 90},
  {name: 'Coffee', price: 70},
  {name: 'Cola', price: 40},
  {name: 'Fries', price: 45},
  {name: 'Tea', price: 50},
];

function App() {
  const [dishesCount, setDishesCount] = useState<DishesCount[]>([
    {name: 'Hamburger', count: 0},
    {name: 'Cheeseburger', count: 0},
    {name: 'Coffee', count: 0},
    {name: 'Cola', count: 0},
    {name: 'Fries', count: 0},
    {name: 'Tea', count: 0},
  ]);

  const plusCount = (index: number) => {
    const dishesCountCopy = [...dishesCount];
    dishesCountCopy[index].count++;
    setDishesCount([...dishesCountCopy]);
  };

  return (
    <div className="main">
      <div className="order">
        <h2 className="title">Order Details: </h2>
        <Order dishesCount={dishesCount} dishesPrice={dishesPrice} />
      </div>
      <div className="menu">
        <h2 className="title">Add items: </h2>
        <Hamburger onClick={() => plusCount(0)} key={Math.random()} />
        <CheeseBurger onClick={() => plusCount(1)} key={Math.random()} />
        <Coffee onClick={() => plusCount(2)} key={Math.random()} />
        <Cola onClick={() => plusCount(3)} key={Math.random()} />
        <Fries onClick={() => plusCount(4)} key={Math.random()} />
        <Tea onClick={() => plusCount(5)} key={Math.random()} />
      </div>
    </div>
  );
}

export default App;
