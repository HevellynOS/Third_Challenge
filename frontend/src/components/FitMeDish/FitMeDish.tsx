import React from 'react';
import useFitMeData from '../../../server/hook/useFitMeRestaurants';
import starGreen from '../../assets/images/greenStar.png';
import redStar from '../../assets/images/redStar.png';
import classes from './fitmedish.module.css'

interface FitMeDishProps {
  selectedRestaurantId: string;
}

const FitMeDish: React.FC<FitMeDishProps> = ({ selectedRestaurantId }) => {
  const { fitMeData, loading, error } = useFitMeData();

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
    (restaurant) => restaurant.id === selectedRestaurantId
  );

  if (!selectedRestaurant) {
    return <p>Restaurant not found.</p>;
  }

  const { name, location, rating, deliveryTime } = selectedRestaurant;

  return (
    <div className={classes.container}>
      <div className={classes.dish}>
        <h2>{name}</h2>
        <p>{location}</p>
        <div className={classes.infos}>
          <div className={classes.ratingsData}>
            {rating < 4 ? (
              <img src={redStar} alt="Red Star" />
            ) : (
              <img src={starGreen} alt="Green Star" />
            )}
            <span>{rating}</span>
            <span>100+ ratings</span>
          </div>
          <p className={classes.p}>{deliveryTime} Delivery Time</p>
          <div className={classes.cost}>
            <span>200</span>
            <p>Cost for two</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitMeDish;
