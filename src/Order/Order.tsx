import React, {useState} from 'react';
import {DishesCount} from '../type';
import {DishesPrice} from '../type';

interface Props {
  dishesCount: DishesCount[],
  dishesPrice: DishesPrice[],
}

const Order: React.FC<Props> = ({dishesPrice, dishesCount}) => {
  const [order, setOrder] = useState(dishesCount);

  const amount = dishesPrice.reduce((acc, dish, index) => {
    if (order[index].count > 0) {
      return acc + (dish.price * order[index].count);
    }
    return acc;
  }, 0);

  const minusCount = (index: number) => {
    if (order[index].count !== 0) {
      const orderCopy = [...order];
      orderCopy[index].count--;
      setOrder([...orderCopy]);
    }
  };

  const result = <>
    {order.map((dish, index) => {
      if (dish.count > 0) {
        return (
          <div style={{display: 'flex', justifyContent: 'space-between', margin: '20px 0'}} key={Math.random()}>
            <div style={{display: 'flex', justifyContent: 'space-between', width: '30%'}}>
              <span>{dish.name}</span>
              <span>x{dish.count}</span>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', width: '30%'}}>
              <span>{dishesPrice[index].price}</span>
              <button onClick={() => minusCount(index)}>Delete</button>
            </div>
          </div>
        );
      }
    })}
  </>;

  if (amount > 0) {
    return (
      <>
        {result}
        <h3 style={{textAlign: 'center'}}>Total price: {amount}</h3>
      </>
    );
  } else {
    return <>
      Order is empty!<br/>
      Please add some items!
    </>;
  }
};

export default Order;