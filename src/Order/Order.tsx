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
            <div style={{display: 'flex', justifyContent: 'space-between', width: '20%', alignItems: 'center'}}>
              <span>{dish.name}</span>
              <span>x{dish.count}</span>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '20%'}}>
              <span>{dishesPrice[index].price}</span>
              <button
                onClick={() => minusCount(index)}
                style={{padding: 10, background: 'red', cursor: 'pointer', border: 'none', borderRadius: 5}}
              >Delete</button>
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
    return (
      <>
        <h3>
          Order is empty!<br/>
          Please add some items!
        </h3>
      </>
    )
  }
};

export default Order;