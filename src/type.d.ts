import React from 'react';

export interface DishesCount {
  name: string,
  count: number
}

export interface DishesPrice {
  name: string,
  price: number
}

export interface ItemProps {
  onClick: React.MouseEventHandler
}