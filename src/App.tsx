import { useState } from 'react';
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

  const minusCount = (index: number) => {
    // if (ingredientCount[index].count !== 0) {
    //   const ingredientCountCopy = [...ingredientCount];
    //   ingredientCountCopy[index].count--;
    //   setIngredientCount([...ingredientCountCopy]);
    // }
    if (dishesCount[index].count !== 0) {
      setDishesCount(prevState => {
        prevState[index].count--;
        return [...prevState];
      });
    }
  };

  return (
    <div className='main'>
      <div className="order">
        <h2 className="title">Order Details: </h2>
        <Order dishesCount={dishesCount} dishesPrice={dishesPrice} />

        {/*Order is empty!<br/>*/}
        {/*Please add some items!*/}
      </div>
      <div className="menu">
        <h2 className='title'>Add items: </h2>
        <Hamburger onClick={() => plusCount(0)}/>
        <CheeseBurger onClick={() => plusCount(1)}/>
        <Coffee onClick={() => plusCount(2)}/>
        <Cola onClick={() => plusCount(3)}/>
        <Fries onClick={() => plusCount(4)}/>
        <Tea onClick={() => plusCount(5)}/>
      </div>
    </div>
  );
}

export default App;
