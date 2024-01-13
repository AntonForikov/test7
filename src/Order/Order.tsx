import React from 'react';
import {DishesCount} from '../type';
import {DishesPrice} from '../type';

interface Props {
  // name: string,
  // quantity: number
  // price: number
  dishesCount: DishesCount[],
  dishesPrice: DishesPrice[]
}
const Order: React.FC<Props> = ({dishesPrice, dishesCount}) => {
  const amount = dishesPrice.reduce((acc, dish, index) => {
    if (dishesCount[index].count > 0) {
      return acc + (dish.price * dishesCount[index].count);
    }
    return acc;
  }, 0);

  const result = <>
    {dishesCount.map((dish, index) => {
      if (dish.count > 0) {
        return (
          <>
            <div style={{display: 'flex', justifyContent: 'space-between', margin: '20px 0'}} key={Math.random()}>
              <div style={{display: 'flex', justifyContent: 'space-between', width: '30%'}}>
                <span>{dish.name}</span>
                <span>x{dish.count}</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', width: '30%'}}>
                <span>{dishesPrice[index].price}</span>
                <button>Delete</button>
              </div>
            </div>
          </>
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
  // return (
  //   <>
  //     {result}
  //     <h3 style={{textAlign: 'center'}}>Total price: {amount}</h3>
  //   </>


};

export default Order;