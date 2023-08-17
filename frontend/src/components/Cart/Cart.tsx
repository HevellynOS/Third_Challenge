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
    alert('Your order has been placed! Thank you for choosing FitMe. Total Price: $' + calculateTotalPrice().toFixed(2));
  };

  if (!fitMeData) {
    return null;
  }

  const [itemQuantities, setItemQuantities] = useState<{ [itemName: string]: number }>(
    propCartItems.reduce((quantities, item) => {
      quantities[item.name] = 1;
      return quantities;
    }, {})
  );

  const handleAddItem = (dishName: string) => {
    const updatedQuantities = { ...itemQuantities };
    updatedQuantities[dishName] = (updatedQuantities[dishName] || 0) + 1;
    setItemQuantities(updatedQuantities);
  };

  const handleRemoveSingleItem = (dishName: string) => {
    const updatedQuantities = { ...itemQuantities };
    updatedQuantities[dishName] = (updatedQuantities[dishName] || 1) - 1;
    if (updatedQuantities[dishName] <= 0) {
      delete updatedQuantities[dishName];
    }
    setItemQuantities(updatedQuantities);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const item of propCartItems) {
      const quantity = itemQuantities[item.name] || 1;
      totalPrice += item.price * quantity;
    }
    return totalPrice;
  };

  return (
    <article className={classes.articleCart}>
      <header className={classes.headerCart}>
        <h2>Cart</h2>
        <span>{propCartItems.length} Items</span>
      </header>
      <div className={classes.containerName}>
        <h3>from <strong>{fitMeData[0]?.name}</strong></h3>
      </div>
      <div className={classes.containerDishes}>
        {propCartItems.map((item, index) => (
          <div className={classes.containerDish} key={index}>
            <span>{item.name}</span>
            <span>${(item.price * (itemQuantities[item.name] || 1)).toFixed(2)}</span>
            <button onClick={() => handleAddItem(item.name)}>+</button>
            <span>{itemQuantities[item.name] || 1}</span>
            <button onClick={() => handleRemoveSingleItem(item.name)}>-</button>
          </div>
        ))}
      </div>
      <h5 className={classes.total}>Subtotal:<span> ${calculateTotalPrice().toFixed(2)}</span></h5>
      <p className={classes.extra}>Extra charges may apply</p>
      <Button
        text="Checkout"
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
