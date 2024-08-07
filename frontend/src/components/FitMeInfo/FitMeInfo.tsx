import React from "react";
import { Link } from "react-router-dom";
import useFitMeData  from '../../../server/hook/useFitMeRestaurants';
import DishCard01 from '../../assets/images/dishCard01.png';
import classes from './fitmeinfo.module.css';
import deliveryTime from '../../assets/images/deliveryTime.png';
import greenStar from '../../assets/images/greenStar.png';
import redStar from '../../assets/images/redStar.png';

const FitMeInfo: React.FC = () => {
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

  return (
    <ul className={classes.list}>
      {fitMeData.map((data) => (
        <li className={classes.li} key={data.id}>
          <Link className={classes.link} to={`/restaurant-page/${data.id}`}>
            <img src={DishCard01} alt="" />
            <div className={classes.infoContainer}>
              <h2 className={classes.name}>{data.name}</h2>
              <div className={classes.container}>
                <p>{data.location}</p>
                <picture className={classes.pictureRating}>
                  <img src={data.rating < 4 ? redStar : greenStar} alt="" />
                  <caption className={classes.captionRating}>{data.rating}</caption>
                </picture>
              </div>
              <picture className={classes.pictureDeliveryTime}>
                <img src={deliveryTime} alt="" />
                <caption className={classes.captionDeliveryTime}><p>{data.deliveryTime}</p></caption>
              </picture>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FitMeInfo;
