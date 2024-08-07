import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import classes from './sectionrestaurant.module.css';
import Cart from '../Cart/Cart';
import useFitMeData from '../../../server/hook/useFitMeRestaurants';
import { TopDishData } from '../../../server/hook/useFitMeRestaurants';

import cartImg from '../../assets/images/cartImg.png';

const SectionRestaurant: React.FC = () => {
  const { fitMeData, loading, error } = useFitMeData();
  const { restaurantId } = useParams<{ restaurantId: string }>();

  const [selectedDish, setSelectedDish] = useState<TopDishData | null>(null);
  const [cartItems, setCartItems] = useState<TopDishData[]>([]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!fitMeData) {
    return null;
  }

  const selectedRestaurant = fitMeData.find(
    (restaurant) => restaurant.id === restaurantId
  );

  if (!selectedRestaurant) {
    return <p>Restaurant not found.</p>;
  }

  const { topDishes } = selectedRestaurant;

  const handleSendCart = () => {
    if (selectedDish) {
      setCartItems(prevCartItems => [...prevCartItems, selectedDish]);
      setSelectedDish(null);
    }
  };

  const handleSelectDish = (dish: TopDishData) => {
    setSelectedDish(dish);
  };

  return (
    <section className={classes.section}>
      <article className={classes.recommended}>
        <h3>Recommended</h3>
        <ul>
          {topDishes.slice(0, 4).map((dish) => (
            <li key={dish.name} onClick={() => handleSelectDish(dish)}>
              {dish.name}
            </li>
          ))}
        </ul>
      </article>
      <article className={classes.topDishes}>
        {selectedDish ? (
          <div className={classes.dish}>
            <h4>{selectedDish.name}</h4>
            <span>{selectedDish.price}</span>
            <p>{selectedDish.description}</p>
          </div>
        ) : (
          <p>Please select a dish from the list above.</p>
        )}
      </article>
      <div className={classes.cartADDContainer}>
        <img src={cartImg} className={classes.cartImg} alt="" />
        <button onClick={handleSendCart} className={classes.btn}>Add +</button>
      </div>
      <Cart fitMeData={fitMeData} cartItems={cartItems} setCartItems={setCartItems} />
    </section>
  );
};

export default SectionRestaurant;
