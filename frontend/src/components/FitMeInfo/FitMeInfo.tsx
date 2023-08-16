import React, { useState, useEffect } from "react";
import fetchData from "../../../../backend/index";
import DishCard01 from '../../assets/images/dishCard01.png'
import classes from './fitmeinfo.module.css';
import deliveryTime from '../../assets/images/deliveryTime.png';
import greenStar from '../../assets/images/greenStar.png';
import redStar from '../../assets/images/redStar.png';
import { Link } from "react-router-dom";

interface FitMeData {
  objectId: string;
  name: string;
  rating: number;
  deliveryTime: string;
  isExpensive: boolean;
  location: string;
  topDishes: string[];
}

const FitMeInfo: React.FC = () => {
  const [datas, setDatas] = useState<FitMeData[]>([]);

  const getInfo = async () => {
    try {
      const response = await fetchData.get("classes/FitMe");
      const responseData = response.data.results;
      if (Array.isArray(responseData)) {
        setDatas(responseData);
      } else {
        setDatas([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <ul className={classes.list}>
      {datas.length === 0 ? (
        <li>Loading...</li>
      ) : (
        datas.slice(0, 8).map((data) => (
        <li className={classes.li} key={data.objectId}>
            <Link className={classes.link} to={`/restaurant-page/${data.name}`}>
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
        ))
      )}
    </ul>
  );
};

export default FitMeInfo;
