import React, { useState } from 'react';
import Button from '../Button/Button';
import { FitMeData, TopDishData } from '../../../../backend/hooks/useFitMeData';
import classes from './cart.module.css';

interface CartProps {
  fitMeData: FitMeData[] | null;
  cartItems: TopDishData[];
  setCartItems: React.Dispatch<React.SetStateAction<TopDishData[]>>;
}

const Cart: React.FC<CartProps> = ({ fitMeData, cartItems: propCartItems, setCartItems }) => {
  const handleOrder = () => {
    alert('Your order has been placed! Thank you for choosing FitMe.');
  };

  if (!fitMeData) {
    return null;
  }

  // Calculate the total price of items in the cart
  const totalPrice = propCartItems.reduce((total, item) => total + item.price, 0);

  const handleAddItem = (dishName: string) => {
    console.log(`Adding item: ${dishName}`);
    const dishToAdd = fitMeData[0].topDishes.find(dish => dish.name === dishName);
    if (dishToAdd) {
      const updatedCartItems = [...propCartItems, dishToAdd];
      setCartItems(updatedCartItems);
    }
  };

  const handleRemoveSingleItem = (dishName: string) => {
    const updatedCartItems = [...propCartItems];
    const index = updatedCartItems.findIndex(item => item.name === dishName);
    if (index !== -1) {
      updatedCartItems.splice(index, 1);
      setCartItems(updatedCartItems);
    }
  };

  // Create an object to keep track of how many of each dish has been selected
  const dishCounts: Record<string, number> = {};

  // Count the occurrences of each dish in the cart
  propCartItems.forEach((item) => {
    if (dishCounts[item.name]) {
      dishCounts[item.name]++;
    } else {
      dishCounts[item.name] = 1;
    }
  });

  return (
    <article className={classes.articleCart}>
      <header className={classes.headerCart}>
        <h2>Cart</h2>
        <span>{propCartItems.length} Items</span>
      </header>
      <div className={classes.containerName}>
        <h3>from <strong>{fitMeData && fitMeData[0].name}</strong></h3>
      </div>
      <div className={classes.containerDishes}>
        {propCartItems.map((item, index) => (
          <div className={classes.containerDish} key={index}>
            <span>{item.name}</span>
            <span>{item.price}</span>
            <button onClick={() => handleAddItem(item.name)}>+</button>
            <span>+ {dishCounts[item.name]} -</span>
            <button onClick={() => handleRemoveSingleItem(item.name)}>-</button>
          </div>
        ))}
      </div>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      <Button
        text="Place Order"
        click={handleOrder}
        color="#FFFFFF"
        backgroundcolor="#FC8019"
        width="365px"
        height="66px"
        radius="10px"
      />
    </article>
  );
};

export default Cart;
